import toast from 'react-hot-toast';

const icons = {
  success: '✔️',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
};

const colors = {
  success: '#52c41a',
  error: '#ff4d4f',
  warning: '#faad14',
  info: '#1890ff',
};

export const toastHandler = (message, type) => {
  toast(message, {
    icon: icons[type],
    style: {
      backgroundColor: colors[type],
      color: '#fff',
    },
  });
};
