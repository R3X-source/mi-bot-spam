const { Client } = require('discord.js-selfbot-v13');

// =========================================================
// ⚙️ 1. CONFIGURACIÓN BASE
// =========================================================
const MI_ID_CONTROLADOR = "1486526310607224902";
const VICTIMAS_VIGILADAS = ["1431785955559215184", "1457521662303015040", "1485179919523643454"];

const CANALES_LIBRES = ["1481514534190448815", "1481516697327243506", "1239719951435304960"];
const CANALES_CON_AUTOMOD = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];

let OBJETIVO_MOM = null; 
let activo = true; 

const VELOCIDAD_MIN = 9000; 
const VELOCIDAD_MAX = 18000;        
const TIEMPO_ESCRITURA = 3500;  

// =========================================================
// 📝 2. TEXTOS
// =========================================================
const ESTADO_STREAMING = "WARSZLIZA ABUSA DE CJOTIÑAS 🚀"; 
const URL_STREAMING = "https://www.twitch.tv/discord";

const MI_AUTORESPUESTA_PROGRAMADA = "Q PASA PEDORROTE, YO ANDO FOLLANDO EN ESTOS MOMENTOS A LA PERRA FRIJOLERA BISEXUAL PANOCHUDA DE 20 AÑOS DE ASEREJE/CJONALGAS/CJOTRUÑA(<@1467397075204309034>) Y A SU AMIGA PUTITA DE LORDA Q FUERON VETADAS DE LA WARSZLIZA JAKSJAKSJAK";

const B_LARGOS = [
    `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete \n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>`,
    `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195>

https://files.catbox.moe/gd1za7.mp4 

https://cdn.discordapp.com/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4 

mejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone

https://files.catbox.moe/pzxi3d.mp4 

https://files.catbox.moe/j98zth.mp4 

https://files.catbox.moe/nlvkg4.mp4 

UFF TU CULO ZPRRA CEJUDALORDIANA🤑🤞 PUES ISI WEY PURA ESCENESIA WARSZLEANA EN SUS CONCHAD PEEE, putita ven acá mejichanga culete roquete 
<@1485179919523643454>
<@1469231575311843328>
<@1431785955559215184>`
];

const B_CORTOS = [ ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK", ".t cejotorra MAMELE MÁS MEJICHANGA", ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS", ".t some_frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJOTIÑA", ".t nito PERRA TIENES Q ENTENDER Q SOS UNA MAMITA", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiñagolpeada CHINGERO DE SEMEN EN SUS ANOS", ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO", ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA Y CORNEADA ERES..." ];

// =========================================================
// 🌪️ 3. LÓGICA TÉCNICA
// =========================================================
const ofuscar = (texto) => {
    const invisibles = ["\u200b", "\u200c", "\u200d"];
    return texto.split("").map(char => char + (Math.random() < 0.1 ? invisibles[Math.floor(Math.random() * invisibles.length)] : "")).join("");
};

const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));

async function botAction(client) {
    while (client.isReady) {
        const espera = Math.floor(Math.random() * (VELOCIDAD_MAX - VELOCIDAD_MIN + 1)) + VELOCIDAD_MIN;
        await new Promise(r => setTimeout(r, espera));

        if (activo && client.user && !client.manualPause) {
            try {
                let idCanal, msj;
                const dadoProb = Math.random();

                // LÓGICA: 20% de probabilidad para el canal de "Mom" si existe
                if (OBJETIVO_MOM && dadoProb < 0.20) {
                    idCanal = OBJETIVO_MOM;
                    msj = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                } else {
                    // 80% restante o ciclo normal: Canales predefinidos
                    const dadoTipo = Math.random() * 100;
                    if (dadoTipo <= 60) {
                        idCanal = CANALES_LIBRES[Math.floor(Math.random() * CANALES_LIBRES.length)];
                        msj = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
                    } else {
                        idCanal = CANALES_CON_AUTOMOD[Math.floor(Math.random() * CANALES_CON_AUTOMOD.length)];
                        let txt = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                        let victima = VICTIMAS_VIGILADAS[Math.floor(Math.random() * VICTIMAS_VIGILADAS.length)];
                        let p = txt.split(" ");
                        msj = `${p[0]} ${p[1]} <@${victima}> ${p.slice(2).join(" ")}`;
                    }
                }

                const chan = await client.channels.fetch(idCanal).catch(() => null);
                if (chan) {
                    await chan.sendTyping().catch(() => {});
                    await new Promise(r => setTimeout(r, TIEMPO_ESCRITURA));
                    await chan.send(`${ofuscar(msj)} \`[${toGreek(Math.random().toString(36).substring(7))}]\``).catch(() => {});
                }
            } catch (e) {}
        }
    }
}

// =========================================================
// 💻 4. SISTEMA PRINCIPAL
// =========================================================
function iniciarBot(token, index) {
    const client = new Client({ checkUpdate: false });
    client.manualPause = false;
    let timeoutRetorno;

    client.on('ready', () => {
        console.log(`✅ [BOT ${index}] ${client.user.tag} ONLINE`);
        client.user.setActivity(ESTADO_STREAMING, { type: "STREAMING", url: URL_STREAMING });
        botAction(client);

        // RECONEXIÓN: 1 hora ON -> 1 min OFF -> Reinicio
        setTimeout(() => {
            console.log(`🔄 [${client.user.tag}] Pausa técnica de 1 min.`);
            client.destroy();
            setTimeout(() => iniciarBot(token, index), 60000);
        }, 3600000);
    });

    client.on('messageCreate', async (msg) => {
        if (msg.author.bot) return;
        const raw = msg.content.trim();

        // COMANDO "Mom" (Palabra exacta, detecta canal automáticamente)
        if (msg.author.id === MI_ID_CONTROLADOR && raw.toLowerCase() === "mom") {
            OBJETIVO_MOM = msg.channel.id;
            return msg.reply(`🎯 Canal actual agregado a la rotación (20% chance).`);
        }

        // COMANDO "Madres" (Palabra exacta)
        if (msg.author.id === MI_ID_CONTROLADOR && raw.toLowerCase() === "madres") {
            OBJETIVO_MOM = null;
            return msg.reply(`🛑 Canal extra eliminado de la rotación.`);
        }

        // CONTROL "1"
        if (msg.author.id === MI_ID_CONTROLADOR && raw === "1") {
            activo = !activo;
            return msg.reply(activo ? "🔥 ATAQUE GLOBAL ON" : "🛑 ATAQUE GLOBAL OFF");
        }

        // MODO ESPEJO (PAUSA SI TÚ ESCRIBES MANUALMENTE)
        if (msg.author.id === client.user.id && !msg.content.includes("`[")) {
            client.manualPause = true;
            clearTimeout(timeoutRetorno);
            timeoutRetorno = setTimeout(() => {
                client.manualPause = false;
                console.log(`🚀 Regreso automático en ${client.user.tag}.`);
            }, 300000); // 5 minutos de inactividad tuya
        }
    });

    client.login(token).catch(() => {});
}

// ARRANQUE DE TOKENS (Delay para no saturar)
for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => iniciarBot(t, i), i * 5000);
}
