// data/constants.ts
import { PaymentMethod, SocialApp, AppItem } from "types/index";

// Phone numbers data
export const phoneNumbers = [
  "0943070567",
  "0812345678",
  "0987654321",
  "0943070567",
  "0812345678",
  "0987654321",
  "0943070567",
  "0812345678",
  "0987654321",
  "0943070567",
  "0812345678",
  "0987654321",
];

// Apps data
export const apps: AppItem[] = [
  {
    id: "google",
    name: "GOOGLE",
    iconUrl: "/images/socials/google.svg",
  },
  {
    id: "twitter",
    name: "TWITTER",
    iconUrl: "/images/socials/twitter.svg",
  },
  {
    id: "gnjoy",
    name: "GNJOY",
    iconUrl: "/images/socials/line.svg",
  },
  {
    id: "discord",
    name: "DISCORD",
    iconUrl: "/images/socials/discord.svg",
  },
  {
    id: "line",
    name: "LINE",
    iconUrl: "/images/socials/line.svg",
  },
  {
    id: "lazada",
    name: "LAZADA",
    iconUrl: "/images/socials/lazada.svg",
  },
  {
    id: "vk",
    name: "VK",
    iconUrl: "/images/socials/vk.svg",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    iconUrl: "/images/socials/microsoft.svg",
  },
  {
    id: "youtube",
    name: "YOUTUBE",
    iconUrl: "/images/socials/youtube.svg",
  },
  {
    id: "bolt",
    name: "BOLT",
    iconUrl: "/images/socials/bolt.svg",
  },
  {
    id: "steam",
    name: "STEAM",
    iconUrl: "/images/socials/stream.svg",
  },
  {
    id: "roblox",
    name: "ROBLOX",
    iconUrl: "/images/socials/roblox.svg",
  },
];

// Social apps data
export const socialApps: SocialApp[] = [
  {
    id: "facebook",
    name: "Facebook",
    iconUrl: "/images/socials/facebook.svg",
  },
  {
    id: "tiktok",
    name: "Tiktok",
    iconUrl: "/images/socials/tiktok.svg",
  },
  {
    id: "instagram",
    name: "Instagram",
    iconUrl: "/images/socials/instagram.svg",
  },
  {
    id: "twitter",
    name: "Twitter",
    iconUrl: "/images/socials/twitter.svg",
  },
  {
    id: "youtube",
    name: "Youtube",
    iconUrl: "/images/socials/youtube.svg",
  },
  {
    id: "spotify",
    name: "Spotify",
    iconUrl: "/images/socials/spotify.svg",
  },
  {
    id: "telegram",
    name: "Telegram",
    iconUrl: "/images/socials/telegram.svg",
  },
  {
    id: "shopee",
    name: "Shopee",
    iconUrl: "/images/socials/shopee.svg",
  },
];

// Payment Methods Data
export const paymentMethods: PaymentMethod[] = [
  // Row 1
  {
    id: "visa",
    name: "VISA",
    logoUrl: "/images/payments/visa.svg",
    width: 80,
    height: 50,
  },
  {
    id: "truemoney",
    name: "TrueMoney",
    logoUrl: "/images/payments/truemoney.svg",
    width: 100,
    height: 50,
  },
  {
    id: "mastercard",
    name: "Mastercard",
    logoUrl: "/images/payments/mastercard.svg",
    width: 80,
    height: 50,
  },

  // Row 2
  {
    id: "paypal",
    name: "PayPal",
    logoUrl: "/images/payments/paypal.svg",
    width: 100,
    height: 50,
  },
  {
    id: "promptpay",
    name: "PromptPay",
    logoUrl: "/images/payments/promptpay.svg",
    width: 100,
    height: 50,
  },
  {
    id: "truewallet",
    name: "TrueWallet",
    logoUrl: "/images/payments/truemoney.svg",
    width: 100,
    height: 50,
  },

  // Row 3
  {
    id: "linepay",
    name: "LINE Pay",
    logoUrl: "/images/payments/linepay.svg",
    width: 100,
    height: 50,
  },
  {
    id: "mpay",
    name: "M Pay",
    logoUrl: "/images/payments/mpay.svg",
    width: 100,
    height: 50,
  },
  {
    id: "banktransfer",
    name: "Bank Transfer",
    logoUrl: "/images/payments/bank-transfer.svg",
    width: 100,
    height: 50,
  },
];
