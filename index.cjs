const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('🛡️ V28 DUAL-MODE ONLINE 🛡️'));
app.listen(process.env.PORT || 3000);

// LIMPIEZA DE RAM AGRESIVA (Cada 10 seg)
if (global.gc) {
    setInterval(() => { try { global.gc(); } catch (e) {} }, 10000);
}

const generarBypass = () => `\n\u200b [${Math.floor(Math.random() * 999)}] ${Math.random().toString(36).substring(5)}`;

const CANALES_CON_AUTOMOD = ['1369174476574687243', '1369174478596345897', '1379141308131835914', '1369174479825145856', '1369180836582133820', '1369181058490175488'];
const CANALES_SIN_AUTOMOD = ['1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'];
const OBJETIVOS_FIJOS = ['1457144912561832182', '1479748142722191514', '1479755930483691610', '1457984414121459856'];

// MENSAJE LARGO ORIGINAL (PARA CANALES SIN AUTOMOD)
const MSJ_LARGO_ORIGINAL = `.t cputiñapack 
<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1466878653932634195>
<@1480289152397213907> <@1447142638326120458>
https://files.catbox.moe/d0wcx2.mp4`;

// MENSAJES CORTOS CON LAS NUEVAS "T" (PARA BYPASS AUTOMOD)
const msgsNuevasT = [
    (t) => `.t cputiñagachatuber <@${t}> \nQUIERES PENE? NALGARERA GAMAMITA PUTA DE FRANKITA BY NEG4 SHE`,
    (t) => `.t cejotiñaandgamami <@${t}> \nbrazos lonjudos mejichanga nalga moncloveña soy tu masho`,
    (t) => `.t cejotiñagolpeada <@${t}> \nSECRETOS DE TUS NALG4S EDITADAS DESDE GROK`
];

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4].filter(t => t);

tokens.forEach((token, i) => {
    const client = new Client({ checkUpdate: false });

    client.on('ready', () => {
        console.log(`🚀 BOT ${i+1} DESPLEGADO`);
        setInterval(async () => {
            const allChannels = [...CANALES_CON_AUTOMOD, ...CANALES_SIN_AUTOMOD];
            const channelID = allChannels[Math.floor(Math.random() * allChannels.length)];
            const target = OBJETIVOS_FIJOS[Math.floor(Math.random() * OBJETIVOS_FIJOS.length)];
            
            try {
                const channel = await client.channels.fetch(channelID);
                if (channel) {
                    const esAuto = CANALES_CON_AUTOMOD.includes(channelID);
                    // Selecciona el mensaje según el tipo de canal
                    const msg = esAuto ? msgsNuevasT[Math.floor(Math.random() * 3)](target) : MSJ_LARGO_ORIGINAL;
                    await channel.send(`${msg} ${generarBypass()}`);
                }
            } catch (e) {}
        }, 4000); 
    });

    client.on('messageCreate', async (m) => {
        if (OBJETIVOS_FIJOS.includes(m.author.id) && m.author.id !== client.user.id) {
            try { 
                const respuesta = msgsNuevasT[Math.floor(Math.random() * 3)](m.author.id);
                await m.channel.send(`${respuesta} ${generarBypass()}`); 
            } catch (e) {}
        }
    });

    client.login(token).catch(() => {});
});
 
