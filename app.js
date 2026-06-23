// app.js

// 1. Fresh Token configuration for @anjweb_bot
const TELEGRAM_BOT_TOKEN = '8992550384:AAGMaclVRNwK1bXvYNxdjHGQkPYUnZaJfOI'; 

// 2. Active Channel route
const TELEGRAM_CHAT_ID = '@alrexprince1test';

// Capture form element runtime instance
const form = document.getElementById('leadForm');

// Event handler monitoring the user action click
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // HALT standard page refresh loops

  // Capture user submission string attributes
  const name = document.getElementById('userName').value;
  const phone = document.getElementById('userPhone').value;
  const email = document.getElementById('userEmail').value;

  // Custom premium telemetry notification string template
  const messageText = `
🏆 AURUM - NEW LEAD RECEIVED 🏆
────────────────────────
👤 NAME: ${name}
📞 PHONE: ${phone}
📧 EMAIL: ${email}
────────────────────────
👉 Direct client inquiry submitted via secure portal.
  `;

  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText
      })
    });

    if (response.ok) {
      alert("✨ Request submitted successfully. The channel has been notified!");
      form.reset(); // Flush user text values ready for alternative entries
    } else {
      alert("⚠️ Network transmission error. Verify if @anjweb_bot is an active Administrator in channel settings.");
    }

  } catch (error) {
    console.error("Transmission connection interface exception detected:", error);
    alert("❌ Fatal delivery exception. Please verify system network parameters.");
  }
});