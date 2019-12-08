const express = require('express');
const path = require('path');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: '/Users/Vlad/Desktop/some_projects/mytodolist/public/html'
    });
});

app.get('/calendar.html', (req, res) => {
    res.sendFile('calendar.html', {
        root: '/Users/Vlad/Desktop/some_projects/mytodolist/public/html'
    });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listen to the port ${PORT}`));