const { Client, Options } = require('discord.js-selfbot-v13');
const http = require('http');

// =========================================================
// 🚀 CONTENIDO DE IMPACTO (INTACTO AL 100%)
// =========================================================
const MENSAJE_AUTORESPONDEDOR = `<@1493834586755694672> <@1493847274579693588> CEJOTIÑA JAJAJAJA 0 TROLEO DE TUS NALGAS PVTITA GAMAMITA MIS HUEBOTS INSOPORTABLES PARA TUS POBRES NALGAS Q NI LAS DEJAREMES EXTENDER PUESTO A Q ACABAMOS https://files.catbox.moe/d0wcx2.mp4 <@1425209744603218020> <@1492265983165862029> <@1427713721479987232> <@984956970014486528> <@1072352198836621385> <@1429177016703516764> <@1438314463970328578> <@1446586105553227807> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@1394021604127936772> <@1452533908699611236> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1462897561894649876> <@1386330375952793723> <@1353778890514108456> <@1480289152397213907> <@1457175804290007197> <@1490277865818689700> <@1492675664682287277> <@1487148931535212817> <@1490277865818689700> <@1457521662303015040> LORDA`;

const B_LARGOS = [
    `.t cjurra <@1425209744603218020> <@1492265983165862029> <@1427713721479987232> <@984956970014486528> <@1072352198836621385> <@1429177016703516764> <@1438314463970328578> <@1446586105553227807> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@1394021604127936772> <@1452533908699611236> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1462897561894649876> <@1386330375952793723> <@1353778890514108456> <@1480289152397213907> <@1457175804290007197> <@1490277865818689700> <@1492675664682287277> <@1487148931535212817> <@1490277865818689700> <@1457521662303015040>\n<@1493834586755694672> <@1493847274579693588> CULOMBIANO ARGENCHANGAS DANIELA @everyone DANIELA\n\nhttps://files.catbox.moe/gd1za7.mp4\nhttps://cdn.discordapp.net/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4\nhttps://files.catbox.moe/pzxi3d.mp4\nUFF TU CULO putita ven acá mejichanga`,
    `.t cejuda17 <@1425209744603218020> <@1492265983165862029> <@1427713721479987232> <@984956970014486528> <@1072352198836621385> <@1429177016703516764> <@1438314463970328578> <@1446586105553227807> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@1394021604127936772> <@1452533908699611236> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1462897561894649876> <@1386330375952793723> <@1353778890514108456> <@1480289152397213907> <@1457175804290007197> <@1490277865818689700> <@1492675664682287277> <@1487148931535212817> <@1490277865818689700> <@1457521662303015040>\n<@1493834586755694672> <@1493847274579693588>\nhttps://files.catbox.moe/hjepth.jpg\nhttps://files.catbox.moe/7q6n62.jpg\nhttps://files.catbox.moe/qkuhmd.jpg\n\nhttps://files.catbox.moe/sss6ma.mp4 JAJAJA\n cierr4 el qlo veneka a spam por don nadia`,
    `.t penaldo <@1493834586755694672> <@1493847274579693588>\n<@1425209744603218020> <@1492265983165862029> <@1427713721479987232> <@984956970014486528> <@1072352198836621385> <@1429177016703516764> <@1438314463970328578> <@1446586105553227807> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/1nydnn.mp4\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4\nhttps://files.catbox.moe/d0wcx2.mp4`
];

const B_CORTOS = [".t warszla JSKSJDJDJD", ".t v14 HEY CHE", ".t lorda", ".t tuqlo MAMITA ARACELY"];
const EMOJIS = ['✅', '💀', '🔥', '⚡', '😈', '🤑', '💎', '💥', '👺'];

// 🎯 CANALES Y OBJETIVOS
const ID_PRIORITARIA = "1481514534190448815";
const CANALES_SPAM = [
    "1270239207071420450", 
    "1266542890767876229", 
    "1481514534190448815"
];

