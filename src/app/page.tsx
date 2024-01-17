"use client"
import CartNav from '@/Components/CartNav';
import ProductFeed from '@/Components/ProductFeed';
import SideSearchNav from '@/Components/SideSearchNav';
import {useRouter} from 'next/navigation'

export default function Page() {
  const router = useRouter();

  return (
    <section className='relative w-[90%] mx-auto'>
        <h1 className='font-primary text-5xl font-bold mt-9 mb-9'>E-commerce store</h1>
        <CartNav />
        <div className="flex flex-row justify-center">
          <SideSearchNav className='max-w-[20rem] mr-5'/>
          <ProductFeed />
        </div>
    </section>
  )
}