// Keep file:// viewing available; installation requires HTTPS or localhost.
if ('serviceWorker' in navigator && window.isSecureContext && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './', updateViaCache: 'none' })
      .catch(error => console.warn('오프라인 저장을 준비하지 못했습니다.', error));
  });
}
