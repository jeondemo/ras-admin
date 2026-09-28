self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response('<meta charset="utf-8"><body style="background:#0B0C0E;color:#F4F5F6;font-family:sans-serif;padding:40px">인터넷 연결을 확인해 주세요.</body>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
