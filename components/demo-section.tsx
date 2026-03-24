'use client'

import { User, Bot, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function DemoSection() {
  return (
    <section id="demo" className="border-t border-border py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See NyayAI in Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Here is an example of how NyayAI helps with a common legal issue
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
          <CardContent className="p-0">
            {/* User Query */}
            <div className="border-b border-border bg-muted/30 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <User className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">User</p>
                  <p className="text-foreground">
                    My landlord is refusing to return my security deposit even though I have vacated the flat 2 months ago and there is no damage. What can I do?
                  </p>
                </div>
              </div>
            </div>

            {/* AI Response */}
            <div className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">NyayAI</p>
                  <div className="space-y-4 text-sm text-foreground">
                    <p>
                      I understand your situation. Under Indian law, landlords are legally obligated to return security deposits after the tenancy ends, minus any legitimate deductions for damages. Here is what you can do:
                    </p>
                    
                    <div className="space-y-2">
                      <p className="font-semibold">Step 1: Send a Legal Notice</p>
                      <p className="text-muted-foreground">
                        Send a formal legal notice via registered post demanding the return of your deposit within 15-30 days. This creates a legal record.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold">Step 2: File a Complaint</p>
                      <p className="text-muted-foreground">
                        If the landlord does not respond, you can file a complaint with the Rent Controller or approach the Consumer Forum.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold">Step 3: Small Causes Court</p>
                      <p className="text-muted-foreground">
                        For amounts under Rs. 10 lakhs, you can file a case in Small Causes Court which is faster and does not require a lawyer.
                      </p>
                    </div>

                    <p className="rounded-lg bg-accent/10 p-3 text-sm">
                      <span className="font-semibold">Would you like me to generate a legal notice template?</span> I can create a formal letter you can send to your landlord.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="#query">
              Try NyayAI Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
