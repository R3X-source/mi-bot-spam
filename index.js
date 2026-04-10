const { Client } = require('discord.js-selfbot-v13');
const http = require('http');

// =========================================================
// ⚙️ CONFIGURACIÓN DE GUERRA (OPTIMIZADA)
// =========================================================
const ID_PRIORITARIA = "1481514534190448815";
const CANALES_AM = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];
const CANALES_LIBRES = ["1481516697327243506", "1239719951435304960", "1487148931535212817"];

// 🎯 VÍCTIMAS: aquí están todas las IDs que vigilará y responderá
const VIGILADOS = [
    "1431785955559215184", "1457521662303015040", "1485179919523643454",
    "1003450010702205030", "1480289152397213907", "1490277865818689700"
];

// IDs especiales para comandos (no tocar)
const SERVER_ID_OBLIGATORIO = "1481514532932161538";
const COMANDOS_OBLIGATORIOS = [".t warszla", ".t lorda", ".t gamamit4", ".t lorda4", ".t dibujos", ".t insanorra", ".t vendedora", ".t monclova", ".t aracely", ".t brazos", ".t paredes", ".t ch", ".t lorda2", ".t lorda6", ".t eltiodelorda", ".t doxxlorda", ".t chichuda", ".t jsk4"];
const ID_SECUNDARIA = "1488126232028516412";
const CANAL_EXCLUSIVO = "1481516697327243506";

// 💣 MUNICIÓN: Los 3 mensajes largos (se mantienen igual que los tienes)
const B_LARGOS = [
    ` .t penaIdo <@1425209744603218020> JAKSJAJSJAKASKSKSJAJA PUTITA STYMIDA PERR4 RETIRADA POR CJOTIÑA Y AZOTADA POR DANIELA (DANIELA SE CALLO EN SPAM DE 4 MESES JAKSJAKSJAKAK) <@1457521662303015040> ASI Q USTED ES MR MONCLOVA Q SE CONFUNDIÓ CON SU DOMADOR EL BREIK😂😂😂😂🖕🖕🖕🖕, VEN AQUI "" "DEIDAD" "" COMO DIRÍA HEVERH 🤣🤣🤣 <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/1nydnn.mp4\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4\n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817> PUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD\n<@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`,
    ` .t cjurra <@1425209744603218020> JAKSJAJSJAKASKSKSJAJA PUTITA STYMIDA PERR4 RETIRADA POR CJOTIÑA Y AZOTADA POR DANIELA (DANIELA SE CALLO EN SPAM DE 4 MESES JAKSJAKSJAKAK) <@1457521662303015040> ASI Q USTED ES MR MONCLOVA Q SE CONFUNDIÓ CON SU DOMADOR EL BREIK😂😂😂😂🖕🖕🖕🖕, VEN AQUI "" "DEIDAD" "" COMO DIRÍA HEVERH 🤣🤣🤣 <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/gd1za7.mp4\nhttps://cdn.discordapp.net/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4\nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4\nhttps://files.catbox.moe/j98zth.mp4\nhttps://files.catbox.moe/nlvkg4.mp4\nUFF TU CULO  putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817>\nPUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD <@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`,
    `.t cejuda17 <@1425209744603218020> JAKSJAJSJAKASKSKSJAJA PUTITA STYMIDA PERR4 RETIRADA POR CJOTIÑA Y AZOTADA POR DANIELA (DANIELA SE CALLO EN SPAM DE 4 MESES JAKSJAKSJAKAK) <@1457521662303015040> ASI Q USTED ES MR MONCLOVA Q SE CONFUNDIÓ CON SU DOMADOR EL BREIK😂😂😂😂🖕🖕🖕🖕, VEN AQUI "" "DEIDAD" "" COMO DIRÍA HEVERH 🤣🤣🤣 <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\n<@1003450010702205030> GABRIELONJAS Q PASO MAMITA😂, NO DEBISTE REVELARTE ANTE TU MACHO OFICIAL... https://files.catbox.moe/hjepth.jpg\nhttps://files.catbox.moe/7q6n62.jpg\nhttps://files.catbox.moe/qkuhmd.jpg`
];
const B_CORTOS = [".t warszla JSKSJDJDJD", ".t v14 HEY CHE", ".t cputiñagachatuber", ".t cejotiñaandgamami", ".t cejotiñagolpeada", ".t cejotorra", ".t lorda", ".t frijolera", ".t joan", ".t chichuda", ".t cjotangaandgamami", ".t cejuda2", ".t nito", ".t india", ".t insana", ".t cputiñagolpeada", ".t penaldo", ".t tuqlo MAMITA ARACELY"];

// =========================================================
// 🎯 FUNCIONES AUXILIARES
// =========================================================
function agregarComandosObligatorios(mensaje) {
    const comandoAleatorio = COMANDOS_OBLIGATORIOS[Math.floor(Math.random() * COMANDOS_OBLIGATORIOS.length)];
    return `${comandoAleatorio}\n${mensaje}`;
}
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const getJitter = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));

