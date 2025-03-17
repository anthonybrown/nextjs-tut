import Link from 'next/link';

function AboutPage() {
  return (
    <div>
      <h1 className='text-7xl'>About Page</h1>
      <p>This is the about page</p>
      <Link
        className='text-xl text-blue-500 inline-block mt-8'
        href='/'
      >
        back hone
      </Link>
    </div>
  );
}

export default AboutPage;
