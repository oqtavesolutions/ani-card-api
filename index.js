const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: "*"
}));

app.get('/', (req, res) => {
    res.status(200).json({message: "it works"})
})

app.listen(process.env.PORT || 8000, () => console.log('listening'))