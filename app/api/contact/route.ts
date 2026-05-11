// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  console.log('API: Received POST request to /api/contact');
  try {
    const body = await request.json()
    console.log('API: Request body parsed:', body);
    
    const { name, email, phone, restaurantName, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      console.warn('API: Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.warn('API: Validation failed - invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    console.log('API: Attempting to create contact submission in Prisma...');
    // Create contact submission
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        restaurantName: restaurantName || null,
        message,
      },
    })
    console.log('API: Contact submission created successfully:', submission.id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: submission.id 
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('API: Contact form error:', error);
    console.error('API: Error details:', error.message, error.stack);
    return NextResponse.json(
      { error: 'Failed to submit contact form', details: error.message },
      { status: 500 }
    )
  }
}