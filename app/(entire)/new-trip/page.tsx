"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(2, { message: "최소 2글자 이상을 입력해주세요" }),
  date: z.string(),
  schedule: z.array(z.string()),
  isPublished: z.boolean(),
});

const NewTrip = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      isPublished: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("here");
    console.log(values);
  };

  return (
    <main className="absolute top-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>여행 제목</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">저장</Button>
        </form>
      </Form>
    </main>
  );
};

export default NewTrip;
