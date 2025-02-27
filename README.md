:
🌍💰 Currency Converter App
A simple Currency Converter built with React.js that allows users to convert currencies using real-time exchange rates.

🚀 Features
✅ Convert currencies in real-time using an API
✅ Swap currencies with one click
✅ Beautiful UI with Tailwind CSS
✅ Supports multiple currency options
✅ Mobile-friendly and responsive design



🛠 Tech Stack
React.js – Core framework
Tailwind CSS – Styling
Custom Hooks (useCurrencyInfo) – Fetching exchange rates
Currency API – @fawazahmed0/currency-api
📸 Screenshots
(Add screenshots of your app here!)

🏗 Installation & Setup
1️⃣ Clone the repository

sh
Copy
Edit
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
2️⃣ Install dependencies

sh
Copy
Edit
npm install
3️⃣ Start the app

sh
Copy
Edit
npm run dev
The app will be running on http://localhost:5173 (or another port if in use).

🔄 How It Works
Enter an amount in the "From" currency field.
Select the "To" currency from the dropdown.
Click Convert to see the converted amount.
Use the Swap button to switch currencies.
🔌 API Used
The app fetches real-time exchange rates from:
🌍 Currency API

js
Copy
Edit
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
🛠 Folder Structure
bash
Copy
Edit
/currency-converter
│── /src
│ ├── /components
│ │ ├── InputBox.jsx
│ ├── /hooks
│ │ ├── useCurrencyInfo.js
│ ├── App.jsx
│ ├── main.jsx
│── package.json
│── README.md
🎯 Future Enhancements
🔹 Add more currency providers for better accuracy
🔹 Include a historical exchange rate graph 📈
🔹 Dark mode support 🌙

📜 License
This project is open-source and free to use under the MIT License.

👨‍💻 Contributing
Want to contribute? Feel free to fork the repo, make your changes, and submit a pull request! 🚀

🌟 If you found this helpful, don’t forget to give it a star ⭐ on GitHub!
Let me know if you want any modifications! 🚀🔥
