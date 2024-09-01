# What's the Word

## Overview
"What's the Word" is a web application enabling users to discover and create events in their area, inspired by the anonymous event promotion seen on platforms like YikYak. Built using the T3 stack (Next.js, Prisma, Tailwind, and NextAuth).

## Features
- **Event Discovery**: Search by location (city, state, or college).
- **Event Interaction**: RSVP, chat anonymously, and leave reviews.
- **Event Creation**: Customize events with visibility, status, and attendee tracking.
- **User Profiles**: Customize display name and profile picture.

## Project Structure
/src /app /components # Reusable components /pages # Main application pages /styles # Global styles /utils # Utility functions /api # API routes /auth # Authentication setup

bash
Copy code

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jessemorin77/WhatsTheWordTrial2.git
   cd WhatsTheWordTrial2
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env.local file and add your environment variables.
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

Usage
Creating an Event: Go to "Create Event," upload an image, and fill in details.
Interacting with Events: RSVP, join chats, and leave reviews.
User Profiles: Customize your profile name and picture.
Technologies Used
Next.js
Prisma
Tailwind CSS
NextAuth
Contributing
Contributions are welcome! Fork the repository, create a new branch, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For inquiries, contact Jesse Morin at jessemorin77@gmail.com.
