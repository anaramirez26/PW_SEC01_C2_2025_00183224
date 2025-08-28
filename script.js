document.getElementById("btnOrden").addEventListener("click", () => {
    const grid = document.getElementById("grid-contenido");
    const isStack = grid.classList.toggle("stack");
    if (isStack) {
      grid.style.display = "block";
    } else {
      grid.style.display = "grid";
    }
  });
  
  document.getElementById("btnTitulo").addEventListener("click", () => {
    const t = document.getElementById("titulo");
    t.textContent = "HTML & CSS: Curso práctico avanzado para estudiantes";
  });
  
  document.getElementById("btnColores").addEventListener("click", () => {
    const sub = document.getElementById("subtitulo");
    const desc = document.getElementById("desc");
    const descrip = document.getElementById("descmed");
    const desco = document.getElementById("descfin");
    
    sub.style.color = "#9f08e6ff";     
    desc.style.color = "#1f0adfff";    
    desco.style.color ="#11d321ff";
    descrip.style.color ="#1169ecff";
  });
  
  document.getElementById("btnImagen").addEventListener("click", () => {
    const zona = document.getElementById("zona-imagen");
    if (!document.getElementById("img-libro")) {
      const img = document.createElement("img");
      img.id = "img-libro";
      img.alt = "Portada del libro";
      img.src = "img1.jpeg";
      img.style.display = "block";
      img.style.width = "100%";
      img.style.maxWidth = "260px";
      img.style.marginTop = "10px";
      img.style.border = "1px solid #d6d6d6";
      img.style.borderRadius = "6px";
      zona.appendChild(img);
    }
  });