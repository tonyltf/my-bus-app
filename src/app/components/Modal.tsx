import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { Dispatch, SetStateAction, ReactNode } from 'react';

const ModalWrapper = ({ open, setOpen, children }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; children: ReactNode}) => {
  return (
    <Modal
      open={open}
      onClose={() => { setOpen(false); }}
      >
        <Fade in={open}>
          <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm'>
            <div className='flex justify-center items-center'>
              {children}
            </div>
          </Box>
        </Fade>
      </Modal>
  )
};

export default ModalWrapper;
