import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-dark text-dark-pri overflow-hidden scrollbar-thin scrollbar-thumb-dark-sec scrollbar-track-dark-gray'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
