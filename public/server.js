const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    setTimeout(() => {
        res.sendFile(__dirname + '/index.html');
    }, 10000); // Delay 10 giây
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
