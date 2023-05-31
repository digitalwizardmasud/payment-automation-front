import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import handlePay from "@/utils/handlePay";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props);
  
  const pay = () => {
    handlePay({
      name:"Masud",
      email:"test@gmail.com",
      amount: 150
    })
  }

  // https://masud.foowork.com/success?transactionId=9344842&paymentAmount=10&paymentFee=0
  return (
    <>
      <Head>
        <title>GET AI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <button onClick={pay}>pay</button>
        </div>
      </main>
    </>
  );
}


