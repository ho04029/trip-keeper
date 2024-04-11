import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  trip: defineTable({
    title: v.string(),
    date: v.object({
      from: v.string(),
      to: v.string(),
    }),
    userId: v.string(),
    schedule: v.array(v.string()),
    isArchived: v.boolean(),
    isPublished: v.boolean(),
  }),
});
