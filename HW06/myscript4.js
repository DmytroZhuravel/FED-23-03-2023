// Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг
//  маж довжину більше 10 символів то відрізає все після 10 символа і додає 3 крапки до стрінга

function trimString(str) {
    if (str.length > 10) {
      str = str.substring(0, 10) + '...';
    }
    return str.trim();
  }
  
  const str1 = '   кjkr  ';
  const str2 = 'khgkdhflkghdlkfgdnklfgnlkdgkld';
  
  console.log(trimString(str1)); 
  console.log(trimString(str2)); 
  