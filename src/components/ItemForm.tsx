import React, { useState, useEffect } from 'react';
import { Button, TextInput } from '@mantine/core';
import { Video } from '../api/data';

export interface ItemFormProps {
  onSubmit: (videoData: Video) => void;
  initialData?: Video | null;
  onCancel?: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onSubmit, initialData, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mentorName, setMentorName] = useState('');
  const [mentorJob, setMentorJob] = useState('');
  const [price, setPrice] = useState<number | string>('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setMentorName(initialData.mentor.name);
      setMentorJob(initialData.mentor.job);
      setPrice(initialData.price);
    } else {
      setTitle('');
      setDescription('');
      setMentorName('');
      setMentorJob('');
      setPrice('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !mentorName.trim()) {
      alert('Harap lengkapi judul, deskripsi, dan nama mentor!');
      return;
    }
    const videoData: Video = {
      title: title.trim(),
      description: description.trim(),
      mentor: {
        name: mentorName.trim(),
        job: mentorJob.trim() || 'Instruktur',
      },
      price: Number(price) || 0,
      rating: initialData?.rating ?? 5.0,
      viewer: initialData?.viewer ?? 0,
    };
    onSubmit(videoData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">

      <TextInput
        label="Judul Video"
        placeholder="Masukkan judul video"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <TextInput
        label="Deskripsi"
        placeholder="Masukkan deskripsi video"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <div className="flex flex-col gap-4 md:flex-row md:gap-3">
        <TextInput
          className="w-full"
          label="Nama Mentor"
          placeholder="Contoh: Jenna Ortega"
          value={mentorName}
          onChange={(e) => setMentorName(e.target.value)}
          required
        />
        <TextInput
          className="w-full"
          label="Profesi / Jabatan Mentor"
          placeholder="Contoh: Senior Accountant di Gojek"
          value={mentorJob}
          onChange={(e) => setMentorJob(e.target.value)}
        />
      </div>

      <TextInput
        label="Harga (dalam ribuan, misal 300 = Rp 300K)"
        placeholder="Masukkan harga kursus"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <div className="flex flex-col gap-2 mt-2 sm:flex-row sm:justify-end">
        {onCancel && (
          <Button
            variant="default"
            type="button"
            onClick={onCancel}
            className="w-full sm:w-auto"
          >
            Batal
          </Button>
        )}
        <Button
          type="submit"
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
        >
          {initialData ? 'Simpan Perubahan' : 'Tambah Video'}
        </Button>
      </div>

    </form>
  );
};

export default ItemForm;
