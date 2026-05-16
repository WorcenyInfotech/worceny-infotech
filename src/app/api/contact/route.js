import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import dbConnect from '@/lib/mongodb';
import ContactSubmission from '@/models/ContactSubmission';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    let submission = null;
    if (process.env.MONGODB_URI) {
      try {
        await dbConnect();
        submission = await ContactSubmission.create({
          name: name.trim(),
          email: email.trim(),
          phone: (phone || '').trim(),
          service: (service || '').trim(),
          budget: (budget || '').trim(),
          message: message.trim(),
          emailSent: false,
        });
      } catch (dbErr) {
        console.error('Contact submission DB error:', dbErr);
      }
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #ffffff; }
            .header { background-color: #865aff; color: #ffffff; padding: 20px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px; text-align: center; }
            .header h2 { margin: 0; font-size: 24px; }
            .content { padding: 0 10px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 14px; font-weight: bold; color: #555; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { margin-top: 6px; background: #f9f9f9; padding: 12px; border-radius: 6px; border-left: 4px solid #865aff; font-size: 16px; }
            .value.message { white-space: pre-wrap; font-family: inherit; }
            .footer { margin-top: 30px; font-size: 13px; color: #888; text-align: center; border-top: 1px solid #eaeaea; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Project Enquiry</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">${phone || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Service Needed</div>
                <div class="value">${service || 'Not specified'}</div>
              </div>
              <div class="field">
                <div class="label">Project Budget</div>
                <div class="value">${budget || 'Not specified'}</div>
              </div>
              <div class="field">
                <div class="label">Project Details</div>
                <div class="value message">${message}</div>
              </div>
            </div>
            <div class="footer">
              This email was sent from the contact form on your website.
            </div>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: 'Website <info@worceny.com>',
      to: process.env.ADMIN_EMAIL || 'info@worceny.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
    });

    if (data.error) {
      if (submission?._id) {
        try {
          await ContactSubmission.findByIdAndUpdate(submission._id, {
            resendError: data.error.message || 'Resend error',
          });
        } catch (e) {
          console.error('Contact submission update error:', e);
        }
      }
      return NextResponse.json(
        { success: false, message: data.error.message },
        { status: 400 }
      );
    }

    if (submission?._id) {
      try {
        await ContactSubmission.findByIdAndUpdate(submission._id, {
          emailSent: true,
          resendError: null,
        });
      } catch (e) {
        console.error('Contact submission update error:', e);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
