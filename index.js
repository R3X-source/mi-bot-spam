const { Client } = require('discord.js-selfbot-v13');

// --- ⚙️ PANEL DE CONTROL (TIEMPOS Y VELOCIDAD) ---
const ESPERA_ENTRE_MENSAJES = 8000; // 8 segundos base
const JITTER_MENSAJE = 5000;        // + hasta 5s aleatorios
const MAX_TIEMPO_ESCRITURA = 4000;  // MÁXIMO 4 SEGUNDOS ESCRIBIENDO
const DELAY_RECONEXION = 60000;    // 1 minuto para reconectar
const AUTO_MSG_TEXTO = "Q HUBOLE PEDORROTE, Q NO VEN Q LE ANDO SACANDO LOS FRIJOLES Y ME ANDO SACANDO LA VERGA PARA MOSTRÁRSELA A CJOTIÑA/ <@1467397075204309034>"; 

// --- 🎯 IDENTIDADES Y OBJETIVOS ---
const MI_ID_CONTROLADOR = "1486526310607224902";
const VICTIMAS_VIGILADAS = ["1431785955559215184", "1457521662303015040", "1485179919523643454"];

let CANALES_LIBRES = ["1481514534190448815", "1239719951435304960"];
let CANALES_CON_AUTOMOD = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];

// --- 🔓 CAMBIO: ACTIVADO POR DEFECTO ---
let activo = true; 

// --- 🌪️ EL ARSENAL COMPLETO ---
const B_LARGOS = [
    `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete <@1485179919523643454> <@1457521662303015040> <@1431785955559215184>`,
    `.t penaldo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete <@1485179919523643454> <@1457521662303015040> <@1431785955559215184>`
];

const B_CORTOS = [
    ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK", ".t cejotorra MAMELE MÁS MEJICHANGA", ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS", ".t some_frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJIÑO", ".t nito PERRA TIENES Q ENTENDER Q SOS UNA MAMITA", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiña CHINGERO DE SEMEN EN SUS ANOS", ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE", ".t nalgotanga APURATE NALGOTANGA SALVA A LORDA", ".t cejud4 SE LE DESCONFIGURO LA NALGA A LORDA", ".t cejot4 tu mejinalga lorda", ".t mallorca abjsodemamiericka", ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA Y CORNEADA ERES JAJAJAJA YA SUPE QUE LILIZ ERA TU PADRE INQUISIDOR QUE TE TENÍA DE PERRA Y TÚ TODA ENAMORADA HACIÉNDOTE LA ROMÁNTICA MIENTRAS TE REVENTABA EL CULO SIN PIEDAD Y TE LLENABA DE MECOS HASTA QUE TE CHORREARAN POR LAS NALGAS GORDAS QUE REBOTAN COMO GELATINA RANCIA"
];

const ofuscar = (t) => t.split("").map(c => c + (Math.random() < 0.25 ? ["\u200b", "\u200c", "\u200d"][Math.floor(Math.random() * 3)] : "")).join("");
const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));

// --- 🌪️ LÓGICA DE ATAQUE ---
async function botAction(client) {
    while (true) {
        if (activo && client.user) {
            try {
                if (Math.random() < 0.25) {
                    const dado = Math.random() * 100;
                    let idCanal, msj;

                    if (dado <= 70) {
                        idCanal = CANALES_LIBRES[Math.floor(Math.random() * CANALES_LIBRES.length)];
                        msj = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
                    } else {
                        idCanal = CANALES_CON_AUTOMOD[Math.floor(Math.random() * CANALES_CON_AUTOMOD.length)];
                        let txt = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                        let victima = VICTIMAS_VIGILADAS[Math.floor(Math.random() * VICTIMAS_VIGILADAS.length)];
                        msj = `${txt.split(" ")[0]} ${txt.split(" ")[1]} <@${victima}> ${txt.split(" ").slice(2).join(" ")}`;
                    }

                    const chan = await client.channels.fetch(idCanal).catch(() => null);
                    if (chan) {
                        await chan.sendTyping().catch(() => {});
                        const delayEscritura = Math.min((msj.length * 35), MAX_TIEMPO_ESCRITURA);
                        await new Promise(r => setTimeout(r, delayEscritura));
                        await chan.send(`${ofuscar(msj)} \`[${toGreek(Math.random().toString(36).substring(7))}]\``).catch(() => {});
                    }
                }
            } catch (e) {}
        }
        await new Promise(r => setTimeout(r, ESPERA_ENTRE_MENSAJES + Math.random() * JITTER_MENSAJE));
    }
}

// --- 🚀 INICIO COORDINADO (CON PARCHE WINDOWS) ---
for (let i = 1; i <= 10; i++) {
    const token = process.env[`TOKEN_${i}`];
    if (!token) continue;

    const chromeVer = `${90 + i}.0.4472.164`;
    const client = new Client({ 
        checkUpdate: false,
        ws: { 
            properties: { 
                os: 'Windows', 
                browser: 'Discord Client', 
                release_channel: 'stable', 
                client_version: `1.0.900${i}`, 
                os_version: '10.0.19044', 
                os_arch: 'x86_64', 
                system_locale: 'es-ES',
                browser_user_agent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Discord/1.0.900${i} Chrome/${chromeVer} Electron/13.1.6 Safari/537.36` 
            } 
        } 
    });

    client.on('ready', () => {
        console.log(`✅ [TOKEN_${i}] ${client.user.tag} ONLINE | SPAMMING ACTIVE`);
        client.user.setActivity("Spotify", { type: "LISTENING" });
        botAction(client);

        setInterval(async () => {
            if (activo && client.user) {
                const chan = await client.channels.fetch(CANALES_LIBRES[0]).catch(() => null);
                if (chan) chan.send(ofuscar(AUTO_MSG_TEXTO)).catch(() => {});
            }
        }, 120000); 
    });

    client.on('messageCreate', async (msg) => {
        if (msg.author.id === MI_ID_CONTROLADOR && msg.content === "1") {
            activo = !activo;
            console.log(activo ? "🔥 ATAQUE ON" : "🛑 PAUSA");
        }

        if (activo && (msg.mentions.has(client.user.id) || !msg.guild)) {
            if (msg.author.id === MI_ID_CONTROLADOR) return;
            const bardeo = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
            setTimeout(async () => {
                await msg.channel.sendTyping().catch(() => {});
                await new Promise(r => setTimeout(r, 2000));
                msg.reply(ofuscar(bardeo)).catch(() => {});
            }, 1000 + Math.random() * 2000);
        }
    });

    setInterval(() => {
        if (client.user) {
            client.destroy();
            setTimeout(() => client.login(token).catch(() => {}), DELAY_RECONEXION);
        }
    }, 3600000 + (i * 100000));

    setTimeout(() => client.login(token).catch(() => {}), i * 5000);
}
