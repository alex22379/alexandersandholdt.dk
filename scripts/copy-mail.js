document.addEventListener('DOMContentLoaded', (e) => {
  const copyMail = document.querySelector('.copy-mail');
  const mailInput = copyMail.querySelector('input');
  const copyButton = copyMail.querySelector('button');

  copyButton.addEventListener('click', (e) => {
    mailInput.select();
    document.execCommand('copy');
    copyMail.classList.add('copied');
    window.getSelection().removeAllRanges();
    setTimeout(() => {
      copyMail.classList.remove('copied');
    }, 2500);
  });
});
