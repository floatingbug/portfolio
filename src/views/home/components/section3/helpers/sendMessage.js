export async function sendMessage(messageData){
	try{
		const options = {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(messageData),
		}

		console.log(options);

		const response = await fetch(`${import.meta.env.VITE_MESSAGE_SERVICE_URL}/send-message`, options);
		const data = await response.json();

		return data;
	}
	catch(error){
		console.log(error);
	}
}
