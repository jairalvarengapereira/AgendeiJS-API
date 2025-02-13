
// import express from 'express';
// import cors from 'cors';
// import router from './routes.js';

// const app = express();

// app.use(express.json()); // Especifica que irá trabalhar com Json
// app.use(cors());
// app.use(router);

// app.listen(3001,() => {
//   console.log('Servidor rodando na porta: 3001...');
// })
import express from 'express';
import cors from 'cors';
import router from './routes.js';

const app = express();

app.use(express.json()); // Especifica que irá trabalhar com JSON
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}...`);
});
