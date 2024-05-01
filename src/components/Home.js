import React from 'react';
import image from "../img/d31f2afbf48af4cc6dc4f7069a332035.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt='background_img' className='absolute object-cover w-full h-full'/>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 className='text-6xl text-green-100 font-bold cursive loading-none lg:loading-snug home-name'>Hello , I'M Humera</h1>
            </section>
        </main>
    )
}