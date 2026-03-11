const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ SISTEMA DE BLOQUEO 0% ERROR 🛡️'));
app.listen(process.env.PORT || 8080);

const SV_AUTOMOD = "1367693990492635176";
const OBJETIVOS = ["1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856", "1447142638326120458"];
const PRIORITARIOS = ["1369181247896817685", "1369174478596345897"];
const CANALES_RANDOM = ["1369174476574687243", "1379141308131835914", "1369174479825145856", "1369180836582133820", "1369181058490175488", "1240012616328544419"];

const MSJ_LARGO = ".t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4";

const msgsCortos = (t) => [
    `.t cputiñagachatuber <@${t}> \n MAMITA CEJOTORRA QUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA Y DE NEG4 SHE`,
    `.t cejotiñaandgamami <@${t}> \nbrazos más lonjudos mejichanga nalga moncloveña soy tu masho/tío de 40 años`,
    `.t cejotiñagolpeada <@${t}> \nMALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK CUANDO SU BRAZO LONJUDO ANDA FILTRADO POR LA MALDITA DE ERRE ELA EN IG Y HAY CAPS Q TENGO YO Q SON IRREFUTABLES DE ESTO🤣🤣🤣 Y CJOTIÑA, DILE MACHA A DANIELA PUT4 IDIOTA JAJAJA`,
    `.t cjotorra <@${t}> \nmamele más mejichanga q a simias como a tu las deben de llevar al matadero por mejicanas güey`,
    `.t lorda <@${t}> \ny mientras tanto cjotorra viendo todo con su cara de india mejicana teniendo q mantener a su mamita y como jotiña es puta pues es una frijoperra jajaja`,
    `.t frijolera <@${t}> \nFRIJOLERA DILE DOMADORA A TU M4CH4 Q TE TIENE DE PUTITA Q SOLO GENERAS Q SE BURLEN DE TU NALGA ALABANDO A UNA Q TE TRAICIONA LA NALGA🤣🤣🤣`,
    `.t joan <@${t}> \nmach4 g4m4mita diría la putita marrona y conchuda de cejuda jajjajaa`,
    `.t chichuda <@${t}> \nvengan mejichangas denle tet4 a su machete jsjajaja`,
    `.t cjotangaandgamami <@${t}> \nCEJOTORRA Y GAMAMITA SON TAXISTAS Y ENCIMA TIENEN 20-18 AÑOS Y SU CARA ESTA MÁS DESFIGURADA Y CON LA MENSTRUACIÓN DE LA ABUELA DE CEJOTIÑA 🤣🤣🤣🤣`,
    `.t cejuda2 <@${t}> \nPINCHE PERRA CJOTIÑA SOS UN KAGU3 DE RISA SHE NI QUIEN TE TOME ENSERIÓ PENDEJITA SI DESDE Q ESTAS TRAICIONADA TODOS TE HAN VENIDO TOMANDO LA COLA PARA TRAICIONARTE Y OLERTE EL PEDORRO CHE, SI HASTA AJENAS A LA CJ TE QUIEREN OLER EL QLO, HASTA LA MULTICUENTRA TRAVESTI DE HADESA Q ES REDBLACKA TE JODE LAS NALGAS🤣🤣🤣, YA NI HABLAR Q LESBERY TE ARDIÓ EL CULETE POR MICHOACANA 😈😈😈`,
    `.t nito <@${t}> \nPERRA TIENES Q ENTENDER Q SOS MEXINDIA DE MICHOACAN Y ERES CHATARRERA/TAXISTA😈😈😈🫵🫵🫵🤣🤣😂😂😂`,
    `.t india <@${t}> \nLA MEJINDIA DE MICHOACAN TRAICIONADA POR PABLA VERACRUZANA DE POZA RICA (HUNDIDA) Y POR GAMAMITA OTRA VEZ JDKDJJSJS`,
    `.t insana <@${t}> \nTE ARDIÓ LAS NALGAS INSANA LA MISMA ARJENCHANGA Q FILTRO A LORDA Y CEJOTIÑA JAJAJA, MIRA CEJOTIÑA Q DECIR DE TI LA VERDAD, SI NADIE SE TOMA ENSERIÓ TUS NALGORRAS ES PORQUE CUALQUIERA TE TIENE DE PERRA CHE, RECUERDO Q HASTA UNA PROSTITUTA TE CALLO LAS NALGAS Y ASI TE QUIERES PONER DELANTE DE TUS MACHOS MAYORES (TIPO WARSZLA) Q CLARAMENTE TE PARAN ABUSANDO, NI Q DECIR Q ERES LA MAMÁ DEL MANJUNTER/JS/SPIDERMAN TE DESPLOMA EL CULO🤣🤣🤣🤣🤣🤣, NO PERRA TU SI ESTAS BIEN JODIDA CHE, TENES 20 AÑOS, ESTAS DESEMPLEADA, SE PUEDE DECIR Q ERES UN PEDON BISEXUAL Y TRAVESTI Q LE ENCANTA FINGIR SER MUJER Y SE ENAMORO DE GD Y FUE LLENADA DE MECOS DE LA WARSZLIZA Y Q LE LLEVA CASI 6 AÑOS A MANHUTER PERRA PEDOFILA!!! MALDIT4 PEDOFILA CHE, ESTAS BIEN JODID4 Y ACABADA CJOTORRONGA 🤣🤣🤣🤣 🤣🤣`
];

