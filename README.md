# 🏫 School App

A full-stack school management application built with **Next.js**, **React.js**, **JavaScript**, **Prisma**, **MySQL**, and **Cloudinary**.

---

## 🚀 Tech Stack
- **Frontend**: Next.js (JavaScript, React.js, TailwindCSS, Framer Motion)
- **Backend**: Next.js API Routes
- **Database**: MySQL (with Prisma ORM)
- **File Uploads**: Cloudinary

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Ayush-3012/school-app
cd school-app
```

### 2️⃣ Install dependencies
```bash
Copy code
npm install
```
### 3️⃣ Configure environment variables
Create a .env file in the root folder and add:
```bash
DATABASE_URL="mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:3306/schoolDb"

NEXT_PUBLIC_API_URL = http://localhost:3000

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
### 4️⃣ Setup Prisma
```bash
npx prisma generate
npx prisma db push
```

### 5️⃣ Run the development server
``` bash
npm run dev
```

Server will run at:
👉 http://localhost:3000

📜 License
This project is licensed under the MIT License.
