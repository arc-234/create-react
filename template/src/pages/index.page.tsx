import Button from "@app/components/ui/button/button.component";
import { useState } from "react";

const HomePage = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
			<h1 className="medium-32-34 text-ds-fg-primary">React Starter</h1>
			<p className="regular-16-24 mt-4 max-w-md text-ds-fg-primary/75">
				Edit{" "}
				<code className="text-ds-fg-primary/90">src/pages/index.page.tsx</code>{" "}
				and start building.
			</p>

			<p
				aria-live="polite"
				className="medium-24-32 mt-10 text-ds-fg-primary tabular-nums"
			>
				{count}
			</p>

			<div className="mt-6 flex flex-wrap justify-center gap-3">
				<Button onClick={() => setCount((value) => value - 1)} type="button">
					Decrease
				</Button>
				<Button onClick={() => setCount((value) => value + 1)} type="button">
					Increase
				</Button>
				<Button onClick={() => setCount(0)} type="button">
					Reset
				</Button>
			</div>
		</div>
	);
};

export default HomePage;
