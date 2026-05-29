import ENDPOINTS from "@app/api/endpoints";
import { generateReducerPath } from "@app/lib/reducer-path.lib";
import { axiosBaseQuery } from "@app/store/base-query";
import type { TApiBaseResponse } from "@app/types/api-base.types";
import type { TSample } from "@app/types/sample/sample.types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const sampleApi = createApi({
	reducerPath: generateReducerPath("sample"),
	baseQuery: axiosBaseQuery(),
	tagTypes: ["Sample"],
	endpoints: (builder) => ({
		getSample: builder.query<TApiBaseResponse<TSample>, void>({
			query: () => ({
				url: ENDPOINTS.sample.list,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetSampleQuery } = sampleApi;
