import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Figtree } from 'next/font/google'

import Layout from '@/src/components/Layout/AppLayout/AppLayout';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={figtree.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
