import { Download, FileText, RotateCcw } from 'lucide-react'
import { Button } from './ui/Button'

interface HeaderProps {
  onExport: () => void
  onReset: () => void
  isExporting: boolean
}

export function Header({ onExport, onReset, isExporting }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600 text-white">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Resume Builder</h1>
            <p className="text-xs text-slate-500">Create a professional resume in minutes</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={onReset} title="Reset all data">
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
          <Button onClick={onExport} disabled={isExporting}>
            <Download className="w-4 h-4" />
            {isExporting ? 'Exporting...' : 'Download PDF'}
          </Button>
        </div>
      </div>
    </header>
  )
}
