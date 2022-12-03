import Head from "next/head";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ProductFeed from "../components/ProductFeed/ProductFeed";

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Amazon Clone By Abhishek Nayak</title>
      </Head>

      {/* HEADER COMPONENT */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* BANNER COMPONENT */}
        <Banner />

        {/* PRODUCTS FEED COMPONENT*/}
        <ProductFeed products={props.products} />
      </main>

      {/* FOOTER COMPONENT */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
