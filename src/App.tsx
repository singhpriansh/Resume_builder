import { useRef, useState } from 'react'
import { Header } from './components/Header'
import { FormPanel } from './components/FormPanel'
import { ResumePreview } from './components/preview/ResumePreview'
import { useResume } from './hooks/useResume'
import { exportToPdf } from './utils/pdf'

function App() {
  const { data, updateData, resetData, pageLink, singhpriansh, email } = useResume()
  const previewRef = useRef<HTMLDivElement>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [exportError, setExportError] = useState<string | null>(null)

  const handleExport = async () => {
    if (!previewRef.current) return
    setIsExporting(true)
    setExportError(null)
    try {
      const name = data.personalInfo.fullName.trim() || 'resume'
      await exportToPdf(previewRef.current, `${name.replace(/\s+/g, '_')}.pdf`)
    } catch (err) {
      console.error('PDF export failed:', err)
      setExportError('Failed to generate PDF. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all resume data? This cannot be undone.')) {
      resetData()
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onExport={handleExport} onReset={handleReset} isExporting={isExporting} />

      {exportError && (
        <div className="max-w-[1600px] mx-auto px-6">
          <p className="mt-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
            {exportError}
          </p>
        </div>
      )}

      <main className="flex-1 max-w-[1600px] mx-auto w-full px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="xl:max-h-[calc(100vh-88px)] xl:overflow-y-auto xl:pr-2 scrollbar-thin">
          <div className="flex justify-center text-center py-4">
            <button type="button" className="text-white px-4 py-2 bg-linear-to-br 
            from-green-400 to-violet-800 hover:bg-linear-to-bl focus:ring-4 rounded-lg"
              onClick={pageLink}>Built for Digital Heroes</button>
          </div>
          <div className="flex flex-col gap-1 bg-clip-padding text-center py-4">
            <div className="text-center justify-center flex flex-row">
              <div className="text p-2"> made by  .. </div>
              <div className="text-xl p-1" onClick={singhpriansh}>Priyanshu</div>
            </div>
            <div className="text" onClick={email}>singhpriansh.com@gmail.com</div>
          </div>
          <FormPanel data={data} onChange={updateData} />
          </div>
          <div className="xl:sticky xl:top-[80px] xl:self-start">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Live Preview</h2>
              <span className="text-xs text-slate-400">US Letter (8.5 × 11 in)</span>
            </div>
            <div className="overflow-x-auto pb-8">
              <div className="inline-block origin-top-left scale-[0.85] sm:scale-90 lg:scale-95 xl:scale-100">
                <ResumePreview ref={previewRef} data={data} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
