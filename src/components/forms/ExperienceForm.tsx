import { Briefcase, Plus, Trash2 } from 'lucide-react'
import { SectionCard } from '../ui/SectionCard'
import { Input } from '../ui/Input'
import { TextArea } from '../ui/TextArea'
import { Button } from '../ui/Button'
import { generateId } from '../../utils/id'
import type { Experience } from '../../types/resume'

interface ExperienceFormProps {
  data: Experience[]
  onChange: (data: Experience[]) => void
}

const emptyExperience = (): Experience => ({
  id: generateId(),
  company: '',
  position: '',
  location: '',
  startDate: '',
  endDate: '',
  current: false,
  description: '',
})

export function ExperienceForm({ data, onChange }: ExperienceFormProps) {
  const add = () => onChange([...data, emptyExperience()])

  const remove = (id: string) => onChange(data.filter((e) => e.id !== id))

  const update = (id: string, field: keyof Experience, value: string | boolean) => {
    onChange(data.map((e) => (e.id === id ? { ...e, [field]: value } : e)))
  }

  return (
    <SectionCard title="Work Experience" icon={<Briefcase className="w-4 h-4" />}>
      <div className="space-y-6">
        {data.map((exp, index) => (
          <div key={exp.id} className="relative p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Experience {index + 1}</span>
              <Button variant="ghost" onClick={() => remove(exp.id)} className="p-1.5 text-red-500 hover:text-red-600 hover:bg-red-50">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Company"
                placeholder="Acme Corp"
                value={exp.company}
                onChange={(e) => update(exp.id, 'company', e.target.value)}
              />
              <Input
                label="Position"
                placeholder="Senior Developer"
                value={exp.position}
                onChange={(e) => update(exp.id, 'position', e.target.value)}
              />
              <Input
                label="Location"
                placeholder="New York, NY"
                value={exp.location}
                onChange={(e) => update(exp.id, 'location', e.target.value)}
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Start Date"
                  placeholder="Jan 2020"
                  value={exp.startDate}
                  onChange={(e) => update(exp.id, 'startDate', e.target.value)}
                />
                <Input
                  label="End Date"
                  placeholder="Present"
                  value={exp.endDate}
                  disabled={exp.current}
                  onChange={(e) => update(exp.id, 'endDate', e.target.value)}
                />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => {
                  update(exp.id, 'current', e.target.checked)
                  if (e.target.checked) update(exp.id, 'endDate', 'Present')
                }}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              I currently work here
            </label>
            <TextArea
              label="Description"
              placeholder="Describe your responsibilities and achievements. Use bullet points for clarity."
              value={exp.description}
              onChange={(e) => update(exp.id, 'description', e.target.value)}
            />
          </div>
        ))}
      </div>
      <Button variant="secondary" onClick={add} className="w-full">
        <Plus className="w-4 h-4" />
        Add Experience
      </Button>
    </SectionCard>
  )
}
