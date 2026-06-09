// Reveal elements on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Copy IBAN to clipboard
const copyBtn = document.querySelector("[data-iban]");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const iban = document.getElementById("iban").textContent.trim();
    try {
      await navigator.clipboard.writeText(iban);
      const original = copyBtn.textContent;
      copyBtn.textContent = "Copiato!";
      setTimeout(() => (copyBtn.textContent = original), 2000);
    } catch (err) {
      copyBtn.textContent = "Copia manuale";
    }
  });
}
