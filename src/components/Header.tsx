/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useMemo } from "react";
import Image from "next/image";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { icons } from "../styles/illustrations";
import { shortenAddress } from "@/utils";

export const Header: FunctionComponent = () => {
  const { isConnected, address } = useAccount();
  const blob = new Blob([icons.aalogo], { type: "image/svg+xml" });
  const aaLogo = useMemo(() => URL.createObjectURL(blob), [icons.aalogo]);
  const { open } = useWeb3Modal();

  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-row items-center mx-5">
        <div className="">
          <span className="text-6xl font-extralight">D</span>
          <span className="text-3xl font-light">ev</span>
          <span className="text-6xl font-extralight">S</span>
          <span className="text-3xl font-light">quare</span>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center justify-end">
        <div className="flex m-5 items-center space-x-2">
          {isConnected ? (
            <button
              className="rounded-lg text-[#000] px-6 py-1 border-2 border-[#000] font-rajdhani font-medium"
              onClick={() => open()}
            >
              {address && shortenAddress(address)}
            </button>
          ) : (
            <button
              className="bg-[#000] rounded-lg text-white px-6 py-1 font-rajdhani font-medium"
              onClick={() => open()}
            >
              CONNECT WALLET
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
