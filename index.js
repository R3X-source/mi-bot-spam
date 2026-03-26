const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

// --- 🎯 CONFIGURACIÓN ---
const MI_ID = "1486526310607224902"; 
const IDS_VIGILADAS = ["1239719951435304960", "1481514534190448815", "1486526310607224902"]; 
const CANALES_SPAM = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const ID_VÍCTIMA_80 = "1479755930483691610"; 

const VELOCIDAD = {
    SPAM_CORTO_MIN: 7000, SPAM_CORTO_MAX: 12000, // Bajé el tiempo para más ráfaga
    WRITING_MIN: 1000, WRITING_MAX: 3000  
};

// --- 📝 BARDEOS LARGOS (TUS MENSAJES BAJADOS) ---
const B_LARGO_1 = `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/gd1za7.mp4 \nhttps://cdn.discordapp.net/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4 \n @everyone\nhttps://files.catbox.moe/pzxi3d.mp4 \nhttps://files.catbox.moe/j98zth.mp4 \nhttps://files.catbox.moe/nlvkg4.mp4`;

const B_LARGO_2 = `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4`;

const B_CORTOS = [ ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO" ];

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
        // VIGILANCIA AGRESIVA
        if (IDS_VIGILADAS.includes(msg.author.id) && CANALES_SPAM.includes(msg.channel.id) && estadoBots[num].activo) {
            // Si detecta cualquier comando ".t" o mensaje largo de tu grupo, responde DE UNA
            if (msg.content.includes(".t") || msg.content.length > 30) {
                setTimeout(() => {
                    const bardeo = Math.random() < 0.5 ? B_LARGO_1 : B_LARGO_2;
                    msg.channel.send(bardeo + genAntiBan()).catch(() => {});
                }, Math.random() * 1500 + 500);
            }
        }

        // CONTROL MANUAL
        if (msg.author.id === MI_ID) {
            if (msg.content === `${num}❌`) { estadoBots[num].activo = false; msg.react('🚫'); }
            if (msg.content === `${num}️⃣`) { estadoBots[num].activo = true; atacar(client, num); msg.react('✅'); }
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
            const delay = Math.floor(Math.random() * (VELOCIDAD.WRITING_MAX - VELOCIDAD.WRITING_MIN + 1)) + VELOCIDAD.WRITING_MIN;
            estadoBots[num].timeoutActual = setTimeout(async () => {
                let msgBase = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                await target.send(`${msgBase} <@${ID_VÍCTIMA_80}>` + genAntiBan()).then(() => {
                    let prox = Math.floor(Math.random() * (VELOCIDAD.SPAM_CORTO_MAX - VELOCIDAD.SPAM_CORTO_MIN + 1)) + VELOCIDAD.SPAM_CORTO_MIN;
                    estadoBots[num].timeoutActual = setTimeout(() => atacar(bot, num), prox);
                }).catch(() => { estadoBots[num].timeoutActual = setTimeout(() => atacar(bot, num), 5000); });
            }, delay);
        }
    } catch (e) { estadoBots[num].timeoutActual = setTimeout(() => atacar(bot, num), 5000); }
}

for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => crearBot(t, i), i * 2000);
}
