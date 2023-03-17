'use client'

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';


interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Providers;
