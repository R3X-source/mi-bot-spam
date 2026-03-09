const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ CORRECCIÓN FINAL v14 🛡️'));
app.listen(process.env.PORT || 3000, '0.0.0.0');

// --- CEREBRO DE DESPISTE ---
const generarBypass = () => {
    const simbolos = [['[', ']'], ['|', '|'], ['(', ')']];
    const par = simbolos[Math.floor(Math.random() * simbolos.length)];
    const num = Math.floor(100 + Math.random() * 899); 
    const invisible = `\u200b`.repeat(Math.floor(Math.random() * 3)); 
    return `\n${invisible} ${par[0]}${num}${par[1]} ${Math.random().toString(36).substring(7)}`;
};

// --- CONFIGURACIÓN DE CANALES ---
const CANALES_CON_AUTOMOD = [
    '1369174476574687243', '1369174478596345897', '1379141308131835914', 
    '1369174479825145856', '1369180836582133820', '1369181058490175488'
];

const CANALES_SIN_AUTOMOD = [
    '1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'
];

const OBJETIVOS = [
    '1457984414121459856', '1429177016703516764', '1446586105553227807', 
    '1467397075204309034', '1447142638326120458', '1479748142722191514', 
    '1479755930483691610', '1457144912561832182'
];

// --- MENSAJE MASIVO (SIN AUTOMOD) - CORREGIDO ---
const MSJ_SIN_AUTO = () => `.t cputiñapack 
<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1429177016703516764> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> https://cdn.discordapp.com/attachments/1240674500622680094/1458308109255577734/meme.mp4?ex=695fd383&is=695e8203&hm=1ede81fc7a8663d97c5e3c46401a4ed87ecdb6dd198cf8b855ad5f1597cb9297& https://cdn.discordapp.com/attachments/1458157312656281653/1458660393382842592/VID_20260107_221514_226.mp4?ex=696072da&is=695f215a&hm=6825977ab980a32b54ecd13c080387b4a8fae3843399fed60233e5ed627b7c62& https://cdn.discordapp.com/attachments/1458157312656281653/1458660392279605409/VID_20260107_221447_038.mp4?ex=696072da&is=695f215a&hm=28577162549865bfd26c21170599020e7a71c81ad02a482ebf787d9579c3fa56& <@1455444386421674007>  <@765971830442819674>  https://cdn.discordapp.com/icons/1460105084078784664/eddcac6346285f29d47ce9ed15d81e96.webp?size=2048 <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195>
<@1480289152397213907>
<@1447142638326120458>
https://files.catbox.moe/d0wcx2.mp4 ${generarBypass()}`;

// --- MENSAJES PERSONALES (CON AUTOMOD Y RESPUESTA) ---
const MSJS_CON_AUTO = [
    () => `.t cejotanga QUIERES PENE CEJOTIÑA? DALE CEJOTORRA <@1457984414121459856> https://cdn.discordapp.com/attachments/1478635459365179433/1478659994659328030/InShot_20260303_203821072.mp4 ${generarBypass()}`,
    () => `.t cejotanga putacu brazos más lonjudos q mis huevos💀💀💀 <@1457984414121459856> https://cdn.discordapp.com/attachments/1479539451771490482/1479541930789437632/Screenshot_20251222_003837.jpg ${generarBypass()}`
];

// --- DESPLIEGUE ---
const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4].filter(t => t);

tokens.forEach((token, i) => {
    const client = new Client({ checkUpdate: false, syncStatus: false });

    client.on('ready', () => {
        console.log(`🔥 [BOT ${i+1}] ${client.user.tag} DESPLEGADO`);

        const cicloAtaque = async () => {
            // Canales con Automod -> Ataque quirúrgico
            for (const id of CANALES_CON_AUTOMOD) {
                try {
                    const c = await client.channels.fetch(id);
                    await c.send(MSJS_CON_AUTO[Math.floor(Math.random() * MSJS_CON_AUTO.length)]());
                    await new Promise(r => setTimeout(r, 1400));
                } catch (e) {}
            }
            // Canales sin Automod -> Artillería Masiva
            for (const id of CANALES_SIN_AUTOMOD) {
                try {
                    const c = await client.channels.fetch(id);
                    await c.send(MSJ_SIN_AUTO());
                    await new Promise(r => setTimeout(r, 1400));
                } catch (e) {}
            }
            setTimeout(cicloAtaque, 4500 + (i * 1000)); 
        };
        cicloAtaque();
    });

    client.on('messageCreate', async (m) => {
        if (OBJETIVOS.includes(m.author.id) && m.author.id !== client.user.id) {
            try {
                await m.reply(MSJS_CON_AUTO[Math.floor(Math.random() * MSJS_CON_AUTO.length)]());
            } catch (e) {}
        }
    });

    client.login(token).catch(() => console.log(`💀 Error Token ${i+1}`));
});
