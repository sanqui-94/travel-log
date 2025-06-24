import * as z from "zod/v4";

const EnvSchema = z.object({
  TEST_STRING: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default EnvSchema.parse(process.env);
