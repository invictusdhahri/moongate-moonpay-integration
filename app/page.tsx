"use client"

import { MoonGateProvider } from "@moongate/sdk"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PaymentTitle } from "@/components/payment-title"
import { WalletActionButton } from "@/components/wallet-action-button"
import { PoweredBy } from "@/components/powered-by"
import { Disclaimer } from "@/components/disclaimer"
import { MOONGATE_API_KEY } from "@/lib/constants"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
        <PaymentTitle />

        <MoonGateProvider apiKey={MOONGATE_API_KEY}>
          <WalletActionButton />
        </MoonGateProvider>

        <PoweredBy />
        <Disclaimer />
      </main>

      <Footer />
    </div>
  )
}
