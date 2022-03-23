import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth'>
      <Head />
      <body className='bg-dark text-dark-pri scroll-smooth scrollbar-thin scrollbar-thumb-dark-sec scrollbar-track-dark-gray'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
