import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>NextJs UI kit | Free UI kit built with bootstrap</title>
        <meta
          name="description"
          content="NextJs UI kit | Free UI kit built with bootstrap"
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