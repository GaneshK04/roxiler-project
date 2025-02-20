const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/roxiler', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.error('Database connection error:', err);
});

module.exports = mongoose;
