const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('🛡️ V34 TITANIUM + BREATH ONLINE 🛡️'));
app.listen(process.env.PORT || 3000);

if (global.gc) {
    setInterval(() => { try { global.gc(); } catch (e) {} }, 8000);
}

const generarBypass = () => `\n\u200b [${Math.floor(Math.random() * 9999)}] ${Date.now().toString().slice(-4)}`;

const CANALES_CON_AUTOMOD = ['1369174476574687243', '1369174478596345897', '1379141308131835914', '1369174479825145856', '1369180836582133820', '1369181058490175488'];
const CANALES_LIBRES = ['1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'];
const OBJETIVOS_FIJOS = ['1457144912561832182', '1479748142722191514', '1479755930483691610', '1457984414121459856'];

const MSJ_LARGO = `.t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4`;

const msgsCortos = [
    (t) => `.t cputiñagachatuber <@${t}> \nQUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA BY NEG4 SHE`,
    (t) => `.t cejotiñaandgamami <@${t}> \nbrazos más lonjudos mejichanga nalga moncloveña soy tu masho`,
    (t) => `.t cejotiñagolpeada <@${t}> \nMALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK CUANDO SU BRAZO LONJUDO ANDA FILTRADO POR LA MALDITA DE ERRE ELA EN IG🤣🤣🤣`
];

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4].filter(t => t);

tokens.forEach((token, i) => {
    const client = new Client({ 
        checkUpdate: false,
        makeCache: (manager) => {
            if (['MessageManager', 'ChannelManager', 'GuildMemberManager'].includes(manager.name)) return 0;
            return Infinity;
        }
    });

    const iniciarBot = () => {
        client.login(token).catch(() => console.log(`Error login bot ${i+1}`));
    };

    client.on('ready', () => {
        console.log(`✅ BOT ${i+1} V34 ACTIVO`);
        
        const intervalAtaque = setInterval(async () => {
            const allChannels = [...CANALES_CON_AUTOMOD, ...CANALES_LIBRES];
            const channelID = allChannels[Math.floor(Math.random() * allChannels.length)];
            const target = OBJETIVOS_FIJOS[Math.floor(Math.random() * OBJETIVOS_FIJOS.length)];
            
            try {
                const channel = await client.channels.fetch(channelID);
                if (channel) {
                    const esAuto = CANALES_CON_AUTOMOD.includes(channelID);
                    const msg = esAuto ? msgsCortos[Math.floor(Math.random() * 3)](target) : MSJ_LARGO;
                    await channel.send(`${msg} ${generarBypass()}`);
                }
                client.channels.cache.clear();
            } catch (e) {}
        }, 4500);

        // Desconexión cada hora (1 min de respiro)
        setTimeout(() => {
            clearInterval(intervalAtaque);
            console.log(`💤 BOT ${i+1} DESCANSO PROGRAMADO`);
            client.destroy();
            setTimeout(() => iniciarBot(), 60000); 
        }, 3600000);
    });

    client.on('messageCreate', async (m) => {
        if (OBJETIVOS_FIJOS.includes(m.author.id) && m.author.id !== client.user.id) {
            try { 
                const respuesta = msgsCortos[Math.floor(Math.random() * 3)](m.author.id);
                await m.channel.send(`${respuesta} ${generarBypass()}`); 
            } catch (e) {}
        }
    });

    iniciarBot();
});
