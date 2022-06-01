import React from 'react';

interface Props {
  url: string;
  alt: string;
}

const ImageCountry = ({ url, alt }: Props) => {
  return (
    <div className='flex justify-center items-center'>
      <img src={url} alt={alt} className='w-16 h-16 rounded-full mr-4' />
    </div>
  );
};

export default ImageCountry;
