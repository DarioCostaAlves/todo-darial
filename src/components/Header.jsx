import React from "react";

const Header = () => {
  return (
    <header className="text-center m-10">
      <h1 className="font-bold text-4xl">Todo</h1>
      <p className="font-italic text-gray-500 text-lg">
        Os items irão persistir no alojamento local do browser.
      </p>
    </header>
  );
};

export default Header;
