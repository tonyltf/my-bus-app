'use client'

import { Session } from 'next-auth';
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
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Providers;