function crearBot(token, nombre) {
    const client = new Client({ checkUpdate: false });
    
    client.settings = { _patch: function() { return this; }, patch: function() { return this; } };
    Object.defineProperty(client, 'settings', { value: client.settings, writable: false });

    async function attack() {
        try {
            const target = OBJETIVOS[Math.floor(Math.random() * OBJETIVOS.length)];
            let channelID = Math.random() < 0.50 ? PRIORITARIOS[Math.floor(Math.random() * 2)] : CANALES_RANDOM[Math.floor(Math.random() * CANALES_RANDOM.length)];
            const channel = await client.channels.fetch(channelID).catch(() => null);
            
            if (channel) {
                // VERIFICACIÓN DE SEGURIDAD 0% MENSAJE LARGO EN AUTOMOD
                let msg;
                if (channel.guild.id === SV_AUTOMOD) {
                    // SI ES EL SV DE AUTOMOD, SOLO ELIGE DE LOS 13 CORTOS. IMPOSIBLE QUE SALGA EL LARGO.
                    msg = msgsCortos(target)[Math.floor(Math.random() * 13)];
                } else {
                    // SI ES OTRO SERVIDOR, MANDA EL LARGO
                    msg = MSJ_LARGO;
                }

                await channel.sendTyping();
                await new Promise(r => setTimeout(r, 4500));
                
                const bypass = `🤣 [${"ΓΔΘΛΞΠΣΦΨΩ"[Math.floor(Math.random()*10)]}-${Math.random().toString(36).substring(5).toUpperCase()}]`;
                
                await channel.send(`${msg} ${bypass}`);
                console.log(`✅ [${nombre}] Disparo seguro en #${channel.name}`);
            }
        } catch (e) { console.log(`Error ${nombre}: ${e.message}`); }
        setTimeout(attack, 40000); 
    }

    client.on('ready', () => {
        console.log(`✨ ${nombre} LISTO: ${client.user.tag}`);
        attack();
    });

    client.login(token).catch(() => console.log(`❌ ERROR TOKEN ${nombre}`));
}

if (process.env.TOKEN_1) crearBot(process.env.TOKEN_1, "BOT_1");
if (process.env.TOKEN_2) crearBot(process.env.TOKEN_2, "BOT_2");
if (process.env.TOKEN_3) crearBot(process.env.TOKEN_3, "BOT_3");
if (process.env.TOKEN_4) crearBot(process.env.TOKEN_4, "BOT_4");
