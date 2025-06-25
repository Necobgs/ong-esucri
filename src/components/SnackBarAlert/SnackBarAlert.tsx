'use client'

import { Alert, Fade } from "@mui/material";

interface SnackBarAlertProps {
  message: string | null;
  severity: 'success' | 'error' | 'warning' | 'info';
  visible: boolean;
  position?: string; // Classe CSS opcional para customizar a posição
}

export default function SnackBarAlert({
  message,
  severity,
  visible,
  position = "right-10 bottom-10 absolute z-10",
}: SnackBarAlertProps) {
  if (!message) return null;

  return (
    <Fade in={visible} timeout={{ enter: 500, exit: 500 }}>
      <div className={position}>
        <Alert severity={severity} className="mt-4">
          {message}
        </Alert>
      </div>
    </Fade>
  );
}
