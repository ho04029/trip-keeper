import { Id } from "@/convex/_generated/dataModel";

export interface ITrip {
  _id: Id<"trip">;
  _creationTime: number;
  userId: string;
  title: string;
  date: {
    from: string;
    to: string;
  };
  schedule: {
    date: string;
    detail_schedule: string;
  }[];
  isArchived: boolean;
  isPublished: boolean;
}
