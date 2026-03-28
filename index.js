const { Client } = require('discord.js-selfbot-v13');
const http = require('http');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));
const getJitter = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// =========================================================
// 💉 PARCHE DE SISTEMA (Anti-Error friend_source_flags)
// =========================================================
try {
    const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager');
    const oldPatch = ClientUserSettingManager.prototype._patch;
    ClientUserSettingManager.prototype._patch = function(data) {
        if (data && !data.friend_source_flags) {
            data.friend_source_flags = { all: false, mutual_friends: false, mutual_guilds: false };
        }
        return oldPatch.call(this, data);
    };
    console.log("✅ Parche de sistema aplicado correctamente.");
} catch (e) { 
    console.log("⚠️ Parche sistema: No se pudo aplicar, pero el script continuará."); 
}

// =========================================================
// ⚙️ CONFIGURACIÓN DE ARTILLERÍA PESADA
// =========================================================
const MI_ID = "1486526310607224902"; 
const ID_PRIORITARIA = "1481514534190448815"; 
const CANALES_AM = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];
const CANALES_LIBRES = ["1481516697327243506", "1239719951435304960"]; 
const VICTIMAS = ["1431785955559215184", "1457521662303015040", "1485179919523643454"];

let GLOBAL_PAUSE = false;
let ID_MOM = null;
let activeBots = 0;
let victimStats = {};

// =========================================================
// 🔥 TU MENSAJE MAESTRO (GORDITA MICHOACANA)
// =========================================================
const MENSAJE_MAESTRO = "Q HUBOLE GORDITA MICHOACANA, EN ESTE MOMENTO LE ANDO ROMPIENDO LAS NALGAS A LA MAMÁ DE CJOTIÑA/ <@1480289152397213907>/ <@1467397075204309034> JAKAKSKDKSKAKSJSKAJDSKS PINCHE PUTITA VETADA DE LA WARSZLIZA COMO SIEMRPE TU CULOTE SIENDO LA BURLA DE TODA LA COMUNIDAD AL IGUAL Q TU AMIGA PUTITA LORDA🫵🫵🤣🤣🫵🤣🫵";

// =========================================================
// 📦 MENSAJES LARGOS PARA ASEDIO
// =========================================================
const B_LARGOS = [
    ` .t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/1nydnn.mp4\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4\n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817> PUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD\n<@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`,
    ` .t cjurra <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/gd1za7.mp4\nhttps://cdn.discordapp.net/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4\nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4\nhttps://files.catbox.moe/j98zth.mp4\nhttps://files.catbox.moe/nlvkg4.mp4\nUFF TU CULO  putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817>\nPUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD <@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`
];

const B_CORTOS = [".t warszla JSKSJDJDJD", ".t v14 HEY CHE", ".t cputiñagachatuber", ".t cejotiñaandgamami", ".t cejotiñagolpeada", ".t cejotorra", ".t lorda", ".t some_frijolera", ".t joan", ".t chichuda", ".t cjotangaandgamami", ".t ceuda2", ".t nito", ".t india", ".t insana", ".t cputiñagolpeada", ".t penaldo", ".t tuqlo MAMITA ARACELY"];

// =========================================================
// 🏹 AUTORESPONDEDOR MAESTRO
// =========================================================
async function handleAutoResponse(m, client) {
    const isDirectMention = m.mentions.has(client.user.id) || m.mentions.has(MI_ID);
    const hasEveryone = m.content.includes('@everyone') || m.content.includes('@here');
    
    if (!isDirectMention || hasEveryone || GLOBAL_PAUSE) return;

    const userId = m.author.id;
    const now = Date.now();

    if (!victimStats[userId]) victimStats[userId] = { count: 0, resetAt: 0 };

    if (victimStats[userId].resetAt !== 0 && now > victimStats[userId].resetAt) {
        victimStats[userId].count = 0;
        victimStats[userId].resetAt = 0;
    }

    if (victimStats[userId].count >= 5) return;

    if (victimStats[userId].count === 0) {
        victimStats[userId].resetAt = now + (5 * 60 * 60 * 1000);
    }

    victimStats[userId].count++;
    console.log(`🎯 [AUTORESP] ${victimStats[userId].count}/5 para ${m.author.username}`);

    await sleep(getJitter(1500, 2500));
    await m.channel.sendTyping();
    await sleep(getJitter(2000, 4000));

    const code = Math.random().toString(36).substring(7);
    const reply = await m.reply(toGreek("Warszla")).catch(() => null);
    
    if (reply) {
        await sleep(1200);
        await reply.edit(`${MENSAJE_MAESTRO} \`[${code}]\``).catch(() => {});
    }
}

