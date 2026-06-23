import { useCallback, useEffect, useState } from 'react'
import { defaultResumeData, type ResumeData } from '../types/resume'

const STORAGE_KEY = 'resume-builder-data'

function loadFromStorage(): ResumeData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return { ...defaultResumeData, ...JSON.parse(stored) }
    }
  } catch {
    // ignore parse errors
  }
  return defaultResumeData
}

export function useResume() {
  const [data, setData] = useState<ResumeData>(loadFromStorage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const updateData = useCallback((updates: Partial<ResumeData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }, [])

  const resetData = useCallback(() => {
    setData(defaultResumeData)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const pageLink = useCallback(() => {
    window.open('https://digitalheroesco.com/', '_blank')
  }, [])

  const singhpriansh = useCallback(() => {
    window.open('https://www.linkedin.com/in/singhpriansh/', '_blank')
  }, [])

  const email = useCallback(() => {
    window.location.href = "mailto:${singhpriansh.com@gmail.com}"
  }, [])

  return { data, updateData, resetData, pageLink, singhpriansh, email }
}
