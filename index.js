const { Client } = require('discord.js-selfbot-v13');
const http = require('http');

// === 💉 PARCHE "ANTI-MUERTE" (Inyectado para que Railway no explote) ===
try {
    const UserUpdateAction = require('discord.js-selfbot-v13/src/client/actions/UserUpdate');
    const oldHandle = UserUpdateAction.prototype.handle;
    UserUpdateAction.prototype.handle = function(data) {
        if (data.user) data.user.friend_source_flags = data.user.friend_source_flags || { all: false, mutual_friends: false };
        return oldHandle.call(this, data);
    };
} catch (e) {}

// === ⚙️ CONFIGURACIÓN ===
const MI_ID_CONTROLADOR = "1486526310607224902";
const CANALES_LIBRES = ["1481514534190448815", "1481516697327243506", "1239719951435304960"];
const CANALES_CON_AUTOMOD = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];

let activo = true; 
const VELOCIDAD_MIN = 8000; 
const VELOCIDAD_MAX = 15000;        

// === 🛡️ OFUSCACIÓN INTELIGENTE (Protege menciones y links) ===
const ofuscar = (t) => {
    const inv = ["\u200b", "\u200c", "\u200d"];
    return t.split(/(\s+|<@[!&]?\d+>|@everyone|@here|https?:\/\/[^\s]+)/).map(part => {
        if (/^(<@|http|@everyone|@here|\s+)/.test(part)) return part;
        return part.split("").map(c => c + (Math.random() < 0.12 ? inv[Math.floor(Math.random() * inv.length)] : "")).join("");
    }).join("");
};

const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));

// === 📝 LISTA DE ATAQUES (MENSAJE 1, MENSAJE 2 Y CORTOS) ===
const B_LARGOS = [
    // Mensaje Largo 1
    `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/1nydnn.mp4\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4\n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>`,
    
    // Mensaje Largo 2 (EL QUE PEDÍAS)
    `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://media.discordapp.net/attachments/1479303319997644832/1484181067211735161/IMG_20260319_082519_140.jpg\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4\nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4\nhttps://files.catbox.moe/j98zth.mp4\nhttps://files.catbox.moe/nlvkg4.mp4\nUFF TU CULO ZPRRA CEJUDALORDIANA🤑🤞 PUES ISI WEY PURA ESCENESIA WARSZLEANA EN SUS CONCHAD PEEE, putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>`
];

const B_CORTOS = [
    ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA",
    ".t v14 HEY CHE TE ARDE ESTA PERR4",
    ".t cputiñagachatuber MAMITA CEJOTORRA",
    ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS",
    ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK",
    ".t cejotorra MAMELE MÁS MEJICHANGA",
    ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS",
    ".t some_frijolera FRIJOLERA DILE DOMADORA",
    ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA",
    ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO"
];

async function botAction(client) {
    while (client.isReady) {
        await new Promise(r => setTimeout(r, Math.floor(Math.random() * (VELOCIDAD_MAX - VELOCIDAD_MIN + 1)) + VELOCIDAD_MIN));
        if (activo) {
            try {
                // Elegir canal y tipo de bardeo (Largos vs Cortos)
                const idCanal = Math.random() < 0.6 ? CANALES_LIBRES[Math.floor(Math.random() * CANALES_LIBRES.length)] : CANALES_CON_AUTOMOD[Math.floor(Math.random() * CANALES_CON_AUTOMOD.length)];
                const chan = await client.channels.fetch(idCanal).catch(() => null);
                if (chan) {
                    const esLargo = Math.random() < 0.4;
                    const msjRaw = esLargo ? B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)] : B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                    await chan.send(`${ofuscar(msjRaw)} \`[${toGreek(Math.random().toString(36).substring(7))}]\``);
                }
            } catch (e) { console.log("Error de envío, reintentando..."); }
        }
    }
}

function iniciarBot(token, index) {
    const client = new Client({ checkUpdate: false });
    client.on('ready', () => {
        console.log(`✅ [BOT ${index}] ${client.user.tag} ONLINE`);
        botAction(client);
    });
    client.login(token).catch(() => {});
}

for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => iniciarBot(t, i), i * 3500);
}

http.createServer((req, res) => res.end('WARSZLIZA ACTIVA')).listen(process.env.PORT || 3000);
