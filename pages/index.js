import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Luminax Dashboard</title>
        <meta name="description" content="Luminax Crypto Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">Welcome to Luminax</h1>
      <a href="/faucet">Go to faucet page</a>
    </div>
  )
}
