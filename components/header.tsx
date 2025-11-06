import { COMPANY_INFO } from "@/lib/constants"

export function Header() {
  return (
    <header className="p-4">
      <a
        href={COMPANY_INFO.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity"
      >
        <img src="/images/design-mode/IMG_0174.png" alt="Troll Face" className="w-8 h-8" />
        <span className="text-xl font-bold">$TROLL</span>
      </a>
    </header>
  )
}

