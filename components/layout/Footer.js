import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full mb-0">
      <div className="mx-auto pt-12 px-4 sm:px-6 md:flex md:items-end md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-3">
          <Link href="https://twitter.com/KavanMeta">
            <a className="text-blue-600">Twitter</a>
          </Link>
          <Link href="https://twitter.com/KavanMeta">
            <a className="text-blue-600">Instagram</a>
          </Link>
          <Link href="https://twitter.com/KavanMeta">
            <a className="text-blue-600">Cardanoscan</a>
          </Link>
        </div>
        {/* <Link href="/">
          <a className="font-bold text-2xl p-2 md:order-2">Hunks</a>
        </Link> */}
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-900">
            © 2021 -name- All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
