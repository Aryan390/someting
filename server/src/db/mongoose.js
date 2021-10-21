// eslint-disable
const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(con => {
  console.log(con.connection);
  console.log('connection successful');
}).catch(err=>{
  console.log(err);
});
