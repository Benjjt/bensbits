import React from "react";
import Link from "next/link";
import Image from "next/image";
import bensbits from "../../../public/images/bensbits.jpg";
import bensbitsword from "../../../public/images/bensbitsword.jpg";
import cartLogo from "../../../public/images/cartLogo.jpg";

const Navbar = () => {
  return (
    <div className="w-screen h-[5rem] rounded-b-xl bg-[#ffffff]  flex justify-center items-center fixed z-50">
      <div className="w-full max-w-[2000px] m-auto flex justify-between items-center px-12 ">
        <Image
          alt="bens bits logo"
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
          src={cartLogo}
        />
        <Image
          alt="bens bits logo"
          width={100}
          height={25}
          style={{ objectFit: "contain" }}
          src={bensbitsword}
        />
        <Link className="hover:text-highlight" href="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
