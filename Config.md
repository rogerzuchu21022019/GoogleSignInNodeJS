# Config

```bash
yarn init
```

```bash
touch .gitignore

add 
node_modules
yarn.lock
.env
```

```bash
yarn add express ejs connect-mongo dotenv express-session mongoose passport passport-google-oauth20 nodemon
```

```bash
https://console.cloud.google.com/ 

Rồi dô NavigationMenu bên tay trái > Chọn mục Api And Services > Credentials > Create Credentials > OAuth Client ID > Web App > Đặt tên app rồi Create

Đợi nó xong thì add cái link Redirect URI bằng địa chỉ cuả trang Home + chuỗi auth/google/callback > Copy 2 cái Key vào .env và thay key cũ
```

```bash
touch .env

GOOGLE_CLIENT_ID = 160860148073-c240k8fh4h6qn1rgq5ua2cs54p0qm2m2.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET = 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
```

```bash
Tạo folder Passport trong middleware

Tạo file tên Passport.js

```