import mongoose from "mongoose";

/**
 * Mirrors project objects in {@link src/views/PortfolioPage.jsx} (and future API-driven content).
 */
const portfolioProjectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    /** Original numeric id from static data — optional for migrations */
    legacyNumericId: { type: Number, default: null },
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    year: { type: String, required: true, trim: true },
    desc: { type: String, required: true },
    tech: { type: [String], default: [] },
    accent: { type: String, default: "#5aff73" },
    gradient: { type: String, default: "" },
    liveDemo: { type: String, default: "" },
    images: { type: [String], default: [] },
    features: { type: [String], default: [] },
    sortOrder: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.PortfolioProject ||
  mongoose.model("PortfolioProject", portfolioProjectSchema);
