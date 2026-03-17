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
app.get('/', (req, res) => res.send('⚔️ V111 - ESTRATEGIA INVERTIDA: 70% AUTOMOD ⚔️'));
app.listen(process.env.PORT || 8080);

// --- CONFIGURACIÓN DE IDS ---
const ID_SERVER_SIN_AUTOMOD = "1239719951435304960"; // Canal bardeo largo (30% prob)
const ID_MD_PRIORITARIO = "1479927526833914059";   // MD Soboslai (100% Soboslai)
const CANALES_SPAM_CORTO = ["1369181247896817685", "1369174478596345897", "1369174476574687243"]; // Guerra Automod (70% prob)

const ID_OBLIGATORIA = "1479755930483691610"; 
const OBJETIVOS_MENCION = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856"];

const GRAN_BARDEO = `<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> 
\n\nhttps://cdn.discordapp.com/attachments/1469357448665104592/1482890389655388210/youtube-DEWjBDptB8U.mp4 
\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4
\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4
\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4
\n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone CEJOTIÑA AND GAMAMITA IN PREIM DE SER RETIRADA POR NEG4🤣🤣🤣
NI MODO NALGUDA NUS VAMUS A SPOM TODO EL YEAR SHE JADKSJDKSJSKAKD, EDITS EN TU VAGHINH4 SHE JAKSJAJSSKS`;

const MIS_BARDEOS = [".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR", ".t cejotorra MAMELE MÁS MEJICHANGA", ".t lorda CJOTORRA VIENDO TODO con su cara", ".t frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t cejuda2 PINCHE PERRA CJOTIÑA", ".t nito PERRA TIENES Q ENTENDER Q SOS", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiña CHINGERO DE SEMEN EN SUS ANOS", ".t kayada JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE", ".t nalgotanga APURATE NALGOTANGA SALVA", ".t cejud4 SE LE DESCONFIGURO LA NALGA"];

let estaEnDescanso = false;

function crearBot(token) {
    const client = new Client({ checkUpdate: false });
    
    client.on('ready', () => {
        const soySoboslai = client.user.username.toLowerCase().includes("soboslai");
        console.log(`⚔️ [${client.user.tag}] ONLINE. Modo: ${soySoboslai ? "MD PESADO" : "70% AUTOMOD / 30% HEAVY"}`);
        atacar(client, soySoboslai);
    });

    client.on('messageCreate', async (msg) => {
        if (msg.channel.id === ID_SERVER_SIN_AUTOMOD || msg.channel.id === ID_MD_PRIORITARIO) return;
        if (OBJETIVOS_MENCION.includes(msg.author.id) && !msg.author.bot) {
            let bardeo = MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)];
            await msg.reply(`${bardeo} <@${ID_OBLIGATORIA}>`).catch(() => {});
        }
    });

    client.login(token).catch(() => {});
}

async function atacar(bot, soySoboslai) {
    if (estaEnDescanso) return setTimeout(() => atacar(bot, soySoboslai), 5000);

    try {
        const rand = Math.random();
        let targetID;
        let esMensajeLargo = false;

        if (soySoboslai) {
            targetID = ID_MD_PRIORITARIO;
            esMensajeLargo = true;
        } else {
            // NUEVO REPARTO SOLICITADO:
            // 70% a los canales con AUTOMOD (Mensajes cortos rápidos)
            // 30% al canal PESADO (Mensaje largo)
            if (rand < 0.70) {
                targetID = CANALES_SPAM_CORTO[Math.floor(Math.random() * CANALES_SPAM_CORTO.length)];
                esMensajeLargo = false;
            } else {
                targetID = ID_SERVER_SIN_AUTOMOD;
                esMensajeLargo = true;
            }
        }

        const channel = await bot.channels.fetch(targetID).catch(() => null);
        
        if (channel) {
            await channel.sendTyping().catch(() => {});
            // Escritura: Corto (1.5s), Largo (4-6s)
            const writingTime = esMensajeLargo ? (Math.floor(Math.random() * 2000) + 4000) : 1500;

            setTimeout(async () => {
                const rStr = Math.random().toString(36).substring(7);
                let finalMsg = esMensajeLargo ? `${GRAN_BARDEO} \`[V111-${rStr}]\`` : `${MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)]} \`[${rStr}]\``;

                await channel.send(finalMsg).then(() => {
                    // Tiempos de espera: Automod corto (5-8s para ser ametralladora), Largo (10-15s)
                    let delay = esMensajeLargo ? (Math.floor(Math.random() * 5000) + 10000) : (Math.floor(Math.random() * 3000) + 5000);
                    setTimeout(() => atacar(bot, soySoboslai), delay);
                }).catch(() => {
                    setTimeout(() => atacar(bot, soySoboslai), 15000);
                });

            }, writingTime);
        } else {
            setTimeout(() => atacar(bot, soySoboslai), 5000);
        }
    } catch (e) {
        setTimeout(() => atacar(bot, soySoboslai), 5000);
    }
}

setInterval(() => {
    estaEnDescanso = true;
    setTimeout(() => { estaEnDescanso = false; }, 60000);
}, 3600000);

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, process.env.TOKEN_5, process.env.TOKEN_6, process.env.TOKEN_7, process.env.TOKEN_8, process.env.TOKEN_9];
tokens.forEach(t => { if (t) crearBot(t); });
