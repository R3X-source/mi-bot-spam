const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

// --- ⚡ CONTROLES DE VELOCIDAD ---
const VELOCIDAD = {
    SPAM_CORTO_MIN: 7000, 
    SPAM_CORTO_MAX: 15000, 
    SPAM_LARGO_MIN: 10000, 
    SPAM_LARGO_MAX: 20000, 
    WRITING_TIME: 3000     
};

// --- 🎯 CONFIGURACIÓN DINÁMICA DE IDS (Puedes añadir cuantas quieras) ---
const IDS_CONFIG = {
    MDS_PRIORITARIOS: ["1485378554991476786"], // Aquí puedes meter más IDs de MDs
    OWNERS_GRUPOS_OBJETIVO: ["1469231575311843328"], // IDs de dueños de grupos para spam (25%)
    SERVERS_SIN_AUTOMOD: ["1239719951435304960"], 
    CUENTAS_SECUNDARIAS_MANUALES: ["1481837336080679045"], 
    CANALES_SPAM_CORTO: ["1369181247896817685", "1369174478596345897", "1369174476574687243"],
    VICTIMAS_PRIORITARIAS: ["1479755930483691610"], // IDs para el 80% de probabilidad
    OBJETIVOS_RESTO: ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1457984414121459856"]
};

// --- 📝 BARDEOS ---
const GRAN_BARDEO_PRINCIPAL = `.t penaldo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone CEJOTIÑA AND GAMAMITA IN PREIM DE SER RETIRADA POR NEG4🤣🤣🤣`;

const GRAN_BARDEO_MEDIANO = `JDKDJLSJFKDJDKS HIJA DE PERR4 NOS VAMOS A SPAM con tu MAMÁ hasta sacar la caca de tu ano, ya Kathys te delató maldita que quiere escaparse del spam\nLORDA ZORRA AND CEJUDA EN TEMÁS DE DAR EL ANO EN PREIM PEEEE CEJOTIÑA AND GAMAMI APOYAN A CR7 Y ESTE MISMO NO QUIERE Pisar SU PAÍS DE INDIOS DONDE TODOS ESTÁN EN PARTES JAJAJAJAJAJ\n\nhttps://media.discordapp.net/attachments/1479303319997644832/1484181067211735161/IMG_20260319_082519_140.jpg \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4 \nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4 \nhttps://files.catbox.moe/j98zth.mp4 \nhttps://files.catbox.moe/nlvkg4.mp4 \nUFF TU CULO ZPRRA CEJUDALORDIANA🤑🤞 PUES ISI WEY PURA ESCENESIA WARSZLEANA EN SUS CONCHAD PEEE`;

