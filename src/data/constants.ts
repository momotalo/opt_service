// data/constants.ts
import { AppItem, SocialApp } from '../types';

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

// Utility function for chunking array
export const chunkArray = (array: string[], size: number): string[][] => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

// Apps data
export const apps: AppItem[] = [
    {
        id: "google",
        name: "GOOGLE",
        iconUrl: "/images/google.png",
    },
    {
        id: "twitter",
        name: "TWITTER",
        iconUrl: "/images/twitter.png",
    },
    {
        id: "gnjoy",
        name: "GNJOY",
        iconUrl: "/images/gnjoy.png",
    },
    {
        id: "discord",
        name: "DISCORD",
        iconUrl: "/images/discord.png",
    },
    {
        id: "line",
        name: "LINE",
        iconUrl: "/images/line.png",
    },
    {
        id: "lazada",
        name: "LAZADA",
        iconUrl: "/images/lazada.png",
    },
    {
        id: "vk",
        name: "VK",
        iconUrl: "/images/vk.png",
    },
    {
        id: "microsoft",
        name: "Microsoft",
        iconUrl: "/images/microsoft.png",
    },
    {
        id: "youtube",
        name: "YOUTUBE",
        iconUrl: "/images/youtube.svg",
    },
    {
        id: "bolt",
        name: "BOLT",
        iconUrl: "/images/bolt.png",
    },
    {
        id: "steam",
        name: "STEAM",
        iconUrl: "/images/steam.png",
    },
    {
        id: "roblox",
        name: "ROBLOX",
        iconUrl: "/images/roblox.png",
    },
];

// Social apps data
export const socialApps: SocialApp[] = [
    {
        id: "facebook",
        name: "Facebook",
        iconUrl: "/images/facebook.png",
    },
    {
        id: "tiktok",
        name: "Tiktok",
        iconUrl: "/images/tiktok.png",
    },
    {
        id: "instagram",
        name: "Instagram",
        iconUrl: "/images/instagram.png",
    },
    {
        id: "twitter",
        name: "Twitter",
        iconUrl: "/images/twitter.svg",
    },
    {
        id: "youtube",
        name: "Youtube",
        iconUrl: "/images/youtube.svg",
    },
    {
        id: "spotify",
        name: "Spotify",
        iconUrl: "/images/spotify.png",
    },
    {
        id: "telegram",
        name: "Telegram",
        iconUrl: "/images/telegram.png",
    },
    {
        id: "shopee",
        name: "Shopee",
        iconUrl: "/images/shopee.png",
    },
];
