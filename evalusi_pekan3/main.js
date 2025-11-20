import {
  getTodayForApi,
  getTodayForDisplay,
  formatDate,
  isEmpty
} from "./modules/utils.js";

console.log("Api :", getTodayForApi());
console.log("hasill  :", getTodayForDisplay());
console.log("hasil   :", formatDate(new Date(), "/"));

import { 
    searchCity,
    getCityById,
    getDailySchedule,
    getMonthlySchedule,
    getRandomAyat,
    getRandomHaditsArbain,
    getRandomDoa,
     getRandomAsmaulHusna,
 } from "./modules/api.js";
 async function run() {
  
  const kota = await searchCity("kediri");
  console.log(kota);

 
  const cityId = kota.data[0].id;


  const harian = await getDailySchedule(cityId, "2025-11-21");
  console.log(harian);

 
  const bulanan = await getMonthlySchedule(cityId, 2025, 11);
  console.log(bulanan);

  
  console.log(await getRandomAyat());
  console.log(await getRandomHaditsArbain());
  console.log(await getRandomDoa());
  console.log(await getRandomAsmaulHusna());
}

run();
