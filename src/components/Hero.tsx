import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const Hero = () => {
  return ( 
    <>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-center items-center h-screen">
          <div className="max-w-3xl">
            <div className="flex justify-center mb-1">
              <p className="bg-amber-300 rounded-2xl px-4 text-center">Taiwind CSS V4 Components UI</p>
            </div>
            <div className="mb-4">
              <h2 className="text-5xl lg:text-7xl text-center font-semibold mb-1">
                Craft Beautiful UI Without the Hassle!
              </h2>
              <p className="text-center">
                ZaicodeUI offers a collection of ready-to-use Tailwind CSS components, making it easier and faster to build stunning, responsive websites
              </p>
            </div>
            <div className="flex justify-center gap-3 items-center">
              <Link 
                to={''}
                className="bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-400"
              >
                Get Started
              </Link>
              <div>
                <form action="">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <TbDeviceIpadHorizontalSearch 
                        size={24} 
                        color="gray"
                      />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search Component"
                      className="border border-gray-200 pl-11 px-4 py-2 rounded-xl focus:outline-none" 
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
 
export default Hero;