'use client'

import { Copy, Check, Download, ArrowLeft, FileText, Printer } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import ReactMarkdown from 'react-markdown'

interface ComplaintPreviewProps {
  content: string
  isLoading?: boolean
  onBack: () => void
}

export function ComplaintPreview({ content, isLoading, onBack }: ComplaintPreviewProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `complaint-letter-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handlePrint = () => {
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Complaint Letter</title>
            <style>
              body { font-family: 'Times New Roman', serif; padding: 40px; line-height: 1.6; max-width: 800px; margin: 0 auto; }
              h1, h2, h3 { margin-top: 1.5em; }
              p { margin: 1em 0; }
            </style>
          </head>
          <body>${content.replace(/\n/g, '<br>')}</body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  return (
    <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
      <CardHeader className="border-b border-border bg-muted/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl">Your Complaint Letter</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-inner">
          {isLoading && !content ? (
            <div className="space-y-4">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[85%]" />
              <div className="pt-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
              <div className="pt-4">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none font-serif text-foreground dark:prose-invert prose-headings:font-sans prose-headings:font-semibold">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t border-border bg-muted/30 p-4">
        <Button onClick={handleCopy} disabled={!content || isLoading} className="gap-1.5">
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy Letter</span>
            </>
          )}
        </Button>
        <Button variant="outline" onClick={handleDownload} disabled={!content || isLoading} className="gap-1.5">
          <Download className="h-4 w-4" />
          <span>Download</span>
        </Button>
        <Button variant="outline" onClick={handlePrint} disabled={!content || isLoading} className="gap-1.5">
          <Printer className="h-4 w-4" />
          <span>Print</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
