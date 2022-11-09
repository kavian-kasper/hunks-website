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
                <a className="text-blue-500 mx-2 py-1">Traits</a>
              </Link>
              <Link href="/nft">
                <a className="text-blue-500 mx-2 py-1">On-chain NFT</a>
              </Link>
              {/* <Link href="/print">
                <a className="text-blue-500 mx-2 py-1">Art Prints</a>
              </Link> */}

              <Link href="/mint">
                <a className="text-blue-500 mx-2 py-1">Mint</a>
              </Link>
              <Link href="https://twitter.com/HunksArt">
                <svg
                  className="primary inline ml-2 text-blue-500 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                  />
                </svg>
              </Link>
              <Link href="https://www.jpg.store/collection/684ffa75d83ccd4dfe179bd37fe679e74d33cce181a6f473337df098">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="28"
                  viewBox="0 0 32 40"
                  fill="none"
                  className="inline mx-4 my-1 cursor-pointer"
                >
                  <rect
                    x="2.67773"
                    y="13.4102"
                    width="27.3825"
                    height="18.5077"
                    fill="white"
                  />
                  <rect
                    x="2.67773"
                    y="1.69531"
                    width="14.8626"
                    height="28.773"
                    fill="white"
                  />
                  <rect
                    x="1"
                    y="30.4688"
                    width="30.6416"
                    height="7.95466"
                    rx="3.97733"
                    fill="#FFC900"
                  />
                  <path
                    d="M4.44139 1.29102H17.4743C18.0711 1.29102 18.6448 1.52154 19.0757 1.93446L29.8992 12.307C30.3547 12.7435 30.6123 13.3471 30.6123 13.978V36.1093C30.6123 37.3875 29.5761 38.4237 28.2979 38.4237H4.44139C3.16316 38.4237 2.12695 37.3875 2.12695 36.1093V3.60545C2.12695 2.32722 3.16316 1.29102 4.44139 1.29102Z"
                    stroke="black"
                    strokeWidth="2.31444"
                  />
                  <path
                    d="M23.281 7.68906L23.2878 7.69545L23.2947 7.70173L29.0675 12.9547L17.9461 12.9547L17.9461 2.67481L23.281 7.68906Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2.31328"
                  />
                </svg>
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
                        className="text-blue-500 mt-3 mb-6"
                        onClick={() => closeModal()}
                      >
                        Traits
                      </a>
                    </Link>
                    <Link href="/nft">
                      <a
                        className="text-blue-500 mb-6"
                        onClick={() => closeModal()}
                      >
                        On-chain NFT
                      </a>
                    </Link>
                    {/* <Link href="/print">
                      <a
                        className="text-blue-500 mb-6"
                        onClick={() => closeModal()}
                      >
                        Art Prints
                      </a>
                    </Link> */}

                    <Link href="/mint">
                      <a
                        className="text-blue-500 mb-6"
                        onClick={() => closeModal()}
                      >
                        Mint
                      </a>
                    </Link>
                    <Link href="https://twitter.com/HunksArt">
                      <svg
                        className="primary inline ml-2 mt-4 text-blue-500 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                        />
                      </svg>
                    </Link>
                    <Link href="https://www.jpg.store/collection/684ffa75d83ccd4dfe179bd37fe679e74d33cce181a6f473337df098">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="28"
                        viewBox="0 0 32 40"
                        fill="none"
                        className="inline mx-4 mt-8"
                        target="_blank"
                      >
                        <rect
                          x="2.67773"
                          y="13.4102"
                          width="27.3825"
                          height="18.5077"
                          fill="white"
                        />
                        <rect
                          x="2.67773"
                          y="1.69531"
                          width="14.8626"
                          height="28.773"
                          fill="white"
                        />
                        <rect
                          x="1"
                          y="30.4688"
                          width="30.6416"
                          height="7.95466"
                          rx="3.97733"
                          fill="#FFC900"
                        />
                        <path
                          d="M4.44139 1.29102H17.4743C18.0711 1.29102 18.6448 1.52154 19.0757 1.93446L29.8992 12.307C30.3547 12.7435 30.6123 13.3471 30.6123 13.978V36.1093C30.6123 37.3875 29.5761 38.4237 28.2979 38.4237H4.44139C3.16316 38.4237 2.12695 37.3875 2.12695 36.1093V3.60545C2.12695 2.32722 3.16316 1.29102 4.44139 1.29102Z"
                          stroke="black"
                          strokeWidth="2.31444"
                        />
                        <path
                          d="M23.281 7.68906L23.2878 7.69545L23.2947 7.70173L29.0675 12.9547L17.9461 12.9547L17.9461 2.67481L23.281 7.68906Z"
                          fill="black"
                          stroke="black"
                          strokeWidth="2.31328"
                        />
                      </svg>
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
