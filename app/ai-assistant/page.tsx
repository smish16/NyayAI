'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { QueryInput } from '@/components/query-input'
import { PresetTemplates } from '@/components/preset-templates'
import { ResponseCard } from '@/components/response-card'
import { ComplaintForm } from '@/components/complaint-form'
import { ComplaintPreview } from '@/components/complaint-preview'
import { CommonIssues } from '@/components/common-issues'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Bot, HelpCircle } from 'lucide-react'

type View = 'chat' | 'complaint-form' | 'complaint-preview'

export default function ChatbotPage() {
  const [view, setView] = useState<View>('chat')
  const [currentQuery, setCurrentQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [complaintContent, setComplaintContent] = useState('')
  const [isGeneratingComplaint, setIsGeneratingComplaint] = useState(false)
  const responseRef = useRef<HTMLDivElement>(null)
  const queryRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, error, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: '/api/ask' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  const lastAssistantMessage = messages.filter(m => m.role === 'assistant').pop()
  const lastAssistantText = lastAssistantMessage?.parts?.find(p => p.type === 'text')?.text || ''

  const hasResponse = messages.length > 0;

  const handleQuerySubmit = async (query: string) => {
    setCurrentQuery(query)
    setInputValue('')
    setView('chat')
    sendMessage({ text: query })
  }

  const handlePresetSelect = (template: string) => {
    setInputValue(template)
    queryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleReset = () => {
    setView('chat')
    setCurrentQuery('')
    setMessages([])
    setComplaintContent('')
  }

  const handleGenerateComplaint = () => {
    setView('complaint-form')
  }

  const handleComplaintSubmit = async (data: any) => {
    setView('complaint-preview')
    setIsGeneratingComplaint(true)
    setComplaintContent('')

    try {
      const response = await fetch('/api/generate-complaint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          details: data.issueDescription,
        }),
      })

      if (!response.ok) throw new Error('Failed to generate complaint')

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let content = ''

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value)
          content += chunk
          setComplaintContent(content)
        }
      }
    } catch (error) {
      console.error('Error generating complaint:', error)
      setComplaintContent('An error occurred while generating the complaint letter. Please try again.')
    } finally {
      setIsGeneratingComplaint(false)
    }
  }

  useEffect(() => {
    if (hasResponse && view === 'chat' && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hasResponse, view, messages])

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <Header />
      
      <main className="flex-1 container mx-auto max-w-5xl p-4 py-8">
        <Tabs defaultValue="assistant" className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Legal Dashboard</h1>
              <p className="text-muted-foreground mt-1 text-sm">Get AI assistance or explore common legal issues.</p>
            </div>
            
            <TabsList className="bg-muted p-1 rounded-lg w-full sm:w-auto h-auto">
              <TabsTrigger value="assistant" className="gap-2 py-2 px-4 rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <Bot className="h-4 w-4" />
                AI Assistant
              </TabsTrigger>
              <TabsTrigger value="issues" className="gap-2 py-2 px-4 rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <HelpCircle className="h-4 w-4" />
                Common Issues
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="assistant" className="focus-visible:outline-none focus-visible:ring-0 mt-0">
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-4 sm:p-6 lg:p-8 min-h-[600px] flex flex-col">
              {view === 'chat' && (
                <div className="flex-1 flex flex-col gap-8 w-full max-w-3xl mx-auto">
                  {!hasResponse ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Bot className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">How can I help you today?</h2>
                      <p className="text-muted-foreground max-w-md mb-8">
                        Describe your legal issue in simple language, and I will analyze your rights and suggest the next steps.
                      </p>
                      <div className="w-full" ref={queryRef}>
                        <QueryInput 
                          onSubmit={handleQuerySubmit} 
                          isLoading={isLoading}
                          value={inputValue}
                        />
                      </div>
                      <div className="w-full mt-8 border-t pt-8">
                        <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">Suggested Templates</p>
                        <PresetTemplates onSelect={handlePresetSelect} />
                      </div>
                    </div>
                  ) : (
                    <div className="animate-in fade-in">
                      <div ref={responseRef}>
                        {error ? (
                          <div className="p-4 bg-destructive/10 text-destructive rounded-lg mb-6 border border-destructive/20 shadow-sm flex flex-col gap-2">
                            <span className="font-semibold flex items-center gap-2">
                               <Bot className="h-5 w-5" /> API Error Occurred
                            </span>
                            <span className="text-sm">
                              {error.message || "Failed to connect to the backend. Please check your API key and connection."}
                            </span>
                          </div>
                        ) : isLoading && !lastAssistantText ? (
                          <div className="flex items-center gap-3 p-6 bg-card border rounded-xl text-muted-foreground shadow-sm animate-pulse">
                            <Bot className="h-6 w-6 text-primary/50" />
                            <span className="font-medium text-lg text-foreground/70">Thinking...</span>
                          </div>
                        ) : (
                          <ResponseCard
                            query={currentQuery}
                            response={lastAssistantText}
                            isLoading={isLoading}
                            onReset={handleReset}
                            onGenerateComplaint={handleGenerateComplaint}
                          />
                        )}
                      </div>
                      <div className="mt-8 pt-6 border-t" ref={queryRef}>
                         <QueryInput 
                          onSubmit={handleQuerySubmit} 
                          isLoading={isLoading}
                          value={""}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {view === 'complaint-form' && (
                <div className="w-full max-w-3xl mx-auto animate-in slide-in-from-right-8 duration-500">
                  <ComplaintForm
                    onSubmit={handleComplaintSubmit}
                    onBack={() => setView('chat')}
                    isLoading={isGeneratingComplaint}
                    initialDescription={currentQuery}
                  />
                </div>
              )}

              {view === 'complaint-preview' && (
                <div className="w-full max-w-3xl mx-auto animate-in zoom-in-95 duration-500">
                  <ComplaintPreview
                    content={complaintContent}
                    isLoading={isGeneratingComplaint}
                    onBack={() => setView('complaint-form')}
                  />
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="issues" className="focus-visible:outline-none focus-visible:ring-0 mt-0">
            <CommonIssues />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
