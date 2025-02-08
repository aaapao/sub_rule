// 2025-02-08 18:33:32
!(async () => {
  try {
    let url = typeof $request !== "undefined" && $request.url,
      ms,
      ins = Object.fromEntries(
        (url.split("?")[1] || "")
          .split("&")
          .map((i) => i.split("="))
          .map(([k, v]) => [k, decodeURIComponent(v)])
      );
    if (ins.url == "test") {
      ms = '1';
    } else {
      ms = await Get(ins.url);
    }
    $done({
      response: {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          sp: 1,
          ms: ms,
        }),
      },
    });
  } catch (e) {
    console.log(e.message);
    throw new Error();
  }
})()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => $done());
async function Get(url) {
  return new Promise((resolve, reject) => {
    let e = Date.now();
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("");
        resolve("5000");
      }, 5000);
    });
    const reqPromise = new Promise((resolve) => {
      $httpClient.get(url, resolve);
    });
    Promise.race([reqPromise, timeoutPromise])
      .then((i) => {
        resolve(Date.now() - e);
      })
      .catch((error) => {
        reject(error);
        resolve("6666");
      });
  });
}
