"use client"

import { Button } from "@/components/ui/button"
import { loadMoonPay } from "@moonpay/moonpay-js"
import { useEffect, useState } from "react"

export default function Home() {
  const [moonPaySdk, setMoonPaySdk] = useState<any>(null)
  const [currentPaymentIndex, setCurrentPaymentIndex] = useState(0)
  const paymentMethods = ["Apple Pay", "Paypal", "Credit Card", "Debit Card", "Bank Transfer", "Kidneys?"]

  useEffect(() => {
    const initMoonPay = async () => {
      const moonPay = await loadMoonPay()
      const sdk = moonPay({
        flow: "swap",
        environment: "sandbox",
        variant: "overlay",
        params: {
          apiKey: "pk_test_YOs64owYI4VHmO6yr7XexeIKpt319Lnt",
          theme: "dark",
          baseCurrencyCode: "usd",
          baseCurrencyAmount: "100",
          defaultCurrencyCode: "eth",
        },
      })
      setMoonPaySdk(sdk)
    }

    initMoonPay()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPaymentIndex((prev) => (prev + 1) % paymentMethods.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const handleGetStarted = () => {
    if (moonPaySdk) {
      moonPaySdk.show()
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header */}
      <header className="p-4">
        <a
          href="https://trollnetwork.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity"
        >
          <img src="/images/design-mode/IMG_0174.png" alt="Troll Face" className="w-8 h-8" />
          <span className="text-xl font-bold">$TROLL</span>
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-12 leading-tight">
          <span className="text-black">Buy </span>
          <span className="text-[#4ade80]">$TROLL</span>
          <span className="text-black"> With</span>
          <br />
          <span className="text-black inline-block min-w-[300px] transition-all duration-500 ease-in-out">
            {paymentMethods[currentPaymentIndex]}
          </span>
        </h1>

        <Button
          size="lg"
          className="bg-black text-white hover:bg-black/90 px-12 py-6 text-lg rounded-lg mb-6"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <span>Powered by</span>
          <img src="/moonpay-logo.png" alt="MoonPay" className="h-5" />
          <span>x</span>
          <img
            src="/images/design-mode/Moongate_logo_-_full_black-removebg-preview.png"
            alt="Moongate"
            className="h-4"
          />
        </div>

        <p className="text-xs text-gray-500 text-center max-w-md">
          This service not available to those currently in New York State, and{" "}
          <a
            href="https://support.moonpay.com/en/articles/380968-moonpay-s-unsupported-countries"
            className="underline"
          >
            these 50+ countries/regions
          </a>
          .
        </p>
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4">
        <div className="text-center">
          <p className="text-sm font-medium mb-1">The Troll Network, Limited</p>
          <p className="text-xs text-gray-500 break-all">CA: 5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2</p>
        </div>
      </footer>
    </div>
  )
}
