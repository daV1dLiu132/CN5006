mongoose = require('mongoose');
//app = express();
const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.1mwy48j.mongodb.net/';
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
// creating model named as modelname with collection named as personCollection
const person_doc = mongoose.model('modelname', PersonScheme,'personCollection');
// creating a single document


// delete documents where age >= 25
person_doc.deleteMany({ age: { $gte: 25 } })
    .exec()
    .then(docs => {
        console.log("deleted documents are:", docs);
    })
    .catch(function (error) {
        console.log(error);
    });