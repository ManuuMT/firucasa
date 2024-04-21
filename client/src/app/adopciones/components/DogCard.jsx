import { dogGender } from '@/models/dog.model';
import PropTypes from 'prop-types';

export default function DogCard({ dog }) {
  return (
    <>
      <div className='w-full h-[75%]'>
        {dog.photos.length > 0 && (
          <img
            className='w-full h-full object-cover object-center'
            src={dog.photos[0].url}
            alt={dog.name}
          />
        )}
      </div>
      <div className='w-full font-semibold h-[25%] p-2 flex flex-col justify-center items-center gap-1'>
        <h1 className='text-2xl'>{dog.name}</h1>
        <div className='flex gap-2'>
          {dog.ageYears > 0 && (
            <p className='w-fit text-primary rounded-xl px-2 bg-purple-300'>
              {`${dog.ageYears} ${dog.ageYears === 1 ? 'año' : 'años'}`}
            </p>
          )}
          <p className='w-fit text-red-700 rounded-xl px-2 bg-red-300'>
            {dogGender[dog.gender]}
          </p>
        </div>
      </div>
    </>
  );
}

DogCard.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ageYears: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
  }).isRequired,
};
