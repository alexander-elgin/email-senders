const getSender = require('../src');

const send = getSender('sendinblue', { apiKey: process.env.apiKey });
send('Test', 'test content', { email: process.env.email, name: 'Sender' }, [
    { email: process.env.email, name: 'Recipient' },
]).then(res => console.log(JSON.stringify(res)));
