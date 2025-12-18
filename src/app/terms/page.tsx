'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, ShoppingCart, Package, Clock, AlertCircle, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Terms() {
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
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
              <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                LAILATUR ROSYIDAH
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan ini mengatur penggunaan layanan dan pembelian produk 
              dari <strong>LAILATUR ROSYIDAH</strong>. Mohon baca dengan seksama.
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Penerimaan Syarat */}
            <Card className="p-8 border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Penerimaan Syarat</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Dengan menggunakan layanan dan membeli produk dari <strong>LAILATUR ROSYIDAH</strong>, 
                      Anda menyatakan bahwa:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</li>
                      <li>Anda berusia minimal 18 tahun atau memiliki izin orang tua/wali</li>
                      <li>Anda memiliki kapasitas hukum untuk mengikat kontrak</li>
                      <li>Informasi yang Anda berikan akurat dan lengkap</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Produk dan Layanan */}
            <Card className="p-8 border-pink-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Produk dan Layanan</h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="font-semibold text-lg">Deskripsi Produk</h3>
                    <p>
                      Kami berusaha menyajikan informasi produk yang akurat, namun:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Warna dan tampilan produk dapat sedikit berbeda dengan foto</li>
                      <li>Komposisi produk dapat berubah sewaktu-waktu</li>
                      <li>Ketersediaan produk tergantung stok yang ada</li>
                      <li>Produk dibuat fresh setiap hari dengan bahan berkualitas</li>
                    </ul>

                    <h3 className="font-semibold text-lg mt-6">Kualitas Produk</h3>
                    <p>
                      <strong>LAILATUR ROSYIDAH</strong> menjamin:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Produk dibuat dengan bahan-bahan pilihan dan halal</li>
                      <li>Produk segar dan layak konsumsi saat pengiriman</li>
                      <li>Standar kebersihan dan kualitas yang konsisten</li>
                      <li>Resep tradisional dengan sentuhan modern</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pemesanan dan Pembayaran */}
            <Card className="p-8 border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pemesanan dan Pembayaran</h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="font-semibold text-lg">Proses Pemesanan</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Pemesanan dapat dilakukan melalui telepon, WhatsApp, atau website</li>
                      <li>Konfirmasi pesanan akan dikirim melalui WhatsApp</li>
                      <li>Pemesanan minimal 2 jam sebelum pengiriman untuk pesanan reguler</li>
                      <li>Pesanan besar (minimal 50 pcs) harus dipesan 1 hari sebelumnya</li>
                    </ul>

                    <h3 className="font-semibold text-lg mt-6">Metode Pembayaran</h3>
                    <p>
                      Kami menerima metode pembayaran berikut:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Tunai (Cash on Delivery)</li>
                      <li>Transfer Bank (BCA, Mandiri, BNI)</li>
                      <li>E-Wallet (GoPay, OVO, Dana)</li>
                      <li>Pembayaran harus dilunasi sebelum atau saat pengiriman</li>
                    </ul>

                    <h3 className="font-semibold text-lg mt-6">Harga</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Harga yang tercantum adalah harga final</li>
                      <li>Belum termasuk biaya pengiriman (jika ada)</li>
                      <li>Harga dapat berubah tanpa pemberitahuan sebelumnya</li>
                      <li>Promo dan diskon berlaku sesuai syarat dan ketentuan masing-masing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pengiriman */}
            <Card className="p-8 border-pink-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengiriman dan Pengambilan</h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="font-semibold text-lg">Jam Operasional</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Senin - Sabtu: 07:00 - 20:00</li>
                      <li>Minggu: 08:00 - 18:00</li>
                      <li>Pengiriman terakhir: 2 jam sebelum tutup</li>
                    </ul>

                    <h3 className="font-semibold text-lg mt-6">Area Pengiriman</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Gratis ongkir untuk radius 5 km dari lokasi kami (minimal order Rp 100.000)</li>
                      <li>Biaya pengiriman untuk area lain disesuaikan dengan jarak</li>
                      <li>Pengambilan langsung di toko tidak dikenakan biaya tambahan</li>
                      <li>Alamat pengiriman: Trimo Rejo, Kec. Semendawai Suku III, OKU Timur</li>
                    </ul>

                    <h3 className="font-semibold text-lg mt-6">Resiko Pengiriman</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Kami bertanggung jawab atas kualitas produk saat diterima</li>
                      <li>Kerusakan akibat pengiriman akan kami ganti (dengan bukti foto)</li>
                      <li>Keterlambatan pengiriman di luar kendali kami tidak dapat diklaim</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pembatalan dan Pengembalian */}
            <Card className="p-8 border-orange-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembatalan dan Pengembalian</h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="font-semibold text-lg">Kebijakan Pembatalan</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Pembatalan dapat dilakukan maksimal 1 jam sebelum proses pembuatan</li>
                      <li>Pembatalan setelah proses pembuatan akan dikenakan biaya 50%</li>
                      <li>Pembatalan pesanan besar (minimal 50 pcs) maksimal 4 jam sebelumnya</li>
                      <li>Pengembalian dana akan diproses maksimal 3 hari kerja</li>
                    </ul>

                    <h3 className="font-semibold text-lg mt-6">Kebijakan Pengembalian</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Produk dapat dikembalikan jika ada cacat produksi</li>
                      <li>Pengembalian harus dilakukan maksimal 2 jam setelah penerimaan</li>
                      <li>Wajib menyertakan bukti foto dan struk pembelian</li>
                      <li>Produk yang sudah dimakan tidak dapat dikembalikan</li>
                      <li>Kami tidak menerima pengembalian karena alasan "tidak suka rasa"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Hak Kekayaan Intelektual */}
            <Card className="p-8 border-pink-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Semua konten di website <strong>LAILATUR ROSYIDAH</strong> termasuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nama merek "LAILATUR ROSYIDAH" adalah hak cipta kami</li>
                  <li>Foto produk, resep, dan desain grafis dilindungi hak cipta</li>
                  <li>Dilarang menyalin, mendistribusikan, atau menggunakan konten tanpa izin</li>
                  <li>Pelanggaran hak cipta akan diproses secara hukum</li>
                </ul>
              </div>
            </Card>

            {/* Batasan Tanggung Jawab */}
            <Card className="p-8 border-orange-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>LAILATUR ROSYIDAH</strong> tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Alergi atau reaksi kesehatan akibat konsumsi produk kami</li>
                  <li>Kerusakan akibat kesalahan penyimpanan setelah penerimaan</li>
                  <li>Keterlambatan pengiriman akibat faktor eksternal</li>
                  <li>Kerugian tidak langsung yang timbul dari penggunaan produk kami</li>
                </ul>
                <p className="mt-4">
                  Konsumen disarankan untuk memeriksa daftar bahan jika memiliki alergi tertentu.
                </p>
              </div>
            </Card>

            {/* Perubahan Syarat */}
            <Card className="p-8 border-pink-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Diinformasikan melalui website atau media sosial kami</li>
                  <li>Berlaku efektif setelah pengumuman</li>
                  <li>Mengikat semua transaksi setelah perubahan</li>
                </ul>
              </div>
            </Card>

            {/* Kontak */}
            <Card className="p-8 bg-gradient-to-br from-pink-50 to-orange-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Untuk pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
                </p>
                <div className="bg-white p-6 rounded-lg space-y-3">
                  <p><strong>Nama Usaha:</strong> LAILATUR ROSYIDAH</p>
                  <p><strong>Telepon:</strong> 082382466248</p>
                  <p><strong>Alamat:</strong> TRIMO REJO, Desa/Kelurahan Trimo Rejo, Kec. Semendawai Suku III, Kab. Ogan Komering Ulu Timur, Provinsi Sumatera Selatan 32381</p>
                </div>
                <p className="text-sm text-gray-600">
                  Syarat dan Ketentuan ini berlaku efektif sejak Januari 2024.
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