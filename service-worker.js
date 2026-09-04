const CACHE_NAME = "villa-mitre-v1";

self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    self.clients.claim();
});