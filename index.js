const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ V36.1 UNIVERSAL LEGION - 12 ATTACKS ONLINE 🛡️'));
app.listen(process.env.PORT || 3000);

if (global.gc) {
    setInterval(() => { try { global.gc(); } catch (e) {} }, 10000);
}

const generarBypass = () => {
    const syms = "ΓΔΘΛΞΠΣΦΨΩ";
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase();
    const char = syms[Math.floor(Math.random() * syms.length)];
    const invisible = "\u200b\u200c\u200d"; 
    return `\n${invisible[Math.floor(Math.random() * 3)]} [${char}-${hex}] #${Date.now().toString().slice(-4)}`;
};

const CANALES_CON_AUTOMOD = ['1369174476574687243', '1369174478596345897', '1379141308131835914', '1369174479825145856', '1369180836582133820', '1369181058490175488'];
const CANALES_LIBRES = ['1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'];
const OBJETIVOS_FIJOS = ['1457144912561832182', '1479748142722191514', '1479755930483691610', '1457984414121459856', '1447142638326120458'];

const MSJ_LARGO = `.t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4`;

const msgsCortos = [
    (t) => `.t cputiñagachatuber <@${t}> \nQUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA BY NEG4 SHE`,
    (t) => `.t cejotiñaandgamami <@${t}> \nbrazos más lonjudos mejichanga nalga moncloveña soy tu masho`,
    (t) => `.t cejotiñagolpeada <@${t}> \nMALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK CUANDO SU BRAZO LONJUDO ANDA FILTRADO POR LA MALDITA DE ERRE ELA EN IG Y HAY CAPS Q TENGO YO Q SON IRREFUTABLES DE ESTO🤣🤣🤣 DILE MACHA A DANIELA PUT4 IDIOTA JAJAJA`,
    (t) => `.t cjotorra <@${t}> \nmamele más mejichanga q a simias como a tu las deben de llevar al matadero por mejicanas güey`,
    (t) => `.t lorda <@${t}> \ny mientras tanto cjotorra viendo todo con su cara de india mejicana...`,
    (t) => `.t frijolera <@${t}> \nFRIJOLERA DILE DOMADORA A TU M4CH4 Q TE TIENE DE PUTITA...`,
    (t) => `.t joan <@${t}> \nmach4 g4m4mita diría la putita marrona...`,
    (t) => `.t chichuda <@${t}> \nvengan mejichangas denle tet4 a su machete jsjajaja`,
    (t) => `.t cjotangaandgamami <@${t}> \nCEJOTORRA Y GAMAMITA SON TAXISTAS Y ENCIMA TIENEN 20-18 AÑOS...`,
    (t) => `.t cejuda2 <@${t}> \nPINCHE PERRA CJOTIÑA SOS UN KAGU3 DE RISA SHE NI QUIEN TE TOME ENSERIÓ PENDEJITA SI DESDE Q ESTAS TRAICIONADA TODOS TE HAN VENIDO TOMANDO LA COLA PARA TRAICIONARTE Y OLERTE EL PEDORRO CHE, SI HASTA AJENAS A LA CJ TE QUIEREN OLER EL QLO, HASTA LA MULTICUENTRA TRAVESTI DE HADESA Q ES REDBLACKA TE JODE LAS NALGAS🤣🤣🤣, YA NI HABLAR Q LESBERY TE ARDIÓ EL CULETE POR MICHOACANA`,
    (t) => `.t nito <@${t}> \nPERRA TIENES Q ENTENDER Q SOS MEXINDIA DE MICHOACAN Y DE VERACRUZ Y ESO NADIE TE LO VA A QUITAR PUT4 ESTUPIDH4 Q SE TRAGA MI NITO JDKDJJSJSKSLDKS Y SE FUE TRAICIONADA HASTA POR PABLA`,
    (t) => `.t insana <@${t}> \nTE ARDIÓ LAS NALGAS INSANA LA MISMA ARJENCHANGA Q FILTRO A LORDA Y CEJOTIÑA JAJAJA, MIRA CEJOTIÑA Q DECIR DE TI LA VERDAD, SI NADIE SE TOMA ENSERIÓ TUS NALGORRAS ES PORQUE CUALQUIERA TE TIENE DE PERRA CHE, RECUERDO Q HASTA UNA PROSTITUTA TE CALLO LAS NALGAS Y ASI TE QUIERES PONER DELANTE DE TUS MACHOS MAYORES (TIPO WARSZLA) Q CLARAMENTE TE PARAN ABUSANDO, NI Q DECIR Q ERES LA MAMÁ DEL MANJUNTER/JS/SPIDERMAN TE DESPLOMA EL CULO🤣🤣🤣🤣🤣🤣, NO PERRA TU SI ESTAS BIEN JODIDA CHE, TENES 20 AÑOS, ESTAS DESEMPLEADA, SE PUEDE DECIR Q ERES UN PEDON BISEXUAL Y TRAVESTI Q LE ENCANTA FINGIR SER MUJER Y SE ENAMORO DE GD Y FUE LLENADA DE MECOS DE LA WARSZLIZA Y Q LE LLEVA CASI 6 AÑOS A MANHUTER PERRA PEDOFILA!!! MALDIT4 PEDOFILA CHE, ESTAS BIEN JODID4 Y ACABADA CJOTORRONGA 🤣🤣🤣🤣`
];

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4].filter(t => t);

tokens.forEach((token, i) => {
    const client = new Client({ checkUpdate: false });
    
    // --- ESTE ES EL SUPER PARCHE ---
    // Esto evita que el bot lea la configuración de amigos que causa el crash
    client.settings = { _patch: () => {} }; 

    const iniciarBot = () => { client.login(token).catch(() => {}); };

    client.on('ready', () => {
        console.log(`✅ DISPARANDO DESDE: [${client.user.tag}]`);
        
        const attackInterval = setInterval(async () => {
            const allChannels = [...CANALES_CON_AUTOMOD, ...CANALES_LIBRES];
            const channelID = allChannels[Math.floor(Math.random() * allChannels.length)];
            const target = OBJETIVOS_FIJOS[Math.floor(Math.random() * OBJETIVOS_FIJOS.length)];
            
            try {
                const channel = await client.channels.fetch(channelID);
                if (channel) {
                    const esAuto = CANALES_CON_AUTOMOD.includes(channelID);
                    const msg = esAuto ? msgsCortos[Math.floor(Math.random() * msgsCortos.length)](target) : MSJ_LARGO;
                    await channel.send(`${msg} ${generarBypass()}`);
                }
            } catch (e) {}
        }, 4500);

        setTimeout(() => {
            clearInterval(attackInterval);
            client.destroy();
            setTimeout(() => iniciarBot(), 60000); 
        }, 3600000);
    });

    client.on('messageCreate', async (m) => {
        if (OBJETIVOS_FIJOS.includes(m.author.id) && m.author.id !== client.user.id) {
            try { 
                const respuesta = msgsCortos[Math.floor(Math.random() * msgsCortos.length)](m.author.id);
                await m.channel.send(`${respuesta} ${generarBypass()}`); 
            } catch (e) {}
        }
    });

    iniciarBot();
});

