import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  // weight: ['400', '500', '600', '700'],
  // style: ['normal'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
