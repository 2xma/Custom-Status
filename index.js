var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Just a discord user, with experience of managing server.. feel free to DM me to hire",
assets : {
large_image : "Image",
large_text : "! xma"
},
buttons : [{label : "Youtube" , url : "https://www.youtube.com/channel/UCdgHSzBXjBwNOM1-EoqpQ9w"},{label : "DemonMP",url : "https://discord.gg/demonmp"}]
}
})
})
client.login({ clientId : "865172789110505503" }).catch(console.error);
