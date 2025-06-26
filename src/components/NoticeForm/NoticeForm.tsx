'use client'

import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
} from '@mui/material';
import NoticeFormData from '@/interfaces/NoticeFormData';
import NoticeFormProps from '@/interfaces/NoticeFormProps';

const NoticeForm: React.FC<NoticeFormProps> = ({
  onSave,
  onCancel,
  isEditing = false,
  initialData,
}) => {
  const [formData, setFormData] = useState<NoticeFormData>({
    title: '',
    description: '',
    notice_text: '',
    image: null, // pode ser File ou string (para edição)
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        title: initialData.title,
        description: initialData.description,
        notice_text: initialData.notice_text,
        image: initialData.image || null,
      }));

      if (initialData.image) {
        const fullImageUrl = `${process.env.NEXT_PUBLIC_API_URL}/uploads/${initialData.image}`;
        setImagePreview(fullImageUrl);
      }
    }
  }, [initialData]);

  const handleInputChange = (field: keyof NoticeFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === 'image' && value instanceof File) {
      setImagePreview(URL.createObjectURL(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { title, description, notice_text, image } = formData;

    if (!title.trim() || !description.trim() || !notice_text.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('notice_text', notice_text);

    // Apenas envia a imagem se for um novo arquivo selecionado
    if (image instanceof File) {
      data.append('file', image);
    }

    setIsSubmitting(true);

    try {
      await onSave(data);
      alert(isEditing ? 'Notícia atualizada com sucesso!' : 'Notícia criada com sucesso!');
    } catch (error) {
      alert('Erro ao salvar a notícia.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 800, margin: '0 auto', width: '90%' }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight="bold">
            {isEditing ? 'Editar notícia' : 'Criar nova notícia'}
          </Typography>
        }
      />
      <CardContent>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <TextField
            label="Título"
            placeholder="Digite o título da notícia"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Descrição"
            placeholder="Resumo breve sobre a notícia"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            required
            fullWidth
            multiline
            minRows={3}
          />

          <TextField
            label="Texto da notícia"
            placeholder="Conteúdo completo da notícia"
            value={formData.notice_text}
            onChange={(e) => handleInputChange('notice_text', e.target.value)}
            required
            fullWidth
            multiline
            minRows={6}
          />

          <div>
            <input
              accept="image/*"
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                handleInputChange('image', file);
              }}
              style={{ display: 'none' }}
              id="upload-image"
            />

            <label htmlFor="upload-image">
              <Button variant="outlined" component="span">
                Selecionar imagem
              </Button>
            </label>

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  width: '100%',
                  maxHeight: '200px',
                  objectFit: 'cover',
                  borderRadius: 8,
                  border: '1px solid #ccc',
                  marginTop: 10,
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
            >
              {isSubmitting
                ? 'Salvando...'
                : isEditing
                ? 'Atualizar notícia'
                : 'Criar notícia'}
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={onCancel}
              fullWidth
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default NoticeForm;
