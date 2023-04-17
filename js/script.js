// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/17/2023
// This file contains the JS functions for index.html

"use strict";

function tempEntered () {

// Define temperature and message variables & set temperature limit constant
const TEMP_LIMIT = 15;
 let temperature = parseFloat(document.getElementById("temp-input").value);
 let message = "";

// If: for a temperature of 15 degrees or under
 if (temperature <= TEMP_LIMIT) {
   message = "It is chilly out! I suggest you wear some kind of jacket to stay warm.";
 }

 // Else: for a temperature of more than 15 degrees
 else {
   message = "It is pretty hot out! You might want to wear sunscreen or a baseball cap.";
 }

 //display the temperature evaluation to the screen
 document.getElementById("results").innerHTML = message;
}