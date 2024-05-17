import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust the path to where your RootState is defined

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
}
