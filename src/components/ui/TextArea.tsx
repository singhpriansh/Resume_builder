import type { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export function TextArea({ label, id, className = '', ...props }: TextAreaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <label htmlFor={inputId} className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1.5">{label}</span>
      <textarea
        id={inputId}
        rows={4}
        className={`w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors resize-y min-h-[100px] ${className}`}
        {...props}
      />
    </label>
  )
}
