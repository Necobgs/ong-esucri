'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import Cookies from 'js-cookie';
import { api } from '@/services/api';



export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);


    api.post('/auth/login',{ email, password })
        .then((response)=>{
            console.log('response!!!')
            console.log(response)
                if (!(response.status == 200)) {
                throw new Error('Credenciais inválidas');
            }
            const data = response.data;
            Cookies.set('token', data.access_token, { secure: true, sameSite: 'strict' });
            router.push('/admin');

        }).catch((error)=>{
            setError(error instanceof Error ? error.message : 'Erro ao fazer login');
        }).finally(()=>{
            setIsLoading(false);
    })
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: '100%',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(4px)',
          border: 'none',
        }}
      >
        <CardHeader
          title="Bem vindo!"
          subheader="Faça o login para continuar"
          sx={{
            textAlign: 'center',
            pb: 4,
            '& .MuiCardHeader-title': { fontSize: '1.875rem', fontWeight: 'bold', color: '#1e293b' },
            '& .MuiCardHeader-subheader': { color: '#475569' },
          }}
        />
        <CardContent sx={{ px: 4, py: 2 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: '#334155', fontWeight: 'medium' }}>
                Email
              </Typography>
              <TextField
                id="email"
                type="email"
                placeholder="Insira o seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: '#94a3b8', fontSize: 16 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 48,
                    '& fieldset': { borderColor: '#e2e8f0' },
                    '&:hover fieldset': { borderColor: '#94a3b8' },
                    '&.Mui-focused fieldset': { borderColor: '#475569' },
                  },
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: '#334155', fontWeight: 'medium' }}>
                Senha
              </Typography>
              <TextField
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Insira a sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: '#94a3b8', fontSize: 16 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: '#94a3b8', '&:hover': { color: '#475569' } }}
                      >
                        {showPassword ? <VisibilityOff sx={{ fontSize: 16 }} /> : <Visibility sx={{ fontSize: 16 }} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 48,
                    '& fieldset': { borderColor: '#e2e8f0' },
                    '&:hover fieldset': { borderColor: '#94a3b8' },
                    '&.Mui-focused fieldset': { borderColor: '#475569' },
                  },
                }}
              />
            </Box>

            {error && (
              <Typography color="error" variant="body2" sx={{ textAlign: 'center' }}>
                {error}
              </Typography>
            )}


            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              sx={{
                height: 48,
                bgcolor: '#1e293b',
                color: '#fff',
                fontWeight: '600',
                textTransform: 'none',
                '&:hover': { bgcolor: '#0f172a', transform: 'scale(1.02)' },
                '&:active': { transform: 'scale(0.98)' },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              {isLoading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={16} sx={{ color: 'rgba(255, 255, 255, 0.3)' }} />
                  <span>Signing In...</span>
                </Box>
              ) : (
                'Entrar'
              )}
            </Button>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}