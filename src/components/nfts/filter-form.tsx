"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Route } from "@/lib/routes";
import { useEffect } from "react";

const filterFormSchema = z.object({
  potrAsaId: z.coerce.number().optional(),
});

export default function FilterForm() {
  const pathname = usePathname();
  const potrId = Number(pathname.split("/").at(-1));
  const router = useRouter();
  const form = useForm<z.infer<typeof filterFormSchema>>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      potrAsaId: potrId,
    },
  });

  // whenever path updates, update the input value to the value in the url
  useEffect(() => {
    form.setValue("potrAsaId", potrId);
  }, [pathname]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof filterFormSchema>) {
    if (!values.potrAsaId) {
      router.push(Route.NFTS);
      return;
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    router.push(`${Route.NFTS}/${values.potrAsaId}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-2"
      >
        <Button type="submit" variant={"tertiary"} size={"icon"}>
          <Search />
        </Button>
        <FormField
          control={form.control}
          name="potrAsaId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={"Enter 9 digit ASA ID"}
                  type="number"
                  className="glass border bg-dark w-48"
                  {...field}
                  value={field.value}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
