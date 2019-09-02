//Difine const and variables
const express = require('express');

//Define app whit var for save express
const app = express();


//Sethings
app.set('port', process.env.PORT || 3000);



//Middlewares
app.use(express.json());

app.use(require('./routes/routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

