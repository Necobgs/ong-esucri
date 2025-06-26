'use client'

import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import User from '@/interfaces/user';
import UserFormProps from '@/interfaces/UserFormProps';

const UserForm: React.FC<UserFormProps> = ({
  onSave,
  onRemove,
  isEditing = false,
  initialData,
}) => {
  const [formData, setFormData] = useState<User>({
    id: '',
    username: '',
    email: '',
    created_at: '',
    activated: false,
  });

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        id: initialData.id,
        username: initialData.username,
        email: initialData.email,
        created_at: initialData.created_at,
        activated: initialData.activated,
      }));
    }
  }, [initialData]);

  const handleInputChange = (field: keyof User, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, email, activated } = formData;

    if (!username.trim() || !email.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!isEditing && !password.trim()) {
      alert('Por favor, insira uma senha para criar o usuário.');
      return;
    }

    if (isEditing && password && password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    const data = {
      username,
      email,
      activated,
      ...(password && { password }), // Inclui password apenas se estiver preenchido
    };

    // Log dos dados enviados
    console.log('Dados enviados:', data);

    setIsSubmitting(true);

    try {
      await onSave(data);
      alert(isEditing ? 'Usuário atualizado com sucesso!' : 'Usuário criado com sucesso!');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      alert('Erro ao salvar o usuário.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 800, margin: '0 auto', width: '90%' }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight="bold">
            {isEditing ? 'Editar usuário' : 'Criar novo usuário'}
          </Typography>
        }
      />
      <CardContent>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <TextField
            label="Nome de usuário"
            placeholder="Digite o nome de usuário"
            value={formData.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="E-mail"
            placeholder="Digite o e-mail do usuário"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            fullWidth
          />

          {isEditing ? (
            <>
              <TextField
                label="Nova senha"
                placeholder="Digite a nova senha (opcional)"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
              <TextField
                label="Confirmar nova senha"
                placeholder="Confirme a nova senha"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
              />
            </>
          ) : (
            <TextField
              label="Senha"
              placeholder="Digite a senha do usuário"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
          )}

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.activated}
                onChange={(e) => handleInputChange('activated', e.target.checked)}
              />
            }
            label="Ativado"
          />

          {isEditing && (
            <TextField
              label="Data de criação"
              value={formData.created_at}
              disabled
              fullWidth
            />
          )}

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
                ? 'Atualizar usuário'
                : 'Criar usuário'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserForm;