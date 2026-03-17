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
app.get('/', (req, res) => res.send('⚔️ V100 - MD EXCLUSIVO & ANTI-ERRORES ⚔️'));
app.listen(process.env.PORT || 8080);

// --- CONFIGURACIÓN DE IDS ---
const CANALES_SPAM_CORTO = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];

// IDs donde SOLO se permite el GRAN_BARDEO (Mensaje largo)
const CANALES_PESADOS = [
    "1239719951435304960", 
    "1479927526833914059" // Tu nueva ID de MD
];

const OBJETIVOS_MENCION = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856"];
const ID_OBLIGATORIA = "1479755930483691610"; 

const GRAN_BARDEO = `<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://cdn.discordapp.com/attachments/1469357448665104592/1482890389655388210/youtube-DEWjBDptB8U.mp4?ex=69b898cb&is=69b7474b&hm=48d4de1b7538fdb127563d0b7a8d7be3363157f3e893d63d6b1737d73fd9240c& \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone CEJOTIÑA AND GAMAMITA IN PREIM DE SER RETIRADA POR NEG4🤣🤣🤣`;

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

let estaEnDescanso = false;

function crearBot(token, nombre) {
    const client = new Client({ checkUpdate: false });
    client.msgCount = 0;
    client.triggerBypass = Math.floor(Math.random() * 8) + 1; 

    client.on('ready', () => {
        console.log(`⚔️ ${nombre} ONLINE.`);
        atacar(client, nombre);
    });

    client.on('messageCreate', async (msg) => {
        // FILTRO DE MD: El autoresponder ignora por completo la ID de MD nueva
        if (CANALES_PESADOS.includes(msg.channel.id)) return; 

        if (OBJETIVOS_MENCION.includes(msg.author.id) && !msg.author.bot) {
            await msg.channel.sendTyping();
            setTimeout(async () => {
                let bardeo = MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)];
                if (Math.random() < 0.3) bardeo = bardeo.replace(".t ", "");
                await msg.reply(`${bardeo} <@${ID_OBLIGATORIA}> [R]`).catch(() => {});
            }, 2500);
        }
    });

    client.login(token).catch(() => {});
}

async function atacar(bot, nombre) {
    if (estaEnDescanso) return setTimeout(() => atacar(bot, nombre), 10000);

    try {
        const rand = Math.random();
        let targetID;
        let esCanalPesado = false;

        // Probabilidad del 33% para canales pesados/MDs
        if (rand < 0.33) {
            targetID = CANALES_PESADOS[Math.floor(Math.random() * CANALES_PESADOS.length)];
            esCanalPesado = true;
        } else {
            targetID = CANALES_SPAM_CORTO[Math.floor(Math.random() * CANALES_SPAM_CORTO.length)];
            esCanalPesado = false;
        }

        const channel = await bot.channels.fetch(targetID).catch(() => null);
        
        if (channel) {
            await channel.sendTyping();
            const writingTime = Math.floor(Math.random() * 3000) + 4000;
            
            setTimeout(async () => {
                let finalMsg;
                const rStr = Math.random().toString(36).substring(7);

                if (esCanalPesado) {
                    // BLOQUEO DE SEGURIDAD: En estos canales NUNCA se enviará mensaje corto
                    finalMsg = `${GRAN_BARDEO} \`[V100-${rStr}]\``;
                } else {
                    if (bot.msgCount >= bot.triggerBypass) {
                        finalMsg = `cjotiña <@${ID_OBLIGATORIA}> \`[${rStr}]\``; 
                        bot.msgCount = 0;
                        bot.triggerBypass = Math.floor(Math.random() * 8) + 1;
                    } else {
                        let bardeo = MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)];
                        const target = OBJETIVOS_MENCION[Math.floor(Math.random() * OBJETIVOS_MENCION.length)];
                        
                        if (Math.random() < 0.25) {
                            bardeo = bardeo.replace(".t ", ""); 
                            finalMsg = `${bardeo} <@${ID_OBLIGATORIA}> \`[${rStr}]\``;
                        } else {
                            finalMsg = `${bardeo} <@${target}> \`[Δ-${Math.floor(Math.random()*999)}]\``;
                        }
                        bot.msgCount++;
                    }
                }
                
                await channel.send(finalMsg).catch(() => {});
                setTimeout(() => atacar(bot, nombre), Math.floor(Math.random() * 22000) + 10000);
            }, writingTime);
        } else {
            setTimeout(() => atacar(bot, nombre), 10000);
        }
    } catch (e) {
        setTimeout(() => atacar(bot, nombre), 10000);
    }
}

setInterval(() => {
    estaEnDescanso = true;
    setTimeout(() => { estaEnDescanso = false; }, 60000);
}, 3600000);

const tokens = [
    process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, 
    process.env.TOKEN_5, process.env.TOKEN_6, process.env.TOKEN_7, process.env.TOKEN_8,
    process.env.TOKEN_9, process.env.TOKEN_10
];
tokens.forEach((t, i) => { if (t) crearBot(t, `BOT_${i+1}`); });
