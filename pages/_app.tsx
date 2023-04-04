import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Red_Hat_Display } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

import Layout from '@/src/components/Layout/AppLayout/AppLayout'

const red_Hat_Display = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <main className={red_Hat_Display.className}>
        <Component {...pageProps} />
      </main>
      <Toaster />
    </Layout>
  )
}

export default App;
