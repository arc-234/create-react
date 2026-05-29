import type { ComponentProps } from "react";

const Button = ({ children, ...props }: ComponentProps<"button">) => (
	<button
		className="regular-14-20 cursor-pointer rounded-full bg-ds-fg-primary px-[16px] py-[8px] text-ds-bg-primary transition-colors hover:bg-ds-fg-primary"
		{...props}
	>
		{children}
	</button>
);

export default Button;
