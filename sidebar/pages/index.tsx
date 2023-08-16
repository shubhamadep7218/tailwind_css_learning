import { useState } from "react";
import { Icon } from "@iconify/react";
export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div className="flex">
        <div
          className={`${
            openSidebar ? "w-60" : ""
          } border-r-2 h-screen relative py-8 px-4`}
        >
          <Icon
            icon={`mingcute:${openSidebar ? "left" : "right"}-line`}
            className="h-6 w-6 absolute top-10 -right-3 border-2 border-black rounded-full bg-sky-100"
            onClick={() => setOpenSidebar(!openSidebar)}
          />

          {/* Logo */}
          <div
            className={`flex items-center gap-2  ${
              openSidebar ? "justify-start" : "justify-center"
            } `}
          >
            <Icon
              icon="ph:meta-logo-duotone"
              className="h-10 w-10 text-sky-600"
            />
            <h2
              className={`${
                openSidebar ? "" : "hidden"
              } text-3xl font-semibold`}
            >
              Meta
            </h2>
          </div>

          {/* Menu */}
          <div className="mt-8 space-y-2">
            <div
              className={`flex ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <div className="flex items-center gap-2 p-2  w-full  rounded-lg hover:bg-sky-100">
                <Icon icon="bxs:dashboard" className="h-6 w-6 text-sky-600" />
                <h2
                  className={`${
                    openSidebar ? "" : "hidden"
                  } text-base font-semibold`}
                >
                  Dashboard
                </h2>
              </div>
            </div>

            <div
              className={`flex ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <div className="flex items-center gap-2 p-2  w-full rounded-lg hover:bg-sky-100">
                <Icon icon="heroicons:users-solid" className="h-6 w-6 text-sky-600" />
                <h2
                  className={`${
                    openSidebar ? "" : "hidden"
                  } text-base font-semibold`}
                >
                  Users
                </h2>
              </div>
            </div>

            <div
              className={`flex ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <div className="flex items-center gap-2 p-2  w-full rounded-lg hover:bg-sky-100">
                <Icon icon="mdi:cart" className="h-6 w-6 text-sky-600" />
                <h2
                  className={`${
                    openSidebar ? "" : "hidden"
                  } text-base font-semibold`}
                >
                  Orders
                </h2>
              </div>
            </div>

            <div
              className={`flex ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <div className="flex items-center gap-2 p-2  w-full rounded-lg hover:bg-sky-100">
                <Icon icon="gridicons:chat" className="h-6 w-6 text-sky-600" />
                <h2
                  className={`${
                    openSidebar ? "" : "hidden"
                  } text-base font-semibold`}
                >
                  Chat
                </h2>
              </div>
            </div>

            <div
              className={`flex ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <div className="flex items-center gap-2 p-2  w-full rounded-lg hover:bg-sky-100">
                <Icon icon="fa6-solid:file-invoice-dollar" className="h-6 w-6 text-sky-600" />
                <h2
                  className={`${
                    openSidebar ? "" : "hidden"
                  } text-base font-semibold`}
                >
                  Invoice
                </h2>
              </div>
            </div>

            <div
              className={`flex ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <div className="flex items-center gap-2 p-2  w-full rounded-lg hover:bg-sky-100">
                <Icon icon="carbon:analytics" className="h-6 w-6 text-sky-600" />
                <h2
                  className={`${
                    openSidebar ? "" : "hidden"
                  } text-base font-semibold`}
                >
                  Analytics
                </h2>
              </div>
            </div>

            <div
              className={`flex ${
                openSidebar ? "justify-start" : "justify-center"
              } `}
            >
              <div className="flex items-center gap-2 p-2  w-full rounded-lg hover:bg-sky-100">
                <Icon icon="ph:bank-bold" className="h-6 w-6 text-sky-600" />
                <h2
                  className={`${
                    openSidebar ? "" : "hidden"
                  } text-base font-semibold`}
                >
                  Bank
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen">
          <h1 className="text-4xl p-8 font-bold">Home</h1>
        </div>
      </div>
    </>
  );
}
