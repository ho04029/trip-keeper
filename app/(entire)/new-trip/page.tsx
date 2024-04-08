import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string(),
  date: z.string(),
  schedule: z.array(z.string()),
  isPublished: z.boolean(),
});

const NewTrip = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isPublished: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField />
        </form>
      </Form>
    </>
  );
};

export default NewTrip;