// =========================================================
// 🤖 AUTORRESPONDEDOR 2.0 (CON RÉPLICA FORZADA)
// =========================================================
function setupVigilancia(client, index) {
    client.on('messageCreate', async (msg) => {
        if (VIGILADOS.includes(msg.author.id) && msg.author.id !== client.user.id) {
            console.log(`🔫 [TOKEN_${index}] ¡VÍCTIMA DETECTADA! ${msg.author.tag}`);
            
            await sleep(getJitter(2000, 5000)); // Espera humana
            
            let finalMsg = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
            const codigo = `[${Math.random().toString(36).substring(7)}]`;
            
            // Añade comandos si es el servidor correcto
            if (msg.guild && msg.guild.id === SERVER_ID_OBLIGATORIO) {
                finalMsg = agregarComandosObligatorios(finalMsg);
            }
            
            // 🔥 RÉPLICA FORZADA: Responde directamente al mensaje de la víctima
            await msg.reply(`${finalMsg} \`${codigo}\``).catch(e => console.log(`❌ Error al responder: ${e.message}`));
        }
    });
}

// =========================================================
// 🤖 CUENTA SECUNDARIA (SPAM EXCLUSIVO)
// =========================================================
async function botSecundario(client, index) {
    if (client.user.id !== ID_SECUNDARIA) return;
    console.log(`🤖 [TOKEN_${index}] Modo Secundario Activado -> Canal: ${CANAL_EXCLUSIVO}`);
    let msgCount = 0, burstLimit = getJitter(15, 25);
    while (true) {
        try {
            if (!client.isReady) { await sleep(5000); continue; }
            if (msgCount >= burstLimit) {
                await sleep(getJitter(60000, 90000));
                msgCount = 0; burstLimit = getJitter(15, 25);
                continue;
            }
            const chan = client.channels.cache.get(CANAL_EXCLUSIVO) || await client.channels.fetch(CANAL_EXCLUSIVO);
            if (chan) {
                await sleep(getJitter(10000, 18000));
                let finalMsg = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
                if (chan.guild?.id === SERVER_ID_OBLIGATORIO) finalMsg = agregarComandosObligatorios(finalMsg);
                await chan.send(`${finalMsg} \`[${Math.random().toString(36).substring(7)}]\``);
                msgCount++;
            } else await sleep(30000);
        } catch (err) { await sleep(15000); }
    }
}

// =========================================================
// 🌀 MOTOR DE SPAM (45% ID | 45% LIBRES | 10% AM)
// =========================================================
async function botBrain(client, index) {
    let msgCount = 0, burstLimit = getJitter(20, 35);
    while (true) {
        try {
            if (!client.isReady) { await sleep(5000); continue; }
            if (msgCount >= burstLimit) {
                await sleep(getJitter(60000, 120000));
                msgCount = 0; burstLimit = getJitter(20, 35);
                continue;
            }
            let targetId, finalMsg;
            const rand = Math.random();
            if (rand < 0.45) { // 45% ID PRIORITARIA
                targetId = ID_PRIORITARIA;
                finalMsg = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
            } else if (rand < 0.55) { // 10% AUTOMOD
                targetId = CANALES_AM[Math.floor(Math.random() * CANALES_AM.length)];
                finalMsg = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)].replace(".t ", `.t <@${VIGILADOS[Math.floor(Math.random() * VIGILADOS.length)]}> `);
            } else { // 45% CANALES LIBRES
                targetId = CANALES_LIBRES[Math.floor(Math.random() * CANALES_LIBRES.length)];
                finalMsg = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
            }
            const chan = client.channels.cache.get(targetId) || await client.channels.fetch(targetId);
            if (chan) {
                await sleep(getJitter(8000, 15000));
                await chan.sendTyping();
                await sleep(getJitter(1000, 3000));
                const codigo = `[${Math.random().toString(36).substring(7)}]`;
                if (chan.guild?.id === SERVER_ID_OBLIGATORIO && (targetId === ID_PRIORITARIA || CANALES_LIBRES.includes(targetId))) 
                    finalMsg = agregarComandosObligatorios(finalMsg);
                await chan.send(`${finalMsg} \`${codigo}\``);
                msgCount++;
            }
        } catch (err) { await sleep(15000); }
    }
}

// =========================================================
// 🚀 LANZAMIENTO DE CADA TOKEN
// =========================================================
function launch(token, i) {
    const client = new Client({ checkUpdate: false });
    client.on('ready', () => {
        console.log(`✅ [TOKEN_${i}] ONLINE: ${client.user.tag}`);
        setupVigilancia(client, i);
        botBrain(client, i);
        if (client.user.id === ID_SECUNDARIA) botSecundario(client, i);
    });
    client.on('disconnect', () => setTimeout(() => client.login(token), 10000));
    client.login(token).catch(() => console.error(`❌ [TOKEN_${i}] FALLO`));
}

// =========================================================
// 🌐 PUNTO DE INICIO
// =========================================================
console.log("🚀 WARSZLA V10.0 | 45% ID | 45% LIBRES | 10% AM | AUTORESPONDEDOR 2.0");
for (let i = 1; i <= 8; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => launch(t, i), i * 15000);
}
http.createServer((req, res) => res.end("W10-READY")).listen(process.env.PORT || 3000);
