const { Client } = require('discord.js-selfbot-v13');
const http = require('http');

// =========================================================
// 💉 PERFIL PC 100% (HANDSHAKE)
// =========================================================
const PC_PROPERTIES = {
    $os: 'Windows',
    $browser: 'Discord Client',
    $device: 'desktop',
    $system_locale: 'es-ES',
    $browser_user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Discord/1.0.9006 Chrome/108.0.5359.215 Electron/22.3.2 Safari/537.36',
    $browser_version: '1.0.9006'
};

const MI_ID_CONTROLADOR = "1486526310607224902";
const ID_SERVIDOR_AUTOMOD = "1367693990492635176"; 

const VICTIMAS_VIGILADAS = ["1431785955559215184", "1457521662303015040", "1485179919523643454"];
const CANALES_LIBRES = ["1481514534190448815", "1481516697327243506", "1239719951435304960"];
const CANALES_CON_AUTOMOD = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];

let OBJETIVO_MOM = null; 
let PRIORIDAD_ACTIVA = false; 

const VELOCIDAD_MIN = 7500; 
const VELOCIDAD_MAX = 16000;        

const ESTADO_STREAMING = "WARSZLIZA EN LAS NALGAS DE CJOTIÑA Y LORDA BY EL PRIMO DE EDUARDO🚀"; 
const URL_STREAMING = "https://www.twitch.tv/discord";

const MI_AUTORESPUESTA = "Q PASA PEDORROTE, YO ANDO FOLLANDO EN ESTOS MOMENTOS A LA PERRA FRIJOLERA BISEXUAL PANOCHUDA DE 20 AÑOS DE ASEREJE/CJONALGAS/CJOTRUÑA(<@1467397075204309034>) Y A SU AMIGA PUTITA DE LORDA Q FUERON VETADAS DE LA WARSZLIZA JAKSJAKSJAK";

const B_LARGOS = [
    ` .t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/1nydnn.mp4\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4\n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817> PUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD\n<@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`,
    `.t cjurra <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/gd1za7.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4\nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4\nhttps://files.catbox.moe/j98zth.mp4\nhttps://files.catbox.moe/nlvkg4.mp4\nUFF TU CULO  putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817>\nPUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD <@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`
];

const B_CORTOS = [ ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK", ".t cejotorra MAMELE MÁS MEJICHANGA", ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS", ".t some_frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJIÑO", ".t nito PERRA TIENES Q ENTENDER Q SOS UNA MAMITA", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiñagolpeada CHINGERO DE SEMEN EN SUS ANOS", ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO", ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA Y CORNEADA ERES" ];

const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));
const salt = () => ` \`[${toGreek(Math.random().toString(36).substring(7))}]\``;

async function botAction(client) {
    while (client.isReady) {
        if (!PRIORIDAD_ACTIVA) {
            await new Promise(r => setTimeout(r, Math.floor(Math.random() * (VELOCIDAD_MAX - VELOCIDAD_MIN + 1)) + VELOCIDAD_MIN));
        }

        if (!client.manualPause) {
            try {
                let idCanal, msj;
                if (PRIORIDAD_ACTIVA || OBJETIVO_MOM) {
                    idCanal = OBJETIVO_MOM || CANALES_LIBRES[0];
                    PRIORIDAD_ACTIVA = false; 
                } else {
                    const pool = Math.random() < 0.30 ? CANALES_CON_AUTOMOD : CANALES_LIBRES;
                    idCanal = pool[Math.floor(Math.random() * pool.length)];
                }

                const chan = await client.channels.fetch(idCanal).catch(() => null);
                if (chan) {
                    await chan.sendTyping().catch(() => {});
                    await new Promise(r => setTimeout(r, Math.random() * 3000 + 1500));
                    
                    const sentMsg = await chan.send(toGreek("Warszla")).catch(() => null);
                    if (sentMsg) {
                        await new Promise(r => setTimeout(r, Math.random() * 3000 + 2000));
                        if (chan.guildId === ID_SERVIDOR_AUTOMOD) {
                            let txt = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                            let victima = VICTIMAS_VIGILADAS[Math.floor(Math.random() * VICTIMAS_VIGILADAS.length)];
                            let p = txt.split(" ");
                            msj = `${p[0]} ${p[1]} <@${victima}> ${p.slice(2).join(" ")}`;
                        } else {
                            msj = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
                        }
                        await sentMsg.edit(`${msj}${salt()}`).catch(() => {});
                    }
                }
            } catch (e) {}
        }
    }
}

function iniciarBot(token, index) {
    const client = new Client({ 
        checkUpdate: false, 
        ws: { properties: PC_PROPERTIES }
    });

    client.manualPause = false;
    client.responderCooldowns = new Map(); 

    client.on('ready', () => {
        console.log(`✅ [BOT ${index}] ONLINE | ${client.user.tag}`);
        client.user.setActivity(ESTADO_STREAMING, { type: "STREAMING", url: URL_STREAMING });
        botAction(client);
    });

    client.on('messageCreate', async (msg) => {
        const raw = msg.content.trim();
        const cmd = raw.toLowerCase();
        const esMio = msg.author.id === client.user.id;
        const esControlador = msg.author.id === MI_ID_CONTROLADOR;

        if (esControlador || esMio) {
            if (cmd === "mom") { OBJETIVO_MOM = msg.channel.id; PRIORIDAD_ACTIVA = true; return; }
            if (cmd === "madres") { OBJETIVO_MOM = null; PRIORIDAD_ACTIVA = false; return; }
        }

        if (esMio && !raw.includes("`[")) {
            client.manualPause = true;
            setTimeout(() => { client.manualPause = false; }, 300000); 
            return;
        }

        if (!client.manualPause && msg.mentions.users.has(client.user.id) && !msg.mentions.everyone && !esMio) {
            const uid = msg.author.id;
            const ahora = Date.now();
            const log = client.responderCooldowns.get(uid) || { count: 0, firstMsg: ahora };

            if (ahora - log.firstMsg > 18000000) { log.count = 0; log.firstMsg = ahora; }
            
            if (log.count < 5) {
                log.count++;
                client.responderCooldowns.set(uid, log);
                setTimeout(async () => {
                    try {
                        await msg.channel.sendTyping().catch(() => {});
                        await new Promise(r => setTimeout(r, Math.random() * 2000 + 1000));
                        await msg.reply(MI_AUTORESPUESTA + salt()).catch(() => {});
                    } catch (e) {}
                }, 500);
            }
        }
    });

    client.login(token).catch(() => console.log(`❌ [BOT ${index}] Token inválido o cuenta off.`));
}

for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) {
        setTimeout(() => iniciarBot(t, i), i * 5000);
    }
}

http.createServer((req, res) => res.end('Warszliza V4.1 Final Pro Active')).listen(process.env.PORT || 3000);
