import { COMPANY_INFO } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="pb-8 px-4">
      <div className="text-center">
        <p className="text-sm font-medium mb-1">{COMPANY_INFO.name}</p>
        <p className="text-xs text-gray-500 break-all">CA: {COMPANY_INFO.contractAddress}</p>
      </div>
    </footer>
  )
}
