import { DrawerOverlay, filter } from "@chakra-ui/react"
import { Image, BlitzPage } from "blitz"
import * as React from "react"
import { Head } from "blitz"

const Home: BlitzPage = () => {
  return (
    <div className="w-screen h-screen bg-[#000000] flex justify-center items-center lg:flex-row flex-col">
      <div className="h-full w-full justify-center md:items-center  p-[32px] flex flex-col">
        <h1 className="font-montserrat font-bold md:text-[80px] lg:text-[90px] xl:text-[120px] text-[40px] text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Coming Soon
        </h1>
        <h2 className="text-white  font-poppins md:text-[30px] lg:text-[40px] text-[20px] text-center lg:text-left">
          The one-page personal bio <br />{" "}
          <span className="moving_background_gradient">powered by web3.0 technology </span>
        </h2>
        <div className="flex mt-[10px]">
          <a className="mr-[10px]" href="https://dsc.gg/ethbio">
            <Image alt="" src="/discord.png" width={20} height={16} />
          </a>
          <a className="mr-[10px]" href="https://github.com/ethbio ">
            <Image alt="" src="/github.png" width={16} height={16} />
          </a>
          <a href="https://twitter.com/didNotSetUpTwitterYet">
            <Image alt="" src="/twitter.png" width={16} height={16} />
          </a>
        </div>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <svg
          className="blur m-[20px] animate-pulse duration-1000"
          width="576"
          height="540.8"
          viewBox="0 0 180 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M92.1586 6.09712C109.025 8.07234 126.507 8.51719 140.303 17.6634C154.133 26.8319 161.231 41.5421 167.581 56.0999C174.391 71.7109 184.129 88.4775 178.124 104.366C172.144 120.189 151.496 125.373 137.397 135.968C122.119 147.448 111.852 167.98 92.1586 168.962C72.4376 169.946 59.0226 151.56 43.213 140.665C27.6912 129.968 5.55991 123.282 0.77723 105.986C-3.98553 88.7616 14.4683 74.1068 20.1085 57.1085C25.9063 39.6352 18.473 16.3772 34.2063 5.23806C49.9042 -5.87601 72.5124 3.7963 92.1586 6.09712Z"
            fill="url(#paint0_linear_2_10)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_10"
              x1="90"
              y1="0"
              x2="90"
              y2="169"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2C4EFF" />
              <stop offset="1" stopColor="#B367FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
