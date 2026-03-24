'use client'

import { useState } from 'react'
import { FileText, ArrowLeft, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'

const complaintTypes = [
  { value: 'landlord', label: 'Landlord/Tenant Complaint' },
  { value: 'employer', label: 'Employer/HR Complaint' },
  { value: 'consumer', label: 'Consumer Complaint' },
  { value: 'police', label: 'Police Complaint (FIR)' },
  { value: 'rti', label: 'RTI Application' },
  { value: 'grievance', label: 'Government Grievance' },
  { value: 'banking', label: 'Banking Ombudsman' },
  { value: 'other', label: 'Other' },
]

interface ComplaintFormData {
  type: string
  recipientName: string
  recipientDesignation: string
  senderName: string
  senderAddress: string
  issueDescription: string
  reliefSought: string
}

interface ComplaintFormProps {
  onSubmit: (data: ComplaintFormData) => void
  onBack?: () => void
  isLoading?: boolean
  initialDescription?: string
}

export function ComplaintForm({ onSubmit, onBack, isLoading, initialDescription }: ComplaintFormProps) {
  const [formData, setFormData] = useState<ComplaintFormData>({
    type: '',
    recipientName: '',
    recipientDesignation: '',
    senderName: '',
    senderAddress: '',
    issueDescription: initialDescription || '',
    reliefSought: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const updateField = (field: keyof ComplaintFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = formData.type && formData.issueDescription && formData.senderName

  return (
    <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
      <CardHeader className="border-b border-border bg-muted/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-xl">Generate Complaint Letter</CardTitle>
              <CardDescription className="mt-1">
                Fill in the details to generate a formal complaint letter
              </CardDescription>
            </div>
          </div>
          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="type">Complaint Type *</FieldLabel>
              <Select
                value={formData.type}
                onValueChange={(value) => updateField('type', value)}
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select complaint type" />
                </SelectTrigger>
                <SelectContent>
                  {complaintTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="recipientName">Recipient Name</FieldLabel>
                <Input
                  id="recipientName"
                  placeholder="e.g., The Station House Officer"
                  value={formData.recipientName}
                  onChange={(e) => updateField('recipientName', e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="recipientDesignation">Recipient Designation</FieldLabel>
                <Input
                  id="recipientDesignation"
                  placeholder="e.g., SHO, Police Station XYZ"
                  value={formData.recipientDesignation}
                  onChange={(e) => updateField('recipientDesignation', e.target.value)}
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="senderName">Your Name *</FieldLabel>
                <Input
                  id="senderName"
                  placeholder="Your full name"
                  value={formData.senderName}
                  onChange={(e) => updateField('senderName', e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="senderAddress">Your Address</FieldLabel>
                <Input
                  id="senderAddress"
                  placeholder="Your complete address"
                  value={formData.senderAddress}
                  onChange={(e) => updateField('senderAddress', e.target.value)}
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="issueDescription">Describe Your Issue *</FieldLabel>
              <Textarea
                id="issueDescription"
                placeholder="Describe the problem in detail. Include dates, names, and any relevant facts..."
                className="min-h-[140px] resize-none"
                value={formData.issueDescription}
                onChange={(e) => updateField('issueDescription', e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="reliefSought">What Action Do You Want?</FieldLabel>
              <Input
                id="reliefSought"
                placeholder="e.g., Refund of Rs. 5000, Return of security deposit, etc."
                value={formData.reliefSought}
                onChange={(e) => updateField('reliefSought', e.target.value)}
              />
            </Field>

            <Button 
              type="submit" 
              className="w-full gap-2" 
              size="lg"
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  <span>Generating Letter...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Generate Complaint Letter</span>
                </>
              )}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
