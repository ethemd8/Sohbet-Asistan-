const express = require("express");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

// Replace with your actual Gemini API key
const GEMINI_API_KEY = "AIzaSyBXKgySujns3zL3--3N-SrIuY6z2F5TWYE";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const activeStreams = new Map(); // Store active streams with session ids

app.get("/api/chat", async (req, res) => {
    const message = req.query.message;
    const sessionId = Date.now().toString(); // Unique id for each request

    if (!message) {
        return res.status(400).json({ error: "Mesaj gerekli" });
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");


    try {
        const chat = model.startChat();
        const result = await chat.sendMessageStream(message);
        console.log(message)
          if (result && result.stream) {
             activeStreams.set(sessionId, { stream: result.stream, res }); 
              for await (const chunk of result.stream) {
                    if (res.writableEnded) {
                       console.log(`[${new Date().toLocaleTimeString()}] Stream cancelled by the client.`);
                        break;
                    }

                    const text = chunk.text();
                    if (text) {
                        const timestamp = new Date().toLocaleTimeString();
                        console.log(`[${timestamp}] Gemini API Chunk:`, text);
                        res.write(`data: ${JSON.stringify({ text: text, timestamp: timestamp })}\n\n`);
                    }
                }
              if (!res.writableEnded) {
                   const doneTimestamp = new Date().toLocaleTimeString();
                    console.log(`[${doneTimestamp}] Gemini API Response: [DONE]`);
                    res.write("data: [DONE]\n\n");
              }
             } else {
                console.error("Hata: Gemini API'den geçerli bir stream alınamadı.");
                 if (!res.writableEnded) {
                      res.write(`data: ${JSON.stringify({ error: "API hatası oluştu: Geçerli bir stream alınamadı" })}\n\n`);
                 }
            }
    } catch (error) {
        console.error("API hatası:", error);
       if (!res.writableEnded) {
           res.write(`data: ${JSON.stringify({ error: "API hatası oluştu" })}\n\n`);
       }
    } finally {
      activeStreams.delete(sessionId); // Remove stream from the map
       if (!res.writableEnded) {
          res.end();
       }
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});