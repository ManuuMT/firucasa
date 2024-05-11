import DogList from '../components/DogList';
import Filters from './Filters';

export default function Adoptions() {
  return (
    <main className='w-full'>
      <div className=' flex gap-10 p-10'>
        {/* Filters column */}
        <Filters />
        {/* Dogs - search result */}
        <DogList />
      </div>
    </main>
  );
}
