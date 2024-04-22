import PropTypes from 'prop-types';
import ShelterCard from './ShelterCard';

export default function Shelters({ shelters }) {
  return (
    <main className='container flex justify-center items-center flex-col mt-10 gap-10'>
      <h1 className='text-3xl text-foreground font-semibold'>
        Hogares/Refugios
      </h1>
      <div className='grid grid-cols-3 place-items-center gap-10'>
        {shelters.results.map(shelter => (
          <ShelterCard key={shelter.id} shelter={shelter} />
        ))}
      </div>
    </main>
  );
}

Shelters.propTypes = {
  shelters: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};
