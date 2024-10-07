export function Card({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className={
        className +
        "p-4  bg-card-bg border-card-border border-1 rounded-lg shadow-md"
      }
    >
      <h1 className="py-2 text-xl font-semibold text-text-secondary">{title}</h1>
      <div className="">{children}</div>
    </div>
  );
}
