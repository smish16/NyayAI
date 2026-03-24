'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Scale, Briefcase, ShoppingCart, Home } from "lucide-react"

const commonIssues = [
  {
    category: "Landlord & Tenant",
    icon: <Home className="h-5 w-5 text-primary" />,
    issues: [
      {
        q: "My landlord is evicting me without a proper notice. What are my rights?",
        a: "Under the Rent Control Act, a landlord cannot evict a tenant arbitrarily. They must provide a valid reason (like non-payment of rent for a specific period) and serve a legal notice, usually 30 days in advance depending on your state's specific laws. If forced to leave without notice, you can file a police complaint or approach the civil court for an injunction."
      },
      {
        q: "Can my landlord strictly withhold my security deposit for normal wear and tear?",
        a: "No, landlords cannot deduct money from your security deposit for 'normal wear and tear' (like minor scuffs on walls or faded paint). Deductions are only valid for major damages caused by you or unpaid rent/utility bills. You have the right to demand a breakdown of any deductions made."
      }
    ]
  },
  {
    category: "Workplace & Employment",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    issues: [
      {
        q: "My employer hasn't paid my salary for the last 2 months. What should I do?",
        a: "Under the Payment of Wages Act, employers are mandated to pay salaries on time. You should first send a formal written notice HR/Management. If unresolved, you can file a complaint with the Labour Commissioner or file a case in the Labour Court. For executives/managers, a civil suit for recovery of money can be filed."
      },
      {
        q: "I was terminated immediately without any notice period. Is this legal?",
        a: "This depends on you employment contract. If your contract states a 30-day notice period, the employer must provide either the notice or 'pay in lieu of notice'. The exception is if you are terminated for proven gross misconduct. You can send a legal notice demanding your rightful dues."
      }
    ]
  },
  {
    category: "Consumer Protection",
    icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    issues: [
      {
        q: "I bought a defective product online, and the seller refuses to refund. How do I proceed?",
        a: "Under the Consumer Protection Act, selling defective goods is an 'unfair trade practice'. First, send a formal written notice to the company. If they don't respond, you can file a complaint on the National Consumer Helpline (NCH) portal, or file a case in the District Consumer Disputes Redressal Commission."
      },
      {
        q: "An airline canceled my flight and is only giving me travel credits, not a refund. Am I entitled to cash?",
        a: "According to DGCA guidelines, if the airline cancels the flight, you are entitled to a full refund to the original mode of payment, or an alternative flight of your choice, or compensation. They cannot force you to accept travel credits. You should complain to the DGCA AirSewa portal."
      }
    ]
  }
]

export function CommonIssues() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Common Legal Issues</h2>
        <p className="text-muted-foreground mt-1 text-sm">Select a category to view answers to frequently asked legal questions.</p>
      </div>

      <div className="grid gap-6">
        {commonIssues.map((category, idx) => (
          <div key={idx} className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.category}</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {category.issues.map((issue, i) => (
                <AccordionItem key={i} value={`item-${idx}-${i}`}>
                  <AccordionTrigger className="text-left font-medium text-[15px] py-3 hover:text-primary transition-colors">
                    {issue.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {issue.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  )
}
