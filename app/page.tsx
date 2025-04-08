"use client";

import { Providers } from "./providers";
import dynamic from "next/dynamic";
import { CreateCoin } from "./components/CreateCoin";
import { GetCoins } from "./components/GetCoins";
import { Header } from "./components/Header";

const WalletConnect = dynamic(
    () => import("./components/WalletConnect").then((mod) => mod.WalletConnect),
    {
        ssr: false,
    }
);

export default function Home() {
    return (
        <Providers>
            <div className="min-h-screen bg-background">
                <Header />
                <main className="container mx-auto px-4 py-8">
                    <div className="space-y-12">
                        <CreateCoin />
                        <GetCoins count={5} initialType="topVolume" />
                    </div>
                </main>
            </div>
        </Providers>
    );
}
