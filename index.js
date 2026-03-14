const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

// --- PARCHE DE PRIVACIDAD ---
const originalPatch = ClientUserSettingManager.prototype._patch;
ClientUserSettingManager.prototype._patch = function (data) {
    if (data && !data.friend_source_flags) {
        data.friend_source_flags = { all: false, mutual_friends: false, mutual_guilds: false };
    }
    return originalPatch.call(this, data);
};

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('⚔️ V60 - ESTRUCTURA FINAL ⚔️'));
app.listen(process.env.PORT || 8080);

// --- CONFIGURACIÓN DE IDS ---
const SERVER_CON_AUTOMOD = "1367693990492635176"; 
const SERVER_SIN_AUTOMOD = "1239701315580592148"; 
const ID_CANAL_FORZADO = "1239719951435304960"; 

// Se quitó ID_CANAL_FORZADO de aquí para que no sea un objetivo aleatorio
const PRIORITARIOS = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const OBJETIVOS_IDS = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856"];

// --- MENSAJES ---
const MI_MENSAJE_LARGO = `.t cputiñagachatuber <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/d0wcx2.mp4`;

const MIS_BARDEOS = [
    ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA",
    ".t v14 HEY CHE TE ARDE ESTA PERR4",
    ".t cputiñagachatuber MAMITA CEJOTORRA",
    ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS",
    ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR",
    ".t cejotorra MAMELE MÁS MEJICHANGA",
    ".t lorda CJOTORRA VIENDO TODO con su cara",
    ".t frijolera FRIJOLERA DILE DOMADORA",
    ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA",
    ".t chichuda VENGAN MEJICHANGAS DENLE TET4",
    ".t cjotangaandgamami CEJOTORRA Y GAMAMITA",
    ".t cejuda2 PINCHE PERRA CJOTIÑA",
    ".t nito PERRA TIENES Q ENTENDER Q SOS",
    ".t india LA MEJINDIA DE MICHOACAN",
    ".t insana TE ARDIÓ LAS NALGAS INSANA",
    ".t cputiña CHINGERO DE SEMEN EN SUS ANOS",
    ".t kayada JDKDJDJJSS LORDA PUTITA SE CALLO",
    ".t cjotorr4 VAGINA DE CEJOTIÑA SHE",
    ".t nalgotanga APURATE NALGOTANGA SALVA",
    ".t cejud4 SE LE DESCONFIGURO LA NALGA"
];

let botIndex = 0;
const botsReady = [];

function crearBot(token, nombre) {
    const client = new Client({ checkUpdate: false });
    client.contador = 0;
    client.limite = Math.floor(Math.random() * 14) + 18; 
    client.enReposo = false;

    client.on('ready', () => {
        console.log(`⚔️ ${nombre} ONLINE | Meta: ${client.limite}`);
        botsReady.push({ client, nombre });
        if (botsReady.length === 1) scheduleNextAttack();
    });
    client.login(token).catch(() => {});
}

async function scheduleNextAttack() {
    if (botsReady.length === 0) return;
    const currentBotObj = botsReady[botIndex];
    const bot = currentBotObj.client;
    botIndex = (botIndex + 1) % botsReady.length;

    if (bot.contador >= bot.limite && !bot.enReposo) {
        bot.enReposo = true;
        const tiempoReposo = Math.floor(Math.random() * 50000) + 40000;
        setTimeout(() => {
            bot.contador = 0;
            bot.limite = Math.floor(Math.random() * 14) + 18;
            bot.enReposo = false;
        }, tiempoReposo); 
        return scheduleNextAttack(); 
    }

    if (!bot.enReposo) {
        try {
            const chanID = PRIORITARIOS[Math.floor(Math.random() * PRIORITARIOS.length)];
            const channel = await bot.channels.fetch(chanID).catch(() => null);
            
            if (channel) {
                await channel.sendTyping();
                
                setTimeout(async () => {
                    let finalMsg;
                    const invis = "\u200b";
                    const randomSuffix = (Math.random() + 1).toString(36).substring(7);
                    
                    // Lógica corregida: Solo usa mensaje largo si el canal es el específico o el servidor es el de sin automod
                    if (channel.id === ID_CANAL_FORZADO || channel.guildId === SERVER_SIN_AUTOMOD) {
                        finalMsg = `${invis}${MI_MENSAJE_LARGO} \n#${randomSuffix}`;
                    } else {
                        const bardeo = MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)];
                        const target = OBJETIVOS_IDS[Math.floor(Math.random() * OBJETIVOS_IDS.length)];
                        const delta = Math.floor(Math.random() * 99999);
                        finalMsg = `${invis}**[Δ${delta}]** ${bardeo} <@${target}> \`[${randomSuffix}]\``;
                    }
                    
                    await channel.send(finalMsg).then(() => {
                        bot.contador++;
                    }).catch(() => {});
                }, 4000);
            }
        } catch (e) {}
    }

    const nextAttackDelay = Math.floor(Math.random() * 20000) + 40000;
    setTimeout(scheduleNextAttack, nextAttackDelay);
}

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, process.env.TOKEN_5, process.env.TOKEN_6];
tokens.forEach((t, i) => { if (t) crearBot(t, `BOT_${i+1}`); });
        }
    });

    client.login(token).catch(() => {});
}

async function scheduleNextAttack() {
    if (botsReady.length === 0) return;
    const currentBotObj = botsReady[botIndex];
    const bot = currentBotObj.client;
    botIndex = (botIndex + 1) % botsReady.length;

    if (bot.msgCount >= 20 && !bot.isResting) {
        bot.isResting = true;
        console.log(`🛡️ ${currentBotObj.nombre} ENFRIANDO...`);
        setTimeout(() => {
            bot.isResting = false;
            bot.msgCount = 0;
        }, 120000); // 2 min de descanso
        return scheduleNextAttack();
    }

    if (!bot.isResting) {
        try {
            const chanID = PRIORITARIOS[Math.floor(Math.random() * PRIORITARIOS.length)];
            const channel = await bot.channels.fetch(chanID).catch(() => null);
            if (channel) {
                await channel.sendTyping();
                setTimeout(async () => {
                    const target = OBJETIVOS[Math.floor(Math.random() * OBJETIVOS.length)];
                    const bardeo = MIS_MENSAJES[Math.floor(Math.random() * MIS_MENSAJES.length)];
                    await channel.send(aplicarBypass(`${bardeo} <@${target}>`)).catch(() => null);
                    bot.msgCount++;
                }, 4000);
            }
        } catch (e) {}
    }

    // Delay humano entre ataques del sistema (15-25 seg)
    const nextDelay = Math.floor(Math.random() * 10000) + 15000;
    setTimeout(scheduleNextAttack, nextDelay);
}

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, process.env.TOKEN_5, process.env.TOKEN_6];
tokens.forEach((t, i) => { if (t) crearBot(t, `BOT_${i+1}`); });
