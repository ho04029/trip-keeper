import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  trip: defineTable({
    userId: v.string(),
    title: v.string(),
    date: v.object({
      from: v.string(),
      to: v.string(),
    }),
    schedule: v.array(
      v.object({
        date: v.string(),
        detail_schedule: v.string(),
      })
    ),
    isArchived: v.boolean(),
    isPublished: v.boolean(),
  }).index("by_user", ["userId"]),
});
