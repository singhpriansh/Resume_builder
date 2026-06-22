import { GraduationCap, Plus, Trash2 } from 'lucide-react'
import { SectionCard } from '../ui/SectionCard'
import { Input } from '../ui/Input'
import { TextArea } from '../ui/TextArea'
import { Button } from '../ui/Button'
import { generateId } from '../../utils/id'
import type { Education } from '../../types/resume'

interface EducationFormProps {
  data: Education[]
  onChange: (data: Education[]) => void
}

const emptyEducation = (): Education => ({
  id: generateId(),
  institution: '',
  degree: '',
  field: '',
  startDate: '',
  endDate: '',
  description: '',
})

export function EducationForm({ data, onChange }: EducationFormProps) {
  const add = () => onChange([...data, emptyEducation()])

  const remove = (id: string) => onChange(data.filter((e) => e.id !== id))

  const update = (id: string, field: keyof Education, value: string) => {
    onChange(data.map((e) => (e.id === id ? { ...e, [field]: value } : e)))
  }

  return (
    <SectionCard title="Education" icon={<GraduationCap className="w-4 h-4" />}>
      <div className="space-y-6">
        {data.map((edu, index) => (
          <div key={edu.id} className="relative p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Education {index + 1}</span>
              <Button variant="ghost" onClick={() => remove(edu.id)} className="p-1.5 text-red-500 hover:text-red-600 hover:bg-red-50">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Institution"
                placeholder="University of California"
                value={edu.institution}
                onChange={(e) => update(edu.id, 'institution', e.target.value)}
              />
              <Input
                label="Degree"
                placeholder="Bachelor of Science"
                value={edu.degree}
                onChange={(e) => update(edu.id, 'degree', e.target.value)}
              />
              <Input
                label="Field of Study"
                placeholder="Computer Science"
                value={edu.field}
                onChange={(e) => update(edu.id, 'field', e.target.value)}
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Start Date"
                  placeholder="2016"
                  value={edu.startDate}
                  onChange={(e) => update(edu.id, 'startDate', e.target.value)}
                />
                <Input
                  label="End Date"
                  placeholder="2020"
                  value={edu.endDate}
                  onChange={(e) => update(edu.id, 'endDate', e.target.value)}
                />
              </div>
            </div>
            <TextArea
              label="Additional Details"
              placeholder="Honors, relevant coursework, GPA..."
              value={edu.description}
              onChange={(e) => update(edu.id, 'description', e.target.value)}
            />
          </div>
        ))}
      </div>
      <Button variant="secondary" onClick={add} className="w-full">
        <Plus className="w-4 h-4" />
        Add Education
      </Button>
    </SectionCard>
  )
}
