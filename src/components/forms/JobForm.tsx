"use client";
<<<<<<< HEAD
=======

>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8
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
<<<<<<< HEAD
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { UploadButton } from "@/utils/uploadthing";
=======
import { Label } from "../ui/label";
import { Button } from "../ui/button";
>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8

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

<<<<<<< HEAD
  const handleSubmit = (data: z.infer<typeof jobValidator>) => {
    try {
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar currículo");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 w-full"
      >
=======
  const handleSubmit = (data: z.infer<typeof jobValidator>) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8
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

<<<<<<< HEAD
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            form.setValue("file", res[0].ufsUrl);
            toast.success("Currículo na nuvem, envie o formulário.");
          }}
          onUploadError={(error: Error) => {
            toast.error("Ocorreu um erro ao enviar seu currículo para núvem.");
          }}
=======
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
>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8
        />

        <Button className="bg-red-500 w-full">Enviar</Button>
      </form>
    </Form>
  );
};

export default JobForm;
