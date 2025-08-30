const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const texto = boton.textContent;


    if (boton.id === "AC") {
      pantalla.textContent = "0";
      return;
    }

    
    if (boton.id === "borrar") {
      if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR") {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }


    if (boton.id === "igual") {
      try {
        const expr = pantalla.textContent;
        
        const resultado = Function(`"use strict"; return (${expr});`)();

        if (!isFinite(resultado)) throw new Error("Math error");
        pantalla.textContent = String(resultado);
      } catch {
        pantalla.textContent = "ERROR";
      }
      return;
    }

    
    const operadores = ["+", "-", "*", "/", "."];
    if (operadores.includes(texto)) {
      const ultimo = pantalla.textContent.slice(-1);
      if (operadores.includes(ultimo)) {
        pantalla.textContent = pantalla.textContent.slice(0, -1) + texto;
        return;
      }
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
      pantalla.textContent = (texto === ".") ? "0." : texto;
    } else {
      pantalla.textContent += texto;
    }
  });
});
