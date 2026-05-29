import { configureStore } from "@reduxjs/toolkit";
import { sampleApi } from "./api/sample/sample.api";

export const store = configureStore({
	reducer: {
		[sampleApi.reducerPath]: sampleApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sampleApi.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
