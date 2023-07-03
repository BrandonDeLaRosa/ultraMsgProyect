const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
// Setup a webhook route

app.use(bodyParser.json())
app.post('/ultramsgwebhook', (req, res) => {
  console.log(req.body) // print all response

  //messageFrom=req.body['data']['from'] // sender number
  //messageMsg=req.body['data']['body'] // Message text
  res.status(200).end()
})

app.use(bodyParser.json())

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}🚀 `))


// !  TWILIO 

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// // Configure body-parser middleware to parse incoming requests
// app.use(bodyParser.urlencoded({ extended: true }));

// // Define a route to handle incoming WhatsApp messages
// app.post('/webhook', (req, res) => {
//   const messageBody = req.body.Body; // Access the message body from the request

//   // Do something with the message body
//   console.log('Received message:', messageBody);

//   // Respond to the request
//   res.sendStatus(200);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });


