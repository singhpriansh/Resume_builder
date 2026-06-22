import { useState } from 'react'
import { Sparkles, X } from 'lucide-react'
import { SectionCard } from '../ui/SectionCard'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

interface SkillsFormProps {
  data: string[]
  onChange: (data: string[]) => void
}

export function SkillsForm({ data, onChange }: SkillsFormProps) {
  const [input, setInput] = useState('')

  const addSkill = () => {
    const skill = input.trim()
    if (skill && !data.includes(skill)) {
      onChange([...data, skill])
      setInput('')
    }
  }

  const removeSkill = (skill: string) => {
    onChange(data.filter((s) => s !== skill))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addSkill()
    }
  }

  return (
    <SectionCard title="Skills" icon={<Sparkles className="w-4 h-4" />}>
      <div className="flex gap-2">
        <Input
          label="Add a skill"
          placeholder="e.g. React, Python, Project Management"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
        />
        <Button onClick={addSkill} className="self-end">Add</Button>
      </div>
      {data.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {data.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="hover:text-indigo-900 transition-colors"
                aria-label={`Remove ${skill}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}
        </div>
      )}
    </SectionCard>
  )
}
