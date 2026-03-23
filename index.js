const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

// --- ⚡ VELOCIDADES ---
const VELOCIDAD = {
    SPAM_CORTO_MIN: 7000, 
    SPAM_CORTO_MAX: 15000, 
    SPAM_LARGO_MIN: 10000, 
    SPAM_LARGO_MAX: 20000, 
    WRITING_TIME: 3000     
};

// --- 🎯 CONFIGURACIÓN ---
const IDS_CONFIG = {
    MDS_PRIORITARIOS: ["1485378554991476786"], 
    OWNERS_GRUPOS: ["1469231575311843328"], 
    SERVER_AUTOMOD: "1367693990492635176",
    SERVERS_SIN_AUTOMOD: ["1239719951435304960"],
    CANALES_SPAM_CORTO: ["1369181247896817685", "1369174478596345897", "1369174476574687243"],
    VICTIMAS: ["1479755930483691610", "1447142638326120458", "1457144912561832182", "1479748142722191514", "1457984414121459856"]
};

// --- 📝 MENSAJES ---
const B_LARGO_1 = `.t penaldo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone CEJOTIÑA AND GAMAMITA IN PREIM DE SER RETIRADA POR NEG4🤣🤣🤣`;

const B_LARGO_2 = `JDKDJLSJFKDJDKS HIJA DE PERR4 NOS VAMOS A SPAM con tu MAMÁ hasta sacar la caca de tu ano, ya Kathys te delató maldita que quiere escaparse del spam\nLORDA ZORRA AND CEJUDA EN TEMÁS DE DAR EL ANO EN PREIM PEEEE CEJOTIÑA AND GAMAMI APOYAN A CR7 Y ESTE MISMO NO QUIERE Pisar SU PAÍS DE INDIOS DONDE TODOS ESTÁN EN PARTES JAJAJAJAJAJ\n\nhttps://media.discordapp.net/attachments/1479303319997644832/1484181067211735161/IMG_20260319_082519_140.jpg \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4 \nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4 \nhttps://files.catbox.moe/j98zth.mp4 \nhttps://files.catbox.moe/nlvkg4.mp4 \nUFF TU CULO ZPRRA CEJUDALORDIANA🤑🤞 PUES ISI WEY PURA ESCENESIA WARSZLEANA EN SUS CONCHAD PEEE`;

const B_CORTOS = [
    ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", 
    ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK", ".t cejotorra MAMELE MÁS MEJICHANGA", 
    ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS", ".t some_frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA", 
    ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJOTIÑA",
    ".t nito PERRA TIENES Q ENTENDER Q SOS UNA MAMITA", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", 
    ".t cputiña CHINGERO DE SEMEN EN SUS ANOS", ".t kayada JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE", 
    ".t nalgotanga APURATE NALGOTANGA SALVA A LORDA", ".t cejud4 SE LE DESCONFIGURO LA NALGA A LORDA", ".t cejot4 tu mejinalga lorda", ".t mallorca abjsodemamiericka", ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA Y CORNEADA ERES JAJAJAJA YA SUPE QUE LILIZ ERA TU PADRE INQUISIDOR QUE TE TENÍA DE PERRA Y TÚ TODA ENAMORADA HACIÉNDOTE LA ROMÁNTICA MIENTRAS TE REVENTABA EL CULO SIN PIEDAD Y TE LLENABA DE MECOS HASTA QUE TE CHORREARAN POR LAS NALGAS GORDAS QUE REBOTAN COMO GELATINA RANCIA" 
];

// --- 🛠️ SISTEMA ---
const originalPatch = ClientUserSettingManager.prototype._patch;
ClientUserSettingManager.prototype._patch = function (data) {
    if (data && !data.friend_source_flags) data.friend_source_flags = { all: false, mutual_friends: false, mutual_guilds: false };
    return originalPatch.call(this, data);
};

function genAntiBan() { return ` \`[${Math.random().toString(36).substring(7)}]\``; }
function randomItem(array) { return array[Math.floor(Math.random() * array.length)]; }

function crearBot(token, num) {
    if (!token) return;
    const client = new Client({ checkUpdate: false });
    client.soyEspecialista = false;

    client.on('ready', async () => {
        console.log(`✅ [TOKEN_${num}] Online: ${client.user.tag}`);
        
        // 🚨 INTENTO AGRESIVO DE MD 🚨
        for (const id of IDS_CONFIG.MDS_PRIORITARIOS) {
            try {
                const target = await client.users.fetch(id);
                const dm = await target.createDM();
                if (dm) {
                    client.soyEspecialista = true;
                    console.log(`🔥 [TOKEN_${num}] MD CONECTADO A ${id}. LISTO PARA SPAM 95%.`);
                    break;
                }
            } catch (err) { console.log(`⚠️ [TOKEN_${num}] Sin acceso al MD ${id}`); }
        }
        atacar(client);
    });
    client.login(token).catch(() => {});
}

async function atacar(bot) {
    try {
        let channelID;
        let modo = "CORTO"; // CORTO, LARGO, PRINCIPAL
        const rand = Math.random();

        // 1. Grupos de Owner Específico (25% - Rotación largos)
        const grupo = bot.channels.cache.find(c => c.type === 'GROUP_DM' && IDS_CONFIG.OWNERS_GRUPOS.includes(c.ownerId));
        
        if (grupo && rand < 0.25) {
            channelID = grupo.id;
            modo = "LARGO";
        } 
        // 2. MD Prioritario (95% - Rotación largos)
        else if (bot.soyEspecialista && rand < 0.95) {
            channelID = randomItem(IDS_CONFIG.MDS_PRIORITARIOS);
            modo = "LARGO";
        } 
        // 3. Servers
        else {
            const serverAuto = bot.guilds.cache.get(IDS_CONFIG.SERVER_AUTOMOD);
            if (serverAuto && rand < 0.50) {
                // Server con Automod (Mensajes cortos, 1 mención)
                const canal = serverAuto.channels.cache.find(c => c.isText());
                channelID = canal ? canal.id : randomItem(IDS_CONFIG.CANALES_SPAM_CORTO);
                modo = "CORTO";
            } else {
                // Servers sin Automod (Mensaje con múltiples menciones)
                channelID = randomItem(IDS_CONFIG.SERVERS_SIN_AUTOMOD);
                modo = "PRINCIPAL";
            }
        }

        // Obtener canal
        let canal;
        if (IDS_CONFIG.MDS_PRIORITARIOS.includes(channelID)) {
            const user = await bot.users.fetch(channelID).catch(() => null);
            canal = user ? await user.createDM().catch(() => null) : null;
        } else {
            canal = await bot.channels.fetch(channelID).catch(() => null);
        }

        if (canal) {
            if (modo !== "CORTO") await canal.sendTyping().catch(() => {});
            
            setTimeout(async () => {
                let msg;
                if (modo === "LARGO") {
                    msg = (Math.random() > 0.5) ? B_LARGO_1 : B_LARGO_2;
                } else if (modo === "PRINCIPAL") {
                    msg = B_LARGO_1;
                } else {
                    // Mensaje corto con mención individual
                    let victima = randomItem(IDS_CONFIG.VICTIMAS);
                    let raw = randomItem(B_CORTOS);
                    let partes = raw.split(" ");
                    msg = `${partes[0]} ${partes[1]} <@${victima}> ${partes.slice(2).join(" ")}`;
                }

                await canal.send(msg + genAntiBan()).then(() => {
                    let d = (modo === "CORTO") ? 8000 : 12000;
                    setTimeout(() => atacar(bot), d);
                }).catch(() => setTimeout(() => atacar(bot), 10000));
            }, VELOCIDAD.WRITING_TIME);
        } else {
            setTimeout(() => atacar(bot), 5000);
        }
    } catch (e) { setTimeout(() => atacar(bot), 5000); }
}

for (let i = 1; i <= 10; i++) { crearBot(process.env[`TOKEN_${i}`], i); }
