const express = require('express');
const { Client } = require('discord.js-selfbot-v13');
const app = express();
const client = new Client({ checkUpdate: false });

// 1. SERVIDOR PARA RENDER (Indispensable para que no se apague)
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot de Asalto Activo 🚀'));
app.listen(port, '0.0.0.0', () => {
    console.log(`[SISTEMA] Red iniciada en puerto: ${port}`);
});

// 2. CONFIGURACIÓN DE OBJETIVOS
const targetIDs = [
    '1369174476574687243',
    '1369174478596345897',
    '1379141308131835914',
    '1369174479825145856',
    '1369180836582133820',
    '1369181058490175488',
    '1240012616328544419'
];

const mensajeSpam = '.t cejotanga PUES MIRA MARRANA SOY TU TÍO PEDOFILO DE 40 AÑOS CON EL Q TE PELEASTE CHE Y ME HE UNIDO A LA CJ SOLO PARA REÍRME DE TI POR NALGAVEÑA Y POR LA MICHOACANA DE KEVINA🤣🤣🤣  <@1457984414121459856> https://cdn.discordapp.com/attachments/1479539451771490482/1479541930789437632/Screenshot_20251222_003837.jpg?ex=69ac6a4c&is=69ab18cc&hm=988e7bfce0d1556ef08c0d194ac692646cb3178d0c1677ba23f1b3e840af5951& PERRA VEN A GRASOSAS Y ACEPTA SOLICIYUD JAJAJQJAJA';

const intervaloBase = 8000; // 8 segundos

// 3. LÓGICA DE MONITOREO Y ENVÍO
client.on('ready', async () => {
    // AQUÍ SALE TU NOMBRE SI CONECTA
    console.log('------------------------------------------');
    console.log(`✅ ¡CONEXIÓN EXITOSA!`);
    console.log(`👤 CUENTA: ${client.user.tag}`); // Muestra nombre y #tag
    console.log(`🆔 ID CUENTA: ${client.user.id}`);
    console.log('------------------------------------------');

    const iniciarSpam = async () => {
        for (const id of targetIDs) {
            try {
                // Busca el canal o el usuario
                let target = await client.channels.fetch(id).catch(() => null);
                if (!target) target = await client.users.fetch(id).catch(() => null);

                if (target) {
                    await target.send(mensajeSpam);
                    // AQUÍ TE AVISA SI MANDÓ MENSAJE
                    console.log(`[${new Date().toLocaleTimeString()}] ✅ MENSAJE ENVIADO A: ${id}`);
                } else {
                    console.log(`[${new Date().toLocaleTimeString()}] ⚠️ ID NO ENCONTRADA: ${id}`);
                }
            } catch (err) {
                console.log(`[${new Date().toLocaleTimeString()}] ❌ ERROR AL ENVIAR A ${id}: ${err.message}`);
            }
        }
        
        // Pausa aleatoria para no parecer robot y que no te baneen tan rápido
        const variacion = Math.floor(Math.random() * 4000);
        setTimeout(iniciarSpam, intervaloBase + variacion);
    };

    iniciarSpam();
});

// 4. ARRANQUE CON SEGURIDAD
if (!process.env.TOKEN) {
    console.error('❌ ERROR: No hay ninguna variable llamada TOKEN en Render.');
} else {
    client.login(process.env.TOKEN).catch(err => {
        console.error('❌ ERROR DE LOGIN: El token no funciona o Discord bloqueó la IP de Render.');
        console.error(`DETALLE: ${err.message}`);
    });
}
