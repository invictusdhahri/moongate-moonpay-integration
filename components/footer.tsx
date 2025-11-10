"use client"

import { useState, useEffect } from "react"
import { COMPANY_INFO } from "@/lib/constants"
import { toast } from "sonner"
import { Check } from "lucide-react"

export function Footer() {
  const [copyCount, setCopyCount] = useState(0)

  // Reset copy count after 3 seconds of inactivity
  useEffect(() => {
    if (copyCount > 0) {
      const timeout = setTimeout(() => {
        setCopyCount(0)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [copyCount])

  const getCopyMessage = (count: number) => {
    const messages = [
      "Copied",
      "Double Copied",
      "Giga Copied",
      "Ultra Copied",
      "Mega Copied",
      "Super Copied",
      "Hyper Copied",
      "Omega Copied",
      "Alpha Copied",
      "Legendary Copied",
    ]
    return messages[Math.min(count - 1, messages.length - 1)] || "Copied"
  }

  const getCopyColor = (count: number) => {
    const colors = [
      "#22c55e", // green
      "#3b82f6", // blue
      "#8b5cf6", // purple
      "#ec4899", // pink
      "#f59e0b", // amber
      "#ef4444", // red
      "#06b6d4", // cyan
      "#84cc16", // lime
      "#f97316", // orange
      "#6366f1", // indigo
    ]
    return colors[Math.min(count - 1, colors.length - 1)] || colors[0]
  }

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY_INFO.contractAddress)
      const newCount = copyCount + 1
      setCopyCount(newCount)
      
      const message = getCopyMessage(newCount)
      const bgColor = getCopyColor(newCount)
      
      toast.success(message, {
        icon: <Check className="h-4 w-4" />,
        duration: 2000,
        className: "copy-toast-bounce",
        style: {
          background: bgColor,
          color: "white",
          fontWeight: "600",
          animation: "bounce-in 0.3s ease-out",
        },
      })
    } catch (err) {
      toast.error("Failed to copy")
    }
  }

  return (
    <footer className="pb-8 px-4">
      <div className="text-center">
        <p className="text-sm font-medium mb-1">{COMPANY_INFO.name}</p>
        <p 
          className="text-xs text-gray-500 break-all cursor-pointer hover:text-gray-700 transition-colors select-all"
          onClick={handleCopyAddress}
          title="Click to copy contract address"
        >
          CA: {COMPANY_INFO.contractAddress}
        </p>
      </div>
    </footer>
  )
}
