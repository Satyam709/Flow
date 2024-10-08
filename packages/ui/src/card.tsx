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
        " p-4 bg-card-bg rounded-lg shadow-lg hover:shadow-gray-900  transition-shadow duration-300"
      }
    >
      <h1 className="py-2 text-xl font-semibold text-text-secondary">
        {title}
      </h1>
      <div className="">{children}</div>
    </div>
  );
}
