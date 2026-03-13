// ==========================================
// 🛡️ MOTOR DE ASEDIO V35 - OPTIMIZADO
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
app.get('/', (req, res) => res.send('⚔️ V35 - BYPASS COMANDOS ACTIVO ⚔️'));
app.listen(process.env.PORT || 8080);

const SERVER_ID = "1367693990492635176";
const SERVER_ID_2 = "1239701315580592148";
const OBJETIVOS = ["1457984414121459856", "1447142638326120458", "1479755930483691610", "1479748142722191514", "1457144912561832182"];
const PRIORITARIOS = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const CANALES_RANDOM = ["1239719951435304960"];

// --- BARDEOS OPTIMIZADOS ---
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
    ".t cejuda2 PINCHE PERRA CJOTIÑA SOS UN KAGU3 DE RISA SHE NI QUIEN TE TOME ENSERIÓ PENDEJITA SI DESDE Q ESTAS TRAICIONADA TODOS TE HAN VENIDO TOMANDO LA COLA PARA TRAICIONARTE Y OLERTE EL PEDORRO CHE, SI HASTA AJENAS A LA CJ TE QUIEREN OLER EL QLO, HASTA LA MULTICUENTRA TRAVESTI DE HADESA Q ES REDBLACKA TE JODE LAS NALGAS🤣🤣🤣",
    ".t nito PERRA TIENES Q ENTENDER Q SOS MEXINDIA DE MICHOACAN Y ERES CHATARRERA/TAXISTA😈😈😈🫵🫵🫵🤣🤣😂😂😂, PORQUE TUS NALGAS DE MEJICANOTA TUVIERON Q COMPARTIR CUENTA CON LA BISEXUAL CHILENA DE ZATHORNA PARA CUMPLIR SU DESEO DE SER MUJER ANTE GD",
    ".t india LA MEJINDIA DE MICHOACAN TRAICIONADA POR PABLA VERACRUZANA DE POZA RICA (HUNDIDA) Y POR GAMAMITA OTRA VEZ JDKDJJSJS", 
    ".t insana TE ARDIÓ LAS NALGAS INSANA LA MISMA ARJENCHANGA Q FILTRO A LORDA Y CEJOTIÑA JAJAJA",
    ".t cputiña CHINGERO DE SEMEN EN SUS ANOS DE FRACASADAS PE JSJSJS",
    ".t kayada JDKDJDJJSS LORDA PUTITA SE CALLO EN SPAM HACE 1H EN COAHUILA JAJAJDJJSHDW Y ESTO VA A SEGUIR SHE JAKSJDJJDJDJDDK",
    ".t cjotorr4 VAGINA DE CEJOTIÑA SHE JDJSKDJKSJSKSJD",
    ".t nalgotanga APURATE NALGOTANGA SALVA A GAMAMITA Q SE MURIÓ JAJAJAJA, TODAS SE RÍEN DE TI, TE TRAICIONA GAMAMITA Y TE USA💀💀💀💀",
    ".t cejud4 SE LE DESCONFIGURO LA NALGA A CHATARRERA GAMAMITA JAJAJAJAJAJAJAJAJAJAJA"
];

const MSJ_LARGO = `.T CEJOTIÑAANDGAMAMI \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4`;

// --- BYPASS ---
function aplicarBypass(msg) {
    const griegas = ["Σ", "Δ", "Φ", "Ω", "Ψ", "Π", "Ξ", "Λ", "Γ", "Θ", "Ϡ", "Ѧ", "Ѫ"];
    const g = griegas[Math.floor(Math.random() * griegas.length)];
    const num = Math.floor(Math.random() * 999999);
    const hex = Math.random().toString(16).substring(2, 8).toUpperCase();
    
    const lowerMsg = msg.toLowerCase();
    if (lowerMsg.startsWith(".t ")) {
        const resto = msg.slice(3);
        return `.t **[${g}${num}-${hex}]** ${resto}`;
    }
    return `**[${g}${num}-${hex}]** ${msg}`;
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

        setInterval(async () => {
            if (client.isResting) return;
            try {
                const chan = await client.channels.fetch(CANALES_RANDOM[0]).catch(() => null);
                if (chan) {
                    await chan.sendTyping();
                    setTimeout(async () => {
                        await chan.send(aplicarBypass(MSJ_LARGO)).catch(() => null);
                    }, 1500);
                }
            } catch(e){}
        }, 120000);
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
                    }, 1500);
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

    if (bot.msgCount >= 30 && !bot.isResting) {
        bot.isResting = true;
        const restTime = Math.floor(Math.random() * 30000) + 60000;
        setTimeout(() => {
            bot.isResting = false;
            bot.msgCount = 0;
        }, restTime);
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
                }, 2000);
            }
        } catch (e) {}
    }
    setTimeout(scheduleNextAttack, Math.floor(Math.random() * 7000) + 8000);
}

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, process.env.TOKEN_5, process.env.TOKEN_6];
tokens.forEach((t, i) => { if (t) crearBot(t, `BOT_${i+1}`); });
