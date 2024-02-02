"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/images/logo.svg"
          alt="Mawazo Wall"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="logo_text"></p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-thought" className="black_btn">
              New Thought
            </Link>
            <button
              type="button"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                signOut()
              }
              className="outline_btn"
            >
              Sign out
            </button>
            <Link href="/profile">
              <Image
                src="/images/logo.svg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              ></Image>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
