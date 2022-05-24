import { ref } from 'vue';

const MOCK_30_DAYS = ref([['03-31', '2021']]);
const MOCK_30_DAYS_AUTH_CALLS = ref([111]);
const MOCK_30_DAYS_UNAUTH_CALLS = ref([21]);

// Mock for the end date (with year)
MOCK_30_DAYS.value.push(['04-15', '2022']);
MOCK_30_DAYS_AUTH_CALLS.value.push(111);
MOCK_30_DAYS_UNAUTH_CALLS.value.push(12);

// Mock for Pie Charts
const MOCK_5_APIS = ref([
  'Text-To-Speech ENG',
  'Audio Format Convertor',
  'Video-To-Audio Convertor',
  'HDB Block Coordinates (SG)',
  'HDB Season Parking Availability (SG)',
]);
const MOCK_5_API_CALLS = ref([]);

for (let i = 1; i < 15; i++) {
  let day;
  i < 9 ? (day = '0' + i) : (day = i);

  MOCK_30_DAYS.value.push('04-' + day);

  MOCK_30_DAYS_AUTH_CALLS.value.push(Math.floor(Math.random() * 100) + 20);
  MOCK_30_DAYS_UNAUTH_CALLS.value.push(Math.floor(Math.random() * 30));
  if (i <= 5) {
    MOCK_5_API_CALLS.value.push(Math.floor(Math.random() * 30));
  }
}

export {
  MOCK_30_DAYS,
  MOCK_30_DAYS_AUTH_CALLS,
  MOCK_30_DAYS_UNAUTH_CALLS,
  MOCK_5_APIS,
  MOCK_5_API_CALLS,
};
