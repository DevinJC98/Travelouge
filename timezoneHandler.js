window.addEventListener("load", function () {
  const Clocks = setInterval(() => {
    //Sweden and Austria are in the same timezone so the options here are the same
    const europeOptions = {
      timeZone: "+01",
      hour: "2-digit",
      minute: "2-digit",
    };
    const caboOptions = {
      timeZone: "-07",
      hour: "2-digit",
      minute: "2-digit",
    };

    const europeTime = new Date().toLocaleTimeString("en-US", europeOptions);
    const caboTime = new Date().toLocaleTimeString("en-US", caboOptions);

    document.getElementById("swedenTime").innerHTML =
      "Current Time - " + europeTime;
    document.getElementById("caboTime").innerHTML =
      "Current Time - " + caboTime;
    document.getElementById("austriaTime").innerHTML =
      "Current Time - " + europeTime;
  }, 1000);
});
