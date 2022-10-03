const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dateFormatHelper = (date) => {
  var seconds = Math.floor((new Date().getTime() - Number(date)) / 1000);
  interval = seconds / 86400;
  if (interval > 1) {
    const currentDate = new Date(date);
    const Year = currentDate.getFullYear();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];

    return `${month} ${day}, ${Year}`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hrs ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " min ago";
  }
  if (seconds > 1) {
    return Math.floor(seconds) + " sec ago";
  }
  return "Just now";
};
export default dateFormatHelper;
