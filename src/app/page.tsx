"use client"
import CartNav from '@/Components/CartNav';
import ProductFeed from '@/Components/ProductFeed';
import SideSearchNav from '@/Components/SideSearchNav';
import { store } from '@/store/configureStore';
import {useRouter} from 'next/navigation'
import { Provider } from 'react-redux';

export default function Page() {
  const router = useRouter();

  return (
    <section className='relative w-[90%] mx-auto'>
        <Provider store={store}>
          <h1 className='font-primary text-5xl font-bold mt-9 mb-9'>E-commerce store</h1>
          <CartNav />
          <div className="flex flex-row justify-center">
            <SideSearchNav className='max-w-[20rem] mr-5 sticky top-[3rem] h-full'/>
            <ProductFeed />
          </div>
        </Provider>
    </section>
  )
}