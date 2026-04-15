'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export function ColorModeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('dark')}
        className="dark:hidden"
      >
        <MoonIcon width={24} height={24} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme('light')}
        className="hidden dark:flex"
      >
        <SunIcon width={24} height={24} />
      </Button>
    </>
  );
}
