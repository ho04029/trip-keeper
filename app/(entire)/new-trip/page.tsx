"use client";
import { useEffect } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { format } from "date-fns";

import { Calendar as CalendarIcon } from "lucide-react";

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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  title: z.string().min(2, { message: "최소 2글자 이상을 입력해주세요" }),
  date: z.object({
    from: z.date(),
    to: z.date(),
  }),
  //schedule: z.array(z.string()),
  //isPublished: z.boolean(),
});

const NewTrip = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      //isPublished: false,
    },
  });

  const dateWatch = useWatch({ control: form.control, name: "date" });

  useEffect(() => {
    const diffDate = Math.abs(
      (dateWatch?.to?.getTime() - dateWatch?.from.getTime()) /
        (1000 * 60 * 60 * 24)
    );
    console.log(diffDate);
  }, [dateWatch]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <main className="absolute top-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
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
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>여행날짜</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"outline"}>
                        {field.value?.from ? (
                          field.value.to ? (
                            <>
                              {format(field.value.from, "yy년 MM월 dd일")} -{" "}
                              {format(field.value.to, "yy년 MM월 dd일")}
                            </>
                          ) : (
                            format(field.value.from, "yy년 MM월 dd일")
                          )
                        ) : (
                          <span>날짜를 선택해주세요</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="range"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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
