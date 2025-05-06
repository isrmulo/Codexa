"use client"
import { useActionState } from "react"
import { submitContactForm, type ContactFormState } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const initialState: ContactFormState = {}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  const handleSubmit = (formData: FormData) => {
    formAction(formData)
  }

  return (
    <form action={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          aria-describedby="name-error"
          className={state.errors?.name ? "border-red-500" : ""}
        />
        {state.errors?.name && (
          <p id="name-error" className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          aria-describedby="email-error"
          className={state.errors?.email ? "border-red-500" : ""}
        />
        {state.errors?.email && (
          <p id="email-error" className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          placeholder="Your company (optional)"
          aria-describedby="company-error"
          className={state.errors?.company ? "border-red-500" : ""}
        />
        {state.errors?.company && (
          <p id="company-error" className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {state.errors.company[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={4}
          aria-describedby="message-error"
          className={state.errors?.message ? "border-red-500" : ""}
        />
        {state.errors?.message && (
          <p id="message-error" className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {state.errors?._form && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          <p>{state.errors._form[0]}</p>
        </div>
      )}

      {state.success && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-md text-green-600 text-sm flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4" />
          <p>Thank you for your message! We'll get back to you soon.</p>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
