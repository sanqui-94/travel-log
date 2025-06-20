import * as z from "zod/v4";

const ClientEnvSchema = z.object({
  VITE_TEST_STRING: z.string().min(1),
});

const parsed = ClientEnvSchema.safeParse(import.meta.env);

if (!parsed.success) {
  console.error("Invalid client environment variables:\n", parsed.error.message);
  throw new Error("Invalid client environment variables");
}

export const env = {
  VITE_TEST_STRING: parsed.data.VITE_TEST_STRING,
};
export type EnvSchema = z.infer<typeof ClientEnvSchema>;
