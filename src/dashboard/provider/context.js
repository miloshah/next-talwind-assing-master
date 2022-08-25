import React from 'react';
import { useRouter } from 'next/router';

const Context = React.createContext({});

export const DashboardProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const router = useRouter();

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  React.useEffect(() => {
    if (open && window.innerWidth < 1024) {
      router.events.on('routeChangeStart', () => setOpen(false));
    }

    return () => {
      if (open && window.innerWidth < 1024) {
        router.events.off('routeChangeStart', () => setOpen(false));
      }
    };
  }, [open, router]);

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!ref.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, ref]);

  return (
    <Context.Provider value={{ open, ref, toggle }}>
      {children}
    </Context.Provider>
  );
};

export function useToggle() {
  return React.useContext(Context);
}

export default DashboardProvider;
