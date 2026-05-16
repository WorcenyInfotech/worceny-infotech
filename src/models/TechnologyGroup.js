import mongoose from "mongoose";

const statPairSchema = new mongoose.Schema(
  {
    v: { type: String, required: true },
    l: { type: String, required: true },
  },
  { _id: false }
);

const techItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    icon: { type: String, required: true },
    desc: { type: String, default: "" },
    longDesc: { type: String, default: "" },
    highlights: { type: [String], default: [] },
  },
  { _id: false }
);

/**
 * Mirrors one entry in `techGroups` from {@link src/data/technologiesData.jsx}.
 */
const technologyGroupSchema = new mongoose.Schema(
  {
    groupId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    iconName: { type: String, default: null },
    label: { type: String, required: true, trim: true },
    accent: { type: String, default: "#6C5CE7" },
    subtitle: { type: String, default: "", trim: true },
    desc: { type: String, default: "" },
    longDesc: { type: String, default: "" },
    techs: { type: [techItemSchema], default: [] },
    stats: { type: [statPairSchema], default: [] },
    useCases: { type: [String], default: [] },
    sortOrder: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.TechnologyGroup ||
  mongoose.model("TechnologyGroup", technologyGroupSchema);
