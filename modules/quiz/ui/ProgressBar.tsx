import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  max,
  className,
}: {
  value: number;
  max: number;
  className?: string;
}) {
  const percent = max <= 0 ? 0 : Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn("h-2 w-full rounded-full bg-muted", className)} aria-hidden>
      <div
        className="h-2 rounded-full bg-primary transition-[width]"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

