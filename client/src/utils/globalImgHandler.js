import NoImage from '@/assets/img/NoImage.jpg';

export const globalImgHandler = src => {
  if (src) return src;
  return NoImage?.src;
};
