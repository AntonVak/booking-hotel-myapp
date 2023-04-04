
 //принимаем параметрі. 1 Вариант обработка через массивы
 export function paginate  (items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize
    return [...items].splice(startIndex, pageSize)
  }