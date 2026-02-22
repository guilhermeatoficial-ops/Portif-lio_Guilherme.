const sections = document.querySelectorAll(".container");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

const btnWpp = document.createElement("a");

const mensagem = encodeURIComponent(
  "Olá! Vi seu portfólio e gostaria de saber como você pode me ajudar com um site."
);

btnWpp.href = `https://wa.me/5511964458670?text=${mensagem}`;
btnWpp.target = "_blank";
btnWpp.innerText = "💬 Fale comigo no WhatsApp";

Object.assign(btnWpp.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "14px 22px",
  background: "#25D366",
  color: "#050714",
  fontWeight: "bold",
  borderRadius: "30px",
  textDecoration: "none",
  boxShadow: "0 0 20px rgba(37, 211, 102, 0.6)",
  zIndex: "999"
});

document.body.appendChild(btnWpp);