const VIGILADOS_NORMALES = ["1431785955559215184", "1457521662303015040", "1485179919523643454", "1003450010702205030", "1480289152397213907", "1467397075204309034", "1457175804290007197", "1429887342373765146", "1425209744603218020", "1492265983165862029", "1493834586755694672"];
const SERVER_ID_OBLIGATORIO = "1481514532932161538";
const COMANDOS_OBLIGATORIOS = [".t warszla", ".t lorda", ".t gamamit4", ".t dibujos", ".t monclova", ".t chichuda"];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const getJitter = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function firmarMensaje(base) {
    const salt = Math.random().toString(36).substring(7).toUpperCase();
    return `${base} ${EMOJIS[Math.floor(Math.random() * EMOJIS.length)]} \`[${salt}]\``;
}

function formatearComando(mensaje) {
    const cmd = COMANDOS_OBLIGATORIOS[Math.floor(Math.random() * COMANDOS_OBLIGATORIOS.length)];
    return mensaje.replace(/^\.t \w+/, cmd);
}

const ocupado = new Map();

// =========================================================
// 🛡️ DEFENSA (SOLO VIGILADOS NORMALES | ESCRITURA 2-4s)
// =========================================================
function setupVigilancia(client, index) {
    client.on('messageCreate', async (msg) => {
        const id = msg.author.id;
        if (id === client.user.id || !VIGILADOS_NORMALES.includes(id)) return;
        if (ocupado.get(index)) return;

        try {
            await msg.channel.sendTyping().catch(() => {});
            await sleep(getJitter(2000, 4000)); // 🎯 ESCRITURA REAL
            let finalMsg = firmarMensaje(MENSAJE_AUTORESPONDEDOR);
            if (msg.guild?.id === SERVER_ID_OBLIGATORIO) finalMsg = formatearComando(finalMsg);
            await msg.reply(finalMsg).catch(() => {});
        } catch (e) {}
    });
}

// =========================================================
// 🚀 MOTOR DE SPAM (RÁFAGA 30-60 | DELAY 8-19s | ESCRITURA 2-4s)
// =========================================================
async function motorSpam(client, index) {
    while (true) {
        try {
            if (!client.isReady()) { await sleep(5000); continue; }

            let burstSize = getJitter(30, 60); 
            for (let i = 0; i < burstSize; i++) {
                const targetId = CANALES_SPAM[Math.floor(Math.random() * CANALES_SPAM.length)];
                const chan = await client.channels.fetch(targetId).catch(() => null);

                if (chan) {
                    ocupado.set(index, true);
                    
                    await sleep(getJitter(8000, 19000)); // 🎯 DELAY ENTRE MENSAJES
                    await chan.sendTyping().catch(() => {});
                    await sleep(getJitter(2000, 4000)); // 🎯 ESCRITURA REAL
                    
                    let msgFinal = firmarMensaje(B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)]);
                    if (chan.guild?.id === SERVER_ID_OBLIGATORIO) msgFinal = formatearComando(msgFinal);
                    await chan.send(msgFinal).catch(() => {});
                    
                    ocupado.set(index, false);
                }
            }
            await sleep(getJitter(45000, 180000)); // Descanso tras ráfaga
        } catch (e) { await sleep(15000); }
    }
}

// =========================================================
// 👻 LANZAMIENTO (RAILWAY 15 TOKENS | PC FINGERPRINT)
// =========================================================
function launch(token, i) {
    const client = new Client({
        checkUpdate: false,
        makeCache: Options.cacheWithLimits({ MessageManager: 0, PresenceManager: 0, UserManager: 0, GuildMemberManager: 0 }),
        ws: { properties: { $os: 'Windows', $browser: 'Discord Client', $device: 'desktop' } }
    });

    client.on('ready', () => {
        console.log(`✅ [T${i}] ONLINE - RAILWAY V42.0`);
        setupVigilancia(client, i); // Todos defienden vigilados normales
        motorSpam(client, i);      // Todos spamean por separado

        const tRec = getJitter(3600000, 21600000); // 🎯 RECONEXIÓN 1-6H
        setTimeout(() => {
            console.log(`🔄 [T${i}] Reiniciando...`);
            client.destroy();
            setTimeout(() => launch(token, i), 10000);
        }, tRec);
    });

    client.login(token).catch(() => {});
}

// Keep-Alive Server
http.createServer((req, res) => res.end("V42-RAILWAY-ACTIVE")).listen(process.env.PORT || 3000);

for (let i = 1; i <= 15; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => launch(t, i), i * 15000);
}
