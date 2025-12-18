import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const products = [
      {
        id: 1,
        name: "Kue Lapis",
        category: "Tradisional",
        price: 45000,
        description: "Kue lapis legit dengan lapisan warna-warni yang lembut dan manis",
        image: "/api/placeholder/300/200",
        ingredients: ["Tepung terigu", "Santan", "Gula", "Telur", "Pewarna makanan"],
        stock: 10,
        rating: 4.8,
        reviews: 24
      },
      {
        id: 2,
        name: "Bolu Gulung",
        category: "Modern",
        price: 55000,
        description: "Bolu gulung lembut dengan isian krim dan taburan keju",
        image: "/api/placeholder/300/200",
        ingredients: ["Tepung terigu", "Telur", "Gula", "Mentega", "Krim kocok"],
        stock: 8,
        rating: 4.9,
        reviews: 31
      },
      {
        id: 3,
        name: "Kue Lumpur",
        category: "Tradisional",
        price: 35000,
        description: "Kue lumpur legit dengan topping kelapa parut",
        image: "/api/placeholder/300/200",
        ingredients: ["Tepung terigu", "Santan", "Gula", "Telur", "Kelapa parut"],
        stock: 15,
        rating: 4.7,
        reviews: 18
      },
      {
        id: 4,
        name: "Brownies Kukus",
        category: "Modern",
        price: 60000,
        description: "Brownies kukus lembut dengan coklat premium",
        image: "/api/placeholder/300/200",
        ingredients: ["Coklat bubuk", "Tepung terigu", "Telur", "Mentega", "Gula"],
        stock: 6,
        rating: 4.9,
        reviews: 42
      },
      {
        id: 5,
        name: "Kue Mangkok",
        category: "Tradisional",
        price: 30000,
        description: "Kue mangkok mekar dengan rasa manis legit",
        image: "/api/placeholder/300/200",
        ingredients: ["Tepung terigu", "Santan", "Gula", "Telur", "Vanili"],
        stock: 20,
        rating: 4.6,
        reviews: 15
      },
      {
        id: 6,
        name: "Dadar Gulung",
        category: "Tradisional",
        price: 40000,
        description: "Dadar gulung dengan isian kelapa parut gula merah",
        image: "/api/placeholder/300/200",
        ingredients: ["Tepung terigu", "Santan", "Gula merah", "Kelapa parut", "Pewarna makanan"],
        stock: 12,
        rating: 4.8,
        reviews: 27
      },
      {
        id: 7,
        name: "Klepon",
        category: "Tradisional",
        price: 25000,
        description: "Klepon kenyal dengan isian gula merah dan taburan kelapa",
        image: "/api/placeholder/300/200",
        ingredients: ["Tepung ketan", "Gula merah", "Kelapa parut", "Pewarna makanan"],
        stock: 18,
        rating: 4.7,
        reviews: 22
      },
      {
        id: 8,
        name: "Nagasari",
        category: "Tradisional",
        price: 28000,
        description: "Nagasari lembut dengan isian pisang raja",
        image: "/api/placeholder/300/200",
        ingredients: ["Tepung beras", "Santan", "Pisang raja", "Daun pisang"],
        stock: 14,
        rating: 4.6,
        reviews: 19
      }
    ]

    return NextResponse.json({
      success: true,
      data: products,
      message: "Products retrieved successfully"
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to retrieve products" },
      { status: 500 }
    )
  }
}