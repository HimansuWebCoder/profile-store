const express  = require("express");
const app = express();
const PORT = 3000;


// import routes 
const usersRouter = require("./routes/users.router");

// Logging middleware
app.use((req, res, next) => {
   const start = Date.now();
   next();
   const delta = Date.now() - start; 
   console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
}) 

app.use('/users', usersRouter);



// Start server
app.listen(process.env.PORT || 3000, () => {
	console.log(`Your website hosted at ${process.env.PORT || 3000}`);
});