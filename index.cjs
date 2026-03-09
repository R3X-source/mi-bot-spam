const express = require('express');
const app = express();
const { Client } = require('discord.js-selfbot-v13');

const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot Activo 🚀'));
app.listen(port, '0.0.0.0', () => {
    console.log(`[1] Red lista en puerto ${port}`);
});

const client = new Client({ checkUpdate: false });

const targetIDs = ['1369174476574687243', '1369174478596345897', '1379141308131835914', '1369174479825145856', '1369180836582133820', '1369181058490175488', '1240012616328544419'];
const spamMessage = '.t cejotanga SECRETOS DE TUS NALG4S DE PUTAKU Q TIENE Q EDITAR SU NALGITA DESDE GROK Y ENCIMA DELATADA POR CARNASH4, TE VAS A SORPRENDER CUANDO VEAS Q TU MACHO NO USA TERMUX COMO PIENSAS.... SI NO DIRECTAMENTE UN SERVICIO DE PAGA Q ME ENSEÑO TU MACH4 NEG4 Q ME ENSEÑÓ CUANDO ELLA ERA MI AMIGA.... LO NOTARÁS CUANDO VEAS Q EL SPOM NO SE APAGA NI EN 1 MES🤣🤣🤣🤣, PUES MIRA MARRANA SOY TU TÍO PEDOFILO DE 40 AÑOS CON EL Q TE PELEASTE CHE Y ME HE UNIDO A LA CJ SOLO PARA REÍRME DE TI POR NALGAVEÑA Y POR LA MICHOACANA DE KEVINA🤣🤣🤣 <@1457984414121459856> https://cdn.discordapp.com/attachments/1479539451771490482/1479541930789437632/Screenshot_20251222_003837.jpg?ex=69ac6a4c&is=69ab18cc&hm=988e7bfce0d1556ef08c0d194ac692646cb3178d0c1677ba23f1b3e840af5951& PERRA VEN A GRASOSAS Y ACEPTA SOLICIYUD JAJAJQJAJA';

client.on('ready', async () => {
  console.log('------------------------------------------');
  console.log(`✅ CONECTADO COMO: ${client.user.tag}`);
  console.log('------------------------------------------');

  const startSending = async () => {
    for (const id of targetIDs) {
      try {
        let target = await client.channels.fetch(id).catch(() => null);
        if (!target) target = await client.users.fetch(id).catch(() => null);
        if (target) {
          await target.send(spamMessage);
          console.log(`[${new Date().toLocaleTimeString()}] ✅ Enviado a: ${id}`);
        }
      } catch (err) { console.error(`[!] Error: ${err.message}`); }
    }
    setTimeout(startSending, 8000 + Math.floor(Math.random() * 4000));
  };
  startSending();
});

// LOGIN UNIFICADO CON DETECTOR DE BLOQUEO
console.log('--> [2] Intentando conectar...');
if (!process.env.TOKEN) {
    console.log('❌ ERROR: Falta la variable TOKEN en Render.');
} else {
    client.login(process.env.TOKEN).catch(err => {
        console.error(`❌ FALLO DE LOGIN: ${err.message}`);
    });
}

// Si en 20 segundos no hay rastro de client.user, la IP está muerta
setTimeout(() => {
    if (!client.user) {
        console.log('⚠️ ALERTA: El bot lleva 20s intentando conectar y no puede. Es muy probable que la IP de Oregon esté bloqueada por Discord.');
    }
}, 20000);
