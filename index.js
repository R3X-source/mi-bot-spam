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
app.get('/', (req, res) => res.send('⚔️ V74 - DIRECT ATTACK ACTIVE ⚔️'));
app.listen(process.env.PORT || 8080);

// --- CONFIGURACIÓN DE IDS ---
const PRIORITARIOS = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const OBJETIVOS_IDS = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856"];

// El video que quieres que se vea siempre
const VIDEO_LINK = "https://files.catbox.moe/d0wcx2.mp4";

// Bardeos directos (sin el .t para que Dyno no te joda)
const MIS_BARDEOS = [
    "warszla JSKSJDJDJD MALDITA MONCLOVEÑA",
    "HEY CHE TE ARDE ESTA PERR4",
    "MAMITA CEJOTORRA CPUTIÑAGACHATUBER",
    "BRAZOS MÁS LONJUDOS CEJOTIÑA",
    "MALDITA Q QUIERE EDITAR CEJOTIÑA GOLPEADA",
    "MAMELE MÁS MEJICHANGA CEJOTORRA",
    "CJOTORRA VIENDO TODO CON SU CARA LORDA",
    "FRIJOLERA DILE DOMADORA",
    "MACH4 G4M4MITA DIRÍA LA PUTITA",
    "VENGAN MEJICHANGAS DENLE TET4 CHICHUDA",
    "CEJOTORRA Y GAMAMITA CJOTANGA",
    "PINCHE PERRA CJOTIÑA CEJUDA",
    "PERRA TIENES Q ENTENDER Q SOS NITO",
    "LA MEJINDIA DE MICHOACAN INDIA",
    "TE ARDIÓ LAS NALGAS INSANA",
    "CHINGERO DE SEMEN EN SUS ANOS CPUTIÑA",
    "JDKDJDJJSS LORDA PUTITA SE CALLO",
    "VAGINA DE CEJOTIÑA SHE CJOTORR4",
    "APURATE NALGOTANGA SALVA",
    "SE LE DESCONFIGURO LA NALGA CEJUD4"
];

let botIndex = 0;
const botsReady = [];

function crearBot(token, nombre) {
    const client = new Client({ checkUpdate: false });
    client.contador = 0;
    client.limite = Math.floor(Math.random() * 8) + 10; 
    client.enReposo = false;

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

    if (bot.contador >= bot.limite && !bot.enReposo) {
        bot.enReposo = true;
        const tiempoReposo = Math.floor(Math.random() * 60000) + 60000;
        setTimeout(() => {
            bot.contador = 0;
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
                    const delta = Math.floor(Math.random() * 99999);
                    const bardeo = MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)];
                    const target = OBJETIVOS_IDS[Math.floor(Math.random() * OBJETIVOS_IDS.length)];
                    
                    // Mandamos bardeo + mención + video directamente
                    const finalMsg = `${bardeo} <@${target}>\n${VIDEO_LINK}\n\`[Δ${delta}]\``;
                    
                    try {
                        await channel.send(finalMsg);
                        bot.contador++;
                    } catch (err) {}
                }, 3000);
            }
        } catch (e) {}
    }

    const nextAttackDelay = Math.floor(Math.random() * 30000) + 40000;
    setTimeout(scheduleNextAttack, nextAttackDelay);
}

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, process.env.TOKEN_5, process.env.TOKEN_6];
tokens.forEach((t, i) => { if (t) crearBot(t, `BOT_${i+1}`); });
