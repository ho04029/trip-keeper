import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createNewTrip = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const trip = await ctx.db.insert("trip", {
      title: args.title,
      date: args.date,
      userId,
      schedule: args.schedule,
      isPublished: false,
      isArchived: false,
    });

    return trip;
  },
});

export const getMyTrip = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const trip = await ctx.db
      .query("trip")
      .withIndex("by_user", (q) => q.eq("userId", userId));

    return trip;
  },
});
