const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello, Jenkins!'));

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
