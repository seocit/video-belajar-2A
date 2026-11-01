import Footer from '#components/Footer';
import ItemCard from '#components/ItemCard';
import Button from '#components/shared/Button';
import { Input, Checkbox, Select, Modal, Drawer } from '@mantine/core';
import { Search, ChevronUp, BookText, ShoppingBag, Clock3, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { useDisclosure } from '@mantine/hooks';
import ItemForm from '#components/ItemForm';
import React, { useState } from 'react';
import { videos as initialVideos, Video } from '../api/data';

const FilterContent: React.FC = () => (
  <div className="flex flex-col gap-3">
    <div className="flex justify-between items-center">
      <label className="font-semibold text-sm font-poppins text-gray-600">Filter</label>
      <button className="text-red-500 text-sm font-poppins">Reset</button>
    </div>

    <div className="flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <BookText size={18} />
          <h4 className="font-semibold text-sm">Bidang Studi</h4>
        </span>
        <ChevronUp size={14} />
      </div>
      <Checkbox color="green" label="Pemasaran" size="sm" />
      <Checkbox color="green" label="Digital & Teknologi" size="sm" />
      <Checkbox color="green" label="Pengembangan Diri" size="sm" />
      <Checkbox color="green" label="Bisnis Manajemen" size="sm" />
    </div>

    <div className="flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <ShoppingBag size={18} />
          <h4 className="font-semibold text-sm">Harga</h4>
        </span>
        <ChevronUp size={14} />
      </div>
      <Checkbox color="green" label="Gratis" size="sm" />
      <Checkbox color="green" label="Berbayar" size="sm" />
    </div>

    <div className="flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <Clock3 size={18} />
          <h4 className="font-semibold text-sm">Durasi</h4>
        </span>
        <ChevronUp size={14} />
      </div>
      <Checkbox color="green" label="< 2 Jam" size="sm" />
      <Checkbox color="green" label="2 - 5 Jam" size="sm" />
      <Checkbox color="green" label="> 5 Jam" size="sm" />
    </div>
  </div>
);

const ProductPage: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [filterOpened, { open: openFilter, close: closeFilter }] = useDisclosure(false);

  const [videoList, setVideoList] = useState<Video[]>(initialVideos);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddVideo = (newVideo: Video) => {
    setVideoList((prev) => [newVideo, ...prev]);
    close();
  };

  const handleUpdateVideo = (updatedVideo: Video) => {
    if (editingIndex === null) return;
    setVideoList((prev) =>
      prev.map((item, index) => (index === editingIndex ? updatedVideo : item))
    );
    setEditingIndex(null);
    close();
  };

  const handleDeleteVideo = (targetIndex: number) => {
    const ok = window.confirm('Apakah Anda yakin ingin menghapus video ini?');
    if (ok) setVideoList((prev) => prev.filter((_, i) => i !== targetIndex));
  };

  const handleOpenCreate = () => { setEditingIndex(null); open(); };
  const handleOpenEdit = (index: number) => { setEditingIndex(index); open(); };
  const handleCloseModal = () => { setEditingIndex(null); close(); };

  return (
    <>
      <div className="min-h-screen bg-bg px-4 py-6 sm:px-6 md:px-10 lg:px-30 md:py-12">

        <h1 className="text-xl font-semibold font-poppins sm:text-2xl">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="mt-1 text-sm text-gray-500 sm:text-base">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>

        <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:gap-8 lg:items-start">

          <aside className="hidden lg:flex lg:flex-col lg:w-64 xl:w-72 flex-shrink-0 bg-white border border-gray-400/50 rounded-lg p-4">
            <FilterContent />
          </aside>

          <section className="flex-1 min-w-0">

            <div className="flex flex-wrap items-center gap-2 mb-4">

              <button
                type="button"
                onClick={openFilter}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-gray-300 rounded-lg lg:hidden hover:bg-gray-50"
              >
                <SlidersHorizontal size={15} />
                Filter
              </button>

              <Button
                onClick={handleOpenCreate}
                className="px-4 py-1.5 text-sm bg-primary text-white rounded-xl hover:bg-primary/90"
              >
                + Tambah Item
              </Button>

              <div className="flex items-center gap-2 ml-auto">
                <Select
                  size="sm"
                  placeholder="Urutkan"
                  rightSection={<ChevronDown size={14} />}
                  className="w-36 sm:w-44"
                  data={['Harga Rendah', 'Harga Tinggi', 'A to Z', 'Z to A', 'Rating Tertinggi', 'Rating Terendah']}
                />
                <Input
                  type="text"
                  placeholder="Cari kelas..."
                  size="sm"
                  className="w-36 sm:w-52"
                  rightSection={<Search size={14} />}
                />
              </div>
            </div>

            <ItemCard
              videoList={videoList}
              onEdit={handleOpenEdit}
              onDelete={handleDeleteVideo}
            />

          </section>
        </div>
      </div>

      <Drawer
        opened={filterOpened}
        onClose={closeFilter}
        title="Filter"
        position="left"
        size="xs"
      >
        <FilterContent />
      </Drawer>

      <Modal
        opened={opened}
        onClose={handleCloseModal}
        title={editingIndex !== null ? 'Edit Video' : 'Tambah Video'}
        fullScreen={typeof window !== 'undefined' && window.innerWidth < 640}
        size="md"
      >
        <ItemForm
          initialData={editingIndex !== null ? videoList[editingIndex] : null}
          onSubmit={editingIndex !== null ? handleUpdateVideo : handleAddVideo}
          onCancel={handleCloseModal}
        />
      </Modal>

      <Footer />
    </>
  );
};

export default ProductPage;
