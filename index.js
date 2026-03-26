const { Client } = require('discord.js-selfbot-v13');

const client = new Client({ 
    checkUpdate: false, 
    patchVoice: true, 
    syncStatus: false,
    ws: { properties: { os: 'Linux', browser: 'Discord Client', release_channel: 'stable' } }
});

const NUM_CUENTA = process.env.NUM_CUENTA || "1"; 
const TOKEN = process.env[`TOKEN_${NUM_CUENTA}`]; 
const MI_ID_CONTROLADOR = "1486526310607224902";
const VICTIMA_80 = "1479755930483691610";

let CANALES_LIBRES = ["1239719951435304960", "1481514534190448815"];
let CANALES_CON_AUTOMOD = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];
let activo = true;

const B_LARGOS = [
    ".t penaIdo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete",
    ".t penaldo <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n\nhttps://files.catbox.moe/1nydnn.mp4 \nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4 \nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4 \n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete"
];

const B_CORTOS = [".t warszla JSKSJDJDJD MALDITA MONCLOVEÑA", ".t v14 HEY CHE TE ARDE ESTA PERR4", ".t cputiñagachatuber MAMITA CEJOTORRA", ".t cejotiñaandgamami BRAZOS MÁS LONJUDOS Q MIS HUEBOS", ".t cejotiñagolpeada MALDITA Q QUIERE EDITAR SU QLO DESDE GROK", ".t cejotorra MAMELE MÁS MEJICHANGA", ".t lorda CJOTORRA VIENDO TODO con su CARA DE INDIS", ".t some_frijolera FRIJOLERA DILE DOMADORA", ".t joan MACH4 G4M4MITA DIRÍA LA PUTITA DE CEJORRA", ".t chichuda VENGAN MEJICHANGAS DENLE TET4 A SU TIO", ".t cjotangaandgamami CEJOTORRA Y GAMAMITA", ".t ceuda2 PINCHE PERRA CJOTIÑA", ".t nito PERRA TIENES Q ENTENDER Q SOS UNA MAMITA", ".t india LA MEJINDIA DE MICHOACAN", ".t insana TE ARDIÓ LAS NALGAS INSANA", ".t cputiñachas CHINGERO DE SEMEN EN SUS ANOS", ".t penaldo JDKDJDJJSS LORDA PUTITA SE CALLO", ".t cjotorr4 VAGINA DE CEJOTIÑA SHE", ".t nalgotanga APURATE NALGOTANGA SALVA A LORDA", ".t cejud4 SE LE DESCONFIGURO LA NALGA A LORDA", ".t cejot4 tu mejinalga lorda", ".t mallorca abjsodemamiericka", ".t tuqlo MAMITA ARACELY QUE PUTIRA DE 20 AÑOS DESEMPLEADA Y CORNEADA ERES..."];

const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));

client.on('ready', () => {
    client.user.setActivity("Penetrando a cjonalgas", { type: "STREAMING", url: "https://twitch.tv/discord" });
    main();
});

client.on('messageCreate', async (msg) => {
    if (msg.author.id !== MI_ID_CONTROLADOR) return;
    if (msg.content === "1") activo = !activo;
    if (msg.content === "mom" && !CANALES_LIBRES.includes(msg.channelId)) {
        CANALES_LIBRES.push(msg.channelId);
    }
});

// Desconexión de 1 min cada hora
setInterval(() => {
    if (client.user) {
        client.destroy();
        setTimeout(() => client.login(TOKEN).catch(() => {}), 60000); 
    }
}, 3600000);

async function main() {
    if (!activo || !client.user) return;
    try {
        if (Math.random() < 0.20) {
            const dado = Math.random() * 100;
            let idCanal, msjFinal;
            if (dado <= 75) {
                idCanal = CANALES_LIBRES[Math.floor(Math.random() * CANALES_LIBRES.length)];
                msjFinal = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
            } else {
                idCanal = CANALES_CON_AUTOMOD[Math.floor(Math.random() * CANALES_CON_AUTOMOD.length)];
                let txt = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
                msjFinal = `${txt.split(" ")[0]} ${txt.split(" ")[1]} <@${VICTIMA_80}> ${txt.split(" ").slice(2).join(" ")}`;
            }
            const chan = await client.channels.fetch(idCanal).catch(() => null);
            if (chan) {
                await chan.sendTyping().catch(() => {});
                await new Promise(r => setTimeout(r, 2000));
                const idRand = toGreek(Math.random().toString(36).substring(7));
                await chan.send(`${msjFinal} \`[${idRand}]\``).catch(() => {});
            }
        }
    } catch (e) {}
    setTimeout(main, Math.floor(Math.random() * 7000) + 8000);
}

client.login(TOKEN).catch(() => {});
