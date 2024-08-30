const notificationBox = document.getElementById('notification-box');
const notificationMsg = notificationBox!.querySelector('.notification-msg');

export function pushNotification(msg: string) {
  // Update the message
  notificationMsg!.textContent = msg;

  // Show the notification
  notificationBox!.classList.add('show');

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notificationBox!.classList.remove('show');
  }, 3000); // 3000ms = 3 seconds}
}
