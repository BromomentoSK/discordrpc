var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "OHV CHCE MIODU",
assets : {
large_image : "ohv",
large_text : "with myself" // this will show as the "playing" status
},
buttons : [{label : "Click for OHV" , url : "https://www.youtube.com/watch?v=1zAs6WWN0-k"},{label : "🚗💨",url : "https://soundcloud.com/knifeman_pl/wylacz-te-gowno-moje-ohv-chce-miodu"}]
}
})
})
client.login({ clientId : "808650226097061930" }).catch(console.error);