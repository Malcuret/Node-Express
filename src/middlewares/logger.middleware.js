const logger = (req, res, next) => {
 const timestamp = new Date().toString();
 const method = req.method;
 const url = req.url;

 console.log(`BIBLIOTECA: ${timestamp} ${method} ${url}`);

 next();
};

module.exports = logger;