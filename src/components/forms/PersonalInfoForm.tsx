import { User } from 'lucide-react'
import { SectionCard } from '../ui/SectionCard'
import { Input } from '../ui/Input'
import { TextArea } from '../ui/TextArea'
import type { PersonalInfo } from '../../types/resume'

interface PersonalInfoFormProps {
  data: PersonalInfo
  onChange: (data: PersonalInfo) => void
}

export function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const update = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <SectionCard title="Personal Information" icon={<User className="w-4 h-4" />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={data.fullName}
          onChange={(e) => update('fullName', e.target.value)}
        />
        <Input
          label="Job Title"
          placeholder="Software Engineer"
          value={data.jobTitle}
          onChange={(e) => update('jobTitle', e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          value={data.email}
          onChange={(e) => update('email', e.target.value)}
        />
        <Input
          label="Phone"
          placeholder="+1 (555) 123-4567"
          value={data.phone}
          onChange={(e) => update('phone', e.target.value)}
        />
        <Input
          label="Location"
          placeholder="San Francisco, CA"
          value={data.location}
          onChange={(e) => update('location', e.target.value)}
        />
        <Input
          label="Website"
          placeholder="https://johndoe.com"
          value={data.website}
          onChange={(e) => update('website', e.target.value)}
        />
        <Input
          label="LinkedIn"
          placeholder="linkedin.com/in/johndoe"
          value={data.linkedin}
          onChange={(e) => update('linkedin', e.target.value)}
          className="sm:col-span-2"
        />
      </div>
      <TextArea
        label="Professional Summary"
        placeholder="Brief overview of your experience, skills, and career goals..."
        value={data.summary}
        onChange={(e) => update('summary', e.target.value)}
      />
    </SectionCard>
  )
}
