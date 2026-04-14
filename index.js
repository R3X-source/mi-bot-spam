const { Client, Options } = require('discord.js-selfbot-v13');
const http = require('http');

// =========================================================
// ⚙️ CONFIGURACIÓN DE GUERRA (V11.5 - MODO FANTASMA & AHORRO EXTREMO)
// =========================================================
const ID_PRIORITARIA = "1481514534190448815";
const CANALES_AM = ["1369174476574687243", "1369174478596345897", "1369181247896817685"];
const CANALES_LIBRES = ["1481516697327243506", "1270239207071420450", "1487148931535212817"];

// 🎯 VÍCTIMAS 
const VIGILADOS_NORMALES = [
    "1431785955559215184", "1457521662303015040", "1485179919523643454",
    "1003450010702205030", "1480289152397213907", "1467397075204309034", 
    "1457175804290007197" 
];
const VIGILADOS_SPAMMERS = [
    "1487148931535212817", "1492675664682287277", "1490277865818689700"
];

const SERVER_ID_OBLIGATORIO = "1481514532932161538";
const COMANDOS_OBLIGATORIOS = [".t warszla", ".t lorda", ".t gamamit4", ".t lorda4", ".t dibujos", ".t insanorra", ".t vendedora", ".t monclova", ".t aracely", ".t brazos", ".t paredes", ".t ch", ".t lorda2", ".t lorda6", ".t eltiodelorda", ".t doxxlorda", ".t chichuda", ".t jsk4"];

// 💣 MUNICIÓN 
const B_LARGOS = [
    `.t cjurra <@1425209744603218020> <@1490277865818689700> <@1457521662303015040> <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/gd1za7.mp4\nhttps://cdn.discordapp.net/attachments/1369181247896817685/1484186305587052595/thegamerlord_es_como_720P_HD_1.mp4\nmejinalgas fueron delatadas por el spem dem soboslai1✅✅✅ @everyone\nhttps://files.catbox.moe/pzxi3d.mp4\nhttps://files.catbox.moe/j98zth.mp4\nhttps://files.catbox.moe/nlvkg4.mp4\nUFF TU CULO  putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817>\n <@1353778890514108456> <@1480289152397213907>\n\n<@1490277865818689700> \nhttps://files.catbox.moe/sss6ma.mp4 JAJAJA\n<@1457175804290007197> <@1492675664682287277> cierr4 el qlo veneka a spam por don nadia`,
    `.t cejuda17 <@1425209744603218020> <@1490277865818689700>  <@1457521662303015040> <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\n<@1003450010702205030>  https://files.catbox.moe/hjepth.jpg\nhttps://files.catbox.moe/7q6n62.jpg\nhttps://files.catbox.moe/qkuhmd.jpg <@1480289152397213907>\n\n<@1490277865818689700> \nhttps://files.catbox.moe/sss6ma.mp4\n<@1457175804290007197> <@1492675664682287277> cierr4 el qlo veneka a spam por don nadia`,
    `.t penaldo <@1425209744603218020> <@1490277865818689700> \n<@1457521662303015040>  <@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723>\n\nhttps://files.catbox.moe/1nydnn.mp4\nhttps://media.discordapp.net/attachments/1479303319997644832/1483288563721306222/TikVid.io_7513075642175327496.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287824055799870/descarga_6.mp4\nhttps://cdn.discordapp.com/attachments/1369181247896817685/1483287857899638928/YouCut_20260310_080237410.mp4\n\nhttps://files.catbox.moe/d0wcx2.mp4 @everyone putita ven acá mejichanga culete roquete\n<@1485179919523643454>\n<@1469231575311843328>\n<@1431785955559215184>\n<@1487148931535212817> <@1480289152397213907>\n\n<@1490277865818689700> \nhttps://files.catbox.moe/sss6ma.mp4 \n<@1353778890514108456> <@1480289152397213907>\n<@1457175804290007197> <@1492675664682287277> cierr4 el qlo veneka a spam por don nadia`
];

const B_CORTOS = [".t warszla JSKSJDJDJD", ".t v14 HEY CHE", ".t cputiñagachatuber", ".t cejotiñaandgamami", ".t cejotiñagolpeada", ".t cejotorra", ".t lorda", ".t frijolera", ".t joan", ".t chichuda", ".t cjotangaandgamami", ".t cejuda2", ".t nito", ".t india", ".t insana", ".t cputiñagolpeada", ".t penaldo", ".t tuqlo MAMITA ARACELY"];

// =========================================================
// 🎯 FUNCIONES AUXILIARES & CANDADOS GLOBALES
// =========================================================
function agregarComandosObligatorios(mensaje) {
    const comandoAleatorio = COMANDOS_OBLIGATORIOS[Math.floor(Math.random() * COMANDOS_OBLIGATORIOS.length)];
    return mensaje.replace(/^\.t \w+/, comandoAleatorio);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const getJitter = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const ocupadoSpameando = new Map();
const cooldownSpammers = new Map(); 

function objetivoAgotado(idVíctima) {
    const ahora = Date.now();
    if (VIGILADOS_SPAMMERS.includes(idVíctima)) {
        let ultimoAtaque = cooldownSpammers.get(idVíctima) || 0;
        if (ahora - ultimoAtaque < 600000) return true; 
        cooldownSpammers.set(idVíctima, ahora); 
        return false; 
    }
    return false;
}

function setupVigilancia(client, index) {
    client.on('messageCreate', async (msg) => {
        const id = msg.author.id;
        if (id === client.user.id) return;

        const esNormal = VIGILADOS_NORMALES.includes(id);
        const esSpammer = VIGILADOS_SPAMMERS.includes(id);

        if (esNormal || esSpammer) {
            if (objetivoAgotado(id)) return; 
            while (ocupadoSpameando.get(index)) { await sleep(1000); }
            
            await msg.channel.sendTyping().catch(() => {});
            await sleep(getJitter(2000, 4000));
            
            let finalMsg = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
            const codigo = `[${Math.random().toString(36).substring(7)}]`;
            
            if (msg.guild && msg.guild.id === SERVER_ID_OBLIGATORIO) {
                finalMsg = agregarComandosObligatorios(finalMsg);
            }
            await msg.reply(`${finalMsg} \`${codigo}\``).catch(() => {});
        }
    });
}

async function botBrain(client, index) {
    let msgCount = 0;
    let burstLimit = getJitter(15, 30); 

    while (true) {
        try {
            if (!client.isReady) { await sleep(5000); continue; }

            if (msgCount >= burstLimit) {
                await sleep(getJitter(120000, 300000)); 
                msgCount = 0; 
                burstLimit = getJitter(15, 30);
                continue;
            }
            
            let targetId, finalMsg;
            let esModoLibre = false; 
            const rand = Math.random();

            if (rand < 0.50) { 
                targetId = ID_PRIORITARIA;
                finalMsg = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
            } else if (rand < 0.58) { 
                targetId = CANALES_AM[Math.floor(Math.random() * CANALES_AM.length)];
                finalMsg = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)].replace(".t ", `.t <@${VIGILADOS_NORMALES[Math.floor(Math.random() * VIGILADOS_NORMALES.length)]}> `);
            } else { 
                targetId = CANALES_LIBRES[Math.floor(Math.random() * CANALES_LIBRES.length)];
                finalMsg = B_LARGOS[Math.floor(Math.random() * B_LARGOS.length)];
                esModoLibre = true; 
            }
            
            let chan = client.channels.cache.get(targetId);
            if (!chan) {
                try { chan = await client.channels.fetch(targetId); } 
                catch (e) { await sleep(10000); continue; }
            }

            if (chan) {
                ocupadoSpameando.set(index, true); 

                await sleep(getJitter(8000, 18000)); 
                await chan.sendTyping().catch(() => {});
                await sleep(getJitter(2000, 4000)); 
                
                const codigo1 = `[${Math.random().toString(36).substring(7)}]`;
                let msg1 = finalMsg;
                if (chan.guild?.id === SERVER_ID_OBLIGATORIO && (targetId === ID_PRIORITARIA || esModoLibre)) {
                    msg1 = agregarComandosObligatorios(msg1);
                }
                
                await chan.send(`${msg1} \`${codigo1}\``).catch(() => {});
                msgCount++;
                
                ocupadoSpameando.set(index, false); 
            }
        } catch (err) { 
            ocupadoSpameando.set(index, false);
            await sleep(15000); 
        }
    }
}

// =========================================================
// 🚀 LANZAMIENTO (MÁXIMO SIGILO Y MEMORIA EN CERO)
// =========================================================
function launch(token, i) {
    const client = new Client({ 
        checkUpdate: false,
        // 👻 MODO FANTASMA: No envía estados, ahorra CPU y red.
        presence: {
            status: 'invisible'
        },
        // 🧠 LOBOTOMÍA: No guarda nada en memoria.
        makeCache: Options.cacheWithLimits({
            MessageManager: 0,
            PresenceManager: 0,
            UserManager: 0,
            GuildMemberManager: 0,
            ThreadManager: 0,
            GuildEmojiManager: 0,
            ReactionManager: 0,
            VoiceStateManager: 0
        }),
        ws: {
            properties: {
                $os: 'Windows', 
                $browser: 'Discord Client',
                $device: 'desktop'
            }
        }
    });

    client.on('ready', async () => {
        console.log(`✅ [TOKEN_${i}] ONLINE FANTASMA`); // Único registro permitido
        ocupadoSpameando.set(i, false);
        
        const tiempoReconexion = getJitter(3600000, 21600000);
        setTimeout(() => {
            console.log(`🔄 [TOKEN_${i}] Reconectando...`);
            client.destroy(); 
            setTimeout(() => {
                client.login(token).catch(() => {}); 
            }, 15000); 
        }, tiempoReconexion);

        await sleep(getJitter(60000, 270000)); 
        setupVigilancia(client, i);
        botBrain(client, i);
    });

    client.on('disconnect', () => setTimeout(() => client.login(token), 10000));
    client.login(token).catch(() => console.error(`❌ [TOKEN_${i}] FALLO DE INICIO`));
}

// =========================================================
// 🌐 ARRANQUE DE LAS 15 CUENTAS
// =========================================================
console.log("🚀 WARSZLA V11.5 | MODO FANTASMA INICIADO");
for (let i = 1; i <= 15; i++) { 
    const t = process.env[`TOKEN_${i}`];
    if (t) setTimeout(() => launch(t, i), i * 15000); 
}
http.createServer((req, res) => res.end("W11.5-ONLINE")).listen(process.env.PORT || 3000);
