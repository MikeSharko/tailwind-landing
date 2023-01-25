import React from 'react'

const Cta = () => {
  const url  = ''
    return (
    <div>
            {/* CTA Section  */}
    <section id="cta" className="bg-orange-500">
     {/* Flex Container */}
      <div
        className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
         {/* Heading */}
        <h2
          className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left"
        >
          Innovative solutions for a competitive edge
        </h2>
         {/* Button */}
        <div>
          <button   href={url} className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900 hover:text-white">
          Get Started 
          </button>
           
           
           
         
        </div>
      </div>
    </section>
    </div>
  )
}

export default Cta