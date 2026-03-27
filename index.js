const { Client } = require('discord.js-selfbot-v13');

// --- ⚙️ PANEL DE CONTROL ---
const VELOCIDAD_MIN = 9000; 
const VELOCIDAD_MAX = 18000;        
const TIEMPO_ESCRITURA = 3500;  
const MI_ID_CONTROLADOR = "1486526310607224902";

let activo = true; 

// --- 🛡️ OFUSCADOR INTELIGENTE (Solo a textos) ---
const ofuscar = (texto) => {
    const invisibles = ["\u200b", "\u200c", "\u200d"];
    // Separa por Links (http) o Menciones (<@)
    const partes = texto.split(/(https?:\/\/\S+|<@!?[0-9]+>|@everyone|@here)/g);
    
    return partes.map(part => {
        // Si es link o mención, devolverlo tal cual
        if (/^(https?:\/\/|<@|@everyone|@here)/.test(part)) {
            return part;
        }
        // Si es texto, meterle los invisibles
        return part.split("").map(char => 
            char + (Math.random() < 0.15 ? invisibles[Math.floor(Math.random() * invisibles.length)] : "")
        ).join("");
    }).join("");
};

const toGreek = (t) => t.replace(/[aeiopstx]/gi, m => ({'a':'α','e':'е','i':'і','o':'ο','p':'ρ','s':'ѕ','t':'τ','x':'х'}[m.toLowerCase()] || m));

// --- 🚀 LÓGICA DE EVENTOS ---
for (let i = 1; i <= 10; i++) {
    const token = process.env[`TOKEN_${i}`];
    if (!token) continue;

    const client = new Client({ 
        checkUpdate: false,
        ws: { properties: { os: 'Windows', browser: 'Discord Client', device: 'Computer' } } 
    });

    client.on('ready', () => {
        console.log(`✅ [TOKEN_${i}] ${client.user.tag} ONLINE`);
        botAction(client);
    });

    client.on('messageCreate', async (msg) => {
        // 1. CONTROL POR TU ID (Comando "1")
        if (msg.author.id === MI_ID_CONTROLADOR && msg.content === "1") {
            activo = !activo;
            msg.reply(activo ? "🔥 ATAQUE ON" : "🛑 ATAQUE OFF").catch(() => {});
            return;
        }

        // 2. AUTORESPONDEDOR (Solo con mención)
        if (activo && msg.mentions.has(client.user.id) && msg.author.id !== client.user.id) {
            if (msg.author.id === MI_ID_CONTROLADOR) return; // No responderte a ti

            const bardeo = B_CORTOS[Math.floor(Math.random() * B_CORTOS.length)];
            setTimeout(async () => {
                await msg.channel.sendTyping().catch(() => {});
                await new Promise(r => setTimeout(r, TIEMPO_ESCRITURA));
                msg.reply(ofuscar(bardeo)).catch(() => {});
            }, 500);
        }
    });

    setTimeout(() => client.login(token).catch(() => {}), i * 3000);
}

// --- 🌪️ EL LOOP DE SPAM ---
async function botAction(client) {
    while (true) {
        const espera = Math.floor(Math.random() * (VELOCIDAD_MAX - VELOCIDAD_MIN + 1)) + VELOCIDAD_MIN;
        await new Promise(r => setTimeout(r, espera));

        if (activo && client.user) {
            try {
                if (Math.random() < 0.25) {
                    // ... (Aquí va tu lógica de elegir canal y mensaje de B_LARGOS o B_CORTOS)
                    // Al enviar el mensaje, usa: ofuscar(msj)
                }
            } catch (e) {}
        }
    }
}
