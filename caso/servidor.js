const express = require('express');
const app = express();

app.set('port', 3000)

app.use(express.json());

app.use(require('./routes/usuarios'));

app.listen(app.get('port'), () =>{
    console.log('servidor activo en puerto ', app.get('port'));
});