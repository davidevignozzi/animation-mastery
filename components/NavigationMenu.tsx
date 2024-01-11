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
import { projectsArray } from '@/lib/projectsArray';

interface MenuItemProps {
  name: string;
  link: string;
}
const MenuItem = (menuItemProps: MenuItemProps) => {
  const { name, link } = menuItemProps;
  return (
    <Link href={link}>
      <DropdownMenuItem className="capitalize">{name}</DropdownMenuItem>
    </Link>
  );
};

const NavigationMenu = () => {
  const pathname = usePathname();

  const getMenuTitle = () => {
    switch (pathname) {
      case '/':
        return 'home';

      default:
        return pathname.slice(10).split('-').join(' '); // remove '/projects/, replace - with ' '
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
        {projectsArray.map((prj, idx) => (
          <MenuItem key={idx} name={prj.name} link={prj.link} />
        ))}
        <Link href="/">
          <DropdownMenuItem>Home</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavigationMenu;
