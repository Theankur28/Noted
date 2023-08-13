import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Noty from "noty";
import 'noty/lib/noty.css';
import "noty/lib/themes/semanticui.css";

const Logout = () => {
    const token = localStorage.getItem("token");
    // Noty js notification
    const successNoty = new Noty({
        text: "Logout Successful!",
        type: "success",
        theme: "semanticui",
        timeout: 3000,
    });
    const errorNoty = new Noty({
        text: "Error, Try again!",
        type: "error",
        theme: "semanticui",
        timeout: 3000,
    });

    const handleLogout = async () => {
        try {
            // Send a POST request to the server to logout the user
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/logout`, {}, {
                headers: {
                    Authorization: `${token}`,
                },
            }
            );
            // After successful logout, remove the token from localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("userId");

            // Redirect the user to the login page
            successNoty.show();
            window.location.href = "/login";
        } catch (error) {
            // If logout fails, handle the error here
            errorNoty.show();
            console.error("Logout failed:", error);
        }
    };


    return (
        <>
            <Header />
            <div className="auth-form">
                <h1>Are you sure you want to logout from your account?</h1>
                <button type="button" onClick={handleLogout}>Yes, Logout!</button>
                <p>
                    Back to <Link to="/home">Home</Link>
                </p>
            </div>
        </>
    );
};

export default Logout;
