const { Client } = require('discord.js-selfbot-v13');
const http = require('http');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const getJitter = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));

// =========================================================
// ⚙️ BASE DE DATOS DE ARTILLERÍA
// =========================================================
const ID_PRIORITARIA = "1481514534190448815"; 
const CANALES_AM = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];
const CANALES_LIBRES = ["1481516697327243506", "1239719951435304960", "1481408011892297940", "1481403817613332682" ]; 
const VICTIMAS = ["1431785955559215184", "1457521662303015040", "1485179919523643454"];

const B_LARGOS = [
    ` .t penaIdo <@1003450010702205030> Q PASA MARRANA CHE, TE NOTO CONFUNDIDA PENSANDO Q TU MACHO BREIK SOY YO, PERO Q PASA PERRA HIJA DE PUTA Q ANTERIORMENTE LESBERY YA HABÍA DICHO Q ANDABAS HABLANDO DE MI VERG4 PERO NO TE DOY IMPORTANCIA PORQUE ERES UNA PERRITA ABSOLUTAMENTE DOMABLE PARA CUALQUIER PENDEJO Y ESO INCLUYE A LORDA 😂😂😂, ME PAREZCO A ALGUIEN??? PUES CLARO PERRA ME PAREZCO A TU MACHO RICE 😂😂😂😂, DEBO DE DECIR Q TUS NALGAS JAMÁS ME IMPORTARON Y YO SIEMPRE ME BURLE DE TU CULO CON TU OTRA AMIGA DE CHILE Q YA SABES QUIEN ES CHE... JAKSJAKSJA<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/1nydnn.mp4\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4\n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817> PUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD\n<@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`,
    ` .t cjurra <@1003450010702205030> Q PASA MARRANA CHE, TE NOTO CONFUNDIDA PENSANDO Q TU MACHO BREIK SOY YO, PERO Q PASA PERRA HIJA DE PUTA Q ANTERIORMENTE LESBERY YA HABÍA DICHO Q ANDABAS HABLANDO DE MI VERG4 PERO NO TE DOY IMPORTANCIA PORQUE ERES UNA PERRITA ABSOLUTAMENTE DOMABLE PARA CUALQUIER PENDEJO Y ESO INCLUYE A LORDA 😂😂😂, ME PAREZCO A ALGUIEN??? PUES CLARO PERRA ME PAREZCO A TU MACHO RICE 😂😂😂😂, DEBO DE DECIR Q TUS NALGAS JAMÁS ME IMPORTARON Y YO SIEMPRE ME BURLE DE TU CULO CON TU OTRA AMIGA DE CHILE Q YA SABES QUIEN ES CHE... JAKSJAKSJA<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/gd1za7.mp4\nhttps://cdn.discordapp.net/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4\nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4\nhttps://files.catbox.moe/j98zth.mp4\nhttps://files.catbox.moe/nlvkg4.mp4\nUFF TU CULO  putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817>\nPUTILLA VEN A AMAMANTAR A TU MACHO JAKSJDKSKSJSKJD <@1353778890514108456> <@1480289152397213907> CEJOTIÑA NO ME OLVIDE DE AÑADIRTE ACÁ JAJAJA`
];

const B_CORTOS = [".t warszla JSKSJDJDJD", ".t v14 HEY CHE", ".t cputiñagachatuber", ".t cejotiñaandgamami", ".t cejotiñagolpeada", ".t cejotorra", ".t lorda", ".t some_frijolera", ".t joan", ".t chichuda", ".t cjotangaandgamami", ".t ceuda2", ".t nito", ".t india", ".t insana", ".t cputiñagolpeada", ".t penaldo", ".t tuqlo MAMITA ARACELY"];

let activeBots = 0;

// =========================================================
// 🌀 MOTOR DE ASEDIO (BURST MODE + SELECCIÓN DE ARMA)
// =========================================================
async function botBrain(client) {
    let msgCount = 0;
    let burstLimit = getJitter(25, 45);

    // REINICIO INDEPENDIENTE (5-7 Horas)
    const resetTimer = getJitter(5 * 60 * 60 * 1000, 7 * 60 * 60 * 1000);
    setTimeout(() => {
        console.log(`[${client.user.username}] Reinicio de ciclo largo.`);
        client.destroy();
    }, resetTimer);

    while (true) {
        try {
            if (!client.isReady) { await sleep(10000); continue; }

            if (msgCount >= burstLimit) {
                await sleep(getJitter(65000, 130000));
                msgCount = 0;
                burstLimit = getJitter(25, 45);
                continue;
            }

            // Selección de canal
            let targetId = (Math.random() < 0.45) ? ID_PRIORITARIA : 
                          CANALES_AM.concat(CANALES_LIBRES)[getJitter(0, 4)];

            const chan = client.channels.cache.get(targetId) || await client.channels.fetch(targetId).catch(() => null);
            
            if (chan) {
                // Simulación de escritura
                await sleep(getJitter(9000, 18000)); 
                await chan.sendTyping();
                await sleep(getJitter(3000, 6000));

                let finalMsg;
                // Si es canal AutoMod, usamos B_CORTOS con mención a víctimas
                if (CANALES_AM.includes(targetId)) {
                    const randomVictima = VICTIMAS[getJitter(0, VICTIMAS.length - 1)];
                    finalMsg = B_CORTOS[getJitter(0, B_CORTOS.length - 1)].replace(".t ", `.t <@${randomVictima}> `);
                } else {
                    // Si es prioritaria o libre, usamos los LARGOS
                    finalMsg = B_LARGOS[getJitter(0, B_LARGOS.length - 1)];
                }

                const greekCode = toGreek(Math.random().toString(36).substring(7));
                await chan.send(`${finalMsg} \`[${greekCode}]\``).catch(() => {});
                msgCount++;
            }
        } catch (err) { await sleep(25000); }
    }
}

// =========================================================
// 🚀 LANZAMIENTO
// =========================================================
function launch(token, i) {
    const client = new Client({ checkUpdate: false });

    client.on('ready', () => {
        activeBots++;
        console.log(`✅ [V8.7] ONLINE: ${client.user.tag}`);
        botBrain(client);
    });

    client.on('disconnect', () => {
        activeBots--;
        setTimeout(() => client.login(token).catch(() => {}), getJitter(45000, 90000));
    });

    client.login(token).catch(() => {});
}

for (let i = 1; i <= 10; i++) {
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => launch(t, i), i * getJitter(20000, 40000)); 
}

http.createServer((req, res) => {
    res.end(JSON.stringify({ status: "V8.7-ARSENAL", active: activeBots }));
}).listen(process.env.PORT || 3000);
