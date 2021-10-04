const express = require('express');
const bodyParser = require('body-parser');

const simpsonsUtils = require('./fs-utils');
const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async function (_req, res) {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
});

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

app.listen(3001, () => console.log('API It`s alive'));
