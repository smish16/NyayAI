'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { DemoSection } from '@/components/demo-section'
import { TrustSection } from '@/components/trust-section'
import { FaqSection } from '@/components/faq-section'
import { Button } from '@/components/ui/button'
import { Scale, Sparkles, ArrowRight, ArrowDown } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -right-4 bottom-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
          </div>

          <div className="container relative mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  <span>AI-Powered Legal Assistance</span>
                </div>
                
                <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Know Your Rights{' '}
                  <span className="text-primary">Instantly</span>
                </h1>
                
                <p className="mb-8 max-w-xl text-pretty text-lg text-muted-foreground lg:text-xl">
                  Get free, instant legal guidance for everyday issues in India. 
                  No legal jargon. Just clear, actionable advice.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
                    <Link href="/ai-assistant">
                      Get Legal Help
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="#how-it-works">
                      See How It Works
                    </Link>
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <span>Indian Law Focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <span>Instant Response</span>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                <div className="relative rounded-2xl border-2 border-border bg-card p-8 shadow-2xl">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                      <Scale className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">NyayAI</h3>
                      <p className="text-sm text-muted-foreground">Your Legal Assistant</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-sm text-muted-foreground">Example: "My employer has not paid my salary for 3 months..."</p>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">AI Response</p>
                      <p className="text-sm text-foreground">Under the Payment of Wages Act, employers must pay wages within 7 days of the wage period. Here is what you can do...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center lg:hidden">
              <Link href="/ai-assistant" className="flex animate-bounce flex-col items-center text-muted-foreground">
                <span className="mb-2 text-sm">Start Here</span>
                <ArrowDown className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <TrustSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  )
}
