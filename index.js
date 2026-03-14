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
app.get('/', (req, res) => res.send('⚔️ V85 - TOTAL BYPASS ACTIVE ⚔️'));
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
    // Punto exacto donde quitará el ".t" obligatoriamente (entre 1 y 9)
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
            
            // Simulación de escritura humana (4 a 7 seg)
            const writingTime = Math.floor(Math.random() * 3000) + 4000;
            
            setTimeout(async () => {
                let finalMsg;
                const target = OBJETIVOS_IDS[Math.floor(Math.random() * OBJETIVOS_IDS.length)];
                const delta = Math.floor(Math.random() * 9999);
                const rString = generarString(5);

                let bardeo = MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)];

                // Lógica de Bypass Obligatorio: Si el contador llega al número secreto
                if (bot.msgCount === bot.triggerBypass) {
                    // Quitamos el ".t " y mandamos camuflaje o bardeo limpio
                    const camu = TEXTOS_CAMUFLAJE[Math.floor(Math.random() * TEXTOS_CAMUFLAJE.length)];
                    finalMsg = `${camu} <@${target}> \`[${rString}]\``;
                    
                    // Resetear para el siguiente ciclo
                    bot.msgCount = 0;
                    bot.triggerBypass = Math.floor(Math.random() * 9) + 1;
                    console.log(`🛡️ ${currentBotObj.nombre}: Bypass de comando ejecutado.`);
                } else {
                    // Filtrado de palabras riesgo
                    if ((bardeo.includes("insana") || bardeo.includes("cejotorra")) && Math.random() > 0.2) {
                        bardeo = MIS_BARDEOS.filter(b => !b.includes("insana") && !b.includes("cejotorra"))[0];
                    }

                    // Chance aleatoria extra de quitar el punto
                    if (Math.random() < 0.2) bardeo = bardeo.replace(".t ", "");

                    finalMsg = `${bardeo} <@${target}> \`[Δ-${delta}]\` \`${rString}\``;
                    bot.msgCount++;
                }
                
                await channel.send(finalMsg).catch(() => {});
            }, writingTime);
        }
    } catch (e) {}

    // Delay entre ataques de todas las cuentas (15 a 60 seg)
    const nextAttackDelay = Math.floor(Math.random() * 45000) + 15000;
    setTimeout(scheduleNextAttack, nextAttackDelay);
}

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, process.env.TOKEN_5];
tokens.forEach((t, i) => { if (t) crearBot(t, `BOT_${i+1}`); });
