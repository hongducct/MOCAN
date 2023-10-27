const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Tạo kết nối đến cơ sở dữ liệu MySQL
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

// Sử dụng body-parser để lấy thông tin từ request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Định nghĩa endpoint API để lấy danh sách sản phẩm
app.get('/products', (req, res) => {
    // Thực hiện truy vấn SQL để lấy danh sách sản phẩm từ cơ sở dữ liệu
    connection.query('SELECT * FROM `product`', (error, results, fields) => {
        if (error) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            return;
        }
        res.json(results); // Trả về dữ liệu sản phẩm cho ứng dụng React Native
    });
});
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    console.log('Received product ID:', id);
    // Thực hiện truy vấn SQL để lấy sản phẩm từ cơ sở dữ liệu
    const sql = 'SELECT * FROM `product` WHERE product_id = ?';
    const values = [id];
 
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            return;
        }
 
        if (results.length === 0) {
            res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
            return;
        }
 
        res.json(results[0]); // Trả về dữ liệu sản phẩm cho ứng dụng React Native
    });
});

app.post('/add-product', (req, res) => {
    const { product_name, description, price, quantity, image } = req.body;
 
    // Thực hiện truy vấn SQL để thêm sản phẩm mới vào cơ sở dữ liệu
    const sql = 'INSERT INTO `product` (product_name, description, price, quantity, image) VALUES (?, ?, ?, ?, ?)';
    const values = [product_name, description, price, quantity, image];
 
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            return;
        }
        res.json({ message: 'Sản phẩm đã được thêm thành công' });
    });
 });

 app.put('/update-quantity/:productId', (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    
    console.log('Received PUT request for product ID:', productId);
    console.log('New quantity:', quantity);
    
    // Thực hiện truy vấn SQL để cập nhật giá trị quantity cho sản phẩm với productId
    const sql = 'UPDATE `product` SET quantity = ? WHERE product_id = ?';
    const values = [quantity, productId];
  
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
        return;
      }
      res.json({ message: 'Cập nhật sản phẩm thành công' });
    });
});

app.put('/update-product/:productId', (req, res) => {
    const { productId } = req.params;
    const { product_name, description, price, quantity, image } = req.body;
    
    console.log('Received PUT request for product ID:', productId);
    console.log('New product_name:', product_name);
    console.log('New description:', description);
    console.log('New price:', price);
    console.log('New quantity:', quantity);
    console.log('New image:', image);
    
    // Thực hiện truy vấn SQL để cập nhật giá trị quantity cho sản phẩm với productId
    const sql = 'UPDATE `product` SET product_name = ?, description = ?, price = ?, quantity = ?, image = ? WHERE product_id = ?';
    const values = [product_name, description, price, quantity, image, productId];
  
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
        return;
      }
      res.json({ message: 'Cập nhật sản phẩm thành công' });
    });
}
);

app.delete('/delete-product/:productId', (req, res) => {
    const { productId } = req.params;
    console.log('Received DELETE request for product ID:', productId);
 
    // Thực hiện truy vấn SQL để xóa sản phẩm với productId
    const sql = 'DELETE FROM `product` WHERE product_id = ?';
    const values = [productId];
    console.log('values:', values)
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            return;
        }
        res.json({ message: 'Xóa sản phẩm thành công' });
    });
});

app.post('/create-account', (req, res) => {
    const { username, password, email, phone, address } = req.body;
 
    // Thực hiện truy vấn SQL để thêm sản phẩm mới vào cơ sở dữ liệu
    const sql = 'INSERT INTO `user`(`email`, `password`) VALUES (?, ?)';
    const values = [email, password];
 
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            return;
        }
        res.json({ message: 'Tạo tài khoản thành công' });
    });
 });

app.put('/update-account-profile/:userId', (req, res) => {
    const { userId } = req.params;
    const { name, email, birthday, phone, gender, address, image } = req.body;
    
    console.log('Received PUT request for user ID:', userId);
    console.log('New name:', name);
    console.log('New email:', email);
    console.log('New birthday:', birthday);
    console.log('New phone:', phone);
    console.log('Gender: ', gender);
    console.log('New address:', address);
    console.log('New image:', image);
    
    // Thực hiện truy vấn SQL để cập nhật giá trị quantity cho sản phẩm với productId
    const sql = 'UPDATE `user` SET name = ?, email = ?, birthday = ?, phone_number = ?, gender = ?, address = ?, image = ? WHERE user_id = ?';
    const values = [name, email, birthday, phone, gender, address, image, userId];
  
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
        return;
      }
      res.json({ message: 'Cập nhật tài khoản thành công' });
    });
});

app.put('/update-account-password/:userId', (req, res) => {
    const { userId } = req.params;
    const { password } = req.body;

    console.log('Received PUT request for user ID:', userId);
    console.log('New password:', password);

    // Thực hiện truy vấn SQL để cập nhật giá trị quantity cho sản phẩm với productId
    const sql = 'UPDATE `user` SET password = ? WHERE user_id = ?';
    const values = [password, userId];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
        console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
        return;
        }
        res.json({ message: 'Cập nhật mật khẩu thành công' });
    });
});
  
app.get('/users', (req, res) => {
    // Thực hiện truy vấn SQL để lấy danh sách sản phẩm từ cơ sở dữ liệu
    connection.query('SELECT * FROM `user`', (error, results, fields) => {
        if (error) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            return;
        }
        res.json(results); // Trả về dữ liệu sản phẩm cho ứng dụng React Native
    });
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    console.log('Received user ID:', id);
    // Thực hiện truy vấn SQL để lấy sản phẩm từ cơ sở dữ liệu
    const sql = 'SELECT * FROM `user` WHERE user_id = ?';
    const values = [id];
 
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            return;
        }
 
        if (results.length === 0) {
            res.status(404).json({ error: 'Không tìm thấy tài khoản' });
            return;
        }
 
        res.json(results[0]); // Trả về dữ liệu sản phẩm cho ứng dụng React Native
    });
}
);

// Khởi động máy chủ
// app.listen(port, '192.168.1.247', () => {
//     console.log(`Máy chủ API đang lắng nghe tại http://192.168.1.247:${port}`);
// });
// app.listen(port, '192.168.1.13', () => {
app.listen(port, '192.168.1.120', () => {
    console.log(`Máy chủ API đang lắng nghe tại http://192.168.1.120:${port}`);
});