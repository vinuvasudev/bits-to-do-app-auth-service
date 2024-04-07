const User = require('./src/models/user');
const bcrypt = require('bcryptjs');

// bcrypt.hash('password', 10, (err, hash) => {
//     if (err) {
//         console.error('Error hashing password:', err);
//     } else {
//         console.log('Hashed password:', hash);
//     }
// });

User.create({
    username: 'vinu',
    password: '$2a$10$KuDMACYQe6O17bB0wHHPquVnlx7JMfcHpNT.7iKoazz35Bfj9ZNiS'
}).then(user => {
    console.log('User created successfully:', user);
}).catch(error => {
    console.error('Error creating user:', error);
});
