const fetch = require('node-fetch');

module.exports = ({ apiKey }) => (subject, content, sender, to, type= 'text') => fetch('https://api.sendinblue.com/v3/smtp/email', {
    body: JSON.stringify({ sender, subject, [type === 'html' ? 'htmlContent' : 'textContent']: content, to }),
    headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
    },
    method: 'POST',
});
