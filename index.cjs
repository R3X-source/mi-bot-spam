const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('🛡️ LITE v23 ONLINE 🛡️'));
app.listen(process.env.PORT || 3000);

// LIMPIEZA DE MEMORIA RAM
if (global.gc) {
    setInterval(() => {
        try { global.gc(); } catch (e) {}
    }, 15000);
}

const generarBypass = () => `\n\u200b [${Math.floor(Math.random() * 999)}] ${Math.random().toString(36).substring(5)}`;

const CANALES_CON_AUTOMOD = ['1369174476574687243', '1369174478596345897', '1379141308131835914', '1369174479825145856', '1369180836582133820', '1369181058490175488'];
const CANALES_SIN_AUTOMOD = ['1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'];
const OBJETIVOS_FIJOS = ['1457144912561832182', '1479748142722191514', '1479755930483691610', '1457984414121459856'];

// MENSAJE MASIVO - SOLO CON CATBOX AL FINAL
const MSJ_MASIVO_BASE = `.t cputiñapack 
<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1429177016703516764> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195>
<@1480289152397213907>
<@1447142638326120458>
https://files.catbox.moe/d0wcx2.mp4`;

// ATAQUES PERSONALES - SIN LINKS (SOLO TEXTO)
const msgsPersonales = [
    (t) => `.t cejotanga QUIERES PENE CEJOTIÑA? DALE CEJOTORRA JAKSJSJSJS <@${t}> te pebetto el culo \nUFFF NALGARERA GAMAMITA LA PUTA DE SU MACHORRA FRANKITA LA RETIRADA BY NEG4 SHE \nENCIMA Q GAMAMI ES ABUSAFA BY MÁSTER ESPEIRDERMEN💀🤣🤣🤣`,
    (t) => `.t cejotanga putacu brazos más lonjudos q mis huevos💀💀💀 tenes q deslechar más a tu masho y a todos los q te traicionaron el pedorrete como PABLA!!!! <@${t}> \nmejichanga nalga moncloveña wey krnal soy el macho de gamami and daniela arjenchanga porque soy tu masho wey no como la putita arjenchanga de daniela q lleva meses siendo folada en spom JKSJDJSKSS \nNALGONA NI AUTOMOD TE SALVA EL ANO LONJUDÓ`,
    (t) => `.t cejotanga SECRETOS DE TUS NALG4S DE PUTAKU Q TIENE Q EDITAR SU NALGITA DESDE GROK Y ENCIMA DELATADA POR CARNASH4... <@${t}>`
];

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4].filter(t => t);

tokens.forEach((token, i) => {
    const client = new Client({ checkUpdate: false });

    client.on('ready', () => {
        console.log(`🔥 BOT ${i+1} ONLINE`);
        setInterval(async () => {
            const allChannels = [...CANALES_CON_AUTOMOD, ...CANALES_SIN_AUTOMOD];
            const channelID = allChannels[Math.floor(Math.random() * allChannels.length)];
            const target = OBJETIVOS_FIJOS[Math.floor(Math.random() * OBJETIVOS_FIJOS.length)];
            
            try {
                const channel = await client.channels.fetch(channelID);
                if (channel) {
                    const isAuto = CANALES_CON_AUTOMOD.includes(channelID);
                    const msg = isAuto ? msgsPersonales[Math.floor(Math.random() * 3)](target) : MSJ_MASIVO_BASE;
                    await channel.send(`${msg} ${generarBypass()}`);
                }
            } catch (e) {}
        }, 4000); 
    });

    client.on('messageCreate', async (m) => {
        if (OBJETIVOS_FIJOS.includes(m.author.id) && m.author.id !== client.user.id) {
            try { 
                await m.reply(`${msgsPersonales[Math.floor(Math.random() * 3)](m.author.id)} ${generarBypass()}`); 
            } catch (e) {}
        }
    });

    client.login(token).catch(() => {});
});
 
