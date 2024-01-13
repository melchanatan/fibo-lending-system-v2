"use client"
import CartNav from '@/Components/CartNav';
import ProductFeed from '@/Components/ProductFeed';
import SideSearchNav from '@/Components/SideSearchNav';
import {useRouter} from 'next/navigation'

export default function Page() {
  const router = useRouter();

  return (
    <>
        <h1 className='font-primary text-5xl font-bold'>FRA 142 Lending Service</h1>
        <CartNav />
        <div className="flex flex-row">
          <SideSearchNav className='max-w-[20rem]'/>
          <ProductFeed />
        </div>
    </>
  )
}