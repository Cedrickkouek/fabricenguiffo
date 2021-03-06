import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/outline'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
}) {

    const dispatch = useDispatch();

    const removeItemFromBasket = () =>{
        dispatch(removeFromBasket({id}))
    };

    const addItemToBasket = () =>{
        const Product ={
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
        };


        dispatch(addToBasket(Product))
    };


    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />
            {/* Middle */}

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500"/>
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3" >{description}</p>
                <Currency quantity={price} currency="XAF" /> 
            </div>

            {/* Right remove button */}

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button onClick={addItemToBasket} className="button"> Ajouter au Panier</button>
            <button onClick={removeItemFromBasket} className="button"> Retirer du Panier</button>
            </div>
        </div>

        
    )
}

export default CheckoutProduct
