import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PropTypes from 'prop-types';
import DogCard from './DogCard';
import { dogGender } from '@/models/dog.model';

export default function DogItem({ dog }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='w-[280px] bg-card rounded-lg overflow-hidden cursor-pointer shadow-md hover:scale-105 transition duration-300 ease-in-out'>
          <DogCard dog={dog} />
        </div>
      </DialogTrigger>

      {/* Modal content */}
      <DialogContent className='w-screen'>
        <DialogHeader>
          <DialogTitle />

          <div className='w-full flex gap-5'>
            {/* Gallery */}
            <div className='w-[300px] h-[300px] overflow-hidden'>
              {dog.photos.length > 0 && (
                <img
                  className='w-full h-full rounded-md object-cover object-center'
                  src={dog.photos[0].url}
                  alt={dog.name}
                />
              )}
            </div>
            {/* Info */}
            <div className='flex flex-col gap-2 font-semibold'>
              {/* Dog info */}
              <div className='text-4xl'>{dog.name}</div>
              <div className='flex flex-wrap gap-2 text-xl'>
                {dog.ageYears > 0 && (
                  <p className='w-fit text-primary rounded-xl px-2 bg-purple-300'>
                    {`${dog.ageYears} ${dog.ageYears === 1 ? 'año' : 'años'}`}
                  </p>
                )}
                <p className='w-fit text-red-700 rounded-xl px-2 bg-red-300'>
                  {dogGender[dog.gender]}
                </p>
              </div>
              <p className='text-2xl'>{dog.description}</p>
              {/* Shelter info */}
              {dog.shelter.name}
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

DogItem.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ageYears: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    description: PropTypes.string,
    photos: PropTypes.array,
    shelter: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
