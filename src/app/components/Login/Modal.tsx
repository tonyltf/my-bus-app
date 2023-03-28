
const LoginModal = ({ openLoginModal, setOpenLoginModal }: { openLoginModaL: boolean; setOpenLoginModal: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <Modal
      open={openLoginModal}
      onClose={() => { setOpenLoginModal(false); }}
      >
        <Fade in={openLoginModal}>
          <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm'>
            <div className='flex justify-center items-center'>
              <Login />
            </div>
          </Box>
        </Fade>
      </Modal>
  )
}

export const LoginModal;
