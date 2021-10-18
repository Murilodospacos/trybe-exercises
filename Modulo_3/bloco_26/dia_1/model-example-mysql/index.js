const express = require('express');
const app = express();
const routersAuthors = require('./routers/routersAuthors');
const routersBooks = require('./routers/routersBooks');
const routerBooksGetById = require('./routers/routersBooksGetById')

app.use(express.json());

const PORT = process.env.PORT || 3000;


app.use('/authors', routersAuthors);
app.use('/books', routersBooks);
app.use('/books/:id', routerBooksGetById);


app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
