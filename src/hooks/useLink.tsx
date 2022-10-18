import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

export const useLink = () => {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      back: (number = -1) => {
        navigate(number);
      },
      to: (path: string) => {
        navigate(path);
      },
      replace: (path: string) => {
        navigate(path, { replace: true });
      },
    };
  }, [navigate]);
};
