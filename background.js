chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (details.url.indexOf("wikipedia.org") !== -1 && details.url.indexOf("?useskin=vector") === -1) {
            return { redirectUrl: details.url + "?useskin=vector" };
        }
    },
    { urls: ["*://*.wikipedia.org/*"] },
    ["blocking"]
);