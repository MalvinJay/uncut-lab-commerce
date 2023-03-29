import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Figtree } from 'next/font/google'

const roboto = Figtree({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={roboto.className}><Component {...pageProps} /></main>
}
