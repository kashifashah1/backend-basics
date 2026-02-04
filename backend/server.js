import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Programmer joke',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs.'
        },
        {
            id: 4,
            title: 'Debugging joke',
            content: 'Debugging is like being a detective in a crime movie where you are also the criminal.'
        },
        {
            id: 5,
            title: 'Coffee joke',
            content: 'I turn coffee into code.'
        }
    ];
    res.send(jokes);

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});