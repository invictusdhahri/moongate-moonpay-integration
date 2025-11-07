"use client"

import { useEffect, useState } from "react"
import { PAYMENT_METHODS } from "@/lib/constants"

export function PaymentTitle() {
  const [currentPaymentIndex, setCurrentPaymentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPaymentIndex((prev) => (prev + 1) % PAYMENT_METHODS.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className="text-5xl md:text-7xl font-bold text-center mb-12 leading-tight">
      <span className="text-black">Buy </span>
      <span className="text-[#4ade80]">$TROLL</span>
      <span className="text-black"> With</span>
      <br />
      <span className="text-black inline-block min-w-[300px] transition-all duration-500 ease-in-out">
        {PAYMENT_METHODS[currentPaymentIndex]}
      </span>
    </h1>
  )
}
