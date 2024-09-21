async function getServerData() {
  let url = "https://api.mcsrvstat.us/3/indramc.com";
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}
async function getIPAddress() {
  let url = "https://api.ipify.org/?format=json";
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData.ip;
}
const updateDataFunc = () => {
  let serverData = getServerData();
  var playerOnline = this.document.getElementById("player-online");
  var serverStatus = this.document.getElementById("server-status");
  var serverInfo = this.document.getElementById("serverInfo");
  var yourIP = this.document.getElementById("yourIP");
  var fetchingMsg = this.document.getElementById("fetchingMsg");
  serverData.then(function (data) {
    if (data.online == false) {
      fetchingMsg.textContent = "Server is Offline";
      return;
    } else {
      fetchingMsg.style.display = "none";
      serverInfo.style.display = "flex";
    }
    playerOnline.textContent = String(
      data.players.online + "/" + data.players.max
    );
    serverStatus.textContent = "Online";
  });
  getIPAddress().then(function (ip) {
    yourIP.innerHTML = "<strong>Your IP:</strong> " + ip;
  });
  setTimeout(updateDataFunc, 5000);
};
updateDataFunc();
