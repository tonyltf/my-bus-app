import { FC, ReactNode, useState } from "react"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from "@mui/material";
import { MoreHorizontalIcon } from "lucide-react"

interface MenuProps {
  items: {
    icon?: ReactNode,
    text: string,
    action?: any,
  }[];
}

const MoreMenu: FC<MenuProps> = ({ items = [] }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls={open ? 'more-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        className='cursor-pointer'
        onClick={handleClick}
      >
        <MoreHorizontalIcon className='dark:text-slate-50' />
      </IconButton>
      <Menu
        id='more-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {items.map(({ icon, text, action })=> (<MenuItem onClick={handleClose} key={text}>{text}</MenuItem>))}
      </Menu>
    </>
  )
}

export default MoreMenu;
