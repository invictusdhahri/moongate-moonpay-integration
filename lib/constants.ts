export const PAYMENT_METHODS = [
  "Apple Pay",
  "Paypal",
  "Credit Card",
  "Debit Card",
  "Bank Transfer",
  "Kidneys?",
]

export const MOONGATE_API_KEY = process.env.NEXT_PUBLIC_MOONGATE_API_KEY || ""

export const MOONPAY_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_MOONPAY_API_KEY || "",
  theme: process.env.NEXT_PUBLIC_MOONPAY_THEME || "light",
  baseCurrencyCode: "usd",
  baseCurrencyAmount: "100",
  networkCode: "solana",
  contractAddress: process.env.NEXT_PUBLIC_MOONPAY_CONTRACT_ADDRESS || "",
  redirectURL: typeof window !== "undefined" 
    ? `${window.location.origin}/payment-success` 
    : "",
} as const

export const COMPANY_INFO = {
  name: "The Troll Network, Limited",
  contractAddress: "5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2",
  website: "https://trollnetwork.io",
} as const
