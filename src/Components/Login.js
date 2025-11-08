import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const Login = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generatedCredentials, setGeneratedCredentials] = useState({
    username: "",
    password: "",
    approval: false,
  });
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  // Function to handle Sign Up button click
  const handleSignUp = () => {
    const username = `user${Math.random().toString(36).substring(2, 10)}`;
    const password = Math.random().toString(36).substring(2, 10);
    setGeneratedCredentials({ username, password, approval: false });
    setIsModalOpen(true);
  };

  // Function to handle Login inside modal (saving to MongoDB)
  const handleNewLogin = async () => {
    try {
      await axios.post(
        "https://client1-server.vercel.app/postUser",
        generatedCredentials
      );
      alert("User credentials saved successfully!");
      localStorage.setItem(
        "ccusername",
        JSON.stringify(generatedCredentials.username)
      );
      setIsModalOpen(false);

      // Create and trigger download of the credentials file
      const element = document.createElement("a");
      const file = new Blob(
        [
          `Username: ${generatedCredentials.username}\nPassword: ${generatedCredentials.password}`,
        ],
        { type: "text/plain" }
      );
      element.href = URL.createObjectURL(file);
      element.download = "user_credentials.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      navigate("/not-approved"); // Replace '/not-approved' with the actual URL for not approved
    } catch (error) {
      console.error("Error saving user credentials:", error);
    }
  };

  // Function to handle regular login (Sign In button on the form)
  const handleSignIn = async () => {
    try {
      const response = await axios.get(
        `https://client1-server.vercel.app/getUser/${loginCredentials.username}`
      );

      if (
        response.data &&
        response.data.password === loginCredentials.password
      ) {
        // Save user data to localStorage on successful login
        localStorage.setItem(
          "ccusername",
          JSON.stringify(response.data.username)
        );
        alert("Login successful!");

        // Redirect based on approval status
        if (response.data.approval) {
          window.location.href = "https://www.facebook.com/"; // Replace with the URL for approved users
        } else if (response.data.username === "admin") {
          navigate("/admin/rabiul");
        } else {
          navigate("/not-approved"); // Replace with the URL for not approved users
        }
      }
    } catch (error) {
      console.error("Error fetching user credentials:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-center text-xl font-semibold mb-4">
          Create Your Account
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter username"
            value={loginCredentials.username}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                username: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter password"
            value={loginCredentials.password}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              })
            }
          />
        </div>

        <div className="flex justify-between">
          <button
            className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Modal for displaying generated credentials */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="flex items-center justify-center fixed inset-0 bg-opacity-50"
        overlayClassName="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h3 className="text-lg font-semibold mb-4">Generated Credentials</h3>
          <p className="mb-2">
            Username: <strong>{generatedCredentials.username}</strong>
          </p>
          <p className="mb-4">
            Password: <strong>{generatedCredentials.password}</strong>
          </p>

          <button
            className="w-full bg-blue-500 text-white py-2 rounded"
            onClick={handleNewLogin}
          >
            Login
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
