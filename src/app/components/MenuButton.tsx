import { MenuIcon } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

const MenuButton = ({ openMenu }: { openMenu: Dispatch<SetStateAction<boolean>>}) => {
  return <MenuIcon className='cursor-pointer' onClick={() => { openMenu(true); }}/>
};

export default MenuButton;
