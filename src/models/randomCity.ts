export default function capitalCity() {
  const cityArr = [
    'Moscow',
    'New-York',
    'Tokyo',
    'Kabul',
    'Yerevan',
    'Canberra',
    'Baku',
    'Brasilia',
    'Minsk',
    'Beijing',
    'Havana',
    'Tallinn',
    'Tegucigalpa',
    'Kathmandu',
    'Tashkent',
    'London',
    'Kyiv',
  ];

  return cityArr[Math.floor(Math.random() * cityArr.length)];
}
