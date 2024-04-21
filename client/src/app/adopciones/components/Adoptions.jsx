import DogList from '../components/DogList';
import Filters from './Filters';

export default function Adoptions() {
  return (
    <main className='container min-h-screen p-10'>
      <div className='w-full h-screen flex gap-10'>
        {/* Filters column */}
        <Filters />
        {/* Dogs - search result */}
        <DogList />
      </div>
    </main>
  );
}
