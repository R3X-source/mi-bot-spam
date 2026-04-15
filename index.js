const { Client, Options } = require('discord.js-selfbot-v13');
const http = require('http');

// =========================================================
// 🚀 CONTENIDO DE ATAQUE (INTACTO AL 100%)
// =========================================================
const MENSAJE_AUTORESPONDEDOR = `<@1493834586755694672> <@1493847274579693588> CEJOTIÑA JAJAJAJA 0 TROLEO DE TUS NALGAS PVTITA GAMAMITA MIS HUEBOTS INSOPORTABLES PARA TUS POBRES NALGAS Q NI LAS DEJAREMOS EXTENDER PUESTO A Q ACABAMOS https://files.catbox.moe/d0wcx2.mp4 <@1425209744603218020> <@1492265983165862029> <@1427713721479987232> <@984956970014486528> <@1072352198836621385> <@1429177016703516764> <@1438314463970328578> <@1446586105553227807> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@1394021604127936772> <@1452533908699611236> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1462897561894649876> <@1386330375952793723> <@1353778890514108456> <@1480289152397213907> <@1457175804290007197> <@1490277865818689700> <@1492675664682287277> <@1487148931535212817> <@1490277865818689700> <@1457521662303015040> LORDA`;

const B_LARGOS = [
    `.t cjurra  CULOMBIANO ARGENCHANGAS DANIELA @everyone DANIELA\n\nhttps://files.catbox.moe/gd1za7.mp4\nhttps://cdn.discordapp.net/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4\nhttps://files.catbox.moe/pzxi3d.mp4\nUFF TU CULO putita ven acá mejichanga
<@1493834586755694672> <@1493847274579693588>
<@1425209744603218020> <@1492265983165862029> <@1427713721479987232> <@984956970014486528> <@1072352198836621385> <@1429177016703516764> <@1438314463970328578> <@1446586105553227807> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@1394021604127936772> <@1452533908699611236> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1462897561894649876> <@1386330375952793723> <@1353778890514108456> <@1480289152397213907> <@1457175804290007197> <@1490277865818689700> <@1492675664682287277> <@1487148931535212817> <@1490277865818689700> <@1457521662303015040>`,
    `.t cejuda17 https://files.catbox.moe/hjepth.jpg\nhttps://files.catbox.moe/7q6n62.jpg\nhttps://files.catbox.moe/qkuhmd.jpg <@1480289152397213907>\n\nhttps://files.catbox.moe/sss6ma.mp4 JAJAJA\n<@1457175804290007197> <@1492675664682287277> cierr4 el qlo veneka a spam por don nadia
<@1493834586755694672> <@1493847274579693588>
<@1425209744603218020> <@1492265983165862029> <@1427713721479987232> <@984956970014486528> <@1072352198836621385> <@1429177016703516764> <@1438314463970328578> <@1446586105553227807> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@1394021604127936772> <@1452533908699611236> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1462897561894649876> <@1386330375952793723> <@1353778890514108456> <@1480289152397213907> <@1457175804290007197> <@1490277865818689700> <@1492675664682287277> <@1487148931535212817> <@1490277865818689700> <@1457521662303015040>`,
    `.t penaldo <@1493834586755694672> <@1493847274579693588>
<@1425209744603218020> <@1492265983165862029> <@1427713721479987232> <@984956970014486528> <@1072352198836621385> <@1429177016703516764> <@1438314463970328578> <@1446586105553227807> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@1394021604127936772> <@1452533908699611236> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1462897561894649876> <@1386330375952793723> <@1353778890514108456> <@1480289152397213907> <@1457175804290007197> <@1490277865818689700> <@1492675664682287277> <@1487148931535212817> <@1490277865818689700> <@1457521662303015040>\n\nhttps://files.catbox.moe/1nydnn.mp4\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga`
];

const B_CORTOS = [".t warszla JSKSJDJDJD", ".t v14 HEY CHE", ".t lorda", ".t tuqlo MAMITA ARACELY"];
const EMOJIS = ['✅', '💀', '🔥', '⚡', '😈', '🤑 ', '💎', '💥', '👹', '🔪'];

