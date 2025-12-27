function goTo(id) {
  console.log("Navigating to:", id);

  const screens = document.querySelectorAll(".screen");
  screens.forEach(screen => screen.classList.remove("active"));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  } else {
    console.error("Screen not found:", id);
  }
}
