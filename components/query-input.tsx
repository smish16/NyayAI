'use client'

import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface QueryInputProps {
  onSubmit: (query: string) => void
  isLoading?: boolean
  placeholder?: string
  value?: string
}

export function QueryInput({ onSubmit, isLoading, placeholder, value = '' }: QueryInputProps) {
  const [query, setQuery] = useState(value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim() && !isLoading) {
      onSubmit(query.trim())
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="overflow-hidden rounded-xl border-2 border-border bg-card shadow-sm transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
        <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-2.5">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Ask your legal question</span>
        </div>
        <Textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Describe your legal issue in simple words... For example: 'My landlord is refusing to return my security deposit'"}
          className="min-h-[140px] resize-none border-0 bg-transparent px-4 py-4 text-base focus-visible:ring-0"
          disabled={isLoading}
        />
        <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-3">
          <p className="text-xs text-muted-foreground">
            Press <kbd className="rounded bg-secondary px-1.5 py-0.5 text-xs font-medium">Enter</kbd> to send or <kbd className="rounded bg-secondary px-1.5 py-0.5 text-xs font-medium">Shift+Enter</kbd> for new line
          </p>
          <Button
            type="submit"
            size="sm"
            disabled={!query.trim() || isLoading}
            className="gap-2"
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
