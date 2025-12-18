'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Link } from 'next/link'
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

interface ContactInfo {
  businessName: string
  address: string
  postalCode: string
  phone: string
  email: string
  hours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  services: string[]
}

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [aiResponse, setAiResponse] = useState('')

  useEffect(() => {
    fetchContactInfo()
  }, [])

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/contact')
      const data = await response.json()
      if (data.success) {
        setContactInfo(data.data)
      }
    } catch (error) {
      console.error('Error fetching contact info:', error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (data.success) {
        setSubmitStatus('success')
        setAiResponse(data.data.aiResponse)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!contactInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat informasi kontak...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="LAILATUR ROSYIDAH" className="h-10 w-10 mr-3 rounded-full" />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                    LAILATUR ROSYIDAH
                  </h1>
                  <p className="text-xs text-gray-600">Kue Basah Tradisional</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center text-gray-700 hover:text-rose-600 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl">Kami siap melayani kebutuhan kue Anda</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <MessageCircle className="mr-3 h-6 w-6 text-rose-600" />
                Kirim Pesan
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-800 font-medium">Pesan berhasil dikirim!</p>
                  </div>
                  {aiResponse && (
                    <p className="text-green-700 text-sm mt-2">{aiResponse}</p>
                  )}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Terjadi kesalahan. Silakan coba lagi.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Telepon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih subjek" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Pertanyaan Umum</SelectItem>
                      <SelectItem value="order">Pemesanan</SelectItem>
                      <SelectItem value="complaint">Keluhan</SelectItem>
                      <SelectItem value="suggestion">Saran</SelectItem>
                      <SelectItem value="partnership">Kerjasama</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Alamat</p>
                      <p className="text-gray-600">{contactInfo.address}</p>
                      <p className="text-gray-600">{contactInfo.postalCode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Telepon</p>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-rose-600" />
                  Jam Operasional
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg">
                    <span className="font-medium text-gray-800">Senin - Jumat</span>
                    <span className="text-rose-600 font-semibold">{contactInfo.hours.monday}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg">
                    <span className="font-medium text-gray-800">Sabtu</span>
                    <span className="text-rose-600 font-semibold">{contactInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg">
                    <span className="font-medium text-gray-800">Minggu</span>
                    <span className="text-rose-600 font-semibold">{contactInfo.hours.sunday}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Aksi Cepat</h2>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700">
                    <Phone className="mr-2 h-4 w-4" />
                    Pesan Sekarang
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-800 to-orange-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 LAILATUR ROSYIDAH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}