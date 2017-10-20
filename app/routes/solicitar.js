module.exports = function(application){
	application.get('/solicitar', function(req, res){
		application.app.controllers.solicitar.solicitar(application, req, res);
	});

}
