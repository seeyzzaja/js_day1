const BASE_URL = 'https://api.myquran.com/v2/';

export async function searchCity(keyword) {
  const res = await fetch(`${BASE_URL}sholat/kota/cari/${keyword}`);
  if (!res.ok) throw new Error('Gagal mencari kota');
  return res.json();
}

export async function getCityById(id) {
  const res = await fetch(`${BASE_URL}sholat/kota/${id}`);
  if (!res.ok) throw new Error("Gagal mengambil data kota berdasarkan ID");
  return res.json();
}

export async function getDailySchedule(cityId, dateString) {
  const res = await fetch(`${BASE_URL}sholat/jadwal/${cityId}/${dateString}`);
  if (!res.ok) throw new Error("Gagal mengambil jadwal harian");
  return res.json();
}

export async function getMonthlySchedule(cityId, year, month) {
  const res = await fetch(`${BASE_URL}sholat/jadwal/${cityId}/${year}/${month}`);
  if (!res.ok) throw new Error("Gagal mengambil jadwal bulanan");
  return res.json();
}

export async function getRandomAyat() {
  const res = await fetch(`${BASE_URL}quran/ayat/acak`);
  if (!res.ok) throw new Error("random ayat tidak tersedia");
  return res.json();
}

export async function getRandomHaditsArbain() {
  const res = await fetch(`${BASE_URL}hadits/arbain/acak`);
  if (!res.ok) throw new Error("hadist arbain tidak tersedia");
  return res.json();
}

export async function getRandomDoa() {
  const res = await fetch(`${BASE_URL}doa/acak`);
  if (!res.ok) throw new Error("doa tidak tersedia");
  return res.json();
}

export async function getRandomAsmaulHusna() {
  const res = await fetch(`${BASE_URL}husna/acak`);
  if (!res.ok) throw new Error("data tidak ditemukan");
  return res.json();
}
