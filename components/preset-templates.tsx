'use client'

import { Home, Briefcase, ShoppingBag, Users, Car, FileText, Building2, CreditCard } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface PresetTemplate {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  query: string
  color: string
}

const templates: PresetTemplate[] = [
  {
    id: 'landlord',
    icon: <Home className="h-5 w-5" />,
    title: 'Landlord Issues',
    description: 'Rent disputes, security deposit, illegal eviction',
    query: 'I am facing an issue with my landlord regarding ',
    color: 'bg-chart-1/10 text-chart-1',
  },
  {
    id: 'salary',
    icon: <Briefcase className="h-5 w-5" />,
    title: 'Salary & Employment',
    description: 'Unpaid salary, wrongful termination, PF issues',
    query: 'I am having problems with my employer regarding ',
    color: 'bg-chart-2/10 text-chart-2',
  },
  {
    id: 'consumer',
    icon: <ShoppingBag className="h-5 w-5" />,
    title: 'Consumer Complaints',
    description: 'Defective products, refund issues, online fraud',
    query: 'I want to file a consumer complaint about ',
    color: 'bg-chart-3/10 text-chart-3',
  },
  {
    id: 'family',
    icon: <Users className="h-5 w-5" />,
    title: 'Family Matters',
    description: 'Property disputes, inheritance, domestic issues',
    query: 'I need guidance on a family legal matter regarding ',
    color: 'bg-chart-4/10 text-chart-4',
  },
  {
    id: 'banking',
    icon: <CreditCard className="h-5 w-5" />,
    title: 'Banking & Finance',
    description: 'Loan issues, fraud, insurance claims',
    query: 'I have a banking or finance related issue about ',
    color: 'bg-chart-5/10 text-chart-5',
  },
  {
    id: 'property',
    icon: <Building2 className="h-5 w-5" />,
    title: 'Property Matters',
    description: 'Registration, disputes, builder issues',
    query: 'I need help with a property related matter about ',
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 'traffic',
    icon: <Car className="h-5 w-5" />,
    title: 'Traffic & Accidents',
    description: 'Challans, accidents, compensation',
    query: 'I need help with a traffic-related issue about ',
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 'documents',
    icon: <FileText className="h-5 w-5" />,
    title: 'Legal Documents',
    description: 'Affidavits, agreements, NOC, RTI',
    query: 'I need help understanding or creating a legal document for ',
    color: 'bg-secondary text-secondary-foreground',
  },
]

interface PresetTemplatesProps {
  onSelect: (query: string) => void
}

export function PresetTemplates({ onSelect }: PresetTemplatesProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {templates.map((template) => (
        <Card
          key={template.id}
          className="group cursor-pointer border-2 border-transparent transition-all duration-200 hover:border-primary/50 hover:shadow-md"
          onClick={() => onSelect(template.query)}
        >
          <CardContent className="p-4">
            <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110 ${template.color}`}>
              {template.icon}
            </div>
            <h3 className="mb-1 text-sm font-semibold text-foreground">{template.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{template.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
