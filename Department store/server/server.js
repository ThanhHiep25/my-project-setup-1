const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));




app.listen(port, () => console.log(`listening on http://localhost:${port}`));
