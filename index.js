import { Client } from 'discord.js-selfbot-v13';
import fs from 'fs';
import { keepAlive } from './server.js';

const client = new Client({ checkUpdate: false });
const ESTADO_FILE = './estado.json';

// --- CONFIGURACIÓN ---
const TOKEN = 'MTQ3NzEwNDIyNjA5NzQzNDg2NQ.GBJrjo.P9y2_VSabjiAQJkQctE0EruFtMheuzh-ZOOgHg'; 
const ID_USUARIA_SIN_PING = '1310098567590969405';
const OBJETIVOS = [
    '1457984414121459856', '1429177016703516764', '1446586105553227807',
    '1467397075204309034', '1447142638326120458', '1479748142722191514',
    '1479755930483691610'
];

const MENSAJE_LARGO = `QUIERES PENE CEJOTIÑA? DALE CEJOTORRA JAKSJSJSJS https://cdn.discordapp.com/attachments/1478635459365179433/1478659994659328030/InShot_20260303_203821072.mp4?ex=69a9ddae&is=69a88c2e&hm=13b42b17f1eac8c21b2bb9a9cbf36cfac8ad7eb221322404bb4387adb6f000b2& <@1457984414121459856> PERRA VEN A GRASOSAS Y ACEPTA SOLICITUD JAJAJJA `;
const MENSAJE_SIN_PING = "Neko fuck <@1384340161625591880>";

// Cargar "Opción Azul" (Persistencia del estado)
let data = { active: true };
if (fs.existsSync(ESTADO_FILE)) {
    data = JSON.parse(fs.readFileSync(ESTADO_FILE));
}

let cooldown = 0;

client.on('ready', () => {
    console.log(`✅ [${data.active ? 'ENCENDIDO' : 'APAGADO'}] Bot iniciado como: ${client.user.tag}`);
    keepAlive();
});

client.on('messageCreate', async (msg) => {
    // Comando Toggle: Escribe ~toggleactive en cualquier chat para prender/apagar
    if (msg.author.id === client.user.id && msg.content === '~toggleactive') {
        data.active = !data.active;
        fs.writeFileSync(ESTADO_FILE, JSON.stringify(data));
        return msg.channel.send(`🤖 Estado de spam cambiado a: **${data.active ? 'ENCENDIDO' : 'APAGADO'}**`);
    }

    if (!data.active || msg.author.id === client.user.id) return;

    const ahora = Date.now();

    // Lógica Sin Ping
    if (msg.author.id === ID_USUARIA_SIN_PING) {
        let esRespuestaAMi = false;
        if (msg.reference) {
            try {
                const original = await msg.channel.messages.fetch(msg.reference.messageId);
                esRespuestaAMi = original.author.id === client.user.id;
            } catch (e) {}
        }
        if (esRespuestaAMi || msg.mentions.has(client.user.id)) {
            try {
                await msg.channel.send(MENSAJE_SIN_PING);
                cooldown = ahora;
            } catch (e) {}
        }
        return;
    }

    // Lógica Objetivos (Spam con delay y mención)
    if (OBJETIVOS.includes(msg.author.id)) {
        if (msg.mentions.has(client.user.id) || (ahora - cooldown > 100)) {
            try {
                await msg.reply({ content: MENSAJE_LARGO });
                cooldown = ahora;
            } catch (e) {}
        }
    }
});

client.login(TOKEN);
