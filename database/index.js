const mysql = require('mysql');

// establishing connection
var db = mysql.createConnection({
  user: 'forest',
  password:'',
  database:'ball'
})

db.connect((err)=>{
  if(err){
    console.error(err);
  }else{
    console.log('DB online');
  }
});

module.exports = db;