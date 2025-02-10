"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactValidator } from "@/validators/contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ContactSection = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      target: "",
    },
    resolver: zodResolver(contactValidator),
  });

  const handleSubmit = (data: z.infer<typeof contactValidator>) => {};

  return (
    <section className="bg-background h-full">
      <div className="sticky top-0">
        <div className="flex items-center justify-center mx-auto max-w-screen-desktop relative w-full bg-background h-svh">
          <div className="flex flex-col text-blue-900">
            <p className="text-center">Ok, mas</p>
            <p className="text-6xl text-center">Como</p>
            <p className="text-6xl font-bold text-center">Começar?</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto max-w-screen-desktop relative w-full bg-background h-svh px-10">
        <div className="max-w-lg mx-auto w-full space-y-5">
          <Link href="https://api.whatsapp.com/send?phone=5517997122513">
            <Button
              className="text-background bg-red-500 p-2 w-full max-w-lg hover:bg-red-600"
              size="lg"
            >
              <Image
                alt="Whatsapp Logo"
                src="/whatsapp.svg"
                height={100}
                width={100}
                className="h-full w-auto"
              />

              <p>Whatsapp</p>
            </Button>
          </Link>

          <p className="text-center font-semibold">Ou</p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8 w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu nome completo"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu MELHOR e-mail"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Qual é seu interesse?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Tráfego">Tráfego</SelectItem>
                        <SelectItem value="Consultoria">Consultoria</SelectItem>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="Site">Site</SelectItem>
                        <SelectItem value="Copywriting">Copywriting</SelectItem>
                        <SelectItem value="Fotografia">
                          Fotografia de Produto
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-blue-900">
                Quero ser contactado
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
