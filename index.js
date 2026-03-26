const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

// --- 🎯 CONFIGURACIÓN ---
const MI_ID = "1486526310607224902"; 
const IDS_VIGILADAS = ["1239719951435304960", "1481514534190448815", "1486526310607224902"]; 
const CANALES_SPAM = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const ID_VÍCTIMA_80 = "1479755930483691610"; 
const OBJETIVOS_RESTO = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1457984414121459856"];

const VELOCIDAD = {
    SPAM_CORTO_MIN: 9000, SPAM_CORTO_MAX: 18000,
    WRITING_MIN: 2500, WRITING_MAX: 5500  
};

// --- 📝 MENSAJE DE AUTORESPUESTA (CUANDO TE MENCIONAN) ---
const MSG_RESPUESTA = "Q PASO PUTITA CHILINDIA O ARJENCHANGA CHE, TU MACHO (YO) AHORITA ANDA CON LA MAMÁ MICHOACANA DE LA NALGA NEGRA Y MARRÓNA DE <@1467397075204309034> CJOTIÑA JSKJSJDKDKSKS PERR4 ENTIENDE Q SIEMPRE ME LA VAS A COMER HASTA EL FINAL Y ERES UNA P3RR4 BIEN SUMISH4 CHE, ERES LA PUTITA DE TODA LA CJ Y LO TIENES Q ENTENDER A BASE DE VERGAZOS DE TUS MACHOS DE LA WARSZLIZA Q TE BOTARON A PATADAS COMO PROSTI DE LA WARSZLIZA 2026 JSKSJSKS"; 

// --- 📝 BARDEOS LARGOS ---
const B_LARGO_1 = `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone CEJOTIÑA AND GAMAMITA IN PREIM DE SER RETIRADA POR NEG4🤣🤣🤣\nJSJSJSJA Q PASO MAMORRA CHIE, PIENSAS Q POR PEDIRLE AYUDA A LA NALGA CHIMBONEGRANA DE MARRONARLEY PARA ANDAR QUITANDO ACCESO AL CANAL ESE PEDORRO SIGNFIIVA Q MI PENE VA A CEDER? MI PENE JAMÁS CEDE SHE AUNQUE ANDES BIEN EXCITADA PWNSANDO Q POR IRME 1H ME FUI CUANDO SOLO ESTABA OCUPANDOME CON TU MAMÁ ARACELY Q POR CIERTO YA SE VA A MORIR xddddd JSKSJSKSKSKSJSK`;

const B_LARGO_2 = `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nJDKDJLSJFKDJDKS HIJA DE PERR4 NOS VAMOS A SPAM con tu MAMÁ hasta sacar la caca de tu ano, ya Kathys te delató maldita que quiere escaparse del spam\nLORDA ZORRA AND CEJUDA EN TEMÁS DE DAR EL ANO EN PREIM PEEEE CEJOTIÑA AND GAMAMI APOYAN A CR7 Y ESTE MISMO NO QUIERE Pisar SU PAÍS DE INDIOS DONDE TODOS ESTÁN EN PARTES JAJAJAJAJAJ\n\nhttps://files.catbox.moe/gd1za7.mp4 \nhttps://cdn.discordapp.net/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4 \nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4 \nhttps://files.catbox.moe/j98zth.mp4 \nhttps://files.catbox.moe/nlvkg4.mp4 \nUFF TU CULO ZPRRA CEJUDALORDIANA🤑🤞 PUES ISI WEY PURA ESCENESIA WARSZLEANA EN SUS CONCHAD PEEE\nJSJSJSJA Q PASO MAMORRA CHIE, PIENSAS Q POR PEDIRLE AYUDA A LA NALGA CHIMBONEGRANA DE MARRONARLEY PARA ANDAR QUITANDO ACCESO AL CANAL ESE PEDORRO SIGNFIIVA Q MI PENE VA A CEDER? MI PENE JAMÁS CEDE SHE AUNQUE ANDES BIEN EXCITADA PWNSANDO Q POR IRME 1H ME FUI CUANDO SOLO ESTABA OCUPANDOME CON TU MAMÁ ARACELY Q POR CIERTO YA SE VA A MORIR xddddd JSKSJSKSKSKSJSK`;

// --- 📝 TODOS LOS BARDEOS CORTOS ---
const B_CORTOS = [ 
    ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK", ".t cejotorra MAMELE MÁS MEJICHANGA", ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS", ".t some_frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJOTIÑA", ".t nito PERRA TIENES Q ENTENDER Q SOS UNA MAMITA", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiña CHINGERO DE SEMEN EN SUS ANOS", ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE", ".t nalgotanga APURATE NALGOTANGA SALVA A LORDA", ".t cejud4 SE LE DESCONFIGURO LA NALGA A LORDA", ".t cejot4 tu mejinalga lorda", ".t mallorca abjsodemamiericka", ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA Y CORNEADA ERES JAJAJAJA YA SUPE QUE LILIZ ERA TU PADRE INQUISIDOR QUE TE TENÍA DE PERRA Y TÚ TODA ENAMORADA HACIÉNDOTE LA ROMÁNTICA MIENTRAS TE REVENTABA EL CULO SIN PIEDAD Y TE LLENABA DE MECOS HASTA QUE TE CHORREARAN POR LAS NALGAS GORDAS QUE REBOTAN COMO GELATINA RANCIA" 
];

// --- 🛡️ SISTEMA ---
const GRIEGOS = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ξ", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"];
function genAntiBan() { return ` \`[${GRIEGOS[Math.floor(Math.random() * GRIEGOS.length)]}-${Math.floor(100 + Math.random() * 900)}]\``; }

ClientUserSettingManager.prototype._patch = function (data) { return data; };

const estadoBots = {};

function crearBot(token, num) {
    if (!token) return;
    const client = new Client({ checkUpdate: false });
    estadoBots[num] = { activo: true, timeoutActual: null };

    client.on('ready', () => {
        console.log(`✅ [${num}] ONLINE.`);
        atacar(client, num); 
    });

    client.on('messageCreate', async (msg) => {
        // AUTORESPUESTA POR MENCIÓN (20% chance)
        if (!msg.author.bot && msg.mentions.users.has(client.user.id) && Math.random() <= 0.20) {
            setTimeout(() => msg.reply(MSG_RESPUESTA + genAntiBan()).catch(() => {}), 2500);
        }

        // CONTROL TUYO
        if (msg.author.id === MI_ID) {
            const content = msg.content.toLowerCase();
            if (new RegExp(`(frenar|stop|parar)\\s+bot\\s+${num}|${num}❌`).test(content)) {
                estadoBots[num].activo = false;
                if (estadoBots[num].timeoutActual) clearTimeout(estadoBots[num].timeoutActual);
                msg.react('🚫');
            }
            if (content === `activar bot ${num}` || content === `${num}️⃣`) {
                estadoBots[num].activo = true;
                msg.react('✅');
                atacar(client, num);
            }
        }

        // VIGILANCIA IDS
        if (IDS_VIGILADAS.includes(msg.author.id) && CANALES_SPAM.includes(msg.channel.id) && estadoBots[num].activo) {
            if (msg.content.includes(".t") || msg.content.length > 50) {
                setTimeout(() => {
                    const largo = Math.random() < 0.5 ? B_LARGO_1 : B_LARGO_2;
                    msg.channel.send(largo + genAntiBan()).catch(() => {});
                }, Math.random() * 2000 + 1500);
            }
        }
    });

    client.login(token).catch(() => {});
}

async function atacar(bot, num) {
    if (!estadoBots[num].activo) return;
    try {
        let channelID = CANALES_SPAM[Math.floor(Math.random() * CANALES_SPAM.length)];
        const target = await bot.channels.fetch(channelID).catch(() => null);

        if (target && estadoBots[num].activo) {
            await target.sendTyping().catch(() => {});
            const delay = Math.floor(Math.random() * (VELOCIDAD.WRITING_MAX - VELOCIDAD.WRITING_MIN + 1)) + VELOCIDAD.WRITING_MIN;

            estadoBots[num].timeoutActual = setTimeout(async () => {
                let victim = (Math.random() < 0.8) ? ID_VÍCTIMA_80 : OBJETIVOS_RESTO[Math.floor(Math.random() * OBJETIVOS_RESTO.length)];
                let msgBase = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                
                await target.send(`${msgBase} <@${victim}>` + genAntiBan()).then(() => {
                    let prox = Math.floor(Math.random() * (VELOCIDAD.SPAM_CORTO_MAX - VELOCIDAD.SPAM_CORTO_MIN + 1)) + VELOCIDAD.SPAM_CORTO_MIN;
                    estadoBots[num].timeoutActual = setTimeout(() => atacar(bot, num), prox);
                }).catch(() => { estadoBots[num].timeoutActual = setTimeout(() => atacar(bot, num), 10000); });
            }, delay);
        } else {
            estadoBots[num].timeoutActual = setTimeout(() => atacar(bot, num), 8000);
        }
    } catch (e) { estadoBots[num].timeoutActual = setTimeout(() => atacar(bot, num), 10000); }
}

for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => crearBot(t, i), i * 5000);
}
