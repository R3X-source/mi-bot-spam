const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ V38.5 BLINDADO - CADENCIA ACTIVA 🛡️'));
app.listen(process.env.PORT || 3000);

if (global.gc) {
    setInterval(() => { try { global.gc(); } catch (e) {} }, 15000);
}

const generarBypass = () => `\n\u200b [${Math.floor(Math.random() * 99999)}] ${Date.now().toString().slice(-5)}`;

const CANALES_CON_AUTOMOD = ['1369174476574687243', '1369174478596345897', '1379141308131835914', '1369174479825145856', '1369180836582133820', '1369181058490175488'];
const CANALES_LIBRES = ['1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'];
const OBJETIVOS_FIJOS = ['1457144912561832182', '1479748142722191514', '1479755930483691610', '1457984414121459856', '1447142638326120458'];

const MSJ_LARGO = (link) => `.t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \n${link}`;

const msgsCortos = [
    (t) => `.t cputiñagachatuber <@${t}> \nQUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA BY NEG4 SHE`,
    (t) => `.t cejotiñaandgamami <@${t}> \nbrazos más lonjudos mejichanga nalga moncloveña soy tu masho`,
    (t) => `.t cejotiñagolpeada <@${t}> \nMALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK CUANDO SU BRAZO LONJUDO ANDA FILTRADO POR LA MALDITA DE ERRE ELA EN IG🤣🤣🤣 DILE MACHA A DANIELA PUT4 IDIOTA JAJAJA`,
    (t) => `.t cjotorra <@${t}> \nmamele más mejichanga q a simias como a tu las deben de llevar al matadero por mejicanas güey`,
    (t) => `.t lorda <@${t}> \ny mientras tanto cjotorra viendo todo con su cara de india mejicana y morena y toda desgarrada con la papada rota porque se la chingo el eduardo y todos sus machos wey krnal jajajaja, te dejo en coma el eduardo güey`,
    (t) => `.t frijolera <@${t}> \nFRIJOLERA DILE DOMADORA A TU M4CH4 Q TE TIENE DE PUTITA Y HASTA FILTRO LOS ABUSOS Q TE HACE CHE, AUNQUE GAMAMIT4 LA Q ESTA HABLANDO EN CEJOTANGA 🤣🤣🤣🤣`,
    (t) => `.t joan <@${t}> \nmach4 g4m4mita diría la putita marrona de cjotiña qué se fue traicionada por absolutamente todos jajajajaja`,
    (t) => `.t chichuda <@${t}> \nvengan mejichangas denle tet4 a su machete jsjajaja`,
    (t) => `.t cjotangaandgamami <@${t}> \nCEJOTORRA Y GAMAMITA SON TAXISTAS Y ENCIMA TIENEN 20-18 AÑOS 🤣🤣🤣🤣`,
    (t) => `.t cejuda2 <@${t}> \ncejuda/cjotorra/violada en cerros de michoacan escucha puta me la pelas JAJAJAJAJA`,
    (t) => `.t nito <@${t}> \nte cierran el culete mejisimio de mierd4 azteca put0 jajajjaa`,
    (t) => `.t insana <@${t}> \ninsana arjenchanga habla mal de ti y pide q no la filtren cuando te insulta y deja que te ande cerrandote los óvulos jajajajaja`
];

const envTokens = Object.keys(process.env).filter(key => key.startsWith('TOKEN_')).sort();

envTokens.forEach((key) => {
    const token = process.env[key];
    const client = new Client({ checkUpdate: false });
    
    let conteoLargo = {}; // Control de ráfagas
    let bloqueadoLargo = {}; // Control de tiempo de espera (cooldown)

    client.on('ready', () => {
        console.log(`✅ [${client.user.tag}] BLOQUE DE ASALTO LISTO`);

        const attackLoop = async () => {
            const canalID = [...CANALES_CON_AUTOMOD, ...CANALES_LIBRES][Math.floor(Math.random() * (CANALES_CON_AUTOMOD.length + CANALES_LIBRES.length))];
            const target = OBJETIVOS_FIJOS[Math.floor(Math.random() * OBJETIVOS_FIJOS.length)];
            const esLibre = CANALES_LIBRES.includes(canalID);

            if (!conteoLargo[canalID]) conteoLargo[canalID] = 0;

            try {
                const channel = await client.channels.fetch(canalID).catch(() => null);
                if (channel) {
                    // BLOQUE LÓGICO DE ASALTO
                    if (esLibre) {
                        if (bloqueadoLargo[canalID]) {
                            // Si el canal está en cooldown (2-4 min), mandamos solo cortos
                            await channel.send(`${msgsCortos[Math.floor(Math.random() * 12)](target)} ${generarBypass()}`);
                        } else {
                            // Mandamos el largo y aumentamos contador
                            await channel.send(`${MSJ_LARGO("https://files.catbox.moe/d0wcx2.mp4")} ${generarBypass()}`);
                            conteoLargo[canalID]++;

                            // Si llegamos a la ráfaga (4-10 mensajes aleatorios)
                            const limiteRafaga = Math.floor(Math.random() * 7) + 4; 
                            if (conteoLargo[canalID] >= limiteRafaga) {
                                bloqueadoLargo[canalID] = true;
                                conteoLargo[canalID] = 0;
                                const cooldownTime = (Math.floor(Math.random() * 3) + 2) * 60000; // 2 a 4 min
                                
                                console.log(`⏳ [${client.user.username}] Rafaga completada en ${canalID}. Enfriando por ${cooldownTime/60000} min...`);
                                
                                setTimeout(() => {
                                    bloqueadoLargo[canalID] = false;
                                    console.log(`🔥 [${client.user.username}] Canal ${canalID} desbloqueado para asalto largo.`);
                                }, cooldownTime);
                            }
                        }
                    } else {
                        // Canales con Automod: Spam de cortos normal
                        await channel.send(`${msgsCortos[Math.floor(Math.random() * 12)](target)} ${generarBypass()}`);
                    }
                }
                client.channels.cache.clear();
            } catch (e) {}

            setTimeout(attackLoop, Math.floor(Math.random() * 2000) + 4500); 
        };
        attackLoop();
    });

    client.login(token).catch(() => console.log(`⚠️ [${key}] BANEADO`));
});
 
