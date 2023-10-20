(() => {
  window["FetchAPI"] = {
    GET: async function (url) {
      return fetch(url, {
        method: "GET",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache",
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
    },
    POST: async function (url, body) {
      return fetch(url, {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache",
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body),
      });
    },
    PUT: async function (url, body) {
      return fetch(url, {
        method: "PUT",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache",
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body),
      });
    },
    DELETE: async function (url, body) {
      return fetch(url, {
        method: "DELETE",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache",
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body),
      });
    },
  };

  console.log("Global JS Loaded!");
})();
