$undertow
	.alias('db', 'jndi:java:/jdbc/com.mariadb')
    .onGet("/systems",
        {headers: {'content-type': 'application/json'}},
        ['db', function ($exchange, db) {
            return db.select('SELECT * FROM Systems');
        }])
    .onPost("/systems",
        {headers: {'content-type': 'application/json'}},
        ['$entity:json', 'db', function ($exchange, entity, db) {
			console.log(entity)
            return db.query('INSERT INTO Systems VALUES (' + entity['id'] + ' ,"' + entity['name'] + '")');
        }])
    .onGet("/systems/{id}",
        {headers: {'content-type': 'application/json'}},
        ['db', function ($exchange, db) {
            return db.select('SELECT * FROM Systems WHERE id = ' + $exchange.param('id'));
        }])