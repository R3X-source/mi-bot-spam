const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ SISTEMA DE ASALTO ACTIVO 🛡️'));
app.listen(process.env.PORT || 8080);

const client = new Client({ checkUpdate: false });

// PARCHE OBLIGATORIO PARA RAILWAY
Object.defineProperty(client, 'settings', {
    value: { patch: () => {} },
    writable: true, configurable: true
});

const OBJETIVOS = ["1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856", "1447142638326120458"];
const PRIORITARIOS = ["1369181247896817685", "1369174478596345897"];
const CANALES_CON_AUTOMOD = [...PRIORITARIOS, "1369174476574687243", "1379141308131835914", "1369174479825145856", "1369180836582133820", "1369181058490175488"];
const CANALES_LIBRES = ["1240012616328544419", "1266542890767876229", "1270239207071420450", "1239719951435304960"];

const MSJ_LARGO = ".t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4";

const msgsCortos = (t) => [
    `.t cputiñagachatuber <@${t}> \nQUIERES PENE SHAM4?`,
    `.t cejotiñaandgamami <@${t}> \nbrazos más lonjudos mejichanga`,
    `.t cejotiñagolpeada <@${t}> \nMALDITA Q QUIERE EDITAR SUS NALG4S...`
];

function generarBypass() {
    const syms = "ΓΔΘΛΞΠΣΦΨΩ";
    return `🤣🤣 [${syms[Math.floor(Math.random() * syms.length)]}-${Math.random().toString(36).substring(7).toUpperCase()}]`;
}

// 🎯 LÓGICA DE ATAQUE CON SIMULACIÓN DE ESCRITURA
async function attack() {
    try {
        const target = OBJETIVOS[Math.floor(Math.random() * OBJETIVOS.length)];
        let channelID = Math.random() < 0.50 
            ? PRIORITARIOS[Math.floor(Math.random() * PRIORITARIOS.length)] 
            : [...CANALES_CON_AUTOMOD, ...CANALES_LIBRES][Math.floor(Math.random() * 10)];

        const channel = await client.channels.fetch(channelID).catch(() => null);
        
        if (channel && channel.type === 'GUILD_TEXT') {
            // --- PASO 1: SIMULAR ESCRITURA ---
            console.log(`✍️ Escribiendo en #${channel.name}...`);
            await channel.sendTyping();
            
            // --- PASO 2: TIEMPO DE "REACCIÓN" (Aleatorio 3-6 seg) ---
            const wait = Math.floor(Math.random() * 3000) + 3000;
            await new Promise(r => setTimeout(r, wait));

            // --- PASO 3: PROBABILIDAD DE DISPARO (90% de éxito para no ser lineal) ---
            if (Math.random() < 0.90) {
                let msg = CANALES_CON_AUTOMOD.includes(channelID) 
                    ? msgsCortos(target)[Math.floor(Math.random() * 3)] 
                    : MSJ_LARGO;

                await channel.send(`${msg} ${generarBypass()}`);
                console.log(`✅ DISPARO EN: #${channel.name}`);
            }
        }
    } catch (e) {
        console.log(`⚠️ Info: ${e.message}`);
    }
    // Intervalo de descanso entre ataques (20-40 seg)
    setTimeout(attack, Math.floor(Math.random() * 20000) + 20000);
}

client.on('ready', () => {
    console.log(`✨ LEGION READY: ${client.user.tag}`);
    attack();
});

// ESCUCHAR PARA RESPONDER (Probabilidad de 30% si mencionan al bot)
client.on('messageCreate', async (message) => {
    if (message.mentions.has(client.user) && Math.random() < 0.30) {
        await message.channel.sendTyping();
        setTimeout(async () => {
            await message.reply(`¿Qué quieres perra? ${generarBypass()}`);
        }, 3000);
    }
});

console.log("🔑 Entrando...");
client.login(process.env.TOKEN_1).catch(() => console.log("❌ Token muerto"));
