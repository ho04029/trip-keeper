"use client";
import { useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch, useFieldArray } from "react-hook-form";
import { format, eachDayOfInterval } from "date-fns";

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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(2, { message: "최소 2글자 이상을 입력해주세요" }),
  date: z.object({
    from: z.string(),
    to: z.string(),
  }),
  schedule: z.array(
    z.object({
      date: z.string(),
      detail_schedule: z.string(),
    })
  ),
});

const NewTrip = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      date: {
        from: undefined,
        to: undefined,
      },
      schedule: [],
    },
  });

  const dateWatch = useWatch({ control: form.control, name: "date" });
  const { fields } = useFieldArray({ control: form.control, name: "schedule" });
  const create = useMutation(api.documents.createNewTrip);

  useEffect(() => {
    if (dateWatch && dateWatch.from && dateWatch.to) {
      const days = eachDayOfInterval({
        start: new Date(dateWatch.from),
        end: new Date(dateWatch.to),
      });
      const newSchedule = days.map((day) => ({
        date: format(day, "yy년 MM월 dd일"),
        detail_schedule: "",
      }));
      form.setValue("schedule", newSchedule);
    }
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
                              {field.value.from} - {field.value.to}
                            </>
                          ) : (
                            field.value.from
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
                      selected={{
                        from: new Date(field.value.from),
                        to: new Date(field.value.to),
                      }}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          {fields.map((item, idx) => (
            <FormField
              control={form.control}
              key={item.id}
              name={`schedule.${idx}.detail_schedule`}
              render={({ field }) => (
                <FormItem>
                  <div>
                    <FormLabel>{item.date}</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          ))}
          <Button type="submit">저장</Button>
        </form>
      </Form>
    </main>
  );
};

export default NewTrip;
