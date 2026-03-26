const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

// --- 🎯 CONFIGURACIÓN DE SEGURIDAD (CONTROL) ---
const MI_ID = "1486526310607224902"; 

// --- ⚡ CONFIGURACIÓN DE TIEMPOS ---
const VELOCIDAD = {
    SPAM_CORTO_MIN: 12000, SPAM_CORTO_MAX: 22000,
    SPAM_LARGO_MIN: 40000, SPAM_LARGO_MAX: 70000,
    WRITING_MIN: 4000, WRITING_MAX: 8000  
};

// --- 📍 CONFIGURACIÓN DE IDS ---
const IDS_VICTIMAS = ["1469231575311843328", "1431785955559215184", "1485179919523643454"];
const ID_MD_PRIORITARIO = "1486097221928616027"; 
const IDS_PROPIAS_MSJ_LARGO = ["1239719951435304960", "1481514534190448815"]; 
const CANALES_SPAM_CORTO = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const ID_VÍCTIMA_80 = "1479755930483691610"; 
const OBJETIVOS_RESTO = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1457984414121459856"];

// --- 📝 BARDEOS LARGOS ---
const B_LARGO_1 = `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone CEJOTIÑA AND GAMAMITA IN PREIM DE SER RETIRADA POR NEG4🤣🤣🤣\nJSJSJSJA Q PASO MAMORRA CHIE, PIENSAS Q POR PEDIRLE AYUDA A LA NALGA CHIMBONEGRANA DE MARRONARLEY PARA ANDAR QUITANDO ACCESO AL CANAL ESE PEDORRO SIGNFIIVA Q MI PENE VA A CEDER? MI PENE JAMÁS CEDE SHE AUNQUE ANDES BIEN EXCITADA PWNSANDO Q POR IRME 1H ME FUI CUANDO SOLO ESTABA OCUPANDOME CON TU MAMÁ ARACELY Q POR CIERTO YA SE VA A MORIR xddddd JSKSJSKSKSKSJSK`;

const B_LARGO_2 = `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nJDKDJLSJFKDJDKS HIJA DE PERR4 NOS VAMOS A SPAM con tu MAMÁ hasta sacar la caca de tu ano, ya Kathys te delató maldita que quiere escaparse del spam\nLORDA ZORRA AND CEJUDA EN TEMÁS DE DAR EL ANO EN PREIM PEEEE CEJOTIÑA AND GAMAMI APOYAN A CR7 Y ESTE MISMO NO QUIERE Pisar SU PAÍS DE INDIOS DONDE TODOS ESTÁN EN PARTES JAJAJAJAJAJ\n\nhttps://files.catbox.moe/gd1za7.mp4 \nhttps://cdn.discordapp.net/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4 \nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4 \nhttps://files.catbox.moe/j98zth.mp4 \nhttps://files.catbox.moe/nlvkg4.mp4 \nUFF TU CULO ZPRRA CEJUDALORDIANA🤑🤞 PUES ISI WEY PURA ESCENESIA WARSZLEANA EN SUS CONCHAD PEEE\nJSJSJSJA Q PASO MAMORRA CHIE, PIENSAS Q POR PEDIRLE AYUDA A LA NALGA CHIMBONEGRANA DE MARRONARLEY PARA ANDAR QUITANDO ACCESO AL CANAL ESE PEDORRO SIGNFIIVA Q MI PENE VA A CEDER? MI PENE JAMÁS CEDE SHE AUNQUE ANDES BIEN EXCITADA PWNSANDO Q POR IRME 1H ME FUI CUANDO SOLO ESTABA OCUPANDOME con tu MAMÁ ARACELY Q POR CIERTO YA SE VA A MORIR xddddd JSKSJSKSKSKSJSK`;

const B_CORTOS = [ ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK", ".t cejotorra MAMELE MÁS MEJICHANGA", ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS", ".t some_frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJOTIÑA", ".t nito PERRA TIENES Q ENTENDER Q SOS UNA MAMITA", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiña CHINGERO DE SEMEN EN SUS ANOS", ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE", ".t nalgotanga APURATE NALGOTANGA SALVA A LORDA", ".t cejud4 SE LE DESCONFIGURO LA NALGA A LORDA", ".t cejot4 tu mejinalga lorda", ".t mallorca abjsodemamiericka", ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA Y CORNEADA ERES JAJAJAJA YA SUPE QUE LILIZ ERA TU PADRE INQUISIDOR QUE TE TENÍA DE PERRA Y TÚ TODA ENAMORADA HACIÉNDOTE LA ROMÁNTICA MIENTRAS TE REVENTABA EL CULO SIN PIEDAD Y TE LLENABA DE MECOS HASTA QUE TE CHORREARAN POR LAS NALGAS GORDAS QUE REBOTAN COMO GELATINA RANCIA" ];

const MSG_RESPUESTA = "Q PASO PUTITA CHILINDIA O ARJENCHANGA CHE, TU MACHO (YO) AHORITA ANDA CON LA MAMÁ MICHOACANA DE LA NALGA NEGRA Y MARRÓNA DE <@1467397075204309034> CJOTIÑA JSKJSJDKDKSKS PERR4 ENTIENDE Q SIEMPRE ME LA VAS A COMER HASTA EL FINAL Y ERES UNA P3RR4 BIEN SUMISH4 CHE, ERES LA PUTITA DE TODA LA CJ LO TIENES Q ENTENDER A BASE DE VERGAZOS DE TUS MACHOS DE LA WARSZLIZA Q TE BOTARON A PATADAS COMO PROSTI DE LA WARSZLIZA 2026 JSKSJSKS"; 

// --- 🛡️ SISTEMA DE OFUSCACIÓN ---
const GRIEGOS = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ξ", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"];

