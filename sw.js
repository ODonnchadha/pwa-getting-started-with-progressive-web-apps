"use strict";

const CAR_DEALS_CACHE_NAME = "CarDealsCacheV1";
const CAR_DEALS_PAGES_NAME = "CarDealsCachePagesV1";
const CAR_DEALS_CACHE = [CAR_DEALS_CACHE_NAME, CAR_DEALS_PAGES_NAME];

const CAR_DEALS_CACHE_FILES = [
    "https://cdn.jsdelivr.net/gh/bstavroulakis/progressive-web-apps/resources/localforage.js",
    "js/app.js",
    "js/carPageService.js",
    "js/carService.js",
    "js/clientStorage.js",  
    "js/constants.js",
    "js/swRegister.js",
    "js/template.js",
    "/",
    "index.html",
    "style.css"
];



self.addEventListener("install", (event) => {
    console.log("install", event);

    const preCache = async () => {
        const cache = await caches.open(CAR_DEALS_CACHE_NAME);
        return cache.addAll(CAR_DEALS_CACHE_FILES);
    };

    preCache();
});

self.addEventListener("activate", (event) => {
    console.log("activate", event);

    const clearCache = async () => {
        const keys = await caches.keys();
        keys.forEach(async k => {
            if (CAR_DEALS_CACHE.includes(k)) {
                return;
            }
            await caches.delete(k);
        })
    }
});