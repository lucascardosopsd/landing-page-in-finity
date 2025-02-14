import { z } from "zod";

export const jobValidator = z.object({
  name: z.string().min(1, "Digite seu nome"),
  email: z.string().min(1, "Digite seu nome"),
  phone: z.string().min(1, "Digite seu telefone"),
  jobId: z.string().min(1, "Selecione o cargo"),
  file: z.string().url("Currículo obrigatório"),
});
