const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const Document = require("./Document")
// Initialize Express app
const app = express()
app.use(cors({
  origin: 'https://sync-script-mu.vercel.app/',  // Vercel frontend URL
}));
app.use(express.json());

const uri = 'mongodb+srv://yashkam431:KjxDCgexpUAfBHXc@cluster0.u4awn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// Mongoose connection
mongoose.connect(uri, {
  
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error", err))

// Create an HTTP server and pass the Express app to it
const server = require("http").createServer(app)

// Initialize Socket.IO with the HTTP server
const io = require("socket.io")(server, {
  cors: {
    origin: "*", // Allow all origins (for dev), adjust this in production
    methods: ["GET", "POST"],
  },
})

const defaultValue = ""

// Add a basic route to display "Hi" when accessed via the browser
app.get("/", (req, res) => {
  res.send("Hi")
})

// Socket.IO logic
io.on("connection", socket => {
  console.log("Client connected")

  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit("load-document", document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
    })
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected")
  })
})

// Function to find or create a document
async function findOrCreateDocument(id) {
  if (id == null) return

  let document = await Document.findById(id)
  if (document) return document

  return await Document.create({ _id: id, data: defaultValue })
}
const PORT = process.env.PORT || 3001
// Start the server on port 3001 and log a message
server.listen(PORT, () => {
  console.log('Server started on port 3001')
})
