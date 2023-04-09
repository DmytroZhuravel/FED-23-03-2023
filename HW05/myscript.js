// Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті (sizeA*sizeB),


let figures = [
    {
      figure: "Squar",
      sizeA: 4,
      sizeB: 4,
    },
    {
      figure: "Rectangle",
      sizeA: 4,
      sizeB: 8,
    },
  ];

  function calculateArea(figures) {
    for (let i = 0; i < figures.length; i++) {
      let area = figures[i].sizeA * figures[i].sizeB;
      figures[i].area = area; 
    }
    return figures;
  }

  let figuresWithArea = calculateArea(figures);

  console.log(figuresWithArea);



  