import React from 'react'
import MainHeader from '../Header/MainHeader'
import MainFooter from '../Footer/MainFooter'

interface LayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <MainHeader />
                <main className='min-h-[500px] bg-white'>
                    {children}
                </main>
            <MainFooter />
        </>
    )
}

export default AppLayout;