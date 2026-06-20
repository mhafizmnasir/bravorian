import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export const firebaseConfig = {
            apiKey: "AIzaSyCQ9SBXkEILe6PZdmLyGBSFK63XhPM_V7o", 
            authDomain: "bravorians-bsi.firebaseapp.com", 
            databaseURL: "https://bravorians-bsi-default-rtdb.asia-southeast1.firebasedatabase.app", 
            projectId: "bravorians-bsi", 
            storageBucket: "bravorians-bsi.firebasestorage.app", 
            appId: "1:314220494464:web:d3b21e9b742e1db86f7065"
};

export const googleCalendarApiKey = "AIzaSyCQ9SBXkEILe6PZdmLyGBSFK63XhPM_V7o";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
