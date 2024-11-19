import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint لحفظ اسم المستخدم وكلمة المرور
app.post('/save-credentials', (req, res) => {
    const { username, password } = req.body;

    // تحديد مسار حفظ الملف
    const filePath = path.join(process.cwd(), 'credentials.txt');

    // حفظ البيانات في ملف نصي
    const data = `Username: ${username}, Password: ${password}\n`;
    fs.appendFile(filePath, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).send('Error saving credentials');
        }
        console.log('Credentials saved successfully');
        res.send('Credentials saved successfully');
    });
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
