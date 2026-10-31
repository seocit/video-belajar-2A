import Footer from '#components/Footer'
import ItemCard from '#components/ItemCard'
import Button from '#components/shared/Button'
import VideoCollection from '#components/VideoCollection'
import { Input, Checkbox, Select } from '@mantine/core'
import { Search, ChevronUp, BookText, ShoppingBag, Clock3, ChevronDown } from 'lucide-react'
import React from 'react'

const ProductPage = () => {
  return (

    <>
      <div className="flex bg-bg gap-4 flex-col py-7 px-5 md:py-16 md:px-30">
        <h1 className='text-2xl font-semibold font-poppins'>Koleksi Video Pembelajaran Unggulan</h1>
        <p className='text-gray-800/80'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        <div className='flex gap-8 mt-8'>
          <aside className='flex flex-col bg-white border border-gray-400/50 rounded-lg gap-3 p-4 w-1/3 min-h-screen'>
            <div className='flex justify-between'>
              <label className='font-semibold text-md font-poppins text-gray-600'>Filter</label>
              <button className='text-red-500 font-poppins'>Reset</button>
            </div>

            <div className='flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary'>
              <div className='flex justify-between items-center'>
                <span className='flex items-center gap-3'>
                  <BookText size={20} />
                  <h4 className='font-semibold'>Bidang Studi</h4>
                </span>
                <span><ChevronUp size={15} /></span>
              </div>
              <Checkbox color='green' label="Pemasaran" />
              <Checkbox color='green' label="Digital & Teknologi" />
              <Checkbox color='green' label="Pengembangan Diri" />
              <Checkbox color='green' label="Bisnis Manajemen" />
            </div>
            <div className='flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary'>
              <div className='flex justify-between items-center'>
                <span className='flex items-center gap-3'>
                  <ShoppingBag size={20} />
                  <h4 className='font-semibold'>Harga</h4>
                </span>
                <span><ChevronUp size={15} /></span>
              </div>
              <Checkbox color='green' label="Pemasaran" />
              <Checkbox color='green' label="Digital & Teknologi" />
              <Checkbox color='green' label="Pengembangan Diri" />
              <Checkbox color='green' label="Bisnis Manajemen" />
            </div>
            <div className='flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary'>
              <div className='flex justify-between items-center'>
                <span className='flex items-center gap-3'>
                  <Clock3 size={20} />
                  <h4 className='font-semibold'>Durasi</h4>
                </span>
                <span><ChevronUp size={15} /></span>
              </div>
              <Checkbox color='green' label="Pemasaran" />
              <Checkbox color='green' label="Digital & Teknologi" />
              <Checkbox color='green' label="Pengembangan Diri" />
              <Checkbox color='green' label="Bisnis Manajemen" />
            </div>

          </aside>

          {/* product list */}
          <section className=' w-full min-h-screen'>
            <div className='flex gap-3 w-full justify-end'>
              <Button className='bg-primary py-1 px-4 rounded-xl text-white'>Tambah Item</Button>
              <Select size='sm'
                placeholder='Urutkan'
                rightSection={<ChevronDown size={15} />}
                data={['Harga Rendah', 'Harga Tiggi', 'A to Z', 'Z to A', 'Rating Tertinggi', 'Ratting Terendah']}
              />


              <Input type='text' placeholder='Cari Kelas' size='sm' rightSection={<Search size={15} />}></Input>
            </div>

            <div className='mt-4'>
              <ItemCard />
            </div>
          </section>
        </div>
      </div>
      <Footer />


    </>
  )
}

export default ProductPage