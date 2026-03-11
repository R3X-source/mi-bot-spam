const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

const TOKENS = [
    "MTQ4MDg1NDk1NjI2ODMyMjk1OQ.Gsb-oj.3IvaIAu9xTxnw5tPF3WqbvziO5vZ1OWI7Odzks",
    "MTQ4MDg1NDA5NjA0NjE5ODgxNQ.GEaje5.qlYtyHKrROrEwq4jtfx3X_IXHhJVDSjW-6OA4E",
    "MTQ4MDU5OTU1NjAyOTgxMjgzOQ.GIojov.lS8f_FKIR5NaSZJxowKlMCid5WjgaZLZ_qnm4s",
    "MTQ3OTU1NzUyOTI0MjcwMTg0OQ.GPKxM2.qV3bG5f7Ff5vL9JI51fojwOO0baXdcD3lMGDYQ",
    "MTQ4MDkzMTgxNzg0NTY4NjQzNQ.G7_UXf.YGjIqlqOzcj8Ev1bS-5ty0sm2z0TjKGdMcSSG4",
    "MTQ3NzEwNDIyNjA0NDU0NDg2NQ.Gl9BA_.8nj6yyuN6TinFPvmmX_sbxCxUSsrcJWQFAoo6E",
    "MTQ4MDkyODkwODkwNjk4NzYzMw.Gy_hhq.xzqc_-1PDYdbRrzgyCcLGKFOzE8oxXSKlyBBB0",
    "MTQ3OTUzODkzOTA4NDkzMTE3NQ.GlDDW5.egqjKLimo10SPpq-g5UqmL75hlFo1afXgu6kUQ"
];

const OBJETIVOS = ['1457144912561832182', '1479748142722191514', '1447142638326120458', '1457984414121459856'];

// Cobertura de 10 canales
const CANALES_LIBRES = ['1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'];
const CANALES_AUTOMOD = [
    '1369174476574687243', '1369174478596345897', '1379141308131835914', 
    '1369174479825145856', '1369180836582133820', '1369181058490175488'
];

// Generador de bypass reforzado (Letras + Números + Time)
function generarBypass() {
    const letras = "abcdefghijklmnopqrstuvwxyz";
    const randLet = letras[Math.floor(Math.random() * letras.length)];
    const num = Math.floor(Math.random() * 9000) + 1000;
    const randExtra = Math.random().toString(36).substring(7);
    return `\n\u200b [${randLet}${num}-${randExtra}]`;
}

function obtenerMsj(targetId, esLibre) {
    if (esLibre) {
        return `.t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4 ${generarBypass()}`;
    }
    const shorts = [
        `.t cputiñagachatuber <@${targetId}> \nQUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA BY NEG4 SHE ${generarBypass()}`,
        `.t cejotiñaandgamami <@${targetId}> \nbrazos más lonjudos mejichanga nalga moncloveña soy tu masho ${generarBypass()}`,
        `.t lorda <@${targetId}> \ny mientras tanto cjotorra viendo todo con su cara de india mejicana... ${generarBypass()}`,
        `.t cjotorra <@${targetId}> \nmamele más mejichanga q a simias como a tu... ${generarBypass()}`
    ];
    return shorts[Math.floor(Math.random() * shorts.length)];
}

TOKENS.forEach((token, index) => {
    const client = new Client({ checkUpdate: false });

    client.on('ready', () => console.log(`Bot ${index + 1} encendido.`));

    client.on('messageCreate', async (message) => {
        if (message.author.id === client.user.id) return;

        if (OBJETIVOS.includes(message.author.id)) {
            // 75% de probabilidad para asegurar ráfaga
            if (Math.random() < 0.75) {
                const delayInicial = Math.floor(Math.random() * 2000) + 1000;
                
                setTimeout(async () => {
                    try {
                        // Bypass Automod: Activar "Escribiendo..."
                        await message.channel.sendTyping();
                        
                        // Segundo delay aleatorio antes de soltar el texto
                        setTimeout(async () => {
                            const esLibre = CANALES_LIBRES.includes(message.channel.id);
                            await message.channel.send(obtenerMsj(message.author.id, esLibre));
                        }, Math.floor(Math.random() * 2000) + 500);

                    } catch (err) { console.error("Error en flujo de mensaje."); }
                }, delayInicial);
            }
        }
    });

    client.login(token).catch(() => console.log(`Error en token ${index + 1}`));
});

app.get('/', (req, res) => res.send('ESTADO: MODO GUERRA JS ACTIVO EN 10 CANALES 🚀🔋'));
app.listen(process.env.PORT || 3000);

