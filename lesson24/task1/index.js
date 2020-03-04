const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const dayOfWeek = (date, days) => {
    const day = date.getDate();
    const futureDay = date.setDate(day + days);

    return weekDays[new Date(futureDay).getDay()];
};



export { dayOfWeek };