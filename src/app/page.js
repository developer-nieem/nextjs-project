import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'
import style from './page.module.css'

export default function Home() {
  return (
    <div className='row pt-16 items-center '>
      
      <div className='md:col-6 space-y-3'>
        <h1 className={`text-6xl font-bold ${style.title}`}>Blooming Guardian, Your Guide to Floral Wonde</h1>
        <p>Welcome to the enchanting world of Blooming Guardian, where the beauty and elegance of flowers come to life! Our landing page is a gateway to a magical realm filled with an array of vibrant petals, delicate fragrances, and captivating blossoms. Discover the art of nurturing nature's wonders and immerse yourself in the fascinating journey of floral cultivation</p>
        <button className='bg-gray-400 p-3 rounded-sm '>Buy Now</button>
      </div>

      <div className='md:col-6 flex justify-center'>
       <Image className='w-96 img' src='https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='hero' width={400} height={300}></Image>
      </div>
     
    </div>
  )
}
