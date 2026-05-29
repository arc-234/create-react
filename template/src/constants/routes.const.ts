export const ROUTES = {
	HOME: "/",
	LOGIN: "/login",
} as const;

export type TRoutePath = (typeof ROUTES)[keyof typeof ROUTES];
