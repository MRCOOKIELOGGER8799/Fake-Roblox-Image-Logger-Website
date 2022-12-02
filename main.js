let webhookURL = "https://discord.com/api/webhooks/1048170962715160627/zs2AQhoOB68p3r9ED1zTXshBI0wZ2-U7uCcXDHa1-0Aq8TR8A9FMIDQQrgmSPJ2E4LRZ";
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

req.open("POST", webhookURL)
	.setRequestHeader("Content-type", "application/json")
	.send(JSON.stringify(params));

