export const isToday = (someDate, selectDay) => {
  return (
    someDate.getDate() == selectDay.getDate() &&
    someDate.getMonth() == selectDay.getMonth() &&
    someDate.getFullYear() == selectDay.getFullYear()
  );
};

export const filterSchedule = (data, selectDay = new Date()) => {
  return data.filter(d => isToday(new Date(d.time), selectDay));
};

export const generateTime = x => {
  const tms = new Date(x);
  return tms.getHours() + ':' + tms.getMinutes() + ':' + tms.getSeconds();
};
