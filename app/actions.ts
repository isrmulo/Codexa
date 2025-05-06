"use server"

import { z } from "zod"

// Define the form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    company?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Validate form data
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, you would send the data to your backend or API
  // For now, we'll just return a success state
  return {
    success: true,
  }
}
