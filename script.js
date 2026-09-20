import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const signupForm = document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        // Check passwords
        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        try {

            // Create Firebase account
            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


            const user = userCredential.user;


            // Add user's name
            await updateProfile(user, {
                displayName: name
            });


            // Save user information in Firestore
            await setDoc(doc(db, "users", user.uid), {

                name: name,

                email: email,

                createdAt: serverTimestamp(),

                role: "user"

            });


            alert("Account created successfully!");


            // Go to dashboard
            window.location.href = "dashboard.html";


        } catch (error) {

            console.error(error);

            alert(error.message);

        }

    });

}