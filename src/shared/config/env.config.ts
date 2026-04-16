import z from 'zod';

const envSchema = z.object({
	NEXT_PUBLIC_API_URL: z.url(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
	throw new Error('Invalid env variables');
}

export const env = parsed.data;
