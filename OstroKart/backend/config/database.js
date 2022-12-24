const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;

// const connectDB = async()=>{
//   try{
//        const con = await mongoose.connect(process.env.DB_URI,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true

//        })
//           console.log(`Mongodb connected`)
//   }catch(err){

//   }
   

// }
