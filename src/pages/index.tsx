/* eslint-disable react/no-unescaped-entities */
import { LaunchProveModal, useAnonAadhaar } from "@anon-aadhaar/react";
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { AppContext } from "./_app";
import { useWeb3Modal } from "@web3modal/wagmi/react";

// This is a trick to enable having both modes in under the same page.
// This could be removed and only the <LaunchProveModal /> could be displayed.
const LaunchMode = ({
  isTest,
  setIsTestMode,
  address,
}: {
  isTest: boolean;
  setIsTestMode: (isTest: boolean) => void;
  address: string;
}) => {
  return (
    <span onClick={() => setIsTestMode(isTest)}>
      <LaunchProveModal
        nullifierSeed={Math.floor(Math.random() * 1983248)}
        signal={address}
        buttonStyle={{
          borderRadius: "8px",
          border: "solid",
          borderWidth: "1px",
          boxShadow: "none",
          fontWeight: 500,
          borderColor: "#000",
          color: "#000",
          fontFamily: "rajdhani",
        }}
        buttonTitle={isTest ? "USE TEST CREDENTIALS" : "USE REAL CREDENTIALS"}
        useTestAadhaar={isTest}
      />
    </span>
  );
};

export default function Home() {
  const [anonAadhaar] = useAnonAadhaar();
  const { setIsTestMode } = useContext(AppContext);
  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();
  const router = useRouter();

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      router.push("./vote");
    }
  }, [anonAadhaar, router]);

  return (
    <>
      <main className="flex min-h-[75vh] mx-auto justify-between items-center w-full p-8">
        <div className="min-w-[60%]">
          <div className="leading-[90px] font-rajdhani">
            <div className="text-[90px]">Hacker House</div>
            <div className="text-[120px] font-medium">Goa</div>
          </div>
          <div className="text-lg mt-4 mb-8 capitialize">
            A sample of our work that should get us through the screening...
          </div>

          <div className="flex w-full gap-8 mb-8">
            {isConnected ? (
              <div>
                <div className="flex gap-4 place-content-center">
                  <LaunchMode
                    isTest={false}
                    setIsTestMode={setIsTestMode}
                    address={address as string}
                  />
                  {/* <LaunchMode
                    isTest={true}
                    setIsTestMode={setIsTestMode}
                    address={address as string}
                  /> */}
                </div>
              </div>
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
        <div>
          <div>
            <img src="header_image.jpg" />
          </div>
        </div>
      </main>
    </>
  );
}
