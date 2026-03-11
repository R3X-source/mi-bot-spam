const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ SISTEMA BLINDADO 🛡️'));
app.listen(process.env.PORT || 8080);

// --- 🛡️ BLOQUE DE SEGURIDAD ANTICRASH ---
// Esto redefine la configuración para que Discord no explote al conectar
const client = new Client({ checkUpdate: false });

client.settings = {
    _patch: function() { return this; },
    patch: function() { return this; }
};

// Forzamos que incluso si la librería intenta borrarlo, no pueda
Object.defineProperty(client, 'settings', {
    value: client.settings,
    writable: false, 
    configurable: false
});
// ----------------------------------------

const SV_AUTOMOD = "1367693990492635176";
const OBJETIVOS = ["1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856", "1447142638326120458"];
const PRIORITARIOS = ["1369181247896817685", "1369174478596345897"];
const CANALES_RANDOM = ["1369174476574687243", "1379141308131835914", "1369174479825145856", "1369180836582133820", "1369181058490175488", "1240012616328544419"];

const MSJ_LARGO = ".t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4";

const msgsCortos = (t) => [
    `.t cputiñagachatuber <@${t}> \nQUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA BY NEG4 SHE`,
    `.t cejotiñaandgamami <@${t}> \nbrazos más lonjudos mejichanga nalga moncloveña soy tu masho`,
    `.t cejotiñagolpeada <@${t}> \nMALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK...`,
    `.t cjotorra <@${t}> \nmamele más mejichanga...`,
    `.t lorda <@${t}> \ny mientras tanto cjotorra viendo todo con su cara de india...`,
    `.t frijolera <@${t}> \nFRIJOLERA DILE DOMADORA A TU M4CH4...`,
    `.t joan <@${t}> \nmach4 g4m4mita diría la putita marrona...`,
    `.t chichuda <@${t}> \nvengan mejichangas denle tet4...`,
    `.t cjotangaandgamami <@${t}> \nCEJOTORRA Y GAMAMITA SON TAXISTAS...`,
    `.t cejuda2 <@${t}> \nPINCHE PERRA CJOTIÑA SOS UN KAGU3 DE RISA...`,
    `.t nito <@${t}> \nPERRA TIENES Q ENTENDER Q SOS MEXINDIA...`,
    `.t india <@${t}> \nLA MEJINDIA DE VERACRUZ TRAICIONADA POR PABLA...`,
    `.t insana <@${t}> \nTE ARDIÓ LAS NALGAS INSANA LA MISMA ARJENCHANGA...`
];

function generarBypass() {
    return `🤣🤣 [${"ΓΔΘΛΞΠΣΦΨΩ"[Math.floor(Math.random()*10)]}-${Math.random().toString(36).substring(7).toUpperCase()}]`;
}

async function attack() {
    try {
        const target = OBJETIVOS[Math.floor(Math.random() * OBJETIVOS.length)];
        let channelID = Math.random() < 0.50 ? PRIORITARIOS[Math.floor(Math.random() * 2)] : CANALES_RANDOM[Math.floor(Math.random() * 6)];
        const channel = await client.channels.fetch(channelID).catch(() => null);
        
        if (channel && channel.type === 'GUILD_TEXT') {
            await channel.sendTyping();
            await new Promise(r => setTimeout(r, 4000));
            let msg = (channel.guild.id === SV_AUTOMOD) ? msgsCortos(target)[Math.floor(Math.random() * 13)] : MSJ_LARGO;
            await channel.send(`${msg} ${generarBypass()}`);
            console.log(`✅ DISPARO: #${channel.name}`);
        }
    } catch (e) {}
    setTimeout(attack, 25000);
}

client.on('ready', () => {
    console.log(`✨ LEGION ONLINE: ${client.user.tag}`);
    attack();
});

console.log("🔑 Entrando...");
client.login(process.env.TOKEN_1).catch(() => console.log("❌ Token muerto"));
