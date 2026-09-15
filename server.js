const express = require("express");
const OpenAI = require("openai");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(express.static("."));

const knowledge = fs.existsSync("ai-knowledge.html")
  ? fs.readFileSync("ai-knowledge.html", "utf8")
  : "";

app.post("/api/chat", async (req, res) => {
  try {
    const message = String(req.body.message || "").trim();

    if (!message) {
      return res.status(400).json({
        error: "Pesan kosong."
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions: `
Kamu adalah AI Copilot untuk website
"Layanan Interaktif Gabungan Matematika dan PKN untuk Melatih Berfikir Kritis Murid".

Jawab dalam bahasa Indonesia yang jelas dan sesuai tingkat siswa SMP kelas 8.

Gunakan informasi dari knowledge base di bawah ini sebagai sumber utama.
Jangan mengarang data tentang website, kelompok, materi, atau hasil angket.

KNOWLEDGE BASE:
${knowledge}

Jika informasi tidak ditemukan dalam knowledge base,
katakan bahwa informasi tersebut belum tersedia di website.

Jangan mengaku sebagai Chatbase.
Nama kamu adalah AI Copilot.
`,
      input: message
    });

    res.json({
      answer: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "AI Copilot sedang mengalami masalah."
    });
  }
});

app.listen(port, () => {
  console.log(`AI Copilot berjalan di http://localhost:${port}`);
});
