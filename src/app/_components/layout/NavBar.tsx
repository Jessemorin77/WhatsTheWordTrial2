import React from "react";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function NavBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full bg-black">
          <div className="flex lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          {/* add title here*/}
          <div className="mx-2 flex-1 px-2"></div>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-5 py-1 text-sm font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a href="/">Find Events</a>
              </li>
              <li>
                <a href="/MyEvents">My Events</a>
              </li>
              <li>
                <a href="/Profile">Profile</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="children-wrapper bg-black min-h-screen">
          {children}

        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4">
          {/* Sidebar content here */}
          <li>
            <a className="text-lg" href="/">
              Find Events
            </a>
          </li>
          <li>
            <a className="text-lg" href="/MyEvents">
              My Events
            </a>
          </li>
          <li>
            <a className="text-lg" href="/Profile">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

