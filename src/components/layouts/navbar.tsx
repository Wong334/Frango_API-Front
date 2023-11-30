import React from "react";

export default function Navbar(props: any) {
  return (
    <>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 text-gray-800 bg-stone-100 shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a href="/" className="text-lg no-underline hover:text-amber-300 ml-2">
            Home
          </a>
          <a href="/produtos" className="text-lg no-underline hover:text-amber-300 ml-2">
            Produtos
          </a>
        </div>
        <div className="self-end">
          Sistema de eventos
        </div>
      </nav>
    </>
  );
}
