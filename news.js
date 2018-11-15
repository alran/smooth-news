function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hidePaywalls() {
  await sleep(2000);
  console.log('hidiing paywalls...');

  if (window.location.host === 'www.nytimes.com') {
    const app = document.getElementById('app');
    if (!app) { return; }

    const background = app.firstElementChild.firstElementChild;
    background.style.position = 'relative';

    const gateway = document.querySelectorAll("[data-testid=dock-gateway]")[0];
    if (!gateway) { return; }
    gateway.style.display = 'none';
    gateway.previousElementSibling.lastChild.style.display = 'none'
  }
}

hidePaywalls();
