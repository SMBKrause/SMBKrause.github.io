document.getElementById('reveal-contact')?.addEventListener('click', function () {
  const codes = [115,115,97,64,100,101,115,46,101,99,110,117,46,101,100,117,46,99,110];
  const address = String.fromCharCode(...codes);
  const link = document.createElement('a');
  link.href = 'mailto:' + address;
  link.textContent = address;
  const target = document.getElementById('contact-result');
  target.replaceChildren(link);
  this.hidden = true;
});
