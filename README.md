# File Cloud Storage

## Install
```sh
$ npm install email-senders
```

## Usage
```javascript
import getSender from 'email-senders';

const send = getSender('sendinblue', { apiKey: '<API-KEY>' });

send('<subject>', '<body>', { email: '<senderEmail>', name: '<senderEmail>' },
    [{ email: '<recipientEmail>', name: '<recipientEmail>' }]);
```