// =========================================================
// 🌀 MOTOR DE ASEDIO
// =========================================================
async function botBrain(client) {
    let msgCount = 0;
    let fatigueLevel = 0;
    
    setInterval(() => {
        console.log(`[${client.user.username}] Reinicio preventivo...`);
        client.destroy();
    }, getJitter(50 * 60 * 1000, 70 * 60 * 1000));

    while (true) {
        try {
            if (!client.isReady || GLOBAL_PAUSE) { 
                await sleep(5000); 
                continue; 
            }

            if (msgCount >= (50 + (fatigueLevel * 10))) {
                const rest = getJitter(40000, 80000) * (fatigueLevel + 1);
                await sleep(rest);
                fatigueLevel = Math.min(fatigueLevel + 1, 3);
                msgCount = 0;
                continue;
            }

            let targetId;
            const seed = Math.random();
            const focusPower = getJitter(350, 400) / 1000;

            if (ID_MOM && Math.random() < 0.225) {
                targetId = ID_MOM;
            } else if (seed < focusPower) {
                targetId = ID_PRIORITARIA;
            } else if (seed < 0.65) {
                targetId = CANALES_AM[getJitter(0, CANALES_AM.length - 1)];
            } else {
                targetId = CANALES_LIBRES[getJitter(0, CANALES_LIBRES.length - 1)];
            }

            const chan = client.channels.cache.get(targetId) || await client.channels.fetch(targetId).catch(() => null);
            if (!chan) continue;

            const wait = (targetId === ID_PRIORITARIA || targetId === ID_MOM) ? getJitter(2500, 4500) : getJitter(10000, 20000);
            await sleep(wait);

            await chan.sendTyping();
            await sleep(getJitter(1000, 2000));

            const m = await chan.send(toGreek("Warszla")).catch(() => null);
            if (m) {
                msgCount++;
                await sleep(1200);
                let txtBase = (targetId === ID_PRIORITARIA || targetId === ID_MOM || CANALES_LIBRES.includes(targetId)) ? 
                          B_LARGOS[getJitter(0, B_LARGOS.length - 1)] : 
                          B_CORTOS[getJitter(0, B_CORTOS.length - 1)].replace(".t ", `.t <@${VICTIMAS[getJitter(0, VICTIMAS.length - 1)]}> `);
                
                await m.edit(`${txtBase} \`[${Math.random().toString(36).substring(7)}]\``).catch(() => {});
            }
        } catch (err) { 
            await sleep(10000); 
        }
    }
}

// =========================================================
// 🚀 LANZAMIENTO CON ANTI-FINGERPRINT
// =========================================================
function launch(token, i) {
    const client = new Client({ 
        checkUpdate: false,
        properties: { 
            $os: i % 2 === 0 ? 'Windows' : 'Linux', 
            $browser: i % 3 === 0 ? 'Chrome' : (i % 3 === 1 ? 'Firefox' : 'Safari'),
            $device: 'Desktop'
        }
    });
    client._isCounted = false;

    client.on('ready', () => {
        if (!client._isCounted) { 
            activeBots++; 
            client._isCounted = true; 
        }
        console.log(`✅ [V7.6] ${client.user.tag} ONLINE`);
        client.user.setActivity("WARSZLIZA PENETRA A CJOTIÑA Y LORDA DICHO POR EL PRIMO DE EDUARDO", { 
            type: "STREAMING", 
            url: "https://twitch.tv/discord" 
        });
        botBrain(client);
    });

    client.on('messageCreate', async (m) => {
        if (m.author.id === MI_ID) {
            const content = m.content.toLowerCase();
            if (content === "madres") { 
                GLOBAL_PAUSE = true; 
                ID_MOM = null; 
            }
            if (content === "mom") { 
                ID_MOM = m.channel.id; 
                GLOBAL_PAUSE = false; 
            }
            if (content === "p") {
                GLOBAL_PAUSE = !GLOBAL_PAUSE;
            }

            if (!m.content.includes('[') && !["mom", "madres", "p"].includes(content)) {
                GLOBAL_PAUSE = true;
                console.log("⚠️ Intervención manual: Pausando bots.");
            }
        }

        await handleAutoResponse(m, client);
    });

    client.on('disconnect', () => {
        if (client._isCounted) { 
            activeBots--; 
            client._isCounted = false; 
        }
        setTimeout(() => client.login(token).catch(() => {}), getJitter(50000, 70000));
    });

    client.login(token).catch(() => {});
}

// =========================================================
// 🌐 INICIO DEL CLÚSTER
// =========================================================
for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => launch(t, i), i * getJitter(3000, 6000));
}

// =========================================================
// 🏥 HEALTH CHECK
// =========================================================
const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: 'online', 
            bots: activeBots, 
            uptime: Math.floor(process.uptime()) + "s",
            paused: GLOBAL_PAUSE
        }));
    } else {
        res.end('Warszliza V7.6 Gordita Michoacana Active');
    }
});

server.listen(process.env.PORT || 3000);
