import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Effective Advisor - agencja marketingowa</title>
        <meta
          name="description"
          content="Effective Advisor - agencja marketingowa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <CustomComponents posts={posts}/>
  
      
      
    
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('https://gruca.j.pl/wp-json/wp/v2/posts')
  const posts = await res.json()


  return {
    props: {
      posts: posts.slice(0,3),
    },
  }
}