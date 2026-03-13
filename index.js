// ==========================================
// 🛡️ MOTOR DE ASEDIO V36 - ANTI-DETECCIÓN FINAL
// ==========================================
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
app.get('/', (req, res) => res.send('⚔️ V36 - MODO FANTASMA ACTIVADO ⚔️'));
app.listen(process.env.PORT || 8080);

// IDs DE CONFIGURACIÓN
const SERVER_ID = "1367693990492635176"; // Server con Automod
const SERVER_ID_2 = "1239701315580592148"; // Server sin Automod
const OBJETIVOS = ["1457984414121459856", "1447142638326120458", "1479755930483691610", "1479748142722191514", "1457144912561832182"];
const PRIORITARIOS = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const CANALES_RANDOM = ["1239719951435304960"];

const MIS_MENSAJES = [
    ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA VAMOS A SEGUIR MANDANDU MENSAJES Y MÁS EDITS DE FUR Q TE ARDEN EL CULETE FALLECIDU SH",
    ".t v14 HEY CHE TE ARDE ESTA PERR4 FALLECIDA NOPALERA JAJAJA",
    ".t cputiñagachatuber MAMITA CEJOTORRA QUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA Y DE NEG4 SHE",
    ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS MEJICHANGA NALGA MONCLOVEÑA SOY TU MASHO/TÍO DE 40 AÑOS",
    ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK CUANDO SU BRAZO LONJUDO ANDA FILTRADO POR LA MALDITA DE ERRE ELA EN IG Y HAY CAPS Q TENGO YO Q SON IRREFUTABLES DE ESTO🤣🤣🤣",
    ".t cejotorra MAMELE MÁS MEJICHANGA Q A SIMIAS COMO A TU LAS DEBEN DE LLEVAR AL MATADERO POR MEJICANAS GÜEY",
    ".t lorda Y MIENTRAS TANTO CJOTORRA VIENDO TODO CON SU CARA DE INDIA MEJICANA TENIENDO Q MANTENER A SU MAMITA Y COMO JOTIÑA ES PUTA PUES ES UNA FRIJOPERRA JAJAJA, ",
    ".t frijolera FRIJOLERA DILE DOMADORA A TU M4CH4 Q TE TIENE DE PUTITA Q SOLO GENERAS Q SE BURLEN DE TU NALGA ALABANDO A UNA Q TE TRAICIONA LA NALGA🤣🤣🤣",
    ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA MARRONA Y CONCHUDA DE CEJUDA JAJJAJAA",
    ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU MACHETE JSJAJAJA",
    ".t cjotangaandgamami CEJOTORRA Y GAMAMITA SON TAXISTAS Y ENCIMA TIENEN 20-18 AÑOS Y SU CARA ESTA MÁS DESFIGURADA Y CON LA MENSTRUACIÓN DE LA ABUELA DE CEJOTIÑA 🤣🤣🤣🤣",
    ".t cejuda2 PINCHE PERRA CJOTIÑA SOS UN KAGU3 DE RISA SHE NI QUIEN TE TOME ENSERIÓ PENDEJITA SI DESDE Q ESTAS TRAICIONADA TODOS TE HAN VENIDO TOMANDO LA COLA PARA TRAICIONARTE Y OLERTE EL PEDORRO CHE",
    ".t nito PERRA TIENES Q ENTENDER Q SOS MEXINDIA DE MICHOACAN Y ERES CHATARRERA/TAXISTA😈😈😈🫵🫵🫵🤣🤣😂😂😂",
    ".t india LA MEJINDIA DE MICHOACAN TRAICIONADA POR PABLA VERACRUZANA DE POZA RICA (HUNDIDA) Y POR GAMAMITA OTRA VEZ JDKDJJSJS", 
    ".t insana TE ARDIÓ LAS NALGAS INSANA LA MISMA ARJENCHANGA Q FILTRO A LORDA Y CEJOTIÑA JAJAJA",
    ".t cputiña CHINGERO DE SEMEN EN SUS ANOS DE FRACASADAS PE JSJSJS",
    ".t kayada JDKDJDJJSS LORDA PUTITA SE CALLO EN SPAM HACE 1H EN COAHUILA JAJAJDJJSHDW Y ESTO VA A SEGUIR SHE JAKSJDJJDJDJDDK",
    ".t cjotorr4 VAGINA DE CEJOTIÑA SHE JDJSKDJKSJSKSJD",
    ".t nalgotanga APURATE NALGOTANGA SALVA A GAMAMITA Q SE MURIÓ JAJAJAJA, TODAS SE RÍEN DE TI",
    ".t cejud4 SE LE DESCONFIGURO LA NALGA A CHATARRERA GAMAMITA JAJAJAJAJAJAJAJAJAJAJA"
];

const MSJ_LARGO = `.T CEJOTIÑAANDGAMAMI \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS \nhttps://files.catbox.moe/d0wcx2.mp4`;

// --- BYPASS DE ALTA SEGURIDAD ---
function aplicarBypass(msg) {
    const griegas = ["Σ", "Δ", "Φ", "Ω", "Ψ", "Π", "Ξ", "Λ", "Γ", "Θ"];
    const g = griegas[Math.floor(Math.random() * griegas.length)];
    const num = Math.floor(Math.random() * 999999);
    const invis = "\u200b".repeat(Math.floor(Math.random() * 5) + 1);

    if (msg.toLowerCase().startsWith(".t ")) {
        const resto = msg.slice(3);
        // Formato: .t [COD] invisibles resto (Limpio para Notsotbot)
        return `.t [${g}${num}] ${invis}${resto}`;
    }
    return `[${g}${num}] ${invis}${msg}`;
}

let botIndex = 0;
const botsReady = [];

function crearBot(token, nombre) {
    const client = new Client({ checkUpdate: false });
    client.msgCount = 0;
    client.isResting = false;

    client.on('ready', () => {
        console.log(`⚔️ ${nombre} ONLINE`);
        botsReady.push({ client, nombre });
        if (botsReady.length === 1) scheduleNextAttack();

        // Spam en canal random (Server 2)
        setInterval(async () => {
            if (client.isResting) return;
            try {
                const chan = await client.channels.fetch(CANALES_RANDOM[0]).catch(() => null);
                if (chan) {
                    await chan.sendTyping();
                    setTimeout(async () => {
                        await chan.send(aplicarBypass(MSJ_LARGO)).catch(() => null);
                    }, 2000);
                }
            } catch(e){}
        }, 150000); // Cada 2.5 min
    });

    client.on('messageCreate', async (msg) => {
        if (msg.author.bot || client.isResting) return;
        const esServerValido = msg.guild?.id === SERVER_ID || msg.guild?.id === SERVER_ID_2;

        if (esServerValido && OBJETIVOS.includes(msg.author.id)) {
            if (!PRIORITARIOS.includes(msg.channel.id) && !CANALES_RANDOM.includes(msg.channel.id)) {
                try {
                    await msg.channel.sendTyping();
                    setTimeout(async () => {
                        const bardeo = MIS_MENSAJES[Math.floor(Math.random() * MIS_MENSAJES.length)];
                        await msg.channel.send(aplicarBypass(`${bardeo} <@${msg.author.id}>`));
                        client.msgCount++;
                    }, 2000);
                } catch (e) {}
            }
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
