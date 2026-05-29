import { envSchema } from "@app/schemas/env.schema";
import { z } from "zod";

// Type inference from schema
export type TEnv = z.infer<typeof envSchema>;

// Environment validation function
export function validateEnv(): TEnv {
	try {
		return envSchema.parse(import.meta.env);
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error(error.issues);
			throw new Error("Invalid environment variables");
		}
		throw error;
	}
}

export const env = validateEnv();
