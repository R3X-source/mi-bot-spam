import express from 'express';
const app = express();

export function keepAlive() {
  app.get('/', (req, res) => {
    res.send('Bot de Spam Online 24/7 - Sistema Activo');
  });
  
  app.listen(3000, () => {
    console.log("Servidor de persistencia corriendo en puerto 3000");
  });
}
