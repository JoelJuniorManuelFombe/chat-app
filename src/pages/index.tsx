import { Geral } from '@/components/geral'
import Head from 'next/head'



export default function Home() {



  return (
    <>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Um chat normal para a interasao de dois usuarios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Geral/>
      </main>
    </>
  )
}
