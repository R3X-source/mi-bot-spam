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
app.get('/', (req, res) => res.send('⚔️ V86 - 7+ ACCOUNTS OMNI-BYPASS ⚔️'));
app.listen(process.env.PORT || 8080);

const PRIORITARIOS = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const OBJETIVOS_IDS = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856"];

const MIS_BARDEOS = [
    ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4",
    ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS",
    ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR", ".t cejotorra MAMELE MÁS MEJICHANGA",
    ".t lorda CJOTORRA VIENDO TODO con su cara", ".t frijolera FRIJOLERA DILE DOMADORA",
    ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4",
    ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t cejuda2 PINCHE PERRA CJOTIÑA",
    ".t nito PERRA TIENES Q ENTENDER Q SOS", ".t india LA MEJINDIA DE MICHOACAN",
    ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiña CHINGERO DE SEMEN EN SUS ANOS",
    ".t kayada JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE",
    ".t nalgotanga APURATE NALGOTANGA SALVA", ".t cejud4 SE LE DESCONFIGURO LA NALGA"
];

const TEXTOS_CAMUFLAJE = ["cjotiña", "cjotorra", "gamamita"];
const RANDOM_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";

let botIndex = 0;
const botsReady = [];

function generarString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += RANDOM_CHARS.charAt(Math.floor(Math.random() * RANDOM_CHARS.length));
    }
    return result;
}

function crearBot(token, nombre) {
    const client = new Client({ checkUpdate: false });
    client.msgCount = 0;
    client.triggerBypass = Math.floor(Math.random() * 9) + 1; 
    
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
            const writingTime = Math.floor(Math.random() * 3000) + 4000;
            
            setTimeout(async () => {
                let finalMsg;
                const target = OBJETIVOS_IDS[Math.floor(Math.random() * OBJETIVOS_IDS.length)];
                const delta = Math.floor(Math.random() * 9999);
                const rString = generarString(5);

                if (bot.msgCount === bot.triggerBypass) {
                    const camu = TEXTOS_CAMUFLAJE[Math.floor(Math.random() * TEXTOS_CAMUFLAJE.length)];
                    finalMsg = `${camu} <@${target}> \`[${rString}]\``;
                    bot.msgCount = 0;
                    bot.triggerBypass = Math.floor(Math.random() * 9) + 1;
                } else {
                    let bardeo = MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)];
                    if ((bardeo.includes("insana") || bardeo.includes("cejotorra")) && Math.random() > 0.15) {
                        bardeo = MIS_BARDEOS.filter(b => !b.includes("insana") && !b.includes("cejotorra"))[0];
                    }
                    if (Math.random() < 0.2) bardeo = bardeo.replace(".t ", "");
                    finalMsg = `${bardeo} <@${target}> \`[Δ-${delta}]\` \`${rString}\``;
                    bot.msgCount++;
                }
                await channel.send(finalMsg).catch(() => {});
            }, writingTime);
        }
    } catch (e) {}

    const nextAttackDelay = Math.floor(Math.random() * 45000) + 15000;
    setTimeout(scheduleNextAttack, nextAttackDelay);
}

// Soporta hasta 10 tokens en las variables de Railway (TOKEN_1 al TOKEN_10)
const tokens = [
    process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, 
    process.env.TOKEN_4, process.env.TOKEN_5, process.env.TOKEN_6, 
    process.env.TOKEN_7, process.env.TOKEN_8, process.env.TOKEN_9, 
    process.env.TOKEN_10
];

tokens.forEach((t, i) => { if (t) crearBot(t, `BOT_${i+1}`); });
