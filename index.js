const  express = require('express')
const app = express()
const port = 3000;

app.set("view engine", "hbs");

app.get('/', (req, res) =>{ 
    // res.send('Hello World!')
    res.render("home");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

