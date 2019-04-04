const express = require('express');
const request = require('request');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/items', (req, res) => {
	request('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var json = JSON.parse(body);
			const only4results = json.results.slice(0, 4);
			
			const finalResult = { 
					author: {
						name: "Monique", 
						lastname: "Ribeiro",
					}, 
					categories: json.filters.map(filter => filter.values[0].name)
				};
			finalResult.items = only4results.map(result => {
				let newObj = {
					id: result.id,
					title: result.title,
					price: {
						currency: result.currency_id,
						amount: result.price
					},
					picture: result.thumbnail,
					condition: result.condition,
					free_shipping: result.shipping.free_shipping,
					seller_address: result.seller_address,
				};
				
				return newObj;
			});		
			res.send(finalResult);	
		} else {
			console.log("There was an error: ") + response.statusCode;
			res.send(error);
		}
	});
});

app.get('/api/items/:id', (req, res) => {
	request('https://api.mercadolibre.com/items/' + req.params.id, function (error, response, body) {
		request('https://api.mercadolibre.com/items/' + req.params.id + '/description', function (error2, response2, body2) {
			if (!error && response.statusCode == 200 && !error2 && response2.statusCode == 200) {	
				var json = JSON.parse(body);
				var json2 = JSON.parse(body2);

				var finalResult = {
					author: {
						name: "Monique", 
						lastname: "Ribeiro",
					}, 
					item: {
						 id: json.id,
						 title: json.title,
						 price: {
							 currency: json.currency_id,
							 amount: json.price
						 },
						 picture: json.pictures[0].url,
						 pictures: json.pictures.map(pic => pic.url),
						 condition: json.condition,
						 free_shipping: json.shipping.free_shipping,
						 sold_quantity: json.sold_quantity,
						 description: json2.plain_text						
					}
				};
				res.send(finalResult);	
			} else {
				console.log("There was an error: ") + response.statusCode;
				res.send({item: undefined});
			}
			
		});
	});
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));