export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-2xl font-bold text-text mb-5 flex items-center gap-3">
      <span className="w-1 h-6 rounded-full bg-gradient-sunset inline-block shrink-0" />
      {children}
    </h2>
  );
}
