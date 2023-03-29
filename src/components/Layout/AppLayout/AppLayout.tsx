import React from 'react'
import MainHeader from '../Header/MainHeader'
import MainFooter from '../Footer/MainFooter'

interface LayoutProps {
    children: React.ReactNode;
    title: String
}

const AppLayout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <MainHeader />
            <main className='min-h-[500px]'>
                {children}
            </main>
            <MainFooter />
        </>
    )
}

export default AppLayout;