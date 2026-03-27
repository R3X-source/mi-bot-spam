const { Client } = require('discord.js-selfbot-v13');

// --- ⚙️ 1. TIEMPOS ---
const VELOCIDAD_MIN = 9000; 
const VELOCIDAD_MAX = 18000;        
const TIEMPO_ESCRITURA = 3500;  
const DELAY_RECONEXION = 60000;    

// --- 🎯 2. IDS Y OBJETIVOS ---
const MI_ID_CONTROLADOR = "1486526310607224902";
const VICTIMAS_VIGILADAS = ["1431785955559215184", "1457521662303015040", "1485179919523643454"];

let CANALES_LIBRES = ["1481514534190448815", "1481516697327243506", "1239719951435304960"];
let CANALES_CON_AUTOMOD = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];
let activo = true; 

// --- 📝 3. BARDEOS (DEBAJO DE LAS IDS) ---
const B_LARGO_1 = `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete \n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>`;

const B_LARGO_2 = `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195>\nhttps://media.discordapp.net/attachments/1479303319997644832/1484181067211735161/IMG_20260319_082519_140.jpg \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4 \nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4 \nhttps://files.catbox.moe/j98zth.mp4 \nhttps://files.catbox.moe/nlvkg4.mp4 \nUFF TU CULO ZPRRA CEJUDALORDIANA🤑🤞 PUES ISI WEY PURA ESCENESIA WARSZLEANA EN SUS CONCHAD PEEE, putita ven acá mejichanga culete roquete \n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>`;

const B_CORTOS = [ ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK", ".t cejotorra MAMELE MÁS MEJICHANGAS", ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS", ".t some_frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJOTIÑA", ".t nito PERRA TIENES Q ENTENDER Q SOS UNA MAMITA", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiña CHINGERO DE SEMEN EN SUS ANOS", ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE", ".t nalgotanga APURATE NALGOTANGA SALVA A LORDA", ".t cejud4 SE LE DESCONFIGURO LA NALGA A LORDA", ".t cejot4 tu mejinalga lorda", ".t mallorca abjsodemamiericka", ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA Y CORNEADA ERES JAJAJAJA YA SUPE QUE LILIZ ERA TU PADRE INQUISIDOR QUE TE TENÍA DE PERRA Y TÚ TODA ENAMORADA HACIÉNDOTE LA ROMÁNTICA MIENTRAS TE REVENTABA EL CULO SIN PIEDAD Y TE LLENABA DE MECOS HASTA QUE TE CHORREARAN POR LAS NALGAS GORDAS QUE REBOTAN COMO GELATINA RANCIA" ];

// --- 🌪️ 4. FUNCIONES Y LÓGICA ---
const ofuscar = (texto) => {
    const invisibles = ["\u200b", "\u200c", "\u200d"];
    const partes = texto.split(/(https?:\/\/\S+|<@!?[0-9]+>|@everyone|@here|^\.t\s\S+)/g);
    return partes.map(part => {
        if (!part) return "";
        if (/^(https?:\/\/|<@|@everyone|@here|^\.t)/.test(part)) return part;
        return part.split("").map(char => char + (Math.random() < 0.15 ? invisibles[Math.floor(Math.random() * invisibles.length)] : "")).join("");
    }).join("");
};

const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));

async function botAction(client) {
    while (true) {
        const espera = Math.floor(Math.random() * (VELOCIDAD_MAX - VELOCIDAD_MIN + 1)) + VELOCIDAD_MIN;
        await new Promise(r => setTimeout(r, espera));

        if (activo && client.user) {
            try {
                const dado = Math.random() * 100;
                let idCanal, msj;

                if (dado <= 70) {
                    idCanal = CANALES_LIBRES[Math.floor(Math.random() * CANALES_LIBRES.length)];
                    const b_largos = [B_LARGO_1, B_LARGO_2];
                    msj = b_largos[Math.floor(Math.random() * b_largos.length)];
                } else {
                    idCanal = CANALES_CON_AUTOMOD[Math.floor(Math.random() * CANALES_CON_AUTOMOD.length)];
                    let txt = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                    let victima = VICTIMAS_VIGILADAS[Math.floor(Math.random() * VICTIMAS_VIGILADAS.length)];
                    let p = txt.split(" ");
                    msj = `${p[0]} ${p[1]} <@${victima}> ${p.slice(2).join(" ")}`;
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

for (let i = 1; i <= 10; i++) {
    const token = process.env[`TOKEN_${i}`];
    if (!token) continue;

    const client = new Client({ 
        checkUpdate: false,
        ws: { properties: { os: 'Windows', browser: 'Discord Client', device: 'Computer' } } 
    });

    client.on('ready', () => {
        console.log(`✅ [TOKEN_${i}] ${client.user.tag} ONLINE`);
        botAction(client);
    });

    client.on('messageCreate', async (msg) => {
        if (msg.author.id === MI_ID_CONTROLADOR && msg.content === "1") {
            activo = !activo;
            msg.reply(activo ? "🔥 ATAQUE ON" : "🛑 ATAQUE OFF").catch(() => {});
            return;
        }

        if (activo && msg.mentions.has(client.user.id) && msg.author.id !== client.user.id) {
            if (msg.author.id === MI_ID_CONTROLADOR) return;
            const bardeo = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
            setTimeout(async () => {
                await msg.channel.sendTyping().catch(() => {});
                await new Promise(r => setTimeout(r, TIEMPO_ESCRITURA));
                msg.reply(ofuscar(bardeo)).catch(() => {});
            }, 500);
        }
    });

    setTimeout(() => client.login(token).catch(() => {}), i * 3000);
}
