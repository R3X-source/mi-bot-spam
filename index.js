const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ LEGION JS - RASTREANDO ID 🛡️'));
app.listen(process.env.PORT || 8080);

const OBJETIVOS = ["1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856", "1447142638326120458"];

const CANALES_CON_AUTOMOD = ["1369181247896817685", "1369174476574687243", "1369174478596345897", "1379141308131835914", "1369174479825145856", "1369180836582133820", "1369181058490175488"];
const CANALES_LIBRES = ["1240012616328544419", "1266542890767876229", "1270239207071420450", "1239719951435304960"];

const MSJ_LARGO = ".t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4";

const msgsCortos = (t) => [
    `.t cputiñagachatuber <@${t}> \nQUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA BY NEG4 SHE`,
    `.t cejotiñaandgamami <@${t}> \nbrazos más lonjudos mejichanga nalga moncloveña soy tu masho`,
    `.t cejotiñagolpeada <@${t}> \nMALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK CUANDO SU BRAZO LONJUDO ANDA FILTRADO POR LA MALDITA DE ERRE ELA EN IG Y HAY CAPS Q TENGO YO Q SON IRREFUTABLES DE ESTO🤣🤣🤣 DILE MACHA A DANIELA PUT4 IDIOTA JAJAJA`,
    `.t cjotorra <@${t}> \nmamele más mejichanga q a simias como a tu las deben de llevar al matadero por mejicanas güey`,
    `.t lorda <@${t}> \ny mientras tanto cjotorra viendo todo con su cara de india mejicana...`,
    `.t frijolera <@${t}> \nFRIJOLERA DILE DOMADORA A TU M4CH4 Q TE TIENE DE PUTITA...`,
    `.t joan <@${t}> \nmach4 g4m4mita diría la putita marrona...`,
    `.t chichuda <@${t}> \nvengan mejichangas denle tet4 a su machete jsjajaja`,
    `.t cjotangaandgamami <@${t}> \nCEJOTORRA Y GAMAMITA SON TAXISTAS Y ENCIMA TIENEN 20-18 AÑOS...`,
    `.t cejuda2 <@${t}> \nPINCHE PERRA CJOTIÑA SOS UN KAGU3 DE RISA SHE NI QUIEN TE TOME ENSERIÓ PENDEJITA...`,
    `.t nito <@${t}> \nPERRA TIENES Q ENTENDER Q SOS MEXINDIA DE MICHOACAN Y DE VERACRUZ...`,
    `.t india <@${t}> \nLA MEJINDIA DE VERACRUZ TRAICIONADA POR PABLA OTRA VEZ JDKDJJSJS`,
    `.t insana <@${t}> \nTE ARDIÓ LAS NALGAS INSANA LA MISMA ARJENCHANGA Q FILTRO A LORDA Y CEJOTIÑA JAJAJA...`
];

function generarBypass() {
    const syms = "ΓΔΘΛΞΠΣΦΨΩ";
    return `🤣🤣 [${syms[Math.floor(Math.random() * syms.length)]}-${Math.random().toString(36).substring(7).toUpperCase()}]`;
}

async function attack() {
    const combined = [...CANALES_CON_AUTOMOD, ...CANALES_LIBRES];
    const channelID = combined[Math.floor(Math.random() * combined.length)];
    const target = OBJETIVOS[Math.floor(Math.random() * OBJETIVOS.length)];
    
    // RASTREO: Buscamos el canal y avisamos si no existe
    const channel = client.channels.cache.get(channelID);

    if (!channel) {
        console.log(`❌ ERROR: No veo el canal ${channelID}. ¿El bot está en ese servidor?`);
    } else {
        try {
            await channel.sendTyping();
            await new Promise(r => setTimeout(r, 2000));

            let msg = CANALES_CON_AUTOMOD.includes(channelID) 
                ? msgsCortos(target)[Math.floor(Math.random() * msgsCortos(target).length)] 
                : MSJ_LARGO;

            await channel.send(`${msg} ${generarBypass()}`);
            console.log(`🔥 Enviado en ${channel.name} (${channelID})`);
        } catch (e) {
            console.log(`⚠️ Falló envío en ${channelID}: ${e.message}`);
        }
    }
    setTimeout(attack, Math.floor(Math.random() * 15000) + 20000);
}

client.on('ready', () => {
    console.log(`✅ LEGION ONLINE: ${client.user.tag}`);
    // Verificación inicial de la ID importante
    if(!client.channels.cache.has("1369181247896817685")) {
        console.log("‼️ ALERTA: La ID 1369181247896817685 NO es accesible para esta cuenta.");
    }
    attack();
});

client.login(process.env.TOKEN_1);
