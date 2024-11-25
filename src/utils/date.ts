//  export const formatDate = (dateObj: Date) => dateObj.toISOString().slice(0, 10)

 export const formatDate = (date: Date) => {
   const year = date?.getFullYear()?.toString()
   const month = (date?.getMonth() + 1)?.toString()?.padStart(2, "0")
   const day = date?.getDate()?.toString()?.padStart(2, "0")
   return `${day}-${month}-${year}`
 }
// get after day date 
export function getDayAfter(date = new Date()) {
    const newDay = new Date(date.getTime());
    newDay.setDate(date.getDate() + 1);
    return newDay;
}

// get last day date 
export function getDayBefore(date = new Date()) {
    const newDay = new Date(date.getTime());
    newDay.setDate(date.getDate() - 1);
    return newDay;
}
