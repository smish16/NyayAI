import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto max-w-4xl py-16 md:py-24 px-4">
          <div className="space-y-6 text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About NyayAI</h1>
            <p className="text-xl text-muted-foreground w-full max-w-2xl mx-auto">
              Democratizing legal knowledge for everyday citizens of India, powered by AI.
            </p>
          </div>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Our Mission</h2>
            <p>
              NyayAI was built on a simple premise: everyone deserves access to clear, concise, and accurate legal information. 
              The legal system can be intimidating and expensive. We aim to bridge the gap between complex legal jargon and the everyday problems people face.
            </p>
            <h2>What We Do</h2>
            <p>
              We provide tools for individuals to understand their rights in various situations—whether dealing with a difficult landlord, 
              seeking a refund for a defective product, or understanding workplace rights. Our AI breaks down the complexities of Indian law 
              into actionable advice and even drafts formal letters for you to use.
            </p>
            <h2>Why It Matters</h2>
            <p>
              Knowing your rights is the first step toward justice. By empowering people with information, we hope to encourage a more 
              equitable society where legal knowledge is not a privilege, but a basic right.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
