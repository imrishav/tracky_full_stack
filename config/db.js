const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log('Connection Succesfull : ', conn.connection.host)
    console.log(`MongoDb Connected: ${conn.connection.host}`.magenta)
  } catch (error) {
    console.log(`OH..ERROR ${error.message}`.red)
    process.exit(1)
  }
}

module.exports = connectDB
