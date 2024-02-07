const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html']
const self = this
    //install service worker
self.addEventListener('install', (event) => {
        event.waitUntil(caches.open(CACHE_NAME).then(cache => {
            console.log('opened cache')

            return cache.addAll(urlsToCache)
        }))
    })
    //listen for requests---so when we listen for requets then we respond with
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
        .then(() => {
            return fetch(event.request) //so if it cannot fetch data it means there no internet connection so we simply get to our  cache and return our offline page for when theres no internet connection
                .catch(() => caches.match('index.html'))
        })
    )

})

//Activate the service worker
self.addEventListener('activate', (event) => {
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME)

    event.waitUntil(
        caches.keys()
        .then(cacheNames => Promise.all(
            cacheNames.map(cacheName => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})