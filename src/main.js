import Discord from "discord.js"
import fetch from "node-fetch"
import dotenv from "dotenv"

dotenv.config()
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const getQuote2 = async () => {
    const res = await fetch("https://zenquotes.io/api/random")
    const data = await res.json()
    return `${data[0].q} - ${data[0].a}`
}

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
  if (msg.content === "$inspire") {
    getQuote2().then(quote => msg.channel.send(quote))
  }
})

client.login(process.env.TOKEN)
