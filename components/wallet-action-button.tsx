"use client"

import { useEffect } from "react"
import { MoongateConnectButton, useWallet } from "@moongate/sdk"
import { useMoonPay } from "@/lib/moonpay"

export function WalletActionButton() {
  const { publicKey, connected } = useWallet()
  
  // Explicitly check for wallet connection - must be connected AND have a valid publicKey
  // If either is false/null/undefined, treat as disconnected
  const isConnected = Boolean(connected) && Boolean(publicKey)
  const hasWallet = isConnected
  const currentStep = hasWallet ? 2 : 1
  
  // Convert PublicKey object to Base58 string address (only when connected)
  const walletAddress = hasWallet && publicKey ? publicKey.toBase58?.() : null
  
  // Initialize MoonPay with wallet address when available
  // When disconnected, walletAddress will be null and SDK will reinitialize
  const { showMoonPay } = useMoonPay({ 
    walletAddress 
  })

  // Monitor connection state changes
  useEffect(() => {
    // This ensures the component re-renders when connection state changes
    // The hasWallet check will automatically switch between connect and buy views
    if (!connected || !publicKey) {
      // Wallet disconnected - component will automatically show MoongateConnectButton
      // due to the hasWallet check in the render
    }
  }, [connected, publicKey])

  return (
    <div className="w-full max-w-md">
      {/* Step Indicators */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className={`flex items-center gap-2 ${currentStep >= 1 ? "text-black" : "text-gray-400"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 1 ? "bg-black text-white" : "bg-gray-200 text-gray-400"
            }`}
          >
            1
          </div>
          <span className="text-sm font-medium">Step 1: Connect</span>
        </div>
        <div className={`h-0.5 w-8 ${currentStep >= 2 ? "bg-black" : "bg-gray-200"}`} />
        <div className={`flex items-center gap-2 ${currentStep >= 2 ? "text-black" : "text-gray-400"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 2 ? "bg-black text-white" : "bg-gray-200 text-gray-400"
            }`}
          >
            2
          </div>
          <span className="text-sm font-medium">Step 2: Buy</span>
        </div>
      </div>

      {/* Step Content */}
      {hasWallet ? (
        <div className="text-center">
          <div className="moongate-wallet-sdk">
            <button
              onClick={showMoonPay}
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-8 py-2 bg-black text-white hover:bg-black/90"
            >
              Buy Troll
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <MoongateConnectButton />
        </div>
      )}
    </div>
  )
}

