import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, subject } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Initialize ZAI SDK
    const zai = await ZAI.create()

    // Create a personalized response using AI
    const aiResponse = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Anda adalah asisten AI untuk bisnis kue basah "LAILATUR ROSYIDAH". 
          Bisnis ini terletak di TRIMO REJO, Desa/Kelurahan Trimo Rejo, Kec. Semendawai Suku III, Kab. Ogan Komering Ulu Timur, Provinsi Sumatera Selatan.
          Nomor telepon: 082382466248.
          Buat respons yang sopan, profesional, dan ramah untuk pelanggan yang menghubungi kami.`
        },
        {
          role: 'user',
          content: `Pelanggan dengan nama ${name} (${email}, ${phone}) mengirim pesan dengan subjek "${subject}": "${message}". 
          Buat respons yang sesuai dan berikan informasi yang relevan tentang bisnis kami jika diperlukan.`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    })

    const aiMessage = aiResponse.choices[0]?.message?.content || "Terima kasih telah menghubungi LAILATUR ROSYIDAH. Kami akan segera merespons pesan Anda."

    // Store contact message (in a real app, you'd save to database)
    const contactMessage = {
      id: Date.now(),
      name,
      email,
      phone: phone || '',
      subject: subject || 'General Inquiry',
      message,
      timestamp: new Date().toISOString(),
      status: 'new',
      aiResponse: aiMessage
    }

    // Here you would typically save to database
    console.log('New contact message:', contactMessage)

    return NextResponse.json({
      success: true,
      message: "Contact message sent successfully",
      data: {
        id: contactMessage.id,
        aiResponse: aiMessage,
        nextSteps: "Kami akan menghubungi Anda kembali dalam 1x24 jam"
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: "Failed to send contact message" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Return contact information
    const contactInfo = {
      businessName: "LAILATUR ROSYIDAH",
      address: "TRIMO REJO, Desa/Kelurahan Trimo Rejo, Kec. Semendawai Suku III, Kab. Ogan Komering Ulu Timur, Provinsi Sumatera Selatan",
      postalCode: "32381",
      phone: "082382466248",
      email: "info@lailaturrosyidah.com",
      hours: {
        monday: "07:00 - 20:00",
        tuesday: "07:00 - 20:00",
        wednesday: "07:00 - 20:00",
        thursday: "07:00 - 20:00",
        friday: "07:00 - 20:00",
        saturday: "07:00 - 21:00",
        sunday: "07:00 - 19:00"
      },
      services: [
        "Kue Basah Tradisional",
        "Kue Modern",
        "Pesanan Khusus",
        "Pengiriman Lokal"
      ]
    }

    return NextResponse.json({
      success: true,
      data: contactInfo,
      message: "Contact information retrieved successfully"
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to retrieve contact information" },
      { status: 500 }
    )
  }
}