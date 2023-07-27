document.addEventListener('DOMContentLoaded', (e) => {
  const profileTabs = document.getElementById('profile-tabs');
  const tabsNav = profileTabs.querySelector('.tabs-nav');
  const tabsContent = profileTabs.querySelector('.tabs-content');

  const tabButtons = tabsNav.querySelectorAll('button');
  const tabWindows = tabsContent.querySelectorAll('.tab-window');

  tabButtons.forEach((t) => {
    const tabTarget = t.dataset.tabTarget;
    t.addEventListener('click', (e) => {
      tabButtons.forEach((b) => {
        b.classList.remove('active');
      });
      t.classList.add('active');

      tabWindows.forEach((w) => {
        let display = 'none';
        if (w.dataset.tabId === tabTarget) display = 'initial';
        w.style.display = display;
      });
    });
  });
});
