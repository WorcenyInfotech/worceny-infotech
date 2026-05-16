import mongoose from "mongoose";

/**
 * Contact / project enquiry submissions — same fields as {@link src/app/api/contact/route.js}.
 */
const contactSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: "", trim: true },
    service: { type: String, default: "", trim: true },
    budget: { type: String, default: "", trim: true },
    message: { type: String, required: true },
    emailSent: { type: Boolean, default: false },
    resendError: { type: String, default: null },
  },
  { timestamps: true }
);

contactSubmissionSchema.index({ createdAt: -1 });
contactSubmissionSchema.index({ email: 1 });

export default mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", contactSubmissionSchema);
