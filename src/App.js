// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App1.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    serviceNumber: "",
    accountNumber: "",
    command: ""
  });
  const { firstName, lastName, accountNumber, serviceNumber, command } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_NOCODE_API_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          [new Date().toLocaleDateString(), firstName, lastName, serviceNumber, accountNumber, command],
        ]),
      });
      await response.json();
      setData({
        firstName: "",
        lastName: "",
        serviceNumber: "",
        accountNumber: "",
        command: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="grid h-screen place-items-center">
      <div class="heading">
        <img class="logo" src="https://dss.gov.ng/assets/images/logos/it_logo_white1.png"></img>
        <h2>DSS OSINT Department</h2>
      </div>
      <h2 class=" place-items-center font-bold text-6xl">
        
      </h2>
      <form class="w-full max-w-lg" onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class=" first_name w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              value={firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name="lastName"
              onChange={handleChange}
              value={lastName}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-number"
            >
              Service Number
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-number"
              type="tel"
              placeholder="00000000"
              onChange={handleChange}
              name="phoneNumber"
              value={serviceNumber}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-number"
            >
              Account Number
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-number"
              type="tel"
              placeholder="000000000"
              onChange={handleChange}
              name="accountNumber"
              value={accountNumber}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Command
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Command"
              name="command"
              onChange={handleChange}
              value={command}
            />
          </div>
        </div>
        <div class="button">
        <button class="flex  btn items-center m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}

export default App;
