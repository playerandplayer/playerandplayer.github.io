// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC84uQVvUoedZrWvkbjDDuK5gu87WrmArk",
    authDomain: "electionsim-737fa.firebaseapp.com",
    projectId: "electionsim-737fa",
    storageBucket: "electionsim-737fa.appspot.com",
    messagingSenderId: "599765910145",
    appId: "1:599765910145:web:a057bffa435aa7b4264380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Handle Registration
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, username, password);
        alert('Registration successful!');
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        alert('Login successful!');
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

// Handle Party Registration
document.getElementById('partyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const partyName = document.getElementById('partyName').value;
    
    try {
        await addDoc(collection(db, 'parties'), {
            name: partyName,
            leader: auth.currentUser.uid
        });
        alert('Party registered successfully!');
        loadParties(); // Reload party list for voting
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

// Load Parties for Voting
async function loadParties() {
    const querySnapshot = await getDocs(collection(db, 'parties'));
    const partySelect = document.getElementById('partySelect');
    partySelect.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const party = doc.data();
        const option = document.createElement('option');
        option.value = doc.id;
        option.textContent = party.name;
        partySelect.appendChild(option);
    });
}

loadParties(); // Initial load
