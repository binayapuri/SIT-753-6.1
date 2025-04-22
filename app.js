const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from the Express app haha hehe huhu hey hai! changes v2');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
