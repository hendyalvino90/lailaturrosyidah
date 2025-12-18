'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Clock, Star, ChefHat, Heart, Cake, Coffee } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Kue Bolu Lembut',
      category: 'bolu',
      price: 'Rp 45.000',
      description: 'Kue bolu yang lembut dan moist dengan berbagai pilihan rasa',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Brownies Premium',
      category: 'brownies',
      price: 'Rp 35.000',
      description: 'Brownies coklat premium dengan topping keju yang melimpah',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Donat Gula Halus',
      category: 'donat',
      price: 'Rp 8.000/pcs',
      description: 'Donat lembut dengan gula halus yang menempel sempurna',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Roti Manis Isi Coklat',
      category: 'roti',
      price: 'Rp 12.000',
      description: 'Roti manis dengan isi coklat premium yang meleleh',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Muffin Blueberry',
      category: 'muffin',
      price: 'Rp 15.000',
      description: 'Muffin dengan blueberry segar dan krim lembut',
      image: 'https://images.unsplash.com/photo-1567687445165-cb5fc6b9237b?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Croissant Butter',
      category: 'roti',
      price: 'Rp 18.000',
      description: 'Croissant renyah dengan butter premium dari Prancis',
      image: 'https://images.unsplash.com/photo-1559657413-503055b622e2?w=400&h=300&fit=crop'
    }
  ]

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="LAILATUR ROSYIDAH Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  LAILATUR ROSYIDAH
                </h1>
                <p className="text-sm text-gray-600">Kue Basah Premium</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-pink-600 transition-colors">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Kontak</a>
            </nav>
            <Button className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700">
              <Phone className="w-4 h-4 mr-2" />
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-orange-100/50"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">
                <Heart className="w-3 h-3 mr-1" />
                Dibuat dengan Cinta
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Kue Basah
                <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Premium & Lezat
                </span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Nikmati berbagai pilihan kue basah berkualitas tinggi yang dibuat dengan bahan-bahan pilihan dan resep turun temurun dari <strong>LAILATUR ROSYIDAH</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white">
                  <Cake className="w-5 h-5 mr-2" />
                  Lihat Menu
                </Button>
                <Button size="lg" variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                  <Coffee className="w-5 h-5 mr-2" />
                  Promo Hari Ini
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="ml-1 font-semibold">4.9</span>
                  <span className="text-gray-600 ml-1">(250+ review)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ChefHat className="w-5 h-5 mr-1" />
                  <span>10+ Tahun Pengalaman</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559657413-503055b622e2?w=600&h=400&fit=crop"
                  alt="Kue Basah Premium"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Menu Kami
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pilihan Kue Basah
              <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Terlaris
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dari bolu lembut hingga brownies premium, semua dibuat dengan kualitas terbaik
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'bolu', 'brownies', 'donat', 'roti', 'muffin'].map((category) => (
              <Button
                key={category}
                variant={activeTab === category ? 'default' : 'outline'}
                onClick={() => setActiveTab(category)}
                className={`capitalize ${
                  activeTab === category 
                    ? 'bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700' 
                    : 'border-pink-300 text-pink-700 hover:bg-pink-50'
                }`}
              >
                {category === 'all' ? 'Semua' : category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-pink-700 hover:bg-white">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                    <Button size="sm" className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700">
                      Pesan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 mb-4">
                Tentang Kami
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  LAILATUR ROSYIDAH
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kami adalah usaha rumahan yang berdedikasi untuk menyajikan kue basah berkualitas tinggi. 
                Dengan pengalaman lebih dari 10 tahun, kami telah melayani pelanggan di Ogan Komering Ulu Timur 
                dan sekitarnya dengan produk-produk yang selalu fresh dan lezat.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dibuat dengan Cinta</h4>
                    <p className="text-gray-600">Setiap kue dibuat dengan hati dan perhatian penuh</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bahan Berkualitas</h4>
                    <p className="text-gray-600">Menggunakan bahan-bahan pilihan terbaik</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fresh Setiap Hari</h4>
                    <p className="text-gray-600">Kue selalu baru dipanggang setiap hari</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop"
                      alt="Kue Bolu"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=150&fit=crop"
                      alt="Brownies"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=150&fit=crop"
                      alt="Donat"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop"
                      alt="Roti Manis"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">
              Hubungi Kami
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pesan & Nikmati
              <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Kue Favorit Anda
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Siap melayani pesanan Anda untuk berbagai acara
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-pink-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telepon</h4>
                    <p className="text-gray-600">082382466248</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">
                      TRIMO REJO, Desa/Kelurahan Trimo Rejo<br />
                      Kec. Semendawai Suku III<br />
                      Kab. Ogan Komering Ulu Timur<br />
                      Provinsi Sumatera Selatan 32381
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Jam Buka</h4>
                    <p className="text-gray-600">
                      Senin - Sabtu: 07:00 - 20:00<br />
                      Minggu: 08:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-50 to-orange-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pesan Sekarang</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="tel"
                  placeholder="Nomor Telepon"
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <select className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>Pilih Produk</option>
                  <option>Kue Bolu Lembut</option>
                  <option>Brownies Premium</option>
                  <option>Donat Gula Halus</option>
                  <option>Roti Manis Isi Coklat</option>
                </select>
                <textarea
                  placeholder="Catatan Pesanan"
                  rows={3}
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white">
                  Kirim Pesanan
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="LAILATUR ROSYIDAH Logo"
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <h3 className="text-xl font-bold">LAILATUR ROSYIDAH</h3>
              </div>
              <p className="text-gray-400">
                Kue Basah Premium dengan kualitas terbaik dan rasa yang tak terlupakan.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Menu Cepat</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-pink-400 transition-colors">Beranda</a></li>
                <li><a href="#products" className="hover:text-pink-400 transition-colors">Produk</a></li>
                <li><a href="#about" className="hover:text-pink-400 transition-colors">Tentang</a></li>
                <li><a href="#contact" className="hover:text-pink-400 transition-colors">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pesanan Antar</li>
                <li>Pesan Acara</li>
                <li>Paket Hemat</li>
                <li>Custom Cake</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  082382466248
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Trimo Rejo, OKU Timur
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 <strong>LAILATUR ROSYIDAH</strong>. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="/privacy" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-pink-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}