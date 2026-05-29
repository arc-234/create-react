import client from "@app/api/client";
import type { BaseQueryApi, BaseQueryFn } from "@reduxjs/toolkit/query";
import { type AxiosError, type AxiosRequestConfig, isCancel } from "axios";

export const axiosBaseQuery =
	(): BaseQueryFn<
		{
			url: string;
			method?: AxiosRequestConfig["method"];
			data?: AxiosRequestConfig["data"];
			params?: AxiosRequestConfig["params"];
			headers?: AxiosRequestConfig["headers"];
			responseType?: AxiosRequestConfig["responseType"];
		},
		unknown,
		unknown
	> =>
	async (
		{ url, method = "GET", data, params, headers, responseType },
		{ signal }: BaseQueryApi,
	) => {
		try {
			const result = await client({
				url,
				method,
				data,
				params,
				headers,
				responseType,
				signal,
			});
			return { data: result.data };
		} catch (err) {
			if (isCancel(err)) {
				throw err;
			}
			const error = err as AxiosError;

			return {
				error: {
					status: error.response?.status,
					data: error.response?.data,
					message: error.message,
					requestStatus: error.status,
				},
			};
		}
	};
