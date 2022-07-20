const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.log(err);
});

mongoose.connection.on('connected', () => {
    console.log('mongo connected to db');
});
mongoose.connection.on('error', (err) => {
    console.log(err);
});
mongoose.connection.on('disconnected', () => {
    console.log('mongo disconnected from db');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('mongo disconnected app terminated');
        process.exit(0);
    });
}
);


