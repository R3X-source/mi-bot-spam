const { Client } = require('discord.js-selfbot-v13');
const ClientUserSettingManager = require('discord.js-selfbot-v13/src/managers/ClientUserSettingManager.js');

// --- 🎯 CONFIGURACIÓN ---
const MI_ID = "1486526310607224902"; 
const ID_MD_PRIORITARIO = "1239719951435304960"; // <--- ID ACTUALIZADA PARA PRUEBA
const ID_VÍCTIMA_80 = "1479755930483691610"; 
const CANALES_SPAM_CORTO = ["1369181247896817685", "1369174478596345897", "1369174476574687243"];
const OBJETIVOS_RESTO = ["1447142638326120458", "1457144912561832182", "1479748142722191514", "1457984414121459856"];

// --- ⚡ TIEMPOS ---
const VELOCIDAD = {
    SPAM_CORTO: 15000, 
    SPAM_LARGO: 45000, 
    WRITING: 4500
};

// --- 📝 BARDEOS ---
const B_LARGO_1 = `.t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \n\nJSJSJSJA Q PASO MAMORRA CHIE...`;

const B_CORTOS = [ 
    ".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", 
    ".t v14 HEY CHE TE ARDE ESTA PERR4", 
    ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA...",
    ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO"
];

// --- 🛡️ ANTI-BAN ---
const GRIEGOS = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ξ", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"];
function genAntiBan() { return ` \`[${GRIEGOS[Math.floor(Math.random() * GRIEGOS.length)]}-${Math.floor(100 + Math.random() * 900)}]\``; }

ClientUserSettingManager.prototype._patch = function (data) { return data; };

function crearBot(token, num) {
    if (!token) return;
    const client = new Client({ checkUpdate: false });

    client.on('ready', () => {
        console.log(`✅ [${num}] ${client.user.tag} ONLINE. Iniciando prueba en canal prioritario...`);
        atacar(client, num); 
    });

    client.login(token).catch(e => console.log(`❌ [${num}] Error de login: ${e.message}`));
}

async function atacar(bot, num) {
    try {
        let channelID = ID_MD_PRIORITARIO;
        let target = await bot.channels.fetch(channelID).catch(() => null);

        // Si no ve el prioritario, salta a los canales de spam corto
        if (!target) {
            console.log(`⚠️ [${num}] No veo la ID prioritaria, saltando a canales cortos.`);
            channelID = CANALES_SPAM_CORTO[Math.floor(Math.random() * CANALES_SPAM_CORTO.length)];
            target = await bot.channels.fetch(channelID).catch(() => null);
        }

        if (target) {
            await target.sendTyping().catch(() => {});
            
            setTimeout(async () => {
                let r = Math.random();
                let msg = (channelID === ID_MD_PRIORITARIO && r < 0.4) ? B_LARGO_1 : B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                
                if (!msg.includes('<@')) {
                    msg += ` <@${ID_VÍCTIMA_80}>`;
                }

                await target.send(msg + genAntiBan())
                    .then(() => console.log(`🚀 [${num}] Enviado OK a ${channelID}`))
                    .catch(err => {
                        console.log(`❌ [${num}] Error: ${err.message}`);
                        // Si el error es por límite de pings, intentamos uno corto sin pings
                        if (err.message.includes("menciones")) {
                            target.send(".t penaldo TE SALVA EL FILTRO DE PINGS" + genAntiBan()).catch(() => {});
                        }
                    });
                
                setTimeout(() => atacar(bot, num), (msg === B_LARGO_1) ? VELOCIDAD.SPAM_LARGO : VELOCIDAD.SPAM_CORTO);
            }, VELOCIDAD.WRITING);
        } else {
            console.log(`❌ [${num}] Sin canales. Reintento en 20s.`);
            setTimeout(() => atacar(bot, num), 20000);
        }
    } catch (e) { setTimeout(() => atacar(bot, num), 20000); }
}

for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => crearBot(t, i), i * 15000);
}
