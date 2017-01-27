module.exports = function(app, path, https, fs) {
	app.use(function (req, res, next) {
	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	    res.setHeader('Access-Control-Allow-Credentials', true);
	    next();
	});
	
	app.get('/', function(req, res) {
	    res.sendFile(path.join(__dirname + '/public/index.html'));
	});

	app.get("/downloadFile", function(req, res) {
		var fileName = req.query.plot_id + "_"+ req.query.city + "_"+ req.query.variety + ".png";
		var externalReq = https.request({
	        hostname: "www.dropbox.com",
	        path: "/static/images/lockbox.png"
	    }, function(externalRes) {
	        res.setHeader("content-disposition", "attachment; filename=" + fileName);
	        externalRes.pipe(res);
	    });
	    externalReq.end();
	});
};