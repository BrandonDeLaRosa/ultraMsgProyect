const express = require ('express');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
// Setup a webhook route
app.use(bodyParser.json())
app.post('/ultramsgwebhook', (req, res) => {
  console.log(req.body) 
  //messageFrom=req.body['data']['from'] // sender number
  //messageMsg=req.body['data']['body'] // Message text
  res.status(200).end()
})

const PORT = 3000
app.use(bodyParser.json())
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}🚀 `))
