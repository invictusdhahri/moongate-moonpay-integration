"use client"

import { loadMoonPay } from "@moonpay/moonpay-js"
import { useEffect, useState } from "react"
import { MOONPAY_CONFIG } from "./constants"

interface UseMoonPayOptions {
  walletAddress?: string | null
}

export function useMoonPay({ walletAddress }: UseMoonPayOptions = {}) {
  const [moonPaySdk, setMoonPaySdk] = useState<any>(null)

  useEffect(() => {
    const initMoonPay = async () => {
      const moonPay = await loadMoonPay()
      if (moonPay) {
        const params: any = {
          apiKey: MOONPAY_CONFIG.apiKey,
          theme: MOONPAY_CONFIG.theme,
          baseCurrencyCode: MOONPAY_CONFIG.baseCurrencyCode,
          baseCurrencyAmount: MOONPAY_CONFIG.baseCurrencyAmount,
          contractAddress: MOONPAY_CONFIG.contractAddress,
          network: MOONPAY_CONFIG.network,
          
        }

        // Add walletAddress if available
        if (walletAddress) {
          params.walletAddress = walletAddress
        }

        const sdk = moonPay({
          flow: MOONPAY_CONFIG.flow,
          environment: MOONPAY_CONFIG.environment,
          variant: MOONPAY_CONFIG.variant,
          params,
        })
        setMoonPaySdk(sdk)
      }
    }

    initMoonPay()
  }, [walletAddress])

  const showMoonPay = () => {
    if (moonPaySdk) {
      moonPaySdk.show()
    } else {
      // Fallback: redirect to MoonPay if SDK not loaded
      window.open("https://www.moonpay.com/buy", "_blank")
    }
  }

  return { moonPaySdk, showMoonPay }
}

