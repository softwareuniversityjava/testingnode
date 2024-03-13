const express = require('express');

const app = express();
while (true) {
    const randomNumber = Math.floor(Math.random() * (10 - 1) + 1)
    app.get('/', (req, res) => {
        res.send("The random number generated is: " + randomNumber);
    });
}
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
