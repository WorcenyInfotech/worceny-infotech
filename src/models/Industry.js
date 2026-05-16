import mongoose from "mongoose";

const statPairSchema = new mongoose.Schema(
  {
    v: { type: String, required: true },
    l: { type: String, required: true },
  },
  { _id: false }
);

/**
 * Mirrors {@link src/data/industriesData.jsx} — React `icon` nodes are stored as `iconName` / `iconLgName` for mapping in the UI.
 */
const industrySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    iconName: { type: String, default: null },
    iconLgName: { type: String, default: null },
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, default: "", trim: true },
    desc: { type: String, required: true },
    longDesc: { type: String, default: "" },
    accent: { type: String, default: "#865aff" },
    solutions: { type: [String], default: [] },
    stats: { type: [statPairSchema], default: [] },
    clients: { type: [String], default: [] },
    techStack: { type: [String], default: [] },
    features: { type: [String], default: [] },
    sortOrder: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Industry ||
  mongoose.model("Industry", industrySchema);
