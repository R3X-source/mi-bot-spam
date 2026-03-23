const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

// --- ⚡ TUS TIEMPOS ---
const VELOCIDAD = {
    SPAM_CORTO_MIN: 9000, 
    SPAM_CORTO_MAX: 18000, 
    SPAM_LARGO_MIN: 10000, 
    SPAM_LARGO_MAX: 20000, 
    WRITING_TIME: 3000     
};

// --- 🎯 CONFIGURACIÓN DE IDS ---
const ID_VICTIMA_VIGILADA = "1469231575311843328"; 
const ID_MD_PRIORITARIO = "1485378554991476786"; 

// --- 🚀 LAS 2 IDS PARA MSJ LARGO (Server sin automod + Canal Nuevo) ---
const IDS_PROPIAS_MSJ_LARGO = ["1239719951435304960", "1481514534190448815"]; 

const CANALES_SPAM_CORTO = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];

const ID_VÍCTIMA_80 = "1479755930483691610"; 
const OBJETIVOS_RESTO = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1457984414121459856"];

// --- 📝 BARDEOS ---
const B_LARGO_1 = `.t penaldo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone CEJOTIÑA AND GAMAMITA IN PREIM DE SER RETIRADA POR NEG4🤣🤣🤣`;

const B_LARGO_2 = `.t penaldo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195>
JDKDJLSJFKDJDKS HIJA DE PERR4 NOS VAMOS A SPAM con tu MAMÁ hasta sacar la caca de tu ano, ya Kathys te delató maldita que quiere escaparse del spam
LORDA ZORRA AND CEJUDA EN TEMÁS DE DAR EL ANO EN PREIM PEEEE CEJOTIÑA AND GAMAMI APOYAN A CR7 Y ESTE MISMO NO QUIERE Pisar SU PAÍS DE INDIOS DONDE TODOS ESTÁN EN PARTES JAJAJAJAJAJ

https://media.discordapp.net/attachments/1479303319997644832/1484181067211735161/IMG_20260319_082519_140.jpg 
https://cdn.discordapp.com/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4 
mejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone
https://files.catbox.moe/pzxi3d.mp4 
https://files.catbox.moe/j98zth.mp4 
https://files.catbox.moe/nlvkg4.mp4 
UFF TU CULO ZPRRA CEJUDALORDIANA🤑🤞 PUES ISI WEY PURA ESCENESIA WARSZLEANA EN SUS CONCHAD PEEE`;

const B_CORTOS = [ ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK", ".t cejotorra MAMELE MÁS MEJICHANGA", ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS", ".t some_frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJOTIÑA", ".t nito PERRA TIENES Q ENTENDER Q SOS UNA MAMITA", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiña CHINGERO DE SEMEN EN SUS ANOS", ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE", ".t nalgotanga APURATE NALGOTANGA SALVA A LORDA", ".t cejud4 SE LE DESCONFIGURO LA NALGA A LORDA", ".t cejot4 tu mejinalga lorda", ".t mallorca abjsodemamiericka", ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA Y CORNEADA ERES JAJAJAJA YA SUPE QUE LILIZ ERA TU PADRE INQUISIDOR QUE TE TENÍA DE PERRA Y TÚ TODA ENAMORADA HACIÉNDOTE LA ROMÁNTICA MIENTRAS TE REVENTABA EL CULO SIN PIEDAD Y TE LLENABA DE MECOS HASTA QUE TE CHORREARAN POR LAS NALGAS GORDAS QUE REBOTAN COMO GELATINA RANCIA" ];

const originalPatch = ClientUserSettingManager.prototype._patch;
ClientUserSettingManager.prototype._patch = function (data) {
    if (data && !data.friend_source_flags) data.friend_source_flags = { all: false, mutual_friends: false, mutual_guilds: false };
    return originalPatch.call(this, data);
};

function genAntiBan() { return ` \`[${Math.random().toString(36).substring(7)}]\``; }

function crearBot(token, num) {
    if (!token) return;
    const client = new Client({ checkUpdate: false });
    client.on('ready', () => {
        console.log(`✅ [${num}] ${client.user.tag} ONLINE.`);
        atacar(client); 
    });
    client.login(token).catch(() => {});
}

async function atacar(bot) {
    try {
        let channelID;
        let esLargo = false;
        const r = Math.random();

        const chPrioritario = await bot.channels.fetch(ID_MD_PRIORITARIO).catch(() => null);
        const mdVictima = bot.channels.cache.find(c => c.type === 'GROUP_DM' && c.ownerId === ID_VICTIMA_VIGILADA);

        if (chPrioritario) {
            if (r < 0.90) { channelID = ID_MD_PRIORITARIO; esLargo = true; }
            else { channelID = CANALES_SPAM_CORTO[Math.floor(Math.random() * CANALES_SPAM_CORTO.length)]; esLargo = false; }
        } else if (mdVictima) {
            if (r < 0.25) { channelID = mdVictima.id; esLargo = true; }
            else { channelID = CANALES_SPAM_CORTO[Math.floor(Math.random() * CANALES_SPAM_CORTO.length)]; esLargo = false; }
        } else {
            if (r < 0.70) { 
                channelID = CANALES_SPAM_CORTO[Math.floor(Math.random() * CANALES_SPAM_CORTO.length)]; 
                esLargo = false; 
            } else { 
                // ELEGIR ENTRE LOS CANALES DE SPAM LARGO (SIN AUTOMOD)
                channelID = IDS_PROPIAS_MSJ_LARGO[Math.floor(Math.random() * IDS_PROPIAS_MSJ_LARGO.length)]; 
                esLargo = true; 
            }
        }

        const target = await bot.channels.fetch(channelID).catch(() => null);
        if (target) {
            if (esLargo) await target.sendTyping().catch(() => {});
            setTimeout(async () => {
                let msg = esLargo ? ((Math.random() < 0.5) ? B_LARGO_1 : B_LARGO_2) : "";
                if (!esLargo) {
                    let victimID = (Math.random() < 0.80) ? ID_VÍCTIMA_80 : OBJETIVOS_RESTO[Math.floor(Math.random() * OBJETIVOS_RESTO.length)];
                    let raw = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                    let p = raw.split(" ");
                    msg = `${p[0]} ${p[1]} <@${victimID}> ${p.slice(2).join(" ")}`;
                }
                await target.send(msg + genAntiBan()).then(() => {
                    setTimeout(() => atacar(bot), esLargo ? VELOCIDAD.SPAM_LARGO_MIN : VELOCIDAD.SPAM_CORTO_MIN);
                }).catch(() => setTimeout(() => atacar(bot), 10000));
            }, VELOCIDAD.WRITING_TIME);
        } else {
            setTimeout(() => atacar(bot), 5000);
        }
    } catch (e) { setTimeout(() => atacar(bot), 5000); }
}

for (let i = 1; i <= 10; i++) { crearBot(process.env[`TOKEN_${i}`], i); }
