const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mgs_user',
    password: 'pa55word',
    database: 'moc_an'
});

connection.connect(function(err) {
    if (err) {
        console.error('Lỗi kết nối đến cơ sở dữ liệu:', err);
        throw err;
    }
    console.log('Kết nối cơ sở dữ liệu thành công');
});
