const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

const originalPatch = ClientUserSettingManager.prototype._patch;
ClientUserSettingManager.prototype._patch = function (data) {
    if (data && !data.friend_source_flags) {
        data.friend_source_flags = { all: false, mutual_friends: false, mutual_guilds: false };
    }
    return originalPatch.call(this, data);
};

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('⚔️ V77 - SIMPLE & DEADLY ⚔️'));
app.listen(process.env.PORT || 8080);

const PRIORITARIOS = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const OBJETIVOS_IDS = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856"];

// Tus 20 bardeos de siempre, sin corchetes raros
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

const TEXTOS_CAMUFLAJE = ["cjotiña", "cjotorra", "gamamita"];

let botIndex = 0;
const botsReady = [];

function crearBot(token, nombre) {
    const client = new Client({ checkUpdate: false });
    client.msgCount = 0;
    client.nextCamouflage = Math.floor(Math.random() * 4) + 5; 
    
    client.on('ready', () => {
        console.log(`⚔️ ${nombre} ONLINE`);
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

    try {
        const chanID = PRIORITARIOS[Math.floor(Math.random() * PRIORITARIOS.length)];
        const channel = await bot.channels.fetch(chanID).catch(() => null);
        
        if (channel) {
            await channel.sendTyping();
            
            setTimeout(async () => {
                let finalMsg;
                const target = OBJETIVOS_IDS[Math.floor(Math.random() * OBJETIVOS_IDS.length)];

                // Si toca mensaje de camuflaje
                if (bot.msgCount >= bot.nextCamouflage) {
                    finalMsg = TEXTOS_CAMUFLAJE[Math.floor(Math.random() * TEXTOS_CAMUFLAJE.length)];
                    bot.msgCount = 0;
                    bot.nextCamouflage = Math.floor(Math.random() * 4) + 5;
                } else {
                    // Elegimos un bardeo al azar
                    let bardeo = MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)];
                    
                    // Si el bardeo es de los que Dyno odia, tenemos 70% de chance de saltarlo y elegir otro
                    if (bardeo.includes("insana") || bardeo.includes("cejotorra") || bardeo.includes("cputiña")) {
                        if (Math.random() < 0.7) bardeo = MIS_BARDEOS[0]; // Lo cambia por el primero de la lista para no arriesgar
                    }

                    // 30% de probabilidad de quitarle el ".t " para engañar a Dyno
                    if (Math.random() < 0.3) {
                        bardeo = bardeo.replace(".t ", ""); 
                    }

                    finalMsg = `${bardeo} <@${target}>`;
                    bot.msgCount++;
                }

                await channel.send(finalMsg).catch(() => {});
            }, 2500);
        }
    } catch (e) {}

    // 10 a 20 segundos para que parezca humano
    setTimeout(scheduleNextAttack, Math.floor(Math.random() * 10000) + 10000);
}

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, process.env.TOKEN_5, process.env.TOKEN_6];
tokens.forEach((t, i) => { if (t) crearBot(t, `BOT_${i+1}`); });
