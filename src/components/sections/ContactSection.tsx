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
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const ContactSection = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      target: "",
    },
    resolver: zodResolver(contactValidator),
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: z.infer<typeof contactValidator>) => {
    try {
      setLoading(true);
      await axios.post("/api/send-email", data);
      toast.success("E-mail recebido! Entraremos em contato em breve.");
    } catch (error) {
      console.error(error);
      toast.error(
        "Ocorreu um erro ao receber seu dados. Clique no botão 'Whatsapp' "
      );
    } finally {
      setLoading(false);
    }
  };

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
                name="target"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qual o tamanho da sua empresa?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Empresa Pequena">
                          Pequena (1-9)
                        </SelectItem>
                        <SelectItem value="Empresa Média">
                          Média (10-49)
                        </SelectItem>
                        <SelectItem value="Empresa Grande">
                          Grande (+50)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-900"
                disabled={loading}
              >
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
