import Image from "next/image"

export default function Landing() {
  return (
    <div className="bg-black h-full w-full pl-[20%] pr-[20%] pt-[52px]">
      <div>
        <Image src="/ethbioRainbow.png" alt="" height={70} width={70} />
        <div className="float-right mt-[25px] flex justify-center items-center">
          <h1 className="font-inter text-[#ffffffcc]">Pricing (coming soon)</h1>
          <h1 className="font-inter text-[#ffffffcc] ml-[40px]">Log In</h1>
          <a href="/api/auth/discord" ><button className="bg-white rounded-[8px] py-[12px] ml-[28px] px-[18px]">
            <h1 className="text-black font-inter">Build your Bio On ETH</h1>
          </button>
          </a>
        </div>
      </div>

      <div className="mt-[120px] w-full flex flex-col items-center ">
        <h1 className="text-white text-[64px] leading-[65px] font-bold font-inria text-center">
          Goodbye, clunky links. <br /> Hello, one-click connections.
        </h1>

        <h1 className="text-[#ffffffcc] font-inter text-[23px] leading-[32px] mt-[33px]">
          web3, simple and seamless as possible.
        </h1>

        <div className="mt-[120px] grid grid-cols-2 w-[60%]">
          <div className="flex justify-center items-center">
            {" "}
            <button className="bg-white rounded-[8px] py-[12px] ml-[28px] px-[18px]">
              <h1 className="text-black font-inter">Get started for free</h1>
            </button>
          </div>
          <div className="flexjustify-center items-center">
            {" "}
            <button className="bg-[#343434] flex justify-center items-center rounded-[8px] py-[12px] ml-[28px] px-[18px]">
              <Image src="/github2.png" alt="" width={25} height={20} />
              <h1 className="text-white font-inter ml-[19px]">View on Github</h1>
            </button>
          </div>
        </div>

        <div className="mt-[114px] ">
          <Image src="/mockup.png" alt="" width={371.63} height={750} />
        </div>

        <div className="mt-[135px]">
          <h1 className="font-inter text-white text-[34px] leading-[42.5px] text-center ">
            Proudly hosting +6942 Bios
          </h1>
          <h1 className="text-center font-inter text-[#ffffffcc] text-[22px] leading-[36px] mt-[11px]">
            EthBio is the host of choice for web3 enthusiasts, independent <br /> creators, and
            others because of it's freedoms from being open-source.
          </h1>
        </div>

        <div className="mt-[140px]">
          <h1 className="font-inter text-white text-[34px] leading-[42.5px] text-center ">
            Features you will love
          </h1>
          <h1 className="text-center font-inter text-[#ffffffcc] text-[22px] leading-[36px] mt-[11px]">
            Built by the community, for the community.
          </h1>
        </div>

        <div className="mt-[33px] w-full px-[22.5%]">
          <div className="w-full bg-[#141414] rounded-[12px] border-[1px] border-solid border-[#ffffff40] pt-[32px] pl-[33px] pb-[32px]">
            <h1 className="font-inter text-white text-[18px] ">Fast and Reliable </h1>
            <h1 className="font-inter mt-[9px] text-[#ffffff80] text-[15px]">
              Your pages will load consistently in under .3s no matter how many visitors.
            </h1>
          </div>
          <div className="w-full bg-[#141414] rounded-[12px] border-[1px] border-solid border-[#ffffff40] pt-[32px] pl-[33px] pb-[32px] mt-[16px]">
            <h1 className="font-inter text-white text-[18px] ">SEO Optimized from Day One </h1>
            <h1 className="font-inter mt-[9px] text-[#ffffff80] text-[15px]">
              Get found in search engines on the first page of Google with optimized SEO.
            </h1>
          </div>
          <div className="w-full bg-[#141414] rounded-[12px] border-[1px] border-solid border-[#ffffff40] pt-[32px] pl-[33px] pb-[32px] mt-[16px]">
            <h1 className="font-inter text-white text-[18px] ">Easy to use and make changes </h1>
            <h1 className="font-inter mt-[9px] text-[#ffffff80] text-[15px]">
              Getting started is easy and takes just 2-3 minutes. Once you're <br />
              published make changes at any given time from your phone or desktop.
            </h1>
          </div>
          <div className="w-full bg-[#141414] rounded-[12px] border-[1px] border-solid border-[#ffffff40] pt-[32px] pl-[33px] pb-[32px] mt-[16px]">
            <h1 className="font-inter text-white text-[18px] ">100% Customizable </h1>
            <h1 className="font-inter mt-[9px] text-[#ffffff80] text-[15px]">
              Change the background color, update your link type, or download and <br /> modify the
              source code. However you choose to use it, you can.
            </h1>
          </div>
          <div className="w-full bg-[#141414] rounded-[12px] border-[1px] border-solid border-[#ffffff40] pt-[32px] pl-[33px] pb-[32px] mt-[16px]">
            <h1 className="font-inter text-white text-[18px] ">Easy Custom Domains </h1>
            <h1 className="font-inter mt-[9px] text-[#ffffff80] text-[15px]">
              Setting up your custom domain is straightforward and takes seconds.
            </h1>
          </div>
        </div>

        <div className="mt-[140px] flex justify-center items-center flex-col ">
          <h1 className="font-inter text-white text-[34px] leading-[42.5px] text-center ">
            What are you waiting for?
          </h1>
          <h1 className="text-center font-inter text-[#ffffffcc] text-[22px] leading-[36px] mt-[11px]">
            Sign up and publish your EthBio™ in seconds, no selling kidneys for gas fees required.
          </h1>
          <button className="bg-white rounded-[8px] py-[12px] mt-[28px] px-[38px]">
            <h1 className="text-black font-inter">Build your Bio in minutes</h1>
          </button>

          <h1 className="font-space text-[14px] text-[#ffffffa6] mt-[33px]">
            Need support? Email <span className="text-[#00F6FF] ml-[10px]"> help@ethbio.xyz</span>
          </h1>

          <h1 className="font-space text-[14px] text-[#9B9BFF] mt-[16px]">
            Or, join us on Discord 👾
          </h1>
        </div>

        <div className="mt-[140px] mb-[56px] w-full flex items-center pl-[10%]">
          <h1 className="font-space text-[#ffffffcc] text-[11px] leading-[14px]">© EthBio 2022</h1>
          <h1 className="font-space text-[#ffffffcc] text-[12px] leading-[16px] ml-[10%]">•</h1>
          <h1 className="font-space text-[#ffffffcc] text-[14px] leading-[19px] ml-[16px]">
            Find us on Twitter
          </h1>
          <div className="w-[50%] ">
            <h1 className="font-space text-[#ffffffcc] text-[14px] leading-[19px] float-right ">
              Work done in localhost:3000
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
