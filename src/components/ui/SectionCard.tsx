import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

interface SectionCardProps {
  title: string
  icon: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}

export function SectionCard({ title, icon, children, defaultOpen = true }: SectionCardProps) {
  return (
    <details open={defaultOpen} className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer select-none hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600">
          {icon}
        </span>
        <span className="flex-1 font-semibold text-slate-800">{title}</span>
        <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4">{children}</div>
    </details>
  )
}
