// from https://www.geeksforgeeks.org/how-to-detect-touch-screen-device-using-javascript/

export default function isTouchEnabled() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
