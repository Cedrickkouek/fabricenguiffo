import React from "react"
import Header from "../components/Header"
import Image from "next/image"
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct"
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/client"


function checkout() {

    const total = useSelector(selectTotal)
    const [session] = useSession();
    const items = useSelector(selectItems)
    return (
        <div className="bg-gray-100">
            <Header/>
            {/* Left */}
            <main className="lg:flex max-w-screen-2xl mx-auto">
             <div className="flex-row m-5 shadow-sm">
              <Image 
               src="https://links.papareact.com/ikj"
               width={1020}
               height={250}
               objectFit="contain"
              />
               <div className="flex flex-col p-5 space-y-10 bg-white">
                 <h1 className="text-3xl border-b pb-4"> { items.length === 0 ? "Le panier est vide." : "Votre Panier d'achat" } </h1>

                 {items.map((item, i) => (
                     <CheckoutProduct 
                       key={i}
                       id={item.id}
                       title={item.title}
                       rating={item.rating}
                       price={item.price * 565}
                       description={item.description}
                       category={item.category}
                       image={item.image}
                     />  
                 ))}
               </div>

             </div>

             {/* Right */}
             <div className="flex flex-col bg-white p-10 shadow-md">
               {items.length > 0 && (
                 <>
                   <h2 className="whitespace-nowrap">Total ({items.length} produits)
                   <span className="font-bold">
                   <Currency quantity={total*565} currency="XAF" /> 
                   </span>
                   </h2>

                   <button disabled={!session} className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                     { !session ? "Se connecter à RidingUP pour continuer" : "Proceder au payment"}
                   </button>
                 </>
               )}
             </div>
            </main>


        </div>
    )
}

export default checkout
