import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const TopNav = () => {
  // MODAL STATE
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  // Toggle modal Image
  const handleClick = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const { asPath } = useRouter();

  return (
    <div className="z-50">
      <nav className="w-full ">
        <div className="w-full">
          {/* logo */}
          <div className="w-full justify-between flex">
            <Link href="/">
              <a className="font-bold text-[#ffd1ab] text-2xl p-2 bg-primary">
                Hunks
              </a>
            </Link>
            {/* nav items */}
            <div className="p-2 hidden md:inline-block my-auto">
              <Link href="/collection">
                <a className="text-blue-500 mx-2 py-1">Traits in Collection</a>
              </Link>
              <Link href="/nft">
                <a className="text-blue-500 mx-2 py-1">On-chain NFT</a>
              </Link>
              <Link href="/print">
                <a className="text-blue-500 mx-2 py-1">Art Prints</a>
              </Link>

              <Link href="/mint">
                <a className="text-blue-500 mx-2 py-1">Mint</a>
              </Link>
            </div>
          </div>

          {/* mobile button */}
          <button
            className="md:hidden mobile-menu-button flex-items-center p-2 fixed top-0 right-0 z-20"
            onClick={() => handleClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 5V2H0v3h20zm0 6V8H0v3h20zm0 6v-3H0v3h20z"
                fill="rgb(0, 0 ,0)"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* M O D A L */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block bg-white text-left overflow-hidden shadow-xl transform transition-all s my-8 align-middle max-w-sm w-full">
                <div className="flex items-center px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex flex-col mx-auto  justify-center items-center">
                    <Link href="/">
                      <a
                        className="text-center bg-primary text-[#ffd1ab] font-bold text-2xl px-2 py-1 mb-2 cursor-pointer"
                        onClick={() => closeModal()}
                      >
                        Hunks
                      </a>
                    </Link>
                    <Link href="/collection">
                      <a
                        className="text-blue-500 mb-3"
                        onClick={() => closeModal()}
                      >
                        Traits in Collection
                      </a>
                    </Link>
                    <Link href="/nft">
                      <a
                        className="text-blue-500 mb-3"
                        onClick={() => closeModal()}
                      >
                        On-chain NFT
                      </a>
                    </Link>
                    <Link href="/print">
                      <a
                        className="text-blue-500 mb-3"
                        onClick={() => closeModal()}
                      >
                        Art Prints
                      </a>
                    </Link>

                    <Link href="/mint">
                      <a
                        className="text-blue-500 mb-3"
                        onClick={() => closeModal()}
                      >
                        Mint
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center  max-w-xs rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default TopNav;
