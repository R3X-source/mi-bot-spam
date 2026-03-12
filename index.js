const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ MOTOR DE ASEDIO V10 - ESTRUCTURA LIMPIA 🛡️'));
app.listen(process.env.PORT || 8080);

const SV_AUTOMOD = "1367693990492635176";
const OBJETIVOS = ["1457144912561832182", "1479748142722191514", "1479755930483691610", "1457984414121459856", "1447142638326120458"];
const PRIORITARIOS = ["1369181247896817685", "1369174478596345897"];
const CANALES_RANDOM = ["1369174476574687243", "1379141308131835914", "1369174479825145856", "1369180836582133820", "1369181058490175488", "1240012616328544419"];

// --- ZONA DE TEXTOS PUROS (Aquí es fácil añadir nuevos) ---
const LISTA_BARDEOS = [
    { cmd: "CPUTIÑAGACHATUBER", txt: "MAMITA CEJOTORRA QUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA Y DE NEG4 SHE" },
    { cmd: "CEJOTIÑAANDGAMAMI", txt: "BRAZOS MÁS LONJUDOS MEJICHANGA NALGA MONCLOVEÑA SOY TU MASHO/TÍO DE 40 AÑOS" },
    { cmd: "CEJOTIÑAGOLPEADA", txt: "MALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK CUANDO SU BRAZO LONJUDO ANDA FILTRADO POR LA MALDITA DE ERRE ELA EN IG Y HAY CAPS Q TENGO YO Q SON IRREFUTABLES DE ESTO🤣🤣🤣 Y CJOTIÑA, DILE MACHA A DANIELA PUT4 IDIOTA JAJAJA" },
    { cmd: "CJOTORRA", txt: "MAMELE MÁS MEJICHANGA Q A SIMIAS COMO A TU LAS DEBEN DE LLEVAR AL MATADERO POR MEJICANAS GÜEY" },
    { cmd: "LORDA", txt: "Y MIENTRAS TANTO CJOTORRA VIENDO TODO CON SU CARA DE INDIA MEJICANA TENIENDO Q MANTENER A SU MAMITA Y COMO JOTIÑA ES PUTA PUES ES UNA FRIJOPERRA... JAJSJAJSJAJSA PERRA DE LOS CERROS DE MICHOACAN, SIEMPRE SERÁS UNA MAMITA BIEN NERVIOSA... SENDO PEDORRAZO Q LLEVAS HIJA DE SU CHINGADA MADRE" },
    { cmd: "FRIJOLERA", txt: "FRIJOLERA DILE DOMADORA A TU M4CH4 Q TE TIENE DE PUTITA... TODAS TE DESVIRGAN EL AN0 Y TE QUIEREN HACER SU PUTITA PESE A Q ESTAS MÁS LESIONADA Q CUALQUIER COSA.... 😈😈😈😈🇨🇱💨🍑🇲🇽" },
    { cmd: "JOAN", txt: "MACH4 G4M4MITA DIRÍA LA PUTITA MARRONA Y CONCHUDA DE CEJUDA JAJJAJAA" },
    { cmd: "CHICHUDA", txt: "VENGAN MEJICHANGAS DENLE TET4 A SU MACHETE JSJAJAJA" },
    { cmd: "CJOTANGAANDGAMAMI", txt: "CEJOTORRA Y GAMAMITA SON TAXISTAS Y ENCIMA TIENEN 20-18 AÑOS Y SU CARA ESTA MÁS DESFIGURADA 🤣🤣🤣🤣" },
    { cmd: "CEJUDA2", txt: "PINCHE PERRA CJOTIÑA SOS UN KAGU3 DE RISA SHE NI QUIEN TE TOME ENSERIÓ PENDEJITA... LESBERY TE ARDIÓ EL CULETE POR MICHOACANA 😈😈😈" },
    { cmd: "NITO", txt: "PERRA TIENES Q ENTENDER Q SOS MEXINDIA DE MICHOACAN Y ERES CHATARRERA/TAXISTA😈😈😈🫵🫵🫵🤣🤣😂😂😂" },
    { cmd: "INDIA", txt: "LA MEJINDIA DE MICHOACAN TRAICIONADA POR PABLA VERACRUZANA... MUCHO FRÍJOL TE SACAS DE LAS NALGAS AMIGA PERRA JODIDA POR SU M4CH4 G4M4M1T4 🍑🇨🇱🇨🇱💨🇲🇽🍑🤣🤣🍑🍑🇲🇽🤣🍑" },
    { cmd: "INSANA", txt: "TE ARDIÓ LAS NALGAS INSANA LA MISMA ARJENCHANGA Q FILTRO A LORDA Y CEJOTIÑA JAJAJA... MALDIT4 PEDOFILA CHE, ESTAS BIEN JODID4 Y ACABADA CJOTORRONGA 🤣🤣" },
    { cmd: "CPUTIÑA", txt: "CHINGERO DE SEMEN EN SUS ANOS DE FRACASADAS PE JSJSJS" },
    { cmd: "KAYADA", txt: "JDKDJDJJSS LORDA PUTITA SE CALLO EN SPAM HACE 1H EN COAHUILA JAJAJDJJSHDW Y ESTO VA A SEGUIR SHE JAKSJDJJDJDJDDK" },
    { cmd: "CJOTORR4", txt: "VAGIN4 DE CEJOTIÑA SHE JDJSKDJKSJSKSJD" },
    { cmd: "NALGOTANGA", txt: "APURATE NALGOTANGA SALVA A GAMAMITA Q SE MURIÓ JAJAJAJA" },
    { cmd: "CEJUD4", txt: "SE LE DESCONFIGURO LA NALGA A CHATARRERA GAMAMITA JAJAJAJAJAJAJAJAJAJAJA" }
];

