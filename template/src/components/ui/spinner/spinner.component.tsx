import { cn } from "@app/lib/cn.lib";

type TSpinnerProps = {
	size?: number;
	className?: string;
	label?: string;
};

const DEFAULT_SIZE = 28;

const Spinner = ({
	size = DEFAULT_SIZE,
	className,
	label = "Loading",
}: TSpinnerProps) => (
	<span
		aria-label={label}
		className={cn("inline-flex items-center justify-center", className)}
		role="status"
	>
		<span
			className={cn(
				"inline-block rounded-full border-[2.5px] border-solid",
				"border-white/20 border-t-white",
				"animate-spin",
			)}
			style={{ width: size, height: size }}
		/>
	</span>
);

export default Spinner;
export type { TSpinnerProps };
