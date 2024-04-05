import { z } from "zod";

const formSchema = z.object({
  title: z.string(),
  date: z.string(),
  userId: z.string(),
  schedule: z.array(z.string()),
  isArchived: z.boolean(),
  isPublished: z.boolean(),
});

const NewTrip = () => {
  return <main></main>;
};

export default NewTrip;
