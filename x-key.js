{
  let baseURL = "https://abs.twimg.com/responsive-web/client-web/main.";
  let responses = Array(1000000);
  let n = +process.argv[2];
  let max = n + 1000000;
  let i = 0;
  while (i < 1000000) {
    let key = n.toString(16).padStart(8, "0");
    let url = baseURL + key + ".js";
    responses[i] = fetch (url, { method: "HEAD" });
    ++i;
    ++n;
  }
  console.log((await Promise.all(responses)).filter(v => v?.ok).map(v => v.url));
  console.log(max);
}