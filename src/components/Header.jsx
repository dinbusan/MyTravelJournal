import React from "react";

const Header = () => {
  return (
    <nav className="bg-red-500 w-full flex relative justify-between md:justify-center items-center mx-auto px-8 h-20">
      <div>
        <div>
          <a className="inline-flex items-center text-2xl hover:text-cyan-500 transition-colors cursor-pointer text-white">
            <div>
              <i className="fa-solid fa-earth-americas"></i>
            </div>
            <h3 className="ml-1 ">My Travel Journal</h3>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
