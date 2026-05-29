export type TApplicationError<TError = unknown> = {
	status: number;
	message: string;
	error_code: string;
	error_details: TError;
};

export type TApiBaseResponse<
	TData = unknown,
	TMetadata = Record<string, unknown>,
	TError = unknown,
> = {
	data: TData;
	metadata: TMetadata;
} & TApplicationError<TError>;

export type TPaginationMetadata = {
	count: number;
	total_count: number;
	size: number;
	page: number;
	total_pages: number;
};

export type TPaginationParams = Partial<{
	page: number;
	page_size: number;
}>;
