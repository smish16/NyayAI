'use client'

import { Copy, Check, RefreshCw, FileText, User, Bot } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import ReactMarkdown from 'react-markdown'

interface ResponseCardProps {
  query: string
  response: string
  isLoading?: boolean
  onReset: () => void
  onGenerateComplaint: () => void
}

export function ResponseCard({ query, response, isLoading, onReset, onGenerateComplaint }: ResponseCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(response)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
      {/* User Question */}
      <div className="border-b border-border bg-muted/30 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary">
            <User className="h-4 w-4 text-secondary-foreground" />
          </div>
          <div className="flex-1 pt-1">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Question</p>
            <p className="text-foreground">{query}</p>
          </div>
        </div>
      </div>

      {/* AI Response */}
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary">
            <Bot className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex-1 pt-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">AI Legal Guidance</p>
            {isLoading && !response ? (
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[80%]" />
                <Skeleton className="h-4 w-[85%]" />
              </div>
            ) : (
              <div className="prose prose-sm max-w-none text-foreground dark:prose-invert prose-headings:text-foreground prose-headings:font-semibold prose-p:text-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-foreground prose-ul:my-2 prose-ol:my-2">
                <ReactMarkdown>{response}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      {/* Actions */}
      <CardFooter className="flex flex-wrap gap-2 border-t border-border bg-muted/30 p-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          disabled={!response || isLoading}
          className="gap-1.5"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-success" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={onGenerateComplaint}
          disabled={!response || isLoading}
          className="gap-1.5"
        >
          <FileText className="h-4 w-4" />
          <span>Generate Complaint Letter</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="gap-1.5 ml-auto"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Ask Another Question</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
