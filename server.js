const express = require("express");
const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 10000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());

/*
  Knowledge base
  Dibaca dari ai-knowledge.html.
*/
const knowledgePath = path.join(__dirname, "ai-knowledge.html");

let knowledge = "";

if (fs.existsSync(knowledgePath)) {
  knowledge = fs.readFileSync(knowledgePath, "utf8");
}

/*
  Health check
  Untuk mengecek apakah backend hidup.
*/
app.get("/", function (req, res) {
  res.json({
    status: "ok",
    service: "AI Copilot Backend"
  });
});

/*
  Endpoint AI Copilot
*/
app.post("/api/chat", async function (req, res) {
  try {
    const message = String(req.body.message || "").trim();

    if (!message) {
      return res.status(400).json({
        error: "Pesan kosong."
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY belum tersedia.");

      return res.status(500).json({
        error: "API key belum dikonfigurasi di server."
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6-luna",

      instructions: `
Kamu adalah AI Copilot untuk website:

"Layanan Interaktif Gabungan Matematika dan PKN untuk Melatih Berfikir Kritis Murid"

Website ini dibuat oleh siswa kelas 8E Kelompok 1.

Tugas kamu:
- Membantu siswa memahami isi website.
- Menjawab pertanyaan tentang proyek, Matematika, PKN, layanan interaktif, angket, dan solusi yang tersedia.
- Gunakan bahasa Indonesia.
- Gunakan bahasa yang mudah dipahami siswa SMP kelas 8.
- Jawab secara jelas dan tidak terlalu panjang.
- Jangan mengarang informasi tentang website.
- Jika informasi yang ditanyakan tidak tersedia dalam knowledge base, katakan bahwa informasi tersebut belum tersedia.
- Jangan mengaku sebagai Chatbase.
- Nama kamu adalah AI Copilot.

KNOWLEDGE BASE:
${knowledge}
`,

      input: message
    });

    const answer =
      response.output_text ||
      "Maaf, AI Copilot belum mendapatkan jawaban.";

    res.json({
      answer: answer
    });

  } catch (error) {
    console.error("AI Copilot error:", error);

    res.status(500).json({
      error: "AI Copilot sedang mengalami masalah."
    });
  }
});

/*
  Render harus menerima koneksi pada 0.0.0.0.
*/
app.listen(PORT, "0.0.0.0", function () {
  console.log(`AI Copilot backend berjalan pada port ${PORT}`);
});
