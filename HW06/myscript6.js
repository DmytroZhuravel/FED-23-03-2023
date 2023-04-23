// Створити функцію яка повертає інформацію який сьогодні день, місяць рік Наприклад getDayInfo() -> 
// Сьогодні вівторок 11 квітня 2023

function getDayInfo() {
    const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const monthsOfYear = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
  
    let today = new Date();
    let dayOfWeek = daysOfWeek[today.getDay()];
    let dayOfMonth = today.getDate();
    let monthOfYear = monthsOfYear[today.getMonth()];
    let year = today.getFullYear();
  
    return `Сьогодні ${dayOfWeek} ${dayOfMonth} ${monthOfYear} ${year}`;
  }
  
  console.log(getDayInfo());
  