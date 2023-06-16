export const swRegistration = async () => {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    const r = await navigator.serviceWorker.register("sw.js", {
        scope: "",
    });
    let sw;

    if (r.installing) {
        console.log("installing", r);
        sw = r.installing;
    } else if (r.waiting) {
        console.log("waiting", r);
        sw = r.waiting;
    } else if (r.active) {
        console.log("active", r);
        sw = r.active;
    }

    sw.addEventListener("statechange", (e) => {
        console.log(e.target.state);  
    })
  };