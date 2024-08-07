const app = require('./app');

const port = 3001;
const host = '127.0.0.1'

// methana dhila thiyenne server port ekai localhost ge ip address eka ('localhost') wenuwata
// local ip address ekak kiyanne internet eken eliyata yanne nathi ip address ekak 
const server = app.listen(port, host, () => {
    console.log(`Node server is run ${server.address().port}`);
});


