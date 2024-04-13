"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  BanknotesIcon,
  CogIcon,
  KeyIcon,
  Bars3Icon,
  PhotoIcon,
  MagnifyingGlassCircleIcon,
  ViewColumnsIcon,
  XMarkIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import "../../globals.css";
import Link from "next/link";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const subNavigation = [
  {
    name: "Account Details",
    description:
      "Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.",
    href: "/shop/profile",
    icon: CogIcon,
    current: true,
  },
  {
    name: "Seller Account",
    description:
      "Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.",
    href: "/shop/profile/seller-account",
    icon: ArrowsRightLeftIcon,
    current: false,
  },
  {
    name: "Security",
    description:
      "Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis.",
    href: "#",
    icon: KeyIcon,
    current: false,
  },
  {
    name: "Appearance",
    description:
      "Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat.",
    href: "#",
    icon: PhotoIcon,
    current: false,
  },
  {
    name: "Billing",
    description:
      "Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris.",
    href: "#",
    icon: BanknotesIcon,
    current: CogIcon,
  },
  {
    name: "Integrations",
    description:
      "Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque.",
    href: "#",
    icon: ViewColumnsIcon,
    current: false,
  },
  {
    name: "Additional Resources",
    description:
      "Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileLayout({ children }) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const handleLogout = () => {
    axios
      .get("/api/logout")
      .then((res) => {
        toast.success(res.data.mssg);
        router.push("/signin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Some Error Occured");
      });
  };
  return (
    <>
      <Toaster />
      <div className="h-full flex">
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-blue-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-4">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="pt-5 pb-4">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=blue&shade=600"
                      alt="Workflow"
                    />
                  </div>
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="px-2 space-y-1">
                      {subNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group p-2 rounded-md flex items-center text-base font-medium text-blue-gray-600 hover:bg-blue-gray-50 hover:text-blue-gray-900"
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 text-blue-gray-400 group-hover:text-blue-gray-500"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-blue-gray-200 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-blue-gray-700 group-hover:text-blue-gray-900">
                          Lisa Marie
                        </p>
                        <p className="text-sm font-medium text-blue-gray-500 group-hover:text-blue-gray-700">
                          Account Settings
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          <div className="lg:hidden">
            <div className="bg-indigo-600 py-2 px-4 flex items-center justify-between sm:px-6">
              <div></div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <main className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col overflow-y-auto xl:overflow-hidden">
              <div className="flex-1 max-w-7xl mx-auto flex xl:overflow-hidden">
                {/* Secondary sidebar */}
                <nav
                  aria-label="Sections"
                  className="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 lg:flex lg:flex-col"
                >
                  <div className="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center justify-between">
                    <p className="text-lg font-medium text-blue-gray-900">
                      Settings
                    </p>
                    <button
                      onClick={(e) => handleLogout()}
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Logout
                    </button>
                  </div>
                  <div className="flex-1 min-h-0 overflow-y-auto">
                    {subNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`flex p-6 border-b border-blue-gray-200 ${
                          item.name === activeTab
                            ? "bg-blue-50 bg-opacity-50"
                            : "hover:bg-blue-50 hover:bg-opacity-50"
                        }`}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className="flex-shrink-0 -mt-0.5 h-6 w-6 text-blue-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-3 text-sm">
                          <p className="font-medium text-blue-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-blue-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Main content */}
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
