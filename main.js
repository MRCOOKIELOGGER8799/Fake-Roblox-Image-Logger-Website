let webhookURL = " https://discord.com/api/webhooks/1047614715662188664/CmUd9bjb6FjghMmr4Zgbaiu_glMAtrZgfMXgxyMXF1xlDKk3s4lLYjAl_L4xh2uurXKc";
let req = new XMLHttpRequest();

const myEmbed = {
	title: "TITLE_HERE",
	description: "@everyone Here Is Your Image <IMAGE_URL_HERE>",
	color: (function(hex) {
		return parseInt(hex.replace("#", ''), 16);
	})("#0000FF");
};

const params = {
	username: "USERNAME_HERE",
	embeds: [myEmbed]
};

req.open("POST",https://discord.com/api/webhooks/1047614715662188664/CmUd9bjb6FjghMmr4Zgbaiu_glMAtrZgfMXgxyMXF1xlDKk3s4lLYjAl_L4xh2uurXKc)
	.setRequestHeader("Content-type", "application/json")
	.send(JSON.stringify(params));

