'use client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ProviderToast() {
  return <ToastContainer autoClose={4000} position='bottom-left' />;
}
