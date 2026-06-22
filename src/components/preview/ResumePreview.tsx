import { forwardRef } from 'react'
import type { ResumeData } from '../../types/resume'

interface ResumePreviewProps {
  data: ResumeData
}

function formatDescription(text: string) {
  return text.split('\n').filter(Boolean)
}

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  function ResumePreview({ data }, ref) {
    const { personalInfo, experiences, education, skills, projects } = data

    const contactItems = [
      personalInfo.email,
      personalInfo.phone,
      personalInfo.location,
      personalInfo.website,
      personalInfo.linkedin,
    ].filter(Boolean)

    return (
      <div
        ref={ref}
        className="bg-white text-slate-800 shadow-lg rounded-sm"
        style={{ width: '8.5in', minHeight: '11in', padding: '0.6in 0.7in' }}
      >
        <header className="border-b-2 border-slate-800 pb-4 mb-5">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">
            {personalInfo.fullName || 'Your Name'}
          </h1>
          {personalInfo.jobTitle && (
            <p className="text-base text-slate-600 mt-1 font-medium">{personalInfo.jobTitle}</p>
          )}
          {contactItems.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2 text-xs text-slate-500">
              {contactItems.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="text-slate-300">|</span>}
                  {item}
                </span>
              ))}
            </div>
          )}
        </header>

        {personalInfo.summary && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">{personalInfo.summary}</p>
          </section>
        )}

        {experiences.length > 0 && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">{exp.position || 'Position'}</h3>
                    <span className="text-xs text-slate-500 whitespace-nowrap ml-4">
                      {exp.startDate}
                      {exp.startDate && (exp.endDate || exp.current) ? ' - ' : ''}
                      {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 italic">
                    {exp.company}
                    {exp.company && exp.location ? ', ' : ''}
                    {exp.location}
                  </p>
                  {exp.description && (
                    <ul className="mt-1.5 space-y-0.5">
                      {formatDescription(exp.description).map((line, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-700 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-slate-400"
                        >
                          {line.replace(/^[-•*]\s*/, '')}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">
                      {edu.degree}
                      {edu.field ? ` in ${edu.field}` : ''}
                    </h3>
                    <span className="text-xs text-slate-500 whitespace-nowrap ml-4">
                      {edu.startDate}
                      {edu.startDate && edu.endDate ? ' - ' : ''}
                      {edu.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 italic">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-sm text-slate-700 mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section className="mb-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2">
              Skills
            </h2>
            <p className="text-sm text-slate-700">{skills.join(' · ')}</p>
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-sm font-bold text-slate-900">{project.name || 'Project'}</h3>
                    {project.url && (
                      <span className="text-xs text-slate-500">{project.url}</span>
                    )}
                  </div>
                  {project.technologies && (
                    <p className="text-xs text-slate-500 italic">{project.technologies}</p>
                  )}
                  {project.description && (
                    <p className="text-sm text-slate-700 mt-1">{project.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    )
  },
)
