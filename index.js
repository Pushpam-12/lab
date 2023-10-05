const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const currDir = path.join(__dirname);

app.get('/', (req, res) =>{
    res.sendFile(currDir+ '/home.html');
})

app.get('/SignUp', (req, res) => {
    res.sendFile(currDir + '/SignUp.html');
});

app.get('/Login', (req, res) => {
    res.sendFile(currDir + '/LoginForm.html');
});

app.post('/Login' ,(req, res) => {
   res.send(`<h1><center> Congratulations ${req.body.fullname} to become a team member </center></h1>`);
});

app.post('/Signup', (req, res) => {
    const userData = {
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    };
    
    // this is used to Store user data in a text file
    fs.appendFile('user_data.txt', JSON.stringify(userData) + '\n', (err) => {
        if (err) throw err;
        console.log('User data stored in the user_data.txt file.');
    });
    
    // res.send('<h1><center>Signup successful!</center></h1>');
    res.send(JSON.stringify(userData));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
