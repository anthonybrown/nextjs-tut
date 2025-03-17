import mapsImg from '@/images/maps.jpg';
import Image from 'next/image';

function page({ params }: { params: { id: string } }) {
  const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

  return (
    <div>
      <h1 className='text-3xl mb-4'>ID: {params.id}</h1>
      <section className='flex gap-x-4 mt-4'>
        {/* local image */}
        <div>
          <Image
            className='w-1/2 md:w-full object-cover rounded'
            src={mapsImg}
            alt='maps'
            priority
            width={768}
            height={512}
          />
          <h2>local image</h2>
        </div>
        {/* remote image} */}
        <div>
          <Image
            className='w-1/2 md:w-full object-cover rounded'
            src={url}
            alt='maps'
            priority
            width={768}
            height={512}
          />
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
