export default async function({subject, email, message, token}){
	try{
		const response = await fetch(import.meta.env.VITE_MESSAGE_SERVICE, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				subject,
				email,
				message,
				token,
			}),
		});

		const result = await response.json();
	
		return result;
	}
	catch(error){
		console.log(error);
	}
}
