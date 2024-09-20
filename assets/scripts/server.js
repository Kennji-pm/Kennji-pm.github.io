async function getData() {
  let url = "https://api.mcsrvstat.us/3/indramc.com";
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}
window.addEventListener("load", function () {
  let serverData = getData();
  var playerOnline = this.document.getElementById("player-online");
  var serverVersion = this.document.getElementById("server-version");
  serverData.then(function (data) {
    playerOnline.textContent =
      String(data.players.online) + "/" + String(data.players.max);
    serverVersion.textContent = data.version;
  });
});
