module.exports = function(application){
  application.get('/doar', function(req, res){
    application.app.controllers.doar.doar(application, req, res);
  });
}
