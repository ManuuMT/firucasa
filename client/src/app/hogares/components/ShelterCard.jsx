import { globalImgHandler } from '@/utils/globalImgHandler';
import PropTypes from 'prop-types';

export default function ShelterCard({ shelter }) {
  return (
    <div className='bg-card rounded-lg overflow-hidden cursor-pointer shadow-md'>
      <div className='w-full h-[300px]'>
        <img
          className='w-full h-full object-cover object-center'
          src={globalImgHandler(shelter.logo.url)}
          alt={shelter.name}
        />
      </div>
      <div className='w-full font-semibold h-14 p-2 flex flex-col justify-center items-center gap-1'>
        <h1 className='text-2xl'>{shelter.name}</h1>
      </div>
    </div>
  );
}

ShelterCard.propTypes = {
  shelter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
