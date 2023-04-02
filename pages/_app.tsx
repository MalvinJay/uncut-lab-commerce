import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Figtree } from 'next/font/google'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={figtree.className}>
      <Component {...pageProps} />
    </main>
  )
}
