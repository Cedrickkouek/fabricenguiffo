import React from 'react'
import Currency from 'react-currency-formatter';
import {useState} from'react';
import { StarIcon } from "@heroicons/react/outline";
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product( {id, title, category, description, price, image} ) {

    const dispatch = useDispatch();

    const [rating] = useState (
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING 
    );  

    const addItemToBasket = () =>{
        const Product = {
            id, title, category, description, price, image
        }

        dispatch(addToBasket(Product))
    }


    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
                <Image src={image} height={200} width={200} objectFit="contain"/>
            <h4 className="my-3">{title}</h4> 

            <div className="flex">
                {Array(rating).fill().map((_, i) => (  
                    <StarIcon className="h-5 text-yellow-500"/>
                ))}
            </div>
    
            <p className="my-2 text-xs line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price*565} currency="XAF"/>
            </div>

            <button onClick={addItemToBasket} className="mt-auto button">Ajouter au Panier</button>

        </div>




        /*<div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            
            <img src={image} height={200} width={200} objectFit="contain"/>
            
            <h4 className="my-3">{title}</h4>

              <div className="flex">
                {Array(rating).fill().map((_, i) => (  
                    <StarIcon className="h-5 text-yellow-500"/>
                ))}
            </div> 

            <p className="my-2 text-xs line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="XAF"/>
            </div>

            <button className="mt-auto button">Ajouter au Panier</button>
        </div> */
    )
}

export default Product
