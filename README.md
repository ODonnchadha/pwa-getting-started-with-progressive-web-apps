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

- CLIENT-SIDE STORAGE:

- OFFLINE SUPPORT AND SERVICE WORKERS:

- INSTALLABLE WEB APPS: