import Head from "next/Head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home( { products } ) {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Riding-up</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner/>

        <ProductFeed products={products} />
          
      </main>
    {/*   <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
          <Product title="Finance Finance" price="15000" description="Nous gerons vos finances" category="RDG Electronics" image="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"/>
          <Product image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" title="Air force one" price="30000" description="Les meilleurs baskets chez nous" category="RDG Outfit" />
          <Product image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" title="Import-Export Service" price="5000" description="Nous importons/exportons vos colis en toute securiter" category="RDG Outfit" />
          <Product image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" title="Import-Export Service" price="5000" description="Nous importons/exportons vos colis en toute securiter" category="RDG Outfit" /> 
        </div>    */}
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) =>res.json()
  )

return {
  props: {
    products,
  },
};
}
