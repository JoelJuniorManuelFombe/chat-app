import Head from 'next/head'
import { Login } from "../components/login";
import Cookies from "universal-cookies";
const cookies = new Cookies();



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
        <Login/>
      </main>
    </>
  )
}
