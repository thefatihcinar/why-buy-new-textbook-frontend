
const months = {
  0: 'Ocak',
  1: 'Şubat',
  2: 'Mart',
  3: 'Nisan',
  4: 'Mayıs',
  5: 'Haziran',
  6: 'Temmuz',
  7: 'Ağustos',
  8: 'Eylül',
  9: 'Ekim',
  10: 'Kasım',
  11: 'Aralık'
};

function displayDate(inputDate){
    /* this class is used to display the date in Turkish language */
    /* example 12 Nisan 2022 */

    if(!inputDate) return ""; /* if there is no date, do not calculate anything */

    const date = new Date(inputDate); /* create a new date object with the given UTC date string */

    let day = date.getDate(); /* get the day of the month */
    let month = months[date.getMonth()]; /* get the name month */
    let year = date.getFullYear(); /* get the year */

    return `${day} ${month} ${year}`;  /* return the date in the format of day month year in Turkish */
}

export default displayDate;
