// Migration tombstone for the original /sw.js. Do not register this in SvelteKit.
// Updating an old registration removes only Governance caches, not other applications' data.
self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => {
 event.waitUntil((async () => {
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith('governance-kz-')).map(key=>caches.delete(key)));
  await self.clients.claim();
  await self.registration.unregister();
 })());
});
// No fetch handler: all requests fall through to the network. No forced reload/unsaved-data loss.
