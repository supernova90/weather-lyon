export const ctoF = (c) => (c * 9) / 5 + 32; //celsius to fahrenheit

export const mpsToMph = (mps) => (mps * 2.236936).toFixed(2); //meters per second - miles per hour

export const kmToMiles = (km) => (km / 1.609).toFixed(1); //kilometers to miles

export const timeTo12HourFormat = (time) => {
  //23:43 to 11:43
  const [hours, minutes] = time.split(":");
  return `${hours % 12}:${minutes}`;
};

export const degToCompass = (num) => {
  //degree to compass direction
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "S/SE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

// unixToLocalTime (23:31)
export const unixToLocalTime = (unixSeconds, timezone) => {
  let time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/)[0];

  return time.startsWith("0") ? time.substring(1) : time;
};
