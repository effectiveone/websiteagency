import Head from "next/head";
import Components from "../components/podstrony/seo/Importseo";

export default function Seo() {
  return (
    <div>
      <Head>
        <title>SEO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components />
    </div>
  );
}
