"use client";

import { Controller, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { NumericFormat } from "react-number-format";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { z } from "zod";
import { jobValidator } from "@/validators/job";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const JobForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      jobId: "",
      file: "",
    },
  });

  const jobsOptions = [
    {
      value: "1",
      label: "Vaga 01",
    },
    {
      value: "2",
      label: "Vaga 02",
    },
  ];

  const handleSubmit = (data: z.infer<typeof jobValidator>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div>
          <p className="text-xl">Banco de Talentos</p>

          <p className="font-bold text-4xl text-red-500">IN-FINITY</p>
        </div>

        <FormField
          name="name"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          rules={{
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "E-mail inválido",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <div>
              <FormLabel>E-mail</FormLabel>
              <Input type="email" placeholder="Digite seu e-mail" {...field} />
              {error && <p className="text-red-500">{error.message}</p>}
            </div>
          )}
        />

        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <NumericFormat
                  pattern="(##)#####-####"
                  placeholder="(00)00000-0000"
                  onValueChange={(values) => {
                    field.onChange(values.floatValue);
                  }}
                  value={field.value}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="jobId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vaga</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a vaga" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <>
                    {jobsOptions.map((job) => (
                      <SelectItem value={job.value} key={job.value}>
                        {job.label}
                      </SelectItem>
                    ))}
                  </>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="file"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel>Currículo</FormLabel>
              <div className="relative">
                <Label htmlFor="file" />
                <FormControl>
                  <Input id="file" type="file" />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-red-500 w-full">Enviar</Button>
      </form>
    </Form>
  );
};

export default JobForm;
