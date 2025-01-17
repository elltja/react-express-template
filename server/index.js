const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.get('*', (req, res) => {    
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