function ofuscarTexto(texto) {
    return texto.split(' ').map(palabra => {
        if (palabra.startsWith('<@') || palabra.startsWith('http')) return palabra;
        if (Math.random() < 0.25) {
            let pos = Math.floor(Math.random() * palabra.length);
            let car = Math.random() < 0.5 ? GRIEGOS[Math.floor(Math.random() * GRIEGOS.length)] : Math.floor(Math.random() * 9);
            return palabra.slice(0, pos) + car + palabra.slice(pos);
        }
        return palabra;
    }).join(' ');
}

function genAntiBan() {
    return ` \`[${GRIEGOS[Math.floor(Math.random() * GRIEGOS.length)]}-${Math.floor(100 + Math.random() * 900)}]\``;
}

// --- ⚙️ PARCHE DE SEGURIDAD ---
ClientUserSettingManager.prototype._patch = function (data) { return data; };

const estadoBots = {};

function crearBot(token, num) {
    if (!token) return;
    const client = new Client({ checkUpdate: false });
    estadoBots[num] = { activo: true, canalDinamico: null };

    client.on('ready', () => {
        console.log(`✅ [${num}] ${client.user.tag} ONLINE. Esperando pausa inicial...`);
        setTimeout(() => atacar(client, num), Math.floor(Math.random() * 15000) + 15000); 
    });

    client.on('messageCreate', async (msg) => {
        const content = msg.content.toLowerCase();
        if (msg.author.id === MI_ID) {
            if (content === "mom") { estadoBots[num].canalDinamico = msg.channel.id; msg.react('🎯').catch(() => {}); }
            if (content === "madres") { estadoBots[num].canalDinamico = null; msg.react('🏳️').catch(() => {}); }
            if (content === `${num}❌`) { estadoBots[num].activo = false; msg.react('🚫').catch(() => {}); }
        }
        if (!msg.author.bot && msg.mentions.users.has(client.user.id) && Math.random() <= 0.20) {
            setTimeout(() => msg.reply(ofuscarTexto(MSG_RESPUESTA) + genAntiBan()).catch(() => {}), 3000);
        }
    });

    client.login(token).catch(() => console.log(`❌ [${num}] Error de Login`));
}

async function atacar(bot, num) {
    if (!estadoBots[num].activo) return;

    try {
        let channelID = estadoBots[num].canalDinamico || (Math.random() < 0.7 ? ID_MD_PRIORITARIO : CANALES_SPAM_CORTO[Math.floor(Math.random() * CANALES_SPAM_CORTO.length)]);
        const target = await bot.channels.fetch(channelID).catch(() => null);

        if (target) {
            await target.sendTyping().catch(() => {});
            const delayEscritura = Math.floor(Math.random() * (VELOCIDAD.WRITING_MAX - VELOCIDAD.WRITING_MIN)) + VELOCIDAD.WRITING_MIN;

            setTimeout(async () => {
                let r = Math.random();
                let msg = r < 0.3 ? (Math.random() < 0.5 ? B_LARGO_1 : B_LARGO_2) : B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                
                if (!msg.includes('<@')) msg += ` <@${ID_VÍCTIMA_80}>`;

                await target.send(ofuscarTexto(msg) + genAntiBan()).catch(() => {});
                setTimeout(() => atacar(bot, num), r < 0.3 ? VELOCIDAD.SPAM_LARGO_MIN : VELOCIDAD.SPAM_CORTO_MIN);
            }, delayEscritura);
        } else {
            setTimeout(() => atacar(bot, num), 10000);
        }
    } catch (e) { setTimeout(() => atacar(bot, num), 15000); }
}

let delayInit = 0;
for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) {
        setTimeout(() => crearBot(t, i), delayInit);
        delayInit += 30000; 
    }
}