// 🎯 CONFIGURACIÓN DE OBJETIVOS
const ID_PRIORITARIA = "1481514534190448815";
const CANALES_AM = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];
const CANALES_LIBRES = ["1270239207071420450", "1266542890767876229", "1487148931535212817"];
const VIGILADOS_TODOS = ["1431785955559215184", "1457521662303015040", "1485179919523643454", "1003450010702205030", "1480289152397213907", "1467397075204309034", "1457175804290007197", "1429887342373765146", "1425209744603218020", "1492265983165862029", "1493834586755694672", "1487148931535212817", "1492675664682287277", "1490277865818689700"];
const SERVER_ID_OBLIGATORIO = "1481514532932161538";
const COMANDOS_OBLIGATORIOS = [".t warszla", ".t lorda", ".t gamamit4", ".t dibujos", ".t monclova", ".t aracely", ".t ch", ".t chichuda"];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const getJitter = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// =========================================================
// 🛡️ MOTOR DE FIRMA (ANTI-BAN)
// =========================================================
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
// 🛡️ DEFENSA (TODAS LAS CUENTAS INDEPENDIENTES)
// =========================================================
function setupVigilancia(client, index) {
    client.on('messageCreate', async (msg) => {
        const id = msg.author.id;
        if (id === client.user.id || !VIGILADOS_TODOS.includes(id)) return;
        if (ocupado.get(index)) return;

        try {
            await msg.channel.sendTyping().catch(() => {});
            await sleep(getJitter(2000, 4000)); // 🎯 ESCRITURA 2-4s
            let finalMsg = firmarMensaje(MENSAJE_AUTORESPONDEDOR);
            if (msg.guild?.id === SERVER_ID_OBLIGATORIO) finalMsg = formatearComando(finalMsg);
            await msg.reply(finalMsg).catch(() => {});
        } catch (e) {}
    });
}

// =========================================================
// 🚀 MOTOR DE SPAM (ELITE RAILWAY)
// =========================================================
async function motorSpam(client, index) {
    while (true) {
        try {
            if (!client.isReady()) { await sleep(5000); continue; }

            // 🎯 RÁFAGA DE 30-60 MENSAJES
            let burstSize = getJitter(30, 60);
            for (let i = 0; i < burstSize; i++) {
                let targetId, baseMsg;
                const rand = Math.random();
                if (rand < 0.60) { targetId = ID_PRIORITARIA; baseMsg = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)]; }
                else if (rand < 0.85) { targetId = CANALES_AM[Math.floor(Math.random() * CANALES_AM.length)]; baseMsg = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)]; }
                else { targetId = CANALES_LIBRES[Math.floor(Math.random() * CANALES_LIBRES.length)]; baseMsg = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)]; }

                const chan = await client.channels.fetch(targetId).catch(() => null);
                if (chan) {
                    ocupado.set(index, true);
                    
                    // 🎯 DELAY INDIVIDUAL: 8 a 19 segundos
                    await sleep(getJitter(8000, 19000)); 
                    
                    await chan.sendTyping().catch(() => {});
                    await sleep(getJitter(2000, 4000)); // 🎯 ESCRITURA 2-4s
                    
                    let msgFinal = firmarMensaje(baseMsg);
                    if (chan.guild?.id === SERVER_ID_OBLIGATORIO) msgFinal = formatearComando(msgFinal);
                    
                    await chan.send(msgFinal).catch(() => {});
                    ocupado.set(index, false);
                }
            }
            // 🎯 DESCANSO TRAS RÁFAGA (45 seg a 3 min)
            await sleep(getJitter(45000, 180000));
            
        } catch (e) { await sleep(15000); }
    }
}

// =========================================================
// 👻 LANZAMIENTO (15 CUENTAS RAILWAY)
// =========================================================
function launch(token, i) {
    const client = new Client({
        checkUpdate: false,
        makeCache: Options.cacheWithLimits({ MessageManager: 0, PresenceManager: 0, UserManager: 0, GuildMemberManager: 0 }),
        ws: { properties: { $os: 'Windows', $browser: 'Discord Client', $device: 'desktop' } }
    });

    client.on('ready', () => {
        console.log(`✅ [T${i}] ONLINE - RAILWAY ASALTO`);
        setupVigilancia(client, i);
        motorSpam(client, i); // Todos spamean y defienden por separado

        // 🎯 RECONEXIÓN ESTRATÉGICA (1 a 6 horas)
        const tRec = getJitter(3600000, 21600000);
        setTimeout(() => {
            console.log(`🔄 [T${i}] Reiniciando sesión...`);
            client.destroy();
            setTimeout(() => launch(token, i), 10000);
        }, tRec);
    });

    client.login(token).catch(() => {});
}

// Keep-Alive Server
http.createServer((req, res) => res.end("V35-RAILWAY-ACTIVE")).listen(process.env.PORT || 3000);

for (let i = 1; i <= 15; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => launch(t, i), i * 15000); 
}
