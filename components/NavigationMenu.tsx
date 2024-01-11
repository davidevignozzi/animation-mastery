'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';

const NavigationMenu = () => {
  const pathname = usePathname();

  const getMenuTitle = () => {
    switch (pathname) {
      case '/':
        return 'home';

      default:
        return pathname.slice(10); // remove '/projects/'
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default" className="capitalize">
          {getMenuTitle()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <Link href={'/projects/trial'}>
          <DropdownMenuItem>Trial</DropdownMenuItem>
        </Link>
        <Link href="/">
          <DropdownMenuItem>Home</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavigationMenu;
