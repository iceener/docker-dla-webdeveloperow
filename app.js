const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('overment rulezzz!'));

app.listen(8080, () => console.log('Server is up!'));