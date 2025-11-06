"use client"

import { MOONPAY_CONFIG } from "./constants"

interface UseMoonPayOptions {
  walletAddress?: string | null
}

/**
 * Builds MoonPay redirect URL with query parameters
 * Note: For production, you should sign the URL server-side for security
 * See: https://dev.moonpay.com/docs/on-ramp-overview#url-signing
 */
export function useMoonPay({ walletAddress }: UseMoonPayOptions = {}) {
  const buildMoonPayUrl = (): string => {
    const baseUrl = "https://buy.moonpay.com"
    const params = new URLSearchParams()

    // Add API key (encoded)
    params.append("ey", MOONPAY_CONFIG.apiKey)
    
    // Add contract address (token address)
    if (MOONPAY_CONFIG.contractAddress) {
      params.append("contractAddress", MOONPAY_CONFIG.contractAddress)
    }
    
    // Add network code
    params.append("networkCode", MOONPAY_CONFIG.networkCode)
    
    // Add base currency amount
    params.append("baseCurrencyAmount", MOONPAY_CONFIG.baseCurrencyAmount)
    
    // Add base currency code
    params.append("baseCurrencyCode", MOONPAY_CONFIG.baseCurrencyCode)
    
    // Add wallet address if available
    if (walletAddress) {
      params.append("walletAddress", walletAddress)
    }
    
    // Add email (optional, can be pre-filled if you have user email)
    // params.append("email", userEmail)
    
    // Add theme
    params.append("theme", MOONPAY_CONFIG.theme)
    
    // Add redirect URL
    if (MOONPAY_CONFIG.redirectURL) {
      params.append("redirectURL", MOONPAY_CONFIG.redirectURL)
    }

    // Note: In production, you should add a signature parameter
    // The signature should be generated server-side using your secret key
    // params.append("signature", signature)

    return `${baseUrl}?${params.toString()}`
  }

  const redirectToMoonPay = () => {
    const url = buildMoonPayUrl()
    // Redirect to MoonPay checkout page
    window.location.href = url
  }

  return { redirectToMoonPay }
}

