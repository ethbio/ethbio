import { Image, BlitzPage } from "blitz"

const Dashboard: BlitzPage = () => {
  return (
    <>
      <div className="bg-black h-screen">
        <div className="px-8 pt-5">
          <div className="grid grid-cols-2">
            <div className="justify-self-start">
              <Image alt="" src="/ethbio.svg" width={40} height={32} />
            </div>


            <div className="justify-self-end">
              <div className="grid grid-cols-3 gap-x-4">
                <Image alt="" src="/notification.svg" width={40} height={32} />
                <div>
                  <Image alt="" src="/pfp.png" width={40} height={40} layout="fixed" />
                </div>
                <h2 className="font-lexend text-white ">Hello, Akshit</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
