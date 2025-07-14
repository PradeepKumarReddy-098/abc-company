const express = require('express');
const cors = require('cors');
const headingRoutes = require('./routes/headerRoutes');
const database = require('./database'); 


const app = express();
const PORT =3001;

app.use(cors());
app.use(express.json());

app.use('/api', headingRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});