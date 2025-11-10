# Moongate + MoonPay Integration

A Next.js application that integrates Moongate SDK with MoonPay for seamless cryptocurrency purchases. Users can buy tokens using various payment methods including Apple Pay, PayPal, Credit/Debit Cards, and Bank Transfers.

## Overview

This application provides a user-friendly interface for purchasing cryptocurrency tokens through MoonPay's on-ramp service, powered by Moongate's wallet connection SDK. The app supports Solana network and can be customized for any token contract address.

**Live Examples:**
- [troll.fund](https://troll.fund) - See Moongate integration in action
- [buy.son.meme](https://buy.son.meme) - Example token purchase flow

## Features

- 🔗 **Wallet Connection** - Seamless wallet connection via Moongate SDK
- 💳 **Multiple Payment Methods** - Apple Pay, PayPal, Credit/Debit Cards, Bank Transfer
- 🌙 **MoonPay Integration** - Direct integration with MoonPay's on-ramp service
- 🎨 **Customizable** - Easy configuration through environment variables
- ⚡ **Next.js 16** - Built with the latest Next.js features
- 🎯 **TypeScript** - Fully typed for better developer experience

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 18+ installed
- **pnpm** (or npm/yarn) package manager
- **Moongate Account** - Sign up at [partner.moongate.one](https://partner.moongate.one)
- **MoonPay Account** - Sign up at [dashboard.moonpay.com](https://dashboard.moonpay.com)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd moongate-moonpay-integration
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment variables** (see Configuration section below)

5. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration Guide

### Step 1: Get Your Moongate API Key

1. **Sign in to Moongate Partner Dashboard**
   - Visit [https://partner.moongate.one](https://partner.moongate.one)
   - Sign in or create a new account

2. **Create a New Project**
   - Navigate to your dashboard
   - Click "Create New Project" or select an existing project
   - Configure your project settings

3. **Get Your API Key**
   - Go to your project settings
   - Navigate to the "API Keys" section
   - Copy your **Public API Key** (starts with `mg_pk_`)

4. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_MOONGATE_API_KEY=mg_pk_your_api_key_here
   ```

**Moongate Dashboard Links:**
- [Partner Dashboard](https://partner.moongate.one) - Main dashboard
- [Documentation](https://docs.moongate.one) - Moongate SDK documentation


### Step 1.5: Configure Moongate Adapter Settings

After obtaining your API key, configure your adapter settings in the Moongate Partner Dashboard to customize the wallet connection experience:

1. **Navigate to Adapter Settings**
   - Go to [https://partner.moongate.one](https://partner.moongate.one)
   - Select your project
   - Navigate to **Settings** → **Adapter Configuration**

2. **Configure Theme Colors**
   - Set your primary brand color
   - Customize button colors and styles
   - Configure modal background and text colors
   - Preview changes in real-time

3. **Select Supported Wallets**
   - Choose which wallets to display (Phantom, Solflare, Backpack, etc.)
   - Enable/disable specific wallet adapters
   - Set wallet display order

4. **Configure Network Settings**
   - Select supported networks (Solana, Ethereum, etc.)
   - Set default network
   - Configure network switching options

5. **Customize Modal Appearance**
   - Set modal size and positioning
   - Configure animations and transitions
   - Customize close button and overlay styles

6. **Set Callback URLs** (Optional)
   - Configure redirect URLs after wallet connection
   - Set up webhook endpoints for connection events



**Example Websites Using Moongate:**
- [troll.fund](https://troll.fund) - Example integration with custom branding
- [buy.son.meme](https://buy.son.meme) - Example token purchase flow

### Step 2: Get Your MoonPay API Key

1. **Sign in to MoonPay Dashboard**
   - Visit [https://dashboard.moonpay.com](https://dashboard.moonpay.com)
   - Sign in or create a new account

2. **Complete Verification**
   - Complete KYC/verification process if required
   - Set up your business profile

3. **Get Your API Keys**
   - Navigate to **Settings** → **API Keys**
   - Copy your **Public API Key** (starts with `pk_test_` for test mode or `pk_live_` for production)
   - Save your **Secret Key** securely (you'll need it for URL signing in production)

4. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_MOONPAY_API_KEY=pk_test_your_api_key_here
   ```

**MoonPay Dashboard Links:**
- [MoonPay Dashboard](https://dashboard.moonpay.com) - Main dashboard
- [API Documentation](https://dev.moonpay.com) - MoonPay API documentation
- [On-Ramp Overview](https://dev.moonpay.com/docs/on-ramp-overview) - On-ramp integration guide
- [URL Signing Guide](https://dev.moonpay.com/docs/on-ramp-overview#url-signing) - Production URL signing

### Step 3: Configure Token Contract Address

1. **Get Your Token Contract Address**
   - If you're deploying a new token, deploy it on Solana
   - Copy the contract/token mint address

2. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_MOONPAY_CONTRACT_ADDRESS=your_token_contract_address_here
   ```

### Step 4: Configure MoonPay Theme (Optional)

MoonPay supports light and dark themes. Set your preference:

```env
NEXT_PUBLIC_MOONPAY_THEME=light
# or
NEXT_PUBLIC_MOONPAY_THEME=dark
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Moongate API Key (Required)
# Get it from: https://partner.moongate.one
NEXT_PUBLIC_MOONGATE_API_KEY=mg_pk_your_api_key_here

# MoonPay Configuration (Required)
# Get it from: https://dashboard.moonpay.com
NEXT_PUBLIC_MOONPAY_API_KEY=pk_test_your_api_key_here
NEXT_PUBLIC_MOONPAY_THEME=light
NEXT_PUBLIC_MOONPAY_CONTRACT_ADDRESS=your_token_contract_address_here
```

### Environment Variables Reference

| Variable | Description | Required | Where to Get It |
|----------|-------------|----------|-----------------|
| `NEXT_PUBLIC_MOONGATE_API_KEY` | Your Moongate public API key | ✅ Yes | [Moongate Partner Dashboard](https://partner.moongate.one) |
| `NEXT_PUBLIC_MOONPAY_API_KEY` | Your MoonPay public API key | ✅ Yes | [MoonPay Dashboard](https://dashboard.moonpay.com) |
| `NEXT_PUBLIC_MOONPAY_THEME` | MoonPay widget theme (`light` or `dark`) | ❌ No | Default: `light` |
| `NEXT_PUBLIC_MOONPAY_CONTRACT_ADDRESS` | Your token contract/mint address | ✅ Yes | Your token deployment |

## Customization

### Update Company Information

Edit `lib/constants.ts` to customize your company information:

```typescript
export const COMPANY_INFO = {
  name: "Your Company Name",
  contractAddress: "your_contract_address",
  website: "https://yourwebsite.com",
} as const
```

### Update Payment Methods

Modify the payment methods list in `lib/constants.ts`:

```typescript
export const PAYMENT_METHODS = [
  "Apple Pay",
  "Paypal",
  "Credit Card",
  "Debit Card",
  "Bank Transfer",
]
```

### Update MoonPay Configuration

Additional MoonPay settings can be modified in `lib/constants.ts`:

```typescript
export const MOONPAY_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_MOONPAY_API_KEY || "",
  theme: process.env.NEXT_PUBLIC_MOONPAY_THEME || "light",
  baseCurrencyCode: "usd",        // Base currency for purchases
  baseCurrencyAmount: "100",      // Default purchase amount
  networkCode: "solana",          // Blockchain network
  contractAddress: process.env.NEXT_PUBLIC_MOONPAY_CONTRACT_ADDRESS || "",
  redirectURL: typeof window !== "undefined" 
    ? `${window.location.origin}/payment-success` 
    : "",
} as const
```

### Customize Branding

1. **Update Logo**
   - Replace `/public/IMG_0174.png` with your logo
   - Update references in `components/header.tsx` and `app/layout.tsx`

2. **Update Favicon**
   - Replace `/public/IMG_0174.png` (used as favicon)
   - Or update the icon path in `app/layout.tsx`

3. **Update Colors**
   - Modify CSS variables in `app/globals.css`
   - Customize Tailwind theme in `tailwind.config.js` (if exists)

## Production Deployment

### Important: URL Signing for Production

For production, you **must** implement URL signing for MoonPay to ensure security. See the [MoonPay URL Signing Guide](https://dev.moonpay.com/docs/on-ramp-overview#url-signing).

### Deploy to Vercel

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard

3. **Set Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all `NEXT_PUBLIC_*` variables
   - Use production MoonPay API keys (`pk_live_*`)

4. **Deploy**
   - Vercel will automatically deploy on push
   - Or manually trigger deployment from dashboard

### Environment Variables for Production

Make sure to use **production** API keys:

```env
NEXT_PUBLIC_MOONGATE_API_KEY=mg_pk_your_production_key
NEXT_PUBLIC_MOONPAY_API_KEY=pk_live_your_production_key
NEXT_PUBLIC_MOONPAY_THEME=light
NEXT_PUBLIC_MOONPAY_CONTRACT_ADDRESS=your_production_contract_address
```

## Project Structure

```
moongate-moonpay-integration/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── header.tsx         # Header with logo
│   ├── footer.tsx         # Footer component
│   ├── powered-by.tsx     # Powered by section
│   └── wallet-action-button.tsx  # Wallet connection button
├── lib/                   # Utility libraries
│   ├── constants.ts       # App configuration constants
│   ├── moonpay.ts         # MoonPay integration logic
│   └── utils.ts           # Utility functions
├── public/                # Static assets
│   ├── IMG_0174.png       # Logo/favicon
│   └── moonpay-logo.png   # MoonPay logo
└── .env.local             # Environment variables (not in git)
```

## Troubleshooting

### MoonPay Widget Not Loading

- Verify your API key is correct
- Check that your MoonPay account is verified
- Ensure you're using the correct environment (test vs production)

### Wallet Connection Issues

- Verify your Moongate API key is correct
- Check that your Moongate project is properly configured
- Ensure you're using a supported wallet

### Environment Variables Not Working

- Make sure variables start with `NEXT_PUBLIC_` for client-side access
- Restart your development server after adding new variables
- Check that `.env.local` is in the root directory

## Support & Resources

### Moongate Resources
- **Partner Dashboard**: [https://partner.moongate.one](https://partner.moongate.one)
- **Documentation**: [https://docs.moongate.one](https://docs.moongate.one)
- **Support**: Contact through partner dashboard

### MoonPay Resources
- **Dashboard**: [https://dashboard.moonpay.com](https://dashboard.moonpay.com)
- **API Documentation**: [https://dev.moonpay.com](https://dev.moonpay.com)
- **On-Ramp Guide**: [https://dev.moonpay.com/docs/on-ramp-overview](https://dev.moonpay.com/docs/on-ramp-overview)
- **Support**: [support@moonpay.com](mailto:support@moonpay.com)

### Direct Support
- Email: [amen@moongate.one](mailto:amen@moongate.one)
- Telegram: [@asta1000](https://t.me/asta1000)
- Twitter: [@dev_amendh](https://twitter.com/dev_amendh)

## License

This project is private and proprietary.

## Contributing

This is a private repository. For issues or questions, please contact the repository owner.
