import * as z from "zod/v4";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  TEST_STRING: z.string(),
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default EnvSchema.parse(process.env);
