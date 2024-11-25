import { t } from 'i18next';
import {
  toast,
  ToastOptions as ToastOptions_TP,
  ToastPosition,
} from 'react-toastify';

const toastOptions: ToastOptions_TP = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: 'light',
};

const STYLES = {
  success: 'text-mainGreen',
  error: 'bg-mainRed text-white',
  info: 'bg-blue-300 text-white',
  loading: 'bg-blue-300 text-white',
};

type ToastType = keyof typeof STYLES;

export const notify = (
  type: ToastType = 'success',
  msg?: string,
  position: ToastPosition = 'top-right',
  isLoading: boolean = false
) => {
  let message = msg || t('Successful operation');

  if (type === 'error' && !!!msg) {
    message = t('Something went wrong');
  }
  if (isLoading) {
    message = msg || t('Uploading now...');
  }
  const className = STYLES[isLoading ? 'loading' : type];

  toast[type](message, {
    ...toastOptions,
    autoClose: isLoading ? false : 2000,
    className,
    position,
  });
};
