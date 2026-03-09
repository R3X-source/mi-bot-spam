const express = require('express');
const app = express();
const { Client } = require('discord.js-selfbot-v13');

// --- SERVIDOR PARA RENDER (INDISPENSABLE) ---
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot de Asalto Activo 🚀'));
app.listen(port, '0.0.0.0', () => {
    console.log('Servidor de red iniciado en puerto ' + port);
});

// --- CONFIGURACIÓN DEL BOT ---
const client = new Client({ checkUpdate: false });

const targetChannelIDs = [
  '1369174476574687243',
  '1369174478596345897',
  '1379141308131835914',
  '1369174479825145856',
  '1369180836582133820',
  '1369181058490175488', 
  '1240012616328544419' 
];

const spamMessage = '.t cejotanga PUES MIRA MARRANA SOY TU TÍO PEDOFILO DE 40 AÑOS CON EL Q TE PELEASTE CHE Y ME HE UNIDO A LA CJ SOLO PARA REÍRME DE TI POR NALGAVEÑA Y POR LA MICHOACANA DE KEVINA🤣🤣🤣  <@1457984414121459856> https://cdn.discordapp.com/attachments/1479539451771490482/1479541930789437632/Screenshot_20251222_003837.jpg?ex=69ac6a4c&is=69ab18cc&hm=988e7bfce0d1556ef08c0d194ac692646cb3178d0c1677ba23f1b3e840af5951& PERRA VEN A GRASOSAS Y ACEPTA SOLICIYUD JAJAJQJAJA';

const interval = 7500; // 7.5 segundos

// Usamos el token de las variables de entorno de Render por seguridad
const userToken = process.env.TOKEN || 'MTQ3OTU1NzUyOTI0MjcwMTg0OQ.GAv5jx.RCz4M2H4j8VTNgAVBi1fEhp4Gh3bsO17L2_tyM';

// --- LÓGICA DE ENVÍO ---
client.on('ready', async () => {
  console.log(`✅ Conectado como: ${client.user.username}`);

  const startSending = async () => {
    for (const id of targetChannelIDs) {
      try {
        let target = await client.channels.fetch(id).catch(() => null);

        if (!target) {
          target = await client.users.fetch(id).catch(() => null);
        }

        if (target) {
          await target.send(spamMessage);
          console.log(`[${new Date().toLocaleTimeString()}] Enviado a: ${id}`);
        }
      } catch (error) {
        console.error(`[!] Error en ID ${id}: Posible baneo o canal cerrado.`);
      }
    }
    // Pausa aleatoria para evitar detección rápida de Discord
    const variacion = Math.floor(Math.random() * 3000); 
    setTimeout(startSending, interval + variacion);
  };

  startSending();
});

client.login(userToken).catch(() => {
  console.error('❌ Token inválido o reseteado.');
});
