import { FolderGit2, Plus, Trash2 } from 'lucide-react'
import { SectionCard } from '../ui/SectionCard'
import { Input } from '../ui/Input'
import { TextArea } from '../ui/TextArea'
import { Button } from '../ui/Button'
import { generateId } from '../../utils/id'
import type { Project } from '../../types/resume'

interface ProjectsFormProps {
  data: Project[]
  onChange: (data: Project[]) => void
}

const emptyProject = (): Project => ({
  id: generateId(),
  name: '',
  url: '',
  description: '',
  technologies: '',
})

export function ProjectsForm({ data, onChange }: ProjectsFormProps) {
  const add = () => onChange([...data, emptyProject()])

  const remove = (id: string) => onChange(data.filter((p) => p.id !== id))

  const update = (id: string, field: keyof Project, value: string) => {
    onChange(data.map((p) => (p.id === id ? { ...p, [field]: value } : p)))
  }

  return (
    <SectionCard title="Projects" icon={<FolderGit2 className="w-4 h-4" />}>
      <div className="space-y-6">
        {data.map((project, index) => (
          <div key={project.id} className="relative p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Project {index + 1}</span>
              <Button variant="ghost" onClick={() => remove(project.id)} className="!p-1.5 text-red-500 hover:text-red-600 hover:bg-red-50">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Project Name"
                placeholder="Portfolio Website"
                value={project.name}
                onChange={(e) => update(project.id, 'name', e.target.value)}
              />
              <Input
                label="URL"
                placeholder="https://github.com/user/project"
                value={project.url}
                onChange={(e) => update(project.id, 'url', e.target.value)}
              />
              <Input
                label="Technologies"
                placeholder="React, Node.js, MongoDB"
                value={project.technologies}
                onChange={(e) => update(project.id, 'technologies', e.target.value)}
                className="sm:col-span-2"
              />
            </div>
            <TextArea
              label="Description"
              placeholder="Describe the project, your role, and key outcomes..."
              value={project.description}
              onChange={(e) => update(project.id, 'description', e.target.value)}
            />
          </div>
        ))}
      </div>
      <Button variant="secondary" onClick={add} className="w-full">
        <Plus className="w-4 h-4" />
        Add Project
      </Button>
    </SectionCard>
  )
}
