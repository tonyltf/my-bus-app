'use client'

import { SessionProvider, Session } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

interface ProvidersProps {
  session: Session;
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ session, children }) => {
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <SessionProvider session={session}>{children}</SessionProvider>
    </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Providers;
