const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://BU-user:priya01balla@bu-shopping.cexcn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log('Database connection successful');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;