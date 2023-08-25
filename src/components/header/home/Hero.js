import React from 'react'


const Hero = () => {
  return (
    <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="./img/alienHero.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Alien Shop</h1>
      <p className="py-8 text-2xl">!Este es una tienda online de ropa para aliens fashionistas!!!</p>
      <button className="btn bg-amber-400 text-black">Ir a Carrito</button>
    </div>
  </div>
</div>
  )
}

export default Hero
