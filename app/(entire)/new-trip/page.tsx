import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  title: z.string(),
  date: z.string(),
  userId: z.string(),
  schedule: z.array(z.string()),
  isArchived: z.boolean(),
  isPublished: z.boolean(),
});

export function TripForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isArchived: false,
      isPublished: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}
}

const NewTrip = () => {
  return <main></main>;
};

export default NewTrip;
