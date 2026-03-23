interface IInfoPillProps {
  icon: string;
  label: string;
  value: string;
}

export default function InfoPill({icon, label, value}: Readonly<IInfoPillProps>) {
  return (
    <>
      <div className="flex flex-col items-center gap-1 px-4 py-3 bg-background rounded-xl border border-border text-center min-w-25 shrink-0">
        <span className="text-xl">{icon}</span>
        <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
          {label}
        </span>
        <span className="text-xs font-bold text-text leading-snug">
          {value}
        </span>
      </div>
    </>
  );
}
