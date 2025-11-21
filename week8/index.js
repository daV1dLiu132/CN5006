mongoose = require('mongoose');
//app = express();
const MONGO_URI = 'mongodb+srv://admin:<db_password>@cluster0.1mwy48j.mongodb.net/';
mongoose.connect(MONGO_URI, {useUnifiedTopology: true,useNewUrlParser: true})
; const db = mongoose.connection;
db.on('error', function(err)
{console.log("Error occured during connection"+err)
}
);
db.once('connected', function() {
console.log(`Connected to ${MONGO_URI}`);
});
// creating the scheme
const PersonScheme = new mongoose.Schema({ name: {
type: String, required: true
},
age: Number, Gender:String, Salary:Number
});
// creating model named as modelname with collection named as personCo
llection
const person_doc = mongoose.model('modelname', PersonScheme,'personCollectio
n');
// creating a single document
const doc1 = new person_doc({ name: 'Jacky',age:362,Gender:"Male",Salary:3
456 }
);
// adding one document in the collection
doc1
 .save()
 .then((doc1) => {
 console.log("New Article Has been Added Into Your DataBase.",doc1);
 })
 .catch((err) => {
 console.error(err);
 });