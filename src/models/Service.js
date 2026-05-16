import mongoose from "mongoose";

const statPairSchema = new mongoose.Schema(
  {
    v: { type: String, required: true },
    l: { type: String, required: true },
  },
  { _id: false }
);

const serviceTechnologySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
  },
  { _id: false }
);

const processStepSchema = new mongoose.Schema(
  {
    step: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { _id: false }
);

const faqSchema = new mongoose.Schema(
  {
    q: { type: String, required: true },
    a: { type: String, required: true },
  },
  { _id: false }
);

/**
 * Mirrors {@link src/data/servicesData.jsx} — UI icons use `iconName` / `iconSmallName`.
 */
const serviceSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    iconName: { type: String, default: null },
    iconSmallName: { type: String, default: null },
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, default: "", trim: true },
    desc: { type: String, required: true },
    longDesc: { type: String, default: "" },
    features: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    technologies: { type: [serviceTechnologySchema], default: [] },
    accent: { type: String, default: "#6C5CE7" },
    number: { type: String, default: "" },
    process: { type: [processStepSchema], default: [] },
    faqs: { type: [faqSchema], default: [] },
    stats: { type: [statPairSchema], default: [] },
    sortOrder: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Service ||
  mongoose.model("Service", serviceSchema);
