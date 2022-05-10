import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full mb-0">
      <div className="mx-auto pt-12 px-4 sm:px-6 md:flex md:items-end md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-3">
          <Link href="https://twitter.com/HunksArt">
            <a target="_blank" className="text-blue-600">
              Twitter
            </a>
          </Link>
          <Link href="/">
            <a className="text-blue-600">Instagram</a>
          </Link>
          {/* <Link href="/">
            <a className="text-blue-600">Cardanoscan</a>
          </Link> */}
        </div>

        <div className="mt-8 md:mt-0 md:order-1 mb-3.5 md:mb-0">
          <p className="text-center text-base text-gray-900">
            © 2022 Hunks.art All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
