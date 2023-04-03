import React from 'react'
import MainHeader from '../Header/MainHeader'
import MainFooter from '../Footer/MainFooter'

import { Providers } from "@/src/redux/provider"

interface LayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Providers>
            <MainHeader />
            <main className='min-h-[500px] bg-white'>
                {children}
            </main>
            <MainFooter />
        </Providers>
    )
}

export default AppLayout;