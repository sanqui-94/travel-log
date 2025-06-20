import type { Plugin } from "vite";
import * as z from "zod/v4";
import { loadEnv } from "vite";

export function EnvValidatePlugin(): Plugin {
  return {
    name: "vite-plugin-env-validate",
    config(configEnv) {
      const mode = configEnv.mode ?? "development";
      const env = loadEnv(mode, process.cwd(), ""); // load ALL env vars, including non-VITE_

      const schema = z.object({
        VITE_TEST_STRING: z.string().min(1),
        // Add more as needed
      });

      const parsed = schema.safeParse(env);

      if (!parsed.success) {
        console.error("Invalid environment variables:\n", parsed.error.format());
        process.exit(1);
      }

      // optionally return env overrides here if needed
    },
  };
}
