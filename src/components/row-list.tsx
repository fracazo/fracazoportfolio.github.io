import Link from "next/link";

export type RowItem = { href: string; name: string; meta?: string };

/** Compact bordered row list ("More case studies", homepage Writing list). */
export function RowList({ items }: { items: RowItem[] }) {
  return (
    <ul role="list" className="m-0 list-none p-0">
      {items.map((item) => (
        <li key={item.href} className="border-b border-border">
          <Link
            href={item.href}
            className="group flex items-baseline justify-between gap-4 px-0.5 py-3.5 text-[15px] font-medium text-text no-underline hover:no-underline"
          >
            <span className="group-hover:text-brand">{item.name}</span>
            {item.meta && (
              <span className="text-[13px] font-normal whitespace-nowrap text-muted">
                {item.meta}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
