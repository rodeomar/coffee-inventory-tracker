# Coffee Inventory Management System

Coffee Inventory Management System is a web application that allows users to manage their coffee inventory. Users can view and interact with coffee sacks, add new sacks, and sell coffee beans.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Know Bugs](#know-bugs)

## Features

- View a list of coffee sacks with details.
- Add new coffee sacks to the inventory.
- Sell coffee beans, reducing the pounds remaining in a sack.
- Display bean details, including origin, price, and roast.
- User-friendly interface with modals for actions.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/rodeomar/coffee-inventory-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd coffee-inventory-tracke
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Open your web browser and visit `http://localhost:3000` to access the application.

3. Use the application to manage your coffee inventory.

## Technologies Used

- `React`: A JavaScript library for building user interfaces.
- `React Router`: For handling client-side routing.
- `Bootstrap`: A front-end framework for building responsive web designs.
- `Local Storage`: For storing coffee inventory data on the client-side.
- `JavaScript`: The primary programming language used for functionality.
- `HTML/CSS`: For structuring and styling the user interface.

## Know Bugs
 - Have to Reload web page if Sacks are added in different web page (No `Synchronized Data Flow`).