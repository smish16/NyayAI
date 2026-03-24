import { Scale, AlertTriangle, Heart } from 'lucide-react'
import Link from 'next/link'

const footerLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#demo', label: 'Demo' },
  { href: '#faq', label: 'FAQ' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Disclaimer */}
        <div className="mb-10 rounded-xl border border-warning/30 bg-warning/10 p-5">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/20">
              <AlertTriangle className="h-5 w-5 text-warning-foreground dark:text-warning" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Important Disclaimer</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                NyayAI provides general legal information and guidance only. This is not a substitute for professional legal advice. 
                For complex legal matters, please consult a qualified advocate or legal professional. The information provided should 
                not be used as a basis for legal decisions without consulting a licensed attorney.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-sm">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">NyayAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering Indian citizens with accessible legal knowledge through AI-powered assistance.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-3.5 w-3.5 fill-destructive text-destructive" />
              <span>for social impact</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://consumerhelpline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Consumer Helpline
                </a>
              </li>
              <li>
                <a
                  href="https://pgportal.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  PG Portal
                </a>
              </li>
              <li>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Legal Services Authority
                </a>
              </li>
              <li>
                <a
                  href="https://rtionline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  RTI Online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>Made for India with accessible legal help for everyone.</p>
          <p>&copy; {new Date().getFullYear()} NyayAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
