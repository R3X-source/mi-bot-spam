const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

// Servidor para que Railway no mate el proceso
app.get('/', (req, res) => res.send('🛡️ LEGION JS - ESTABLE 🛡️'));
app.listen(process.env.PORT || 8080);

const client = new Client({ checkUpdate: false });

// 🎯 PARCHE DIRECTO AL OBJETO (Evita el error de las capturas)
if (client.settings) {
    client.settings.patch = function() { return this; };
}

const OBJETIVOS = ["1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856", "1447142638326120458"];

// PRIORIDAD 50% en estas dos IDs
const PRIORITARIOS = ["1369181247896817685", "1369174478596345897"];

const CANALES_CON_AUTOMOD = [...PRIORITARIOS, "1369174476574687243", "1379141308131835914", "1369174479825145856", "1369180836582133820", "1369181058490175488"];
const CANALES_LIBRES = ["1240012616328544419", "1266542890767876229", "1270239207071420450", "1239719951435304960"];

const MSJ_LARGO = ".t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4";

const msgsCortos = (t) => [
    `.t cputiñagachatuber <@${t}> \nQUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA BY NEG4 SHE`,
    `.t cejotiñaandgamami <@${t}> \nbrazos más lonjudos mejichanga nalga moncloveña soy tu masho`,
    `.t cejotiñagolpeada <@${t}> \nMALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK...`,
    `.t cjotorra <@${t}> \nmamele más mejichanga...`,
    `.t lorda <@${t}> \ny mientras tanto cjotorra viendo todo...`,
    `.t frijolera <@${t}> \nFRIJOLERA DILE DOMADORA A TU M4CH4...`,
    `.t joan <@${t}> \nmach4 g4m4mita diría la putita marrona...`,
    `.t chichuda <@${t}> \nvengan mejichangas denle tet4...`,
    `.t cjotangaandgamami <@${t}> \nCEJOTORRA Y GAMAMITA SON TAXISTAS...`,
    `.t cejuda2 <@${t}> \nPINCHE PERRA CJOTIÑA SOS UN KAGU3 DE RISA...`,
    `.t nito <@${t}> \nPERRA TIENES Q ENTENDER Q SOS MEXINDIA...`,
    `.t india <@${t}> \nLA MEJINDIA DE VERACRUZ TRAICIONADA POR PABLA...`,
    `.t insana <@${t}> \nTE ARDIÓ LAS NALGAS INSANA...`
];

async function attack() {
    try {
        const target = OBJETIVOS[Math.floor(Math.random() * OBJETIVOS.length)];
        
        // 50% de probabilidad para las IDs prioritarias
        let channelID = Math.random() < 0.50 
            ? PRIORITARIOS[Math.floor(Math.random() * PRIORITARIOS.length)] 
            : [...CANALES_CON_AUTOMOD, ...CANALES_LIBRES].filter(id => !PRIORITARIOS.includes(id))[Math.floor(Math.random() * 9)];

        const channel = client.channels.cache.get(channelID);
        
        // SOLO CANALES DE SERVIDOR (Nada de MDs o grupos)
        if (channel && channel.type === 'GUILD_TEXT') {
            await channel.sendTyping();
            await new Promise(r => setTimeout(r, 2000));

            let msg = CANALES_CON_AUTOMOD.includes(channelID) 
                ? msgsCortos(target)[Math.floor(Math.random() * 13)] 
                : MSJ_LARGO;

            await channel.send(`${msg} 🤣🤣 [${Math.random().toString(36).substring(7).toUpperCase()}]`);
            console.log(`🔥 [${client.user.username}] -> #${channel.name}`);
        }
    } catch (e) {
        // Ignorar errores de API
    }
    setTimeout(attack, 25000); // Ataque cada 25 segundos
}

client.on('ready', () => {
    console.log(`✅ RAID ACTIVADO: ${client.user.tag}`);
    attack();
});

// Proceso para evitar cierres inesperados
process.on('unhandledRejection', (reason, promise) => {});
process.on('uncaughtException', (err, origin) => {});

client.login(process.env.TOKEN_1).catch(() => console.log("Login Fallido"));
