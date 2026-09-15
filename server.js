<script>
(function () {
  const toggle = document.getElementById("aicToggle");
  const panel = document.getElementById("aicPanel");
  const closeBtn = document.getElementById("aicClose");
  const form = document.getElementById("aicForm");
  const input = document.getElementById("aicInput");
  const log = document.getElementById("aicLog");
  const chips = document.querySelectorAll(".aic-chips button");

  if (!toggle || !panel || !closeBtn || !form || !input || !log) {
    console.error("AI Copilot: elemen HTML tidak ditemukan.");
    return;
  }

  function openCopilot() {
    panel.classList.add("open");
    toggle.classList.add("open");
    input.focus();
  }

  function closeCopilot() {
    panel.classList.remove("open");
    toggle.classList.remove("open");
  }

  function addMessage(text, type) {
    const message = document.createElement("div");
    message.className = "aic-msg " + type;
    message.textContent = text;
    log.appendChild(message);
    log.scrollTop = log.scrollHeight;
    return message;
  }

  function addLoading() {
    const message = document.createElement("div");
    message.className = "aic-msg bot pending";
    message.innerHTML =
      'Sedang berpikir <span class="aic-dots">' +
      '<span></span><span></span><span></span>' +
      '</span>';

    log.appendChild(message);
    log.scrollTop = log.scrollHeight;
    return message;
  }

  async function sendMessage(message) {
    message = message.trim();

    if (!message) return;

    addMessage(message, "user");
    input.value = "";
    input.disabled = true;

    const loading = addLoading();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message
        })
      });

      const data = await response.json();

      loading.remove();

      if (!response.ok) {
        throw new Error(data.error || "Terjadi kesalahan pada server.");
      }

      addMessage(
        data.answer || "AI Copilot tidak memberikan jawaban.",
        "bot"
      );

    } catch (error) {
      loading.remove();

      addMessage(
        "Maaf, AI Copilot belum dapat terhubung ke server.",
        "bot"
      );

      console.error("AI Copilot error:", error);

    } finally {
      input.disabled = false;
      input.focus();
    }
  }

  toggle.addEventListener("click", function () {
    if (panel.classList.contains("open")) {
      closeCopilot();
    } else {
      openCopilot();
    }
  });

  closeBtn.addEventListener("click", closeCopilot);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage(input.value);
  });

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      const message = chip.textContent.trim();
      sendMessage(message);
    });
  });

})();
</script>
