const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get('/api/medication/:barcode', async (req, res) => {
    const barcode = req.params.barcode;
    try {
        const response = await axios.get(`https://api.fda.gov/drug/label.json?search=ndc:${barcode}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
