const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🛡️ V37 PHANTOM PROTOCOL ONLINE 🛡️'));
app.listen(process.env.PORT || 3000);

// Forzar limpieza de memoria
if (global.gc) {
    setInterval(() => { try { global.gc(); } catch (e) {} }, 15000);
}

const generarBypass = () => `\n\u200b [${Math.floor(Math.random() * 99999)}] ${Date.now().toString().slice(-5)}`;

const CANALES_CON_AUTOMOD = ['1369174476574687243', '1369174478596345897', '1379141308131835914', '1369174479825145856', '1369180836582133820', '1369181058490175488'];
const CANALES_LIBRES = ['1240012616328544419', '1266542890767876229', '1270239207071420450', '1239719951435304960'];
const OBJETIVOS_FIJOS = ['1457144912561832182', '1479748142722191514', '1479755930483691610', '1457984414121459856', '1447142638326120458'];

const MSJ_LARGO = `.t cputiñapack \n<@1425209744603218020> <@1195495311045558272> <@1369070242684473485> <@984956970014486528> <@1072352198836621385> CULOMBIANO ARGENCHANGAS <@1435003733393281055> <@1400251089361567885> <@1429177016703516764> DANIELA <@1438314463970328578> <@1384045898958508085> <@1446586105553227807> <@1452154841676775567> <@957014429822750771> <@1423439348430405722> <@1455444386421674007> <@765971830442819674> <@1394021604127936772> @everyone spam MAMITAS <@1452533908699611236> <@1438662990021922869> <@1459077041637953651> <@1468117706099396816> <@1467397075204309034> <@1466878653932634195> <@1458314974794616902> <@1403986874153832550> <@1470913175401533543> <@1464354934785839155> <@1394023020896714762> <@1399500980889976902> <@1470230646529069086> <@1462897561894649876> @everyone DANIELA <@1386330375952793723> <@1399500980889976902> <@1466878653932634195> \nhttps://files.catbox.moe/d0wcx2.mp4`;

const msgsCortos = [
    (t) => `.t cputiñagachatuber <@${t}> \nQUIERES PENE SHAM4? NALGARERA GAMAMITA PUTA DE FRANKITA BY NEG4 SHE`,
    (t) => `.t cejotiñaandgamami <@${t}> \nbrazos más lonjudos mejichanga nalga moncloveña soy tu masho`,
    (t) => `.t cejotiñagolpeada <@${t}> \nMALDITA Q QUIERE EDITAR SUS NALG4S DESDE GROK CUANDO SU BRAZO LONJUDO ANDA FILTRADO POR LA MALDITA DE ERRE ELA EN IG🤣🤣🤣 DILE MACHA A DANIELA PUT4 IDIOTA JAJAJA`,
    (t) => `.t cjotorra <@${t}> \nmamele más mejichanga q a simias como a tu las deben de llevar al matadero por mejicanas güey`,
    (t) => `.t lorda <@${t}> \ny mientras tanto cjotorra viendo todo con su cara de india mejicana y morena y toda desgarrada con la papada rota porque se la chingo el eduardo y todos sus machos wey krnal jajajaja, te dejo en coma el eduardo güey y q el bot no hable acá por 5h es por la marrona y su sistema güey porque de ahí puedes ir a grasosas y ver que el bot jamás se calla jajaja`,
    (t) => `.t frijolera <@${t}> \nFRIJOLERA DILE DOMADORA A TU M4CH4 Q TE TIENE DE PUTITA Y HASTA FILTRO LOS ABUSOS Q TE HACE CHE, AUNQUE GAMAMIT4 LA Q ESTA HABLANDO EN CEJOTANGA 🤣🤣🤣🤣`,
    (t) => `.t joan <@${t}> \nmach4 g4m4mita diría la putita marrona de cjotiña qué se fue traicionada por absolutamente todos jajajajaja, cualquiera la tiene de putita hasta los chamacos de mc jajjajaja`,
    (t) => `.t chichuda <@${t}> \nvengan mejichangas denle tet4 a su machete jsjajaja`,
    (t) => `.t cjotangaandgamami <@${t}> \nCEJOTORRA Y GAMAMITA SON TAXISTAS Y ENCIMA TIENEN 20-18 AÑOS DE FORMA RESPECTIVA LAS MALDITAS Y SON TAXISTAS Y ASI TIENEN Q MANTENER A TODA SU FAMILIA 🤣🤣🤣🤣`
];

const tokens = Object.keys(process.env).filter(key => key.startsWith('TOKEN_')).map(key => process.env[key]).filter(t => t);

tokens.forEach((token, i) => {
    const client = new Client({ checkUpdate: false });
    let failCount = 0;

    const iniciarBot = () => {
        client.login(token).catch(() => console.log(`[BOT ${i+1}] Token Inválido/Baneado.`));
    };

    client.on('ready', () => {
        console.log(`✅ [${client.user.tag}] OPERATIVO EN MODO FANTASMA`);
        
        const attackLoop = async () => {
            const allChannels = [...CANALES_CON_AUTOMOD, ...CANALES_LIBRES];
            const channelID = allChannels[Math.floor(Math.random() * allChannels.length)];
            const target = OBJETIVOS_FIJOS[Math.floor(Math.random() * OBJETIVOS_FIJOS.length)];
            
            try {
                const channel = await client.channels.fetch(channelID).catch(() => null);
                if (channel) {
                    const esAuto = CANALES_CON_AUTOMOD.includes(channelID);
                    const msg = esAuto ? msgsCortos[Math.floor(Math.random() * 9)](target) : MSJ_LARGO;
                    
                    await channel.send(`${msg} ${generarBypass()}`).catch(async () => {
                        // Si falla el envío (posible bloqueo de link), intenta uno corto
                        await channel.send(`${msgsCortos[3](target)} ${generarBypass()}`).catch(() => {});
                    });
                }
                
                // Limpieza agresiva de caché para no saturar RAM
                failCount++;
                if (failCount > 5) {
                    client.channels.cache.clear();
                    client.users.cache.clear();
                    failCount = 0;
                }

            } catch (e) {}

            // REGLA FANTASMA: Delay aleatorio entre 4000ms y 6500ms
            const nextAttack = Math.floor(Math.random() * 2500) + 4000;
            setTimeout(attackLoop, nextAttack);
        };

        attackLoop();

        // Ciclo de descanso para evitar detección de larga duración
        setTimeout(() => {
            console.log(`♻️ Reiniciando sesión para [${client.user.username}]...`);
            client.destroy();
            setTimeout(iniciarBot, 30000); 
        }, 3600000); // Reset cada hora
    });

    client.on('messageCreate', async (m) => {
        if (OBJETIVOS_FIJOS.includes(m.author.id) && m.author.id !== client.user.id) {
            const delay = Math.floor(Math.random() * 1500) + 500;
            setTimeout(async () => {
                try { 
                    const respuesta = msgsCortos[Math.floor(Math.random() * 9)](m.author.id);
                    await m.channel.send(`${respuesta} ${generarBypass()}`); 
                } catch (e) {}
            }, delay);
        }
    });

    iniciarBot();
});
 
