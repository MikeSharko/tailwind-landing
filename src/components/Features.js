import React from 'react'

const Features = () => {
  return (
    <div>
        
    {/* FEATURES SECTION */}
    <section id="features">
      {/* FLEX CONTAINER */}
      <div
        className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
        {/* WHAT'S DIFFERENT */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          Empowering businesses to reach new heights
          </h2>
          <p className="max-w-sm text-center text-gray-500 md:text-left">
            BrainTech provides all the functionality your team needs, without the
            complexity.  We help businesses achieve their goals by providing the tools, resources, and support they need to succeed.
          </p>
        </div>

       {/* NUMBERED LIST */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* LIST ITEM 1 */}
          <div
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* HEADING */}
            <div className="rounded-l-full bg-orange-500 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-500"
                >
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                Innovative solutions for a competitive edge
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
              Innovative solutions for a competitive edge
              </h3>
              <p className="text-gray-500">
              We stay ahead of the curve by constantly researching and developing new and improved solutions that give our clients a competitive edge.
               Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          {/* LIST ITEM 2 */}
          <div
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* HEADING */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-500"
                >
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                Streamlining processes for improved efficiency
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
              Streamlining processes for improved efficiency
              </h3>
              <p className="text-gray-500">
              We help businesses become more efficient by identifying 
              and eliminating unnecessary steps in their processes, 
              so they can focus on what's important.
              </p>
            </div>
          </div>

          {/* LIST ITEM 3 */}
          <div
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* HEADING */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-500"
                >
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                Leading the way in industry advancement
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
              Leading the way in industry advancement
              </h3>
              <p className="text-gray-500">
              We are at the forefront of the industry, 
              constantly pushing the boundaries and advancing new technologies 
              to bring our clients the best possible solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Features