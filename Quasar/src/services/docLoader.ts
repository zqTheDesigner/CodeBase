import axios from 'axios';

async function getDoc(docUrl: string) {
  let data = '';
  await axios.get(docUrl).then((res: { data: string }) => {
    console.log(res.data);
    data = res.data;
  });
  return data;
}

export { getDoc };
