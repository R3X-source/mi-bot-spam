const { Client } = require('discord.js-selfbot-v13');
const http = require('http');

// =========================================================
// 💉 PARCHE DE SISTEMA
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
} catch (e) { console.log("⚠️ Error parcheando librería."); }

// =========================================================
// ⚙️ CONFIGURACIÓN
// =========================================================
const PC_PROPERTIES = { $os: 'Windows', $browser: 'Discord Client', $device: 'desktop' };
const MI_ID_CONTROLADOR = "1486526310607224902";
const ID_SERVIDOR_AUTOMOD = "1367693990492635176"; 
const VICTIMAS_VIGILADAS = ["1431785955559215184", "1457521662303015040", "1485179919523643454"];
const CANALES_LIBRES = ["1481514534190448815", "1481516697327243506", "1239719951435304960"];
const CANALES_CON_AUTOMOD = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];

let OBJETIVO_MOM = null; 
const TIEMPO_REPOSO = 60000; // 1 mensaje por minuto en canales normales
const TIEMPO_ATAQUE = 1500;   // Concentración total en ID prioritaria

const ESTADO_STREAMING = "WARSZLIZA EN LAS NALGAS DE CJOTIÑA Y LORDA BY EL PRIMO DE EDUARDO🚀"; 
const URL_STREAMING = "https://www.twitch.tv/discord";

const B_LARGOS = [
    ` .t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/1nydnn.mp4\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4\n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817> PUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD\n<@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`,
    `.t cjurra <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/gd1za7.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4\nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4\nhttps://files.catbox.moe/j98zth.mp4\nhttps://files.catbox.moe/nlvkg4.mp4\nUFF TU CULO  putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817>\nPUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD <@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`
];

const B_CORTOS = [ ".t warszla JSKSJDJDJD", ".t v14 HEY CHE", ".t cputiñagachatuber", ".t cejotiñaandgamami", ".t cejotiñagolpeada", ".t cejotorra", ".t lorda", ".t some_frijolera", ".t joan", ".t chichuda", ".t cjotangaandgamami", ".t ceuda2", ".t nito", ".t india", ".t insana", ".t cputiñagolpeada", ".t penaldo", ".t tuqlo MAMITA ARACELY" ];

const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));
const salt = () => ` \`[${toGreek(Math.random().toString(36).substring(7))}]\``;

async function botAction(client) {
    while (true) {
        if (!client.isReady) break;

        // VELOCIDAD DINÁMICA: 1.5s si hay objetivo MOM, 60s si está repartido
        const delay = OBJETIVO_MOM ? TIEMPO_ATAQUE : TIEMPO_REPOSO;
        await new Promise(r => setTimeout(r, delay));

        try {
            let idCanal = OBJETIVO_MOM || (Math.random() < 0.30 ? CANALES_CON_AUTOMOD[Math.floor(Math.random() * CANALES_CON_AUTOMOD.length)] : CANALES_LIBRES[Math.floor(Math.random() * CANALES_LIBRES.length)]);
            
            const chan = client.channels.cache.get(idCanal) || await client.channels.fetch(idCanal).catch(() => null);
            if (chan) {
                chan.sendTyping().catch(() => {});
                const sentMsg = await chan.send(toGreek("Warszla")).catch(() => null);
                if (sentMsg) {
                    await new Promise(r => setTimeout(r, 1000));
                    let finalMsj;
                    if (chan.guildId === ID_SERVIDOR_AUTOMOD) {
                        let txt = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                        let victima = VICTIMAS_VIGILADAS[Math.floor(Math.random() * VICTIMAS_VIGILADAS.length)];
                        finalMsj = txt.replace(".t ", `.t <@${victima}> `);
                    } else { 
                        finalMsj = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)]; 
                    }
                    await sentMsg.edit(`${finalMsj}${salt()}`).catch(() => {});
                }
            }
        } catch (e) { console.log("🚨 Reintentando..."); }
    }
}

function iniciarBot(token, index) {
    const client = new Client({ checkUpdate: false, ws: { properties: PC_PROPERTIES } });

    client.on('ready', () => {
        console.log(`✅ [BOT ${index}] ONLINE | ${client.user.tag}`);
        client.user.setActivity(ESTADO_STREAMING, { type: "STREAMING", url: URL_STREAMING });
        botAction(client);
    });

    client.on('messageCreate', async (msg) => {
        if (msg.author.id === MI_ID_CONTROLADOR || msg.author.id === client.user.id) {
            const cmd = msg.content.toLowerCase();
            if (cmd === "mom") { 
                OBJETIVO_MOM = msg.channel.id; 
                console.log(`🔥 FOCO TOTAL EN: ${msg.channel.id}`);
                return; 
            }
            if (cmd === "madres") { 
                OBJETIVO_MOM = null; 
                console.log("🧊 REGRESANDO A MODO REPOSO (1 msj/min)");
                return; 
            }
        }
    });

    client.login(token).catch(() => {});
}

for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => iniciarBot(t, i), i * 3500);
}
http.createServer((req, res) => res.end('Warszliza Active')).listen(process.env.PORT || 3000);
