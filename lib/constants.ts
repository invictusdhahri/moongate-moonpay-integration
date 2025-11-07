export const PAYMENT_METHODS = [
  "Apple Pay",
  "Paypal",
  "Credit Card",
  "Debit Card",
  "Bank Transfer",
  "Kidneys?",
]

export const MOONGATE_API_KEY = "mg_pk_75a5c1e61d6e2188568425892f25d338"

export const MOONPAY_CONFIG = {
  apiKey: "pk_live_N9gHTkUXEwD55pq7IpIF4WCsJUVnHI7",
  theme: "light",
  baseCurrencyCode: "usd",
  baseCurrencyAmount: "100",
  networkCode: "solana",
  contractAddress: "5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2",
  redirectURL: typeof window !== "undefined" 
    ? `${window.location.origin}/payment-success` 
    : "",
} as const

export const COMPANY_INFO = {
  name: "The Troll Network, Limited",
  contractAddress: "5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2",
  website: "https://trollnetwork.io",
} as const

