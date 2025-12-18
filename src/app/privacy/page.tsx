'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="LAILATUR ROSYIDAH Logo"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                    LAILATUR ROSYIDAH
                  </h1>
                  <p className="text-xs text-gray-600">Kue Basah Premium</p>
                </div>
              </Link>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-pink-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
              <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                LAILATUR ROSYIDAH
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            {/* Pengumpulan Informasi */}
            <Card className="p-8 border-pink-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengumpulan Informasi</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>LAILATUR ROSYIDAH</strong> mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Memesan produk melalui website atau telepon</li>
                      <li>Mendaftar newsletter atau promosi</li>
                      <li>Menghubungi kami untuk pertanyaan atau dukungan</li>
                      <li>Mengisi formulir pemesanan online</li>
                    </ul>
                    <p>
                      Informasi yang kami kumpulkan meliputi: nama lengkap, nomor telepon, alamat email, 
                      alamat pengiriman, dan preferensi pesanan.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Penggunaan Informasi */}
            <Card className="p-8 border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Penggunaan Informasi</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Kami menggunakan informasi pribadi Anda untuk:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Memproses dan mengkonfirmasi pesanan Anda</li>
                      <li>Menyediakan layanan pelanggan yang lebih baik</li>
                      <li>Mengirimkan informasi tentang produk dan promosi</li>
                      <li>Meningkatkan kualitas produk dan layanan kami</li>
                      <li>Menghubungi Anda terkait status pesanan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Perlindungan Data */}
            <Card className="p-8 border-pink-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Perlindungan Data</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>LAILATUR ROSYIDAH</strong> berkomitmen untuk melindungi data pribadi Anda dengan:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Enkripsi data saat transmisi dan penyimpanan</li>
                      <li>Akses terbatas kepada informasi pribadi Anda</li>
                      <li>Keamanan fisik dan digital untuk mencegah akses tidak sah</li>
                      <li>Update rutin sistem keamanan kami</li>
                      <li>Tidak membagikan informasi kepada pihak ketiga tanpa persetujuan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Hak Pengguna */}
            <Card className="p-8 border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda sebagai Pengguna</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Sebagai pengguna, Anda memiliki hak untuk:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Mengakses dan melihat data pribadi yang kami simpan</li>
                      <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                      <li>Menghapus data pribadi Anda (dengan batasan tertentu)</li>
                      <li>Menolak pemasaran langsung dari kami</li>
                      <li>Meminta salinan data pribadi Anda</li>
                    </ul>
                    <p>
                      Untuk menjalankan hak-hak ini, silakan hubungi kami melalui 
                      nomor telepon 082382466248 atau email kami.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Cookies */}
            <Card className="p-8 border-pink-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Website kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Menyimpan preferensi pengguna</li>
                  <li>Menganalisis traffic website</li>
                  <li>Meningkatkan pengalaman pengguna</li>
                  <li>Menyimpan item keranjang belanja</li>
                </ul>
                <p>
                  Anda dapat mengatur browser untuk menolak cookies, namun ini dapat mempengaruhi 
                  fungsionalitas website kami.
                </p>
              </div>
            </Card>

            {/* Perubahan Kebijakan */}
            <Card className="p-8 border-orange-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>LAILATUR ROSYIDAH</strong> dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                  Perubahan akan diberitahukan melalui website atau email. 
                  Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
                </p>
              </div>
            </Card>

            {/* Kontak */}
            <Card className="p-8 bg-gradient-to-br from-pink-50 to-orange-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin menjalankan 
                  hak privasi Anda, silakan hubungi:
                </p>
                <div className="bg-white p-6 rounded-lg space-y-3">
                  <p><strong>Nama Usaha:</strong> LAILATUR ROSYIDAH</p>
                  <p><strong>Telepon:</strong> 082382466248</p>
                  <p><strong>Alamat:</strong> TRIMO REJO, Desa/Kelurahan Trimo Rejo, Kec. Semendawai Suku III, Kab. Ogan Komering Ulu Timur, Provinsi Sumatera Selatan 32381</p>
                </div>
                <p className="text-sm text-gray-600">
                  Kebijakan Privasi ini berlaku efektif sejak Januari 2024 dan telah diperbarui terakhir pada tanggal tersebut.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 <strong>LAILATUR ROSYIDAH</strong>. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-pink-400 hover:text-pink-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="text-pink-400 hover:text-pink-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}