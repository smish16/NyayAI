import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FaqSection } from '@/components/faq-section'

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-12">
        <div className="container mx-auto px-4 max-w-4xl text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground">Find answers to common questions about NyayAI and how we help you understand your legal rights.</p>
        </div>
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
