require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL Database!");
});

app.use(express.static(path.join(__dirname, 'website')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', [
  check('name').trim().isLength({ min: 3 }),
  check('gender').isIn(['male', 'female']),
  check('phone')
    .isLength({ min: 10, max: 10 }).withMessage('رقم الجوال يجب أن يكون 10 أرقام')
    .isNumeric().withMessage('رقم الجوال يجب أن يحتوي على أرقام فقط'),
  check('dob').notEmpty(),
  check('email').isEmail(),
  check('language').isIn(['arabic', 'english', 'french']),
  check('petInfo').isLength({ min: 10 }),
  check('message').isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, gender, phone, dob, email, language, petInfo, message } = req.body;

  const sql = `INSERT INTO contact_messages 
    (name, gender, phone, dob, email, language, pet_info, message)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, gender, phone, dob, email, language, petInfo, message], (err, result) => {
    if (err) return res.status(500).json({ message: 'خطأ أثناء حفظ البيانات' });
    res.status(200).json({ message: 'تم إرسال البيانات بنجاح' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
