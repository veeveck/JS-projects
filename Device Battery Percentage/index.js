initBattery();

function initBattery() {
  const batteryLiquid = document.querySelector(".battery-liquid");
  const batteryStatus = document.querySelector(".battery-status");
  const batteryPercentage = document.querySelector(".battery-percent");
  navigator.getBattery().then((battery) => {
    updateBattery = () => {
      let level = Math.floor(battery.level * 100);
      batteryPercentage.innerHTML = level + "%";
      batteryLiquid.style.height = `${parseInt(battery.level * 100)}%`;
      if (level == 100) {
        batteryStatus.innerHTML = `Battery Full <i class="ri-battery-2-fill green-color"></i>`;
        batteryLiquid.style.height = "101%";
      } else if ((level <= 20) & !battery.charging) {
        batteryStatus.innerHTML = `Low Charge <i class="ri-plug-line animated-red animated-red"></i>`;
      } else if (battery.charging) {
        batteryStatus.innerHTML = `Charging ... <i class="ri-flashlight-line animated-green"></i>`;
      }
      if (level <= 20) {
        batteryLiquid.classList.add("gradient-color-red");
        batteryLiquid.classList.remove(
          "gradient-color-green",
          "gradient-color-orange",
          "gradient-color-yellow"
        );
      } else if (level <= 48) {
        batteryLiquid.classList.add("gradient-color-orange");
        batteryLiquid.classList.remove(
          "gradient-color-green",
          "gradient-color-red",
          "gradient-color-yellow"
        );
      }
    };
    updateBattery();
    battery.addEventListener("chargingchange", () => {
      updateBattery();
    });
    battery.addEventListener("levelchange", () => {
      updateBattery();
    });
  });
}
