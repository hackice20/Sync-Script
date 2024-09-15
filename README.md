
# Sync-Script

Sync-Script is a collaborative text editor designed for real-time document editing. It provides seamless synchronization of document changes across multiple users.

## Installation
```markdown
1. Clone the repository:
   ```bash
   git clone https://github.com/hackice20/Sync-Script.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Sync-Script
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- **Real-Time Collaboration**: Allows multiple users to edit the same document simultaneously. Changes are broadcasted to all connected clients instantly.
- **Automatic Saving**: Periodically saves document changes to prevent data loss. The save interval is configurable.
- **Live Updates**: Updates from other users are reflected in real-time, ensuring everyone sees the latest version of the document.
- **User-Friendly Interface**: Provides a clean and intuitive editor interface with customizable toolbar options for a rich text editing experience.
- **Document Management**: Users can create new documents or open existing ones using unique identifiers.

## Technologies Used

- **Node.js**: JavaScript runtime environment used for server-side development.
- **Express.js**: Web framework for Node.js used to build the backend server.
- **MongoDB**: NoSQL database for storing and retrieving documents.
- **WebSocket (Socket.io)**: Enables real-time, bidirectional communication between the server and clients.
- **Quill**: Rich text editor used for document editing in the frontend.
- **Vite**: Modern build tool that provides fast development and optimized builds for React applications.
- **React**: JavaScript library for building user interfaces, used for creating the frontend components.

```