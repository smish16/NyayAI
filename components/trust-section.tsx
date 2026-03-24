import { Heart, Shield, Users, Scale } from 'lucide-react'

const trustPoints = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Built for Social Impact',
    description: 'Our mission is to democratize legal knowledge and empower every Indian citizen.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Privacy First',
    description: 'Your queries are processed securely and not stored permanently or shared.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'For Everyone',
    description: 'Designed for ordinary citizens - no legal background needed to use NyayAI.',
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: 'Indian Law Focused',
    description: 'Specifically trained on Indian laws, procedures, and government systems.',
  },
]

export function TrustSection() {
  return (
    <section className="border-t border-border bg-primary py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Why Trust NyayAI?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            We are committed to making legal help accessible, reliable, and impactful.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                {point.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">{point.title}</h3>
              <p className="text-sm text-primary-foreground/70">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
