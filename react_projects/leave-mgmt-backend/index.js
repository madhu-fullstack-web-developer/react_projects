const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const leaveRoutes = require('./routes/leaveRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/leaves', leaveRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
