const PageLoader = () => (
	<div
		aria-busy="true"
		aria-label="Loading page"
		className="pointer-events-none fixed top-0 right-0 left-0 z-50 h-[4px] overflow-hidden bg-ds-fg-primary/15"
		role="progressbar"
	>
		<div className="absolute top-0 left-[-32%] h-full w-[32%] animate-page-loader bg-ds-fg-primary will-change-[left] motion-reduce:left-0 motion-reduce:w-full motion-reduce:animate-none motion-reduce:opacity-45" />
	</div>
);

export default PageLoader;
