const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ CIERRE MAESTRO v18 ONLINE 🛡️'));
app.listen(process.env.PORT || 3000, '0.0.0.0');

// --- GENERADOR DE BYPASS ---
const generarBypass = () => {
    const s = [['[', ']'], ['|', '|'], ['(', ')']];
    const p = s[Math.floor(Math.random() * s.length)];
    const n = Math.floor(100 + Math.random() * 899);
    const inv = `\u200b`.repeat(Math.floor(Math.random() * 5));
    return `\n${inv} ${p[0]}${n}${p[1]} ${Math.random().toString(36).substring(7)}`;
};

// --- CONFIGURACIÓN DE CANALES ---
const CANALES_CON_AUTOMOD = ['1369174476574687243', '1369174478596345897', '1379141308131835914', '1369174479825145856', '1369180836582133820', '1369181058490175488'];
const CANALES_SIN_AUTOMOD = ['1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'];

// --- TUS 4 OBJETIVOS DE RESPUESTA ---
const OBJETIVOS_FIJOS = ['1457144912561832182', '1479748142722191514', '1479755930483691610', '1457984414121459856'];

// --- MENSAJE MASIVO (SIN AUTOMOD) - CIERRE CORREGIDO ---
const MSJ_MASIVO = () => `.t cputiñapack 
<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1429177016703516764> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> https://cdn.discordapp.com/attachments/1240674500622680094/1458308109255577734/meme.mp4?ex=695fd383&is=695e8203&hm=1ede81fc7a8663d97c5e3c46401a4ed87ecdb6dd198cf8b855ad5f1597cb9297& https://cdn.discordapp.com/attachments/1458157312656281653/1458660393382842592/VID_20260107_221514_226.mp4?ex=696072da&is=695f215a&hm=6825977ab980a32b54ecd13c080387b4a8fae3843399fed60233e5ed627b7c62& https://cdn.discordapp.com/attachments/1458157312656281653/1458660392279605409/VID_20260107_221447_038.mp4?ex=696072da&is=695f215a&hm=28577162549865bfd26c21170599020e7a71c81ad02a482ebf787d9579c3fa56& <@1455444386421674007>  <@765971830442819674>  https://cdn.discordapp.com/icons/1460105084078784664/eddcac6346285f29d47ce9ed15d81e96.webp?size=2048 <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195>
<@1480289152397213907>
<@1447142638326120458>
https://files.catbox.moe/d0wcx2.mp4 ${generarBypass()}`;

// --- MENSAJES PERSONALES ---
const getMsgPersonal = () => {
    const target = OBJETIVOS_FIJOS[Math.floor(Math.random() * OBJETIVOS_FIJOS.length)];
    const msgs = [
        `.t cejotanga QUIERES PENE CEJOTIÑA? DALE CEJOTORRA JAKSJSJSJS https://cdn.discordapp.com/attachments/1478635459365179433/1478659994659328030/InShot_20260303_203821072.mp4?ex=69a9ddae&is=69a88c2e&hm=13b42b17f1eac8c21b2bb9a9cbf36cfac8ad7eb221322404bb4387adb6f000b2& <@${target}> PERRA VEN A GRASOSAS Y ACEPTA SOLICITUD te pebetto el culo \nUFFF NALGARERA GAMAMITA LA PUTA DE SU MACHORRA FRANKITA LA RETIRADA BY NEG4 SHE \nENCIMA Q GAMAMI ES ABUSAFA BY MÁSTER ESPEIRDERMEN💀🤣🤣🤣 ${generarBypass()}`,
        `.t cejotanga putacu brazos más lonjudos q mis huevos💀💀💀 tenes q deslechar más a tu masho y a todos los q te traicionaron el pedorrete como PABLA!!!! <@${target}> https://cdn.discordapp.com/attachments/1479539451771490482/1479541930789437632/Screenshot_20251222_003837.jpg?ex=69ac6a4c&is=69ab18cc&hm=988e7bfce0d1556ef08c0d194ac692646cb3178d0c1677ba23f1b3e840af5951& PERRA VEN A GRASOSAS Y ACEPTA SOLICIYUD JAJAJQJAJA \nmejichanga nalga moncloveña wey krnal soy el macho de gamami and daniela arjenchanga porque soy tu masho wey no como la putita arjenchanga de daniela q lleva meses siendo folada en spom JKSJDJSKSS \nNALGONA NI AUTOMOD TE SALVA EL ANO LONJUDÓ ${generarBypass()}`,
        `.t cejotanga SECRETOS DE TUS NALG4S DE PUTAKU Q TIENE Q EDITAR SU NALGITA DESDE GROK Y ENCIMA DELATADA POR CARNASH4... <@${target}> https://cdn.discordapp.com/attachments/1479539451771490482/1479541930789437632/Screenshot_20251222_003837.jpg?ex=69ac6a4c&is=69ab18cc&hm=988e7bfce0d1556ef08c0d194ac692646cb3178d0c1677ba23f1b3e840af5951& PERRA VEN A GRASOSAS Y ACEPTA SOLICIYUD JAJAJQJAJA ${generarBypass()}`
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
};

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4].filter(t => t);

tokens.forEach((token, i) => {
    const client = new Client({ checkUpdate: false, syncStatus: false });

    client.on('ready', () => {
        console.log(`🚀 [BOT ${i+1}] ${client.user.tag} - ACTIVO`);

        const startSpam = async () => {
            while(true) {
                for (const id of CANALES_CON_AUTOMOD) {
                    try {
                        const channel = await client.channels.fetch(id).catch(() => null);
                        if (channel) { await channel.send(getMsgPersonal()); await new Promise(r => setTimeout(r, 1300)); }
                    } catch (e) {}
                }
                for (const id of CANALES_SIN_AUTOMOD) {
                    try {
                        const channel = await client.channels.fetch(id).catch(() => null);
                        if (channel) { await channel.send(MSJ_MASIVO()); await new Promise(r => setTimeout(r, 1300)); }
                    } catch (e) {}
                }
                await new Promise(r => setTimeout(r, 4000));
            }
        };
        startSpam();
    });

    client.on('messageCreate', async (m) => {
        if (OBJETIVOS_FIJOS.includes(m.author.id) && m.author.id !== client.user.id) {
            try { await m.reply(getMsgPersonal()); } catch (e) {}
        }
    });

    client.login(token).catch(() => console.log(`💀 Error Token ${i+1}`));
});
 
