import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-784df-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)


 console.log(database)