import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customerName, customerPhone, customerEmail, customerAddress, items, totalAmount, deliveryDate, notes } = body

    // Validation
    if (!customerName || !customerPhone || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Customer name, phone, and items are required" },
        { status: 400 }
      )
    }

    // Initialize ZAI SDK
    const zai = await ZAI.create()

    // Create order confirmation using AI
    const aiResponse = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Anda adalah asisten AI untuk bisnis kue basah "LAILATUR ROSYIDAH". 
          Bisnis ini terletak di TRIMO REJO, Desa/Kelurahan Trimo Rejo, Kec. Semendawai Suku III, Kab. Ogan Komering Ulu Timur, Provinsi Sumatera Selatan.
          Nomor telepon: 082382466248.
          Buat konfirmasi pesanan yang profesional dan ramah.`
        },
        {
          role: 'user',
          content: `Pelanggan ${customerName} (${customerPhone}, ${customerEmail}) telah melakukan pesanan:
          ${items.map((item: any) => `${item.quantity}x ${item.name} - Rp ${item.price}`).join('\n')}
          Total: Rp ${totalAmount}
          Alamat pengiriman: ${customerAddress}
          Tanggal pengiriman: ${deliveryDate || 'Segera'}
          Catatan: ${notes || 'Tidak ada'}
          
          Buat konfirmasi pesanan yang mencakup estimasi waktu pengiriman dan informasi pembayaran.`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    })

    const aiMessage = aiResponse.choices[0]?.message?.content || "Terima kasih untuk pesanan Anda. Kami akan segera memproses pesanan Anda."

    // Generate order ID
    const orderId = `LR${Date.now()}`

    // Store order (in a real app, you'd save to database)
    const order = {
      id: orderId,
      customerName,
      customerPhone,
      customerEmail: customerEmail || '',
      customerAddress,
      items,
      totalAmount,
      deliveryDate: deliveryDate || new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Default tomorrow
      notes: notes || '',
      status: 'pending',
      timestamp: new Date().toISOString(),
      aiConfirmation: aiMessage
    }

    // Here you would typically save to database
    console.log('New order:', order)

    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
      data: {
        orderId,
        aiConfirmation: aiMessage,
        estimatedDelivery: deliveryDate || "1-2 hari kerja",
        paymentInfo: {
          method: "Transfer Bank",
          accountName: "LAILATUR ROSYIDAH",
          accountNumber: "****-****-****",
          bank: "Bank Example"
        },
        nextSteps: "Kami akan menghubungi Anda untuk konfirmasi pembayaran dan pengiriman"
      }
    })

  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { success: false, message: "Failed to create order" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Return order status and information
    const orderInfo = {
      businessName: "LAILATUR ROSYIDAH",
      orderStatuses: [
        { status: "pending", description: "Menunggu konfirmasi" },
        { status: "confirmed", description: "Pesanan dikonfirmasi" },
        { status: "preparing", description: "Sedang dipersiapkan" },
        { status: "ready", description: "Siap diantar" },
        { status: "delivered", description: "Terkirim" },
        { status: "cancelled", description: "Dibatalkan" }
      ],
      deliveryInfo: {
        areas: ["Trimo Rejo", "Semendawai Suku III", "Area sekitar OKU Timur"],
        estimatedTime: "1-2 hari kerja",
        cost: "Dihitung berdasarkan jarak"
      },
      paymentMethods: [
        "Transfer Bank",
        "Tunai saat pengiriman",
        "E-Wallet (segera)"
      ]
    }

    return NextResponse.json({
      success: true,
      data: orderInfo,
      message: "Order information retrieved successfully"
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to retrieve order information" },
      { status: 500 }
    )
  }
}