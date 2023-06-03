## Getting Started with Progressive Web Apps by Bill Stavroulakis

- COURSE OVERVIEW:
    - In this course, we will create a 'Car Deals' website using techniques and technologies to transform it from a simple web page into a progressive web app.
    - Prerequisites: HTML & CSS, JavaScript, and AJAX Requests.

- COURSE INTRODUCTION:
    - Offline first. Installable. Native features. e.g.: "Push" notifications.
    - App Shell. Design. Structure. Data.
    - Web versus Native. Native have won the fight. REGRET: Facebook doubled-down in HTML5 and *not* native.
    - Anatomy: 
        1. Load instantly.
        2. HTTPS.
        3. App-like.
        4. Web. Crawable and discoverable.
        5. Progressive enhancements.
        6. Installable.
    - Case study. AMAZON. ET AL.

- WEB APP SETUP AND STRUCTURE:
    - Setup: (1) Content. Dynamic. (2) App shell. Static.
    - App Shell: Load as fast as possible. Be instantanious upon second load. Dynamically display content.
    - Car Deals 2 project on [GitHub](https://github.com/bstavroulakis/progressive-web-apps).
    - And the *real* [final product](https://www.cardealspwa.com/).
    - No third-party libraries or polyfills.
    - UI Frameworks. Tailwind CSS. Bootstrap. Foundation. Semantic UI. Material Design Lite.
        - Consistemcy. Corss-browser. Accessibility. Best Practices. Focus. Community.
    ```javascript
        npm install http-server -g
        http-server -c -1
    ```
    - Promises: 
        - Pyramid of doom. Callbacks. We cannot handle errors efficiently.
        ```javascript
            fetch().then(x => fetch(x)).then(y => fetch(y))catch(() => {});
        ```
    - async/await:
        ```javascript
            async run() {
                const x = await fetch();
                const y = await fetch(x);
                const z = await fetch(y);
                socument.querySelector("body").innerHTML = z;
            }
            run();
        ```
    - First load. And extended pages. 
        - e.g.: Load details with each car. loadCarPage method with details id.

- CLIENT-SIDE STORAGE:
    - Currently, application only within browser memory. Store state and load dymanically.
    - Client-side storage techniques.
        - Cookies: Adding state to browser. 1994 Netscape.
            - User information. Personalization. Ad tracking. Analytics.
            - Compatible everywhere. 4KB of storage space.
            - Data type: string. Less secure. Non-performament. Easily deleted.
        - HTML 5: 2.5 - 5.0 MB. Unstructured. Slow access. Synchronous calls.
            - Session storage. Browser session.
            - Local storage. KVP. Parse/unparse strings.
        - WebSQL:
            - Depricated. Mobile browsers. Backward-compatible. 
                - Asynchronous. Great search speed. Steep learning curve. Predefined schema.
        - IndexedDB:
            - Mobile browsers as well. 20% available space. Asynchronous.
            - Steep learning curve. Complicated. Four callbacks.
            ```javascript
            <script>
                const request = window.indexedDB.open("X", 1);
                request.onupdatedneeded = function() {
                    const objStore = request.result.createObjectStore("users", {keyPath: "id"});
                    objStore.add({
                            id: 1,
                            name:" Dorian G.",
                            hobbies: ['aging']
                        });
                    });
                    objStore.createIndex("by-name", "name");
                };
                request.onsuccess = function() {
                    const transaction = request.result.transaction(['users'], 'readonly');
                    const store = transaction.objectStore("users");
                    store.get(1).onsuccess = function() {
                        document.getElementById("data").innerHtml = this.result.name;
                    }
                };
                request.onerror = function() {
                };
                request.onblocked = function() {
                };
            </script>
            ```
        - Storage Options: Cookies. HTML5 Local Storage. WebSQL. IndexedDB.
            - Application: IndexedDB. HTML5 Local Storage.
            - localForage library.
        - Storing full pages and resources.
            - Application cache is deprecated.
            ```javascript
                CACHE MANIFEST
                # 2020-10-11:v1

                CACHE:
                js/app.js
                js/carService.js
                js/clientStorage.js
                js/swRegister.js
                js/template.js
                ./
                index.html

                # Resources that require the user to be online.
                NETWORK:
                *

                FALLBACK:
                # Offline site here
                # / /offline-site.html
            ```
            ```html
                <html manifest="local.appcache">
            ```
            - Cache Storage.

- OFFLINE SUPPORT AND SERVICE WORKERS:

- INSTALLABLE WEB APPS: