import { Button, Card, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='min-h-screen max-w-6xl mx-auto px-4'>
      {/* Hero Section */}
      <div className='flex flex-col gap-6 py-28 text-center'>
        <h1 className='text-3xl font-bold sm:text-5xl'>
          Welcome to{' '}
          <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Pasindu&apos;s Blog
          </span>
        </h1>
        <p className='text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
          Discover stories, thinking, and expertise on development, technology, and programming.
        </p>
      </div>

      {/* Featured Posts */}
      <div className='mb-20'>
        <h2 className='text-2xl font-bold mb-8'>Featured Posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Card className='hover:scale-[1.02] transition-transform'>
            <img src='https://source.unsplash.com/random/800x400?technology' alt='Featured post' className='rounded-t-lg h-48 object-cover' />
            <h3 className='text-xl font-bold mt-4'>Getting Started with MERN Stack</h3>
            <p className='text-gray-500 dark:text-gray-400 line-clamp-2 mt-2'>
              Learn how to build full-stack applications using MongoDB, Express, React, and Node.js.
            </p>
            <Button gradientDuoTone='purpleToBlue' className='mt-4'>
              Read More
            </Button>
          </Card>
          <Card className='hover:scale-[1.02] transition-transform'>
            <img src='https://source.unsplash.com/random/800x400?coding' alt='Featured post' className='rounded-t-lg h-48 object-cover' />
            <h3 className='text-xl font-bold mt-4'>Modern Web Development</h3>
            <p className='text-gray-500 dark:text-gray-400 line-clamp-2 mt-2'>
              Explore the latest trends and best practices in modern web development.
            </p>
            <Button gradientDuoTone='purpleToBlue' className='mt-4'>
              Read More
            </Button>
          </Card>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className='mb-20'>
        <h2 className='text-2xl font-bold mb-8'>Recent Posts</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3].map((post) => (
            <Card key={post} className='hover:scale-[1.02] transition-transform'>
              <img src={`https://source.unsplash.com/random/800x600?programming${post}`} alt='Post' className='rounded-t-lg h-40 object-cover' />
              <h3 className='text-lg font-bold mt-4'>Web Development Tips</h3>
              <p className='text-gray-500 dark:text-gray-400 line-clamp-2 mt-2'>
                Essential tips and tricks for modern web development.
              </p>
              <div className='flex justify-between items-center mt-4'>
                <span className='text-sm text-gray-500'>5 min read</span>
                <Link to='/' className='text-blue-600 hover:underline'>
                  Read more →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='mb-20 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-2xl font-bold mb-4'>Subscribe to Our Newsletter</h2>
          <p className='text-gray-500 dark:text-gray-400 mb-6'>
            Get the latest posts and updates delivered straight to your inbox.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <TextInput 
              type='email'
              placeholder='Enter your email'
              className='flex-grow max-w-md'
            />
            <Button gradientDuoTone='purpleToBlue'>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
