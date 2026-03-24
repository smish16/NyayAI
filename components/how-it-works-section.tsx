import { MessageCircle, Bot, FileOutput, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'Describe Your Issue',
    description: 'Tell us about your legal problem in simple, everyday language. No legal jargon needed.',
  },
  {
    step: 2,
    icon: <Bot className="h-8 w-8" />,
    title: 'Get AI Guidance',
    description: 'Our AI analyzes your situation and provides clear, actionable guidance based on Indian law.',
  },
  {
    step: 3,
    icon: <FileOutput className="h-8 w-8" />,
    title: 'Take Action',
    description: 'Follow the steps provided or generate official complaint letters to submit to authorities.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-border bg-muted/30 py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How NyayAI Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Three simple steps to get the legal guidance you need
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="absolute left-0 right-0 top-20 hidden h-0.5 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step number badge */}
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg">
                    {item.step}
                  </span>
                </div>
                
                {/* Icon circle */}
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-border bg-card shadow-sm">
                  <div className="text-primary">{item.icon}</div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="max-w-xs text-muted-foreground">{item.description}</p>

                {/* Arrow - mobile & tablet */}
                {index < steps.length - 1 && (
                  <div className="my-4 flex items-center justify-center lg:hidden">
                    <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