const MSJ_LARGO_BASE = ".T CEJOTIÑAANDGAMAMI \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @EVERYONE SPAM MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @EVERYONE DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nHTTPS://FILES.CATBOX.MOE/D0WCX2.MP4";

function crearBot(token, nombre, delayInicial) {
    const client = new Client({ checkUpdate: false });
    client.settings = { _patch: function() { return this; }, patch: function() { return this; } };
    let contador = 0;

    async function attack() {
        if (contador >= 25) {
            const pausa = Math.floor(Math.random() * (90000 - 60000 + 1)) + 60000;
            console.log(`💤 [${nombre}] PAUSA DE SEGURIDAD.`);
            contador = 0;
            return setTimeout(attack, pausa);
        }

        try {
            const target = OBJETIVOS[Math.floor(Math.random() * OBJETIVOS.length)];
            let channelID = Math.random() < 0.60 ? PRIORITARIOS[Math.floor(Math.random() * 2)] : CANALES_RANDOM[Math.floor(Math.random() * CANALES_RANDOM.length)];
            const channel = await client.channels.fetch(channelID).catch(() => null);
            
            if (channel) {
                let msgFinal = "";
                
                if (channel.guild.id === SV_AUTOMOD) {
                    // CONSTRUCCIÓN AUTOMÁTICA DEL COMANDO CORTO
                    const data = LISTA_BARDEOS[Math.floor(Math.random() * LISTA_BARDEOS.length)];
                    msgFinal = `.T ${data.cmd} <@${target}> \n ${data.txt.toUpperCase()}`;
                } else {
                    msgFinal = MSJ_LARGO_BASE;
                }
                
                // BYPASS INVISIBLE (Se añade fuera del bardeo para no estorbar)
                const firma = `\n\n\n🤣 [${"ΣΔΦΩΨΠΞΛΓ"[Math.floor(Math.random()*9)]}${Math.floor(Math.random()*9)}-${(Math.random()+1).toString(36).substring(8).toUpperCase()}]`;
                
                await new Promise(r => setTimeout(r, 1000 + Math.random() * 2000));
                await channel.sendTyping();
                await new Promise(r => setTimeout(r, 2000));
                
                await channel.send(msgFinal + firma);
                contador++;
                console.log(`🚀 [${nombre}] (${contador}/25) OK.`);
            }
        } catch (e) { 
            return setTimeout(attack, 45000); 
        }
        setTimeout(attack, Math.floor(Math.random() * (13000 - 8000 + 1)) + 8000); 
    }

    client.on('ready', () => {
        console.log(`✨ ${nombre} EN LÍNEA.`);
        setTimeout(attack, delayInicial);
    });

    client.login(token).catch(() => {});
}

const tokens = [process.env.TOKEN_1, process.env.TOKEN_2, process.env.TOKEN_3, process.env.TOKEN_4, process.env.TOKEN_5, process.env.TOKEN_6];
tokens.forEach((t, i) => { if (t) crearBot(t, `BOT_${i+1}`, i * 5000); });
