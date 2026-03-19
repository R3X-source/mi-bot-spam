const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

// --- ⚡ CONTROLES DE VELOCIDAD ⚡ ---
const VELOCIDAD = {
    SPAM_CORTO_MIN: 7000, 
    SPAM_CORTO_MAX: 17000, 
    SPAM_LARGO_MIN: 10000, 
    SPAM_LARGO_MAX: 20000, 
    WRITING_TIME: 3000     
};

// --- 🎯 CONFIGURACIÓN DE IDS ---
const ID_MD_PRIORITARIO = "1484027185961369770"; 
const ID_SERVER_SIN_AUTOMOD = "1239719951435304960"; 
const ID_CUENTA_SECUNDARIA = "1481837336080679045"; 

const CANALES_SPAM_CORTO = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const ID_VÍCTIMA_80 = "1479755930483691610"; 
const OBJETIVOS_RESTO = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1457984414121459856"];

// --- 📝 BARDEOS (ORDEN: .t [tag] [insulto]) ---
const MIS_BARDEOS = [
    ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", 
    ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR", ".t cejotorra MAMELE MÁS MEJICHANGA", 
    ".t lorda CJOTORRA VIENDO TODO con su cara", ".t frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA", 
    ".t chichuda VENGAN MEJICHANGAS DENLE TET4", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJOTIÑA",
    ".t nito PERRA TIENES Q ENTENDER Q SOS", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", 
    ".t cputiña CHINGERO DE SEMEN EN SUS ANOS", ".t kayada JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE", 
    ".t nalgotanga APURATE NALGOTANGA SALVA", ".t cejud4 SE LE DESCONFIGURO LA NALGA"
];

const GRAN_BARDEO_PRINCIPAL = `<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA @everyone \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone CEJOTIÑA AND GAMAMITA IN PREIM`;

const GRAN_BARDEO_MEDIANO = `JDKDJLSJFKDJDKS HIJA DE PERR4 NOS VAMOS A SPAM CON TU MAMÁ HASTA SACARTE LA KAGADA DEL ANO CHE, YA KATHYS TE DELATÓ MALDITA Q QUIERE ESCAPARSE DEL SPAM... \nhttps://media.discordapp.net/attachments/1479303319997644832/1484181067211735161/IMG_20260319_082519_140.jpg \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4 \nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone`;

// --- 🛠️ SISTEMA ---
const originalPatch = ClientUserSettingManager.prototype._patch;
ClientUserSettingManager.prototype._patch = function (data) {
    if (data && !data.friend_source_flags) data.friend_source_flags = { all: false, mutual_friends: false, mutual_guilds: false };
    return originalPatch.call(this, data);
};

function genAntiBan() {
    const griegas = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ξ", "π", "ρ", "σ", "τ", "φ", "ψ", "ω"];
    return ` \`[${Math.random().toString(36).substring(7)}-${griegas[Math.floor(Math.random() * griegas.length)]}]\``;
}

function crearBot(token) {
    const client = new Client({ checkUpdate: false });
    client.contadorSpam = 0;
    client.limiteSinPrefijo = Math.floor(Math.random() * 5) + 5; 

    client.on('ready', () => {
        const soySoboslai = client.user.username.toLowerCase().includes("soboslai");
        const soySecundaria = client.user.id === ID_CUENTA_SECUNDARIA;
        atacar(client, soySoboslai, soySecundaria);
    });
    client.login(token).catch(() => {});
}

async function atacar(bot, soySoboslai, soySecundaria) {
    try {
        let targetID;
        let esLargo = false;
        const rand = Math.random();

        if (soySoboslai) {
            targetID = ID_MD_PRIORITARIO;
            esLargo = true;
        } else if (soySecundaria) {
            if (rand < 0.70) { targetID = ID_MD_PRIORITARIO; esLargo = true; }
            else { targetID = CANALES_SPAM_CORTO[Math.floor(Math.random() * CANALES_SPAM_CORTO.length)]; esLargo = false; }
        } else {
            if (rand < 0.70) { targetID = CANALES_SPAM_CORTO[Math.floor(Math.random() * CANALES_SPAM_CORTO.length)]; esLargo = false; }
            else { targetID = ID_SERVER_SIN_AUTOMOD; esLargo = true; }
        }

        const channel = await bot.channels.fetch(targetID).catch(() => null);
        if (channel) {
            if (esLargo) await channel.sendTyping().catch(() => {});
            
            setTimeout(async () => {
                let finalMsg;
                if (esLargo) {
                    finalMsg = (soySecundaria) ? GRAN_BARDEO_MEDIANO : GRAN_BARDEO_PRINCIPAL;
                    finalMsg += genAntiBan();
                } else {
                    let objetivo = (CANALES_SPAM_CORTO.includes(targetID) && Math.random() < 0.80) 
                        ? ID_VÍCTIMA_80 
                        : OBJETIVOS_RESTO[Math.floor(Math.random() * OBJETIVOS_RESTO.length)];

                    let bardeoOriginal = MIS_BARDEOS[Math.floor(Math.random() * MIS_BARDEOS.length)];
                    bot.contadorSpam++;
                    
                    // --- 🔄 LÓGICA DE CICLO CORREGIDA ---
                    if (bot.contadorSpam >= bot.limiteSinPrefijo) {
                        // MODO SIN PREFIJO: Solo mención y bardeo (sin el ".t tag")
                        let limpio = bardeoOriginal.split(" ").slice(2).join(" "); 
                        finalMsg = `<@${objetivo}> ${limpio}${genAntiBan()}`;
                        
                        if (bot.contadorSpam >= bot.limiteSinPrefijo + 3) {
                            bot.contadorSpam = 0;
                            bot.limiteSinPrefijo = Math.floor(Math.random() * 5) + 5;
                        }
                    } else {
                        // MODO NORMAL: ".t tag <@id> bardeo"
                        let partes = bardeoOriginal.split(" ");
                        let prefijoYTag = partes[0] + " " + partes[1]; // ".t tag"
                        let insulto = partes.slice(2).join(" "); // "resto del bardeo"
                        finalMsg = `${prefijoYTag} <@${objetivo}> ${insulto}${genAntiBan()}`;
                    }
                }

                await channel.send(finalMsg).then(() => {
                    let d = esLargo 
                        ? (Math.floor(Math.random() * (VELOCIDAD.SPAM_LARGO_MAX - VELOCIDAD.SPAM_LARGO_MIN)) + VELOCIDAD.SPAM_LARGO_MIN)
                        : (Math.floor(Math.random() * (VELOCIDAD.SPAM_CORTO_MAX - VELOCIDAD.SPAM_CORTO_MIN)) + VELOCIDAD.SPAM_CORTO_MIN);
                    setTimeout(() => atacar(bot, soySoboslai, soySecundaria), d);
                }).catch(() => setTimeout(() => atacar(bot, soySoboslai, soySecundaria), 20000));
            }, VELOCIDAD.WRITING_TIME);
        }
    } catch (e) { setTimeout(() => atacar(bot, soySoboslai, soySecundaria), 10000); }
}

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, process.env.TOKEN_5, process.env.TOKEN_6, process.env.TOKEN_7, process.env.TOKEN_8, process.env.TOKEN_9];
tokens.forEach(t => { if (t) crearBot(t); });
