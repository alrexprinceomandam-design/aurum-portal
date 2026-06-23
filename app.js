// --- LOCAL SESSION INITIALIZATION ENGINE ---

function initializeClientSession(event) {
  // 1. Halt the default page reload to allow animation runtimes
  event.preventDefault();

  const emailInput = document.getElementById('email');
  if (!emailInput) return;

  const emailValue = emailInput.value;

  // 2. Cache the client's email locally within the browser state memory space
  // This matches the target key extracted inside the shop.html setup
  localStorage.setItem('cachedClientEmail', emailValue);

  // 3. Render the luxury rotating loading display overlay visible
  const loader = document.getElementById('gold-loader');
  if (loader) {
    loader.classList.remove('hidden');
  }

  // 4. Smoothly route the client over to the showroom index after transition delay
  setTimeout(() => {
    window.location.href = "shop.html";
  }, 2200);
}