const express = require('express');
const app = express();
const { Client } = require('discord.js-selfbot-v13');

// 1. SERVIDOR DE RED (Para que Render no lo apague)
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot de Asalto en Línea 🚀'));
app.listen(port, '0.0.0.0', () => {
    console.log(`[NETWORK] Servidor escuchando en puerto ${port}`);
});

// 2. CONFIGURACIÓN DEL CLIENTE
const client = new Client({ checkUpdate: false });

const targetIDs = [
  '1369174476574687243',
  '1369174478596345897',
  '1379141308131835914',
  '1369174479825145856',
  '1369180836582133820',
  '1369181058490175488',
  '1240012616328544419'
];

const spamMessage = '.t cejotanga PUES MIRA MARRANA SOY TU TÍO PEDOFILO DE 40 AÑOS CON EL Q TE PELEASTE CHE Y ME HE UNIDO A LA CJ SOLO PARA REÍRME DE TI POR NALGAVEÑA Y POR LA MICHOACANA DE KEVINA🤣🤣🤣  <@1457984414121459856> https://cdn.discordapp.com/attachments/1479539451771490482/1479541930789437632/Screenshot_20251222_003837.jpg?ex=69ac6a4c&is=69ab18cc&hm=988e7bfce0d1556ef08c0d194ac692646cb3178d0c1677ba23f1b3e840af5951& PERRA VEN A GRASOSAS Y ACEPTA SOLICIYUD JAJAJQJAJA';

const interval = 8000; // 8 segundos para mayor seguridad

// 3. LÓGICA DE ENVÍO
client.on('ready', async () => {
  console.log(`✅ Conectado como: ${client.user.username}`);

  const startSending = async () => {
    for (const id of targetIDs) {
      try {
        let target = await client.channels.fetch(id).catch(() => null);
        if (!target) target = await client.users.fetch(id).catch(() => null);

        if (target) {
          await target.send(spamMessage);
          console.log(`[${new Date().toLocaleTimeString()}] Enviado a: ${id}`);
        }
      } catch (err) {
        console.error(`[!] Error en ID ${id}: Posible baneo o DMs cerrados.`);
      }
    }
    // Pausa aleatoria para evitar el filtro de Discord
    const randomExtra = Math.floor(Math.random() * 4000);
    setTimeout(startSending, interval + randomExtra);
  };

  startSending();
});

// 4. LOGIN SEGURO (Usa la variable de Render)
client.login(process.env.TOKEN).catch(() => {
  console.error('❌ ERROR: El TOKEN es inválido o no está configurado en Render.');
});
 
