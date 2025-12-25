import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔹 Firebase config 
const firebaseConfig = {
  apiKey: "AIzaSyBd-01zperwcquxGUSbYL5GU0LG_4rh_P0",
  authDomain: "myportfolio-1711.firebaseapp.com",
  projectId: "myportfolio-1711",
  storageBucket: "myportfolio-1711.firebasestorage.app",
  messagingSenderId: "237285794426",
  appId: "1:237285794426:web:93cac3db696e976347d1c3"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 DOM element
const visitEl = document.getElementById("visitCount");
if (!visitEl) {
  console.error("visitCount element not found");
}

// 🔹 Firestore document for total visits
const counterRef = doc(db, "counters", "visitors");

// 🔹 Firestore collection for visit logs
const visitsCollection = collection(db, "visits");

// 🔹 Prevent refresh counts
const hasVisited = localStorage.getItem("visited");

async function updateVisitorCount() {
  try {
    if (!hasVisited) {
      // Increment total visitor count
      await updateDoc(counterRef, {
        count: increment(1)
      });

      // Log device/browser/OS info anonymously
      await addDoc(visitsCollection, {
        device: getDeviceType(),
        browser: getBrowser(),
        os: getOS(),
        timestamp: new Date()
      });

      // Mark as visited
      localStorage.setItem("visited", "true");
    }

    // Update counter in HTML
    const snapshot = await getDoc(counterRef);
    if (snapshot.exists()) {
      visitEl.innerText = snapshot.data().count;
    }
  } catch (err) {
    console.error("Visitor counter error:", err);
    visitEl.innerText = "—";
  }
}

updateVisitorCount();

// 🔹 Helper functions
function getDeviceType() {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
    ? "Mobile"
    : "Desktop";
}

function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  return "Unknown";
}

function getOS() {
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
  if (ua.includes("Linux")) return "Linux";
  return "Unknown";
}
