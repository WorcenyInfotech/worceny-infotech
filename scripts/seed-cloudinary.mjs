import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pkg from "@next/env";
const { loadEnvConfig } = pkg;
import { v2 as cloudinary } from "cloudinary";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

// Load environment variables from .env.local
const projectDir = rootDir;
loadEnvConfig(projectDir);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const dataDir = path.join(rootDir, "src", "data");
const publicDir = path.join(rootDir, "public");

// Simple dictionary to avoid uploading the same image twice
const uploadedImagesMap = {};

async function uploadImage(localPath) {
  if (uploadedImagesMap[localPath]) {
    return uploadedImagesMap[localPath];
  }

  const absolutePath = path.join(publicDir, localPath);
  
  if (!fs.existsSync(absolutePath)) {
    console.warn(`File not found: ${absolutePath}`);
    return localPath;
  }

  try {
    console.log(`Uploading ${localPath} to Cloudinary...`);
    const result = await cloudinary.uploader.upload(absolutePath, {
      folder: "worceny/images",
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    });
    
    // Change http to https if necessary, though Cloudinary returns secure_url
    const secureUrl = result.secure_url;
    uploadedImagesMap[localPath] = secureUrl;
    console.log(`Successfully uploaded: ${secureUrl}`);
    return secureUrl;
  } catch (error) {
    console.error(`Error uploading ${localPath}:`, error);
    return localPath;
  }
}

async function processDataFiles() {
  if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error("Cloudinary credentials are not set in .env.local!");
    console.error("Please add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.");
    process.exit(1);
  }

  console.log("Reading data files...");
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".js") || f.endsWith(".jsx") || f.endsWith(".ts") || f.endsWith(".tsx"));

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    let content = fs.readFileSync(filePath, "utf-8");
    let contentChanged = false;

    // Match image URLs in the format "/images/something.png"
    // Using regex to find them safely
    const imageRegex = /"(\/images\/[^"]+\.(png|jpe?g|gif|svg|webp))"/g;
    
    let match;
    const matches = [];
    while ((match = imageRegex.exec(content)) !== null) {
      matches.push(match[1]);
    }

    // Deduplicate matches to process each image once
    const uniqueLocalPaths = [...new Set(matches)];

    if (uniqueLocalPaths.length > 0) {
      console.log(`Found ${uniqueLocalPaths.length} images in ${file}`);
      
      for (const localPath of uniqueLocalPaths) {
        const cloudinaryUrl = await uploadImage(localPath);
        
        if (cloudinaryUrl !== localPath) {
          // Replace all occurrences in the content
          // Using split/join for safe replacement of exact strings
          content = content.split(`"${localPath}"`).join(`"${cloudinaryUrl}"`);
          contentChanged = true;
        }
      }
    }

    if (contentChanged) {
      fs.writeFileSync(filePath, content, "utf-8");
      console.log(`Updated file: ${file}`);
    }
  }

  console.log("Seeding complete!");
}

processDataFiles().catch(console.error);
