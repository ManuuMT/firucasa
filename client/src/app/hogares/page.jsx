import Shelters from './components/Shelters';

import getShelters from '@/services/shelters/getShelters';

async function getData() {
  const res = await getShelters();

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch shelters data');
  }

  return res.data;
}

export default async function SheltersPage() {
  const data = await getData();
  return <Shelters shelters={data} />;
}
