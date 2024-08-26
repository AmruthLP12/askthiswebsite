
# AskThisWebsite

AskThisWebsite is a web application that allows users to interact with any website by simply adding `https://askthiswebsite-cwa.vercel.app/` before the website's URL. This tool provides a unique way to engage with websites and retrieve specific information.


## Features

- Interactive Web Sessions: Interact with websites by adding the AskThisWebsite prefix to any URL.
- Session Management: Keeps track of your interactions for a seamless experience.
- Responsive Design: Optimized for various screen sizes and devices.


# Getting Started
## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- npm (Node Package Manager) installed.

## Installation

1. Clone the repository:

```bash
  https://github.com/AmruthLP12/askthiswebsite.git
```

2. Navigate to the project directory:

```bash
    cd askthiswebsite
```

3. Install the dependencies:

```bash
    npm install
```
    
## Running the Application

To start the development server, run:

```bash
npm run dev
```
Open your browser and visit http://localhost:3000.


## Building for Production

To build the project for production, run:

```bash
npm run build
```
To start the production server, run:

```bash
npm start
```
## Usage


To interact with a website, prepend` https://askthiswebsite-cwa.vercel.app/` to the website's URL. For example:

```bash
Copy code
https://askthiswebsite-cwa.vercel.app/https://www.example.com
```
This will load the specified website within the AskThisWebsite framework, allowing you to interact with it.
## Technologies Used

- __Next.js__: React framework for server-rendered applications.
- __Tailwind CSS__: Utility-first CSS framework.
- __@nextui-org/react__: UI components for React.
- __Upstash Redis__: Cloud-native Redis for session management.
- __Rag Chat__: Real-time chat interaction library.
- __Lucide-react__: Icons for React.
- __Typescript__: Static type checking.