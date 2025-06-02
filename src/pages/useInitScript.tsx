import { useEffect } from 'react';

export const useInitScript = () => {
  useEffect(() => {
    const event = new Event('react-ready');
    window.dispatchEvent(event);
  }, []);
};

export default useInitScript;
