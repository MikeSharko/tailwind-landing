import React from 'react'
import lisa from '../img/57.jpg'
import mark from '../img/61.jpg'
import tina from '../img/74.jpg'

const Testimonials = () => {
  const url = ''
  
    return (
      <div>
        {/* TESTIMONIALS */}
        <section id="testimonials">
          {/* Container to heading and testm blocks  */}
          <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center">
              How we transform yor businesses?
            </h2>
            {/* Testimonials Container  */}
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6 ">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
                <img src={lisa} className="w-24 -mt-14 rounded-full" alt="" />
                <h5 className="text-lg font-bold">Lisa Yon</h5>
                <p className="text-sm text-gray-500">
                  "BrainTech were able to take our business to the next level.
                  They helped us identify new opportunities for growth and
                  provided us with the tools and resources to capitalize on
                  them. Their guidance and support has been invaluable in our
                  continued success."
                </p>
              </div>

              {/* Testimonial 2  */}
              <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3">
                <img src={mark} className="w-24 -mt-14 rounded-full" alt="" />
                <h5 className="text-lg font-bold">Mark Strong</h5>
                <p className="text-sm text-gray-500">
                  "Working with BrainTech and his team was a game changer for
                  our business. They helped us streamline our processes and
                  implement new technology, which has greatly improved our
                  efficiency and bottom line. Their expertise and dedication to
                  our success was invaluable."
                </p>
              </div>

              {/* Testimonial 3  */}
              <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:flex md:w-1/3">
                <img src={tina} className="w-24 -mt-14 rounded-full" alt="" />
                <h5 className="text-lg font-bold">Tina Dove</h5>
                <p className="text-sm text-gray-500">
                  "We were stuck in a rut and not seeing the growth we wanted in
                  our business. That's when we decided to bring in BrainTech and
                  their team. They were able to identify areas for improvement
                  and provide innovative solutions that gave us a competitive
                  edge. We've seen a significant increase in revenue since
                  working with them."
                </p>
              </div>
            </div>
            {/* Button */}
            <div className="my-14">
              <button className="p-3 px-6 pt-2 text-white bg-orange-500 rounded-full baseline hover:bg-orange-600">
                Get Started{" "}
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Testimonials