import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";





function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  

  

  const [userToken, setUserToken] = useState("");

  useEffect(() => {
  
  }, []);

  const [menu, setMenu] = useState("hidden");
  const menuBar = () => {
    menu === "hidden" ? setMenu("block") : setMenu("hidden");
  };

  return (
    <Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 px-6 py-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-gray-600">Bogusboo</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={menuBar}
            className="flex items-center px-3 py-2 border rounded text-indigo-600 border-indigo-800 hover:text-black hover:border-black"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${menu} w-full flex-grow lg:flex lg:items-center lg:w-auto text-center`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium"
              href="/bbnews"
            >
              Stay
            </Link>
            <Link
              className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium"
              href="/bbfactory"
            >
              Tour
            </Link>
            <Link
              className="mr-5 block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-indigo-400 font-medium"
              href="/bbstudio"
            >
              Rental
            </Link>

           
          </div>
          <div className="flex flex-col md:flex-row">
            <div>
              {userToken ? (
                <div>
                  {" "}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="md:ml-2  items-center bg-white border border-gray-200 shadow py-1 md:py-2 px-3 focus:outline-none hover:bg-indigo-400 hover:text-white hover:font-bold rounded text-base mt-4 md:mt-0 uppercase">
                        Options
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="http://localhost:3001/dashboard"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Dashboard
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                                onClick={() => logout()}
                              >
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <div>
                  <Link href="/login">
                    <button className="w-24 items-center bg-white border border-gray-200 shadow py-1 md:py-2 px-3 focus:outline-none hover:bg-indigo-400 hover:text-white hover:font-bold rounded text-base mt-4 md:mt-0 uppercase">
                      Login
                    </button>
                  </Link>
                  <Link href="/registration">
                    <button className="md:ml-2  items-center bg-white border border-gray-200 shadow py-1 md:py-2 px-3 focus:outline-none hover:bg-indigo-400 hover:text-white hover:font-bold rounded text-base mt-4 md:mt-0 uppercase">
                      Registration
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