const MIS_BARDEOS = [
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

function genAntiBan() {
    const griegas = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ξ", "π", "ρ", "σ", "τ", "φ", "ψ", "ω"];
    return ` \`[${Math.random().toString(36).substring(7)}-${griegas[Math.floor(Math.random() * griegas.length)]}]\``;
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function crearBot(token, num) {
    if (!token) return;
    const client = new Client({ checkUpdate: false });
    client.contadorSpam = 0;
    client.limiteSinPrefijo = Math.floor(Math.random() * 5) + 5; 
    client.soyEspecialista = false;

    client.on('ready', async () => {
        console.log(`✅ [TOKEN_${num}] Online: ${client.user.tag}`);
        
        // Autodetección: Si la cuenta tiene acceso a AL MENOS UNO de los MDs prioritarios
        for (const id of IDS_CONFIG.MDS_PRIORITARIOS) {
            const user = await client.users.fetch(id).catch(() => null);
            if (user) {
                const channel = await user.createDM().catch(() => null);
                if (channel) {
                    client.soyEspecialista = true;
                    console.log(`⭐ [TOKEN_${num}] ACCESO CONFIRMADO AL MD ${id}. Rol: Especialista.`);
                    break;
                }
            }
        }
        atacar(client);
    });
    
    client.login(token).catch(() => console.log(`❌ [TOKEN_${num}] Error.`));
}

async function atacar(bot) {
    try {
        let targetID;
        let esLargo = false;
        const rand = Math.random();

        // 1. Lógica de Grupos por Owner (25%)
        const grupoValido = bot.channels.cache.find(c => 
            c.type === 'GROUP_DM' && IDS_CONFIG.OWNERS_GRUPOS_OBJETIVO.includes(c.ownerId)
        );

        if (grupoValido && rand < 0.25) {
            targetID = grupoValido.id;
            esLargo = true;
        } 
        // 2. Lógica Especialista (MD Prioritario - 95%)
        else if ((bot.soyEspecialista || IDS_CONFIG.CUENTAS_SECUNDARIAS_MANUALES.includes(bot.user.id)) && rand < 0.95) {
            targetID = randomItem(IDS_CONFIG.MDS_PRIORITARIOS);
            esLargo = true;
        } 
        // 3. Lógica General (Servidores y Spam Corto)
        else {
            if (rand < 0.75) {
                targetID = randomItem(IDS_CONFIG.CANALES_SPAM_CORTO);
                esLargo = false;
            } else {
                targetID = randomItem(IDS_CONFIG.SERVERS_SIN_AUTOMOD);
                esLargo = true;
            }
        }

        let channel;
        if (IDS_CONFIG.MDS_PRIORITARIOS.includes(targetID)) {
            const user = await bot.users.fetch(targetID).catch(() => null);
            if (user) channel = await user.createDM().catch(() => null);
        } else {
            channel = await bot.channels.fetch(targetID).catch(() => null);
        }

        if (channel) {
            if (esLargo) await channel.sendTyping().catch(() => {});
            
            setTimeout(async () => {
                let finalMsg;
                if (esLargo) {
                    finalMsg = (Math.random() > 0.5) ? GRAN_BARDEO_MEDIANO : GRAN_BARDEO_PRINCIPAL;
                    finalMsg += genAntiBan();
                } else {
                    // Filtrar para no mencionarse a sí mismo ni a secundarias manuales
                    const excluidos = [bot.user.id, ...IDS_CONFIG.CUENTAS_SECUNDARIAS_MANUALES];
                    const listaFiltrada = IDS_CONFIG.OBJETIVOS_RESTO.filter(id => !excluidos.includes(id));
                    
                    let objetivo = (IDS_CONFIG.CANALES_SPAM_CORTO.includes(targetID) && Math.random() < 0.80) 
                        ? randomItem(IDS_CONFIG.VICTIMAS_PRIORITARIAS) 
                        : randomItem(listaFiltrada);

                    let bardeoOriginal = randomItem(MIS_BARDEOS);
                    bot.contadorSpam++;
                    
                    if (bot.contadorSpam >= bot.limiteSinPrefijo) {
                        let limpio = bardeoOriginal.split(" ").slice(2).join(" "); 
                        finalMsg = `<@${objetivo}> ${limpio}${genAntiBan()}`;
                        if (bot.contadorSpam >= bot.limiteSinPrefijo + 3) {
                            bot.contadorSpam = 0;
                            bot.limiteSinPrefijo = Math.floor(Math.random() * 5) + 5;
                        }
                    } else {
                        let partes = bardeoOriginal.split(" ");
                        finalMsg = `${partes[0]} ${partes[1]} <@${objetivo}> ${partes.slice(2).join(" ")}${genAntiBan()}`;
                    }
                }

                await channel.send(finalMsg).then(() => {
                    let d = esLargo 
                        ? (Math.floor(Math.random() * (VELOCIDAD.SPAM_LARGO_MAX - VELOCIDAD.SPAM_LARGO_MIN)) + VELOCIDAD.SPAM_LARGO_MIN)
                        : (Math.floor(Math.random() * (VELOCIDAD.SPAM_CORTO_MAX - VELOCIDAD.SPAM_CORTO_MIN)) + VELOCIDAD.SPAM_CORTO_MIN);
                    setTimeout(() => atacar(bot), d);
                }).catch(() => setTimeout(() => atacar(bot), 15000));
            }, VELOCIDAD.WRITING_TIME);
        } else {
            setTimeout(() => atacar(bot), 5000);
        }
    } catch (e) { setTimeout(() => atacar(bot), 10000); }
}

for (let i = 1; i <= 10; i++) {
    crearBot(process.env[`TOKEN_${i}`], i);
}
