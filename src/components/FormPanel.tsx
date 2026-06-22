import { PersonalInfoForm } from './forms/PersonalInfoForm'
import { ExperienceForm } from './forms/ExperienceForm'
import { EducationForm } from './forms/EducationForm'
import { SkillsForm } from './forms/SkillsForm'
import { ProjectsForm } from './forms/ProjectsForm'
import type { ResumeData } from '../types/resume'

interface FormPanelProps {
  data: ResumeData
  onChange: (updates: Partial<ResumeData>) => void
}

export function FormPanel({ data, onChange }: FormPanelProps) {
  return (
    <div className="space-y-4">
      <PersonalInfoForm
        data={data.personalInfo}
        onChange={(personalInfo) => onChange({ personalInfo })}
      />
      <ExperienceForm
        data={data.experiences}
        onChange={(experiences) => onChange({ experiences })}
      />
      <EducationForm
        data={data.education}
        onChange={(education) => onChange({ education })}
      />
      <SkillsForm
        data={data.skills}
        onChange={(skills) => onChange({ skills })}
      />
      <ProjectsForm
        data={data.projects}
        onChange={(projects) => onChange({ projects })}
      />
    </div>
  )
}
