import { MessageSquare, FileText, Lightbulb, Shield, Clock, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Ask Legal Questions',
    description: 'Describe your issue in simple language and get instant guidance based on Indian laws and regulations.',
    color: 'bg-chart-1/10 text-chart-1',
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Step-by-Step Guidance',
    description: 'Get clear, actionable steps on how to proceed with your legal matter, including relevant authorities to contact.',
    color: 'bg-chart-2/10 text-chart-2',
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Generate Complaint Letters',
    description: 'Create professional complaint letters, RTI applications, and grievance documents ready to submit.',
    color: 'bg-chart-3/10 text-chart-3',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Know Your Rights',
    description: 'Understand your legal rights as a tenant, employee, consumer, or citizen with clear explanations.',
    color: 'bg-chart-4/10 text-chart-4',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Instant Responses',
    description: 'No waiting for appointments. Get legal information instantly, anytime, from anywhere.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Made for India',
    description: 'Trained specifically on Indian laws, procedures, and government portals for accurate, relevant guidance.',
    color: 'bg-primary/10 text-primary',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need for Legal Clarity
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From understanding your rights to taking action - NyayAI guides you through every step of your legal journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group border-2 transition-all duration-200 hover:border-primary/30 hover:shadow-lg">
              <CardContent className="p-6">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
