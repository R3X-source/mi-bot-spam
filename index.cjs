const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ EJÉRCITO COMPLETO v10 ONLINE 🛡️'));
app.listen(process.env.PORT || 3000, '0.0.0.0');

// --- CEREBRO DE DESPISTE (Números y Bypass Invisible) ---
const generarBypass = () => {
    const simbolos = [['[', ']'], ['|', '|'], ['(', ')'], ['{', '}']];
    const par = simbolos[Math.floor(Math.random() * simbolos.length)];
    const num = Math.floor(100 + Math.random() * 899); 
    const invisible = `\u200b`.repeat(Math.floor(Math.random() * 3)); 
    return `\n${invisible} ${par[0]}${num}${par[1]} ${Math.random().toString(36).substring(7)}`;
};

// --- CONFIGURACIÓN DE CANALES ---
const CANALES_CON_AUTOMOD = [
    '1369174476574687243', '1369174478596345897', '1379141308131835914', 
    '1369174479825145856', '1369180836582133820', '1369181058490175488'
];

const CANALES_SIN_AUTOMOD = [
    '1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'
];

// --- LISTA COMPLETA DE OBJETIVOS PARA AUTORESPONDEDOR ---
const OBJETIVOS = [
    '1457984414121459856', '1429177016703516764', '1446586105553227807', 
    '1467397075204309034', '1447142638326120458', '1479748142722191514', 
    '1479755930483691610', '1457144912561832182'
];

// --- ARMERÍA SEGMENTADA ---
const MSJS = {
    // Para servidores con protección (Mensajes largos con bypass)
    AUTOMOD: () => `.t cejotanga SECRETOS DE TUS NALG4S DE PUTAKU... ${generarBypass()}`,
    
    // Para servidores sin protección (Spam masivo de menciones)
    MASIVO: () => `.t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> @everyone https://files.catbox.moe/d0wcx2.mp4 ${generarBypass()}`,
    
    // Autorespondedor: El mensaje personal para una sola ID
    RESPUESTA: () => `.t cejotanga QUIERES PENE CEJOTIÑA? DALE CEJOTORRA <@1457984414121459856> https://cdn.discordapp.com/attachments/1478635459365179433/1478659994659328030/InShot_20260303_203821072.mp4 ${generarBypass()}`
};

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4].filter(t => t);

tokens.forEach((token, i) => {
    const client = new Client({ checkUpdate: false, syncStatus: false });

    client.on('ready', () => {
        console.log(`🚀 [UNIDAD ${i+1}] ${client.user.tag} ACTIVA`);

        const ejecutarAtaque = async () => {
            // Ciclo de canales con Automod
            for (const id of CANALES_CON_AUTOMOD) {
                try {
                    const c = await client.channels.fetch(id);
                    await c.send(MSJS.AUTOMOD());
                    await new Promise(r => setTimeout(r, 1200)); 
                } catch (e) {}
            }

            // Ciclo de canales sin Automod
            for (const id of CANALES_SIN_AUTOMOD) {
                try {
                    const c = await client.channels.fetch(id);
                    await c.send(MSJS.MASIVO());
                    await new Promise(r => setTimeout(r, 1200));
                } catch (e) {}
            }
            
            // Pausa entre ráfagas (4-7 seg)
            setTimeout(ejecutarAtaque, 4000 + Math.floor(Math.random() * 3000));
        };
        ejecutarAtaque();
    });

    // AUTORESPONDEDOR RECUPERADO
    client.on('messageCreate', async (m) => {
        if (OBJETIVOS.includes(m.author.id) && m.author.id !== client.user.id) {
            try {
                await m.reply(MSJS.RESPUESTA());
                console.log(`⚡ [Bot ${i+1}] Respuesta enviada a objetivo.`);
            } catch (e) {}
        }
    });

    client.login(token).catch(() => console.log(`💀 Token ${i+1} falló`));
});
