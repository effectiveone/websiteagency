import Head from "next/head";
import Components from "../components/podstrony/sklepy/Importsklepy";

export default function Sklepy() {
  return (
    <div>
      <Head>
        <title>Sklepy internetowe z Effective Advisor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components />
    </div>
  );
}
