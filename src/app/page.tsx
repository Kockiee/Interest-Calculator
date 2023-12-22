import Image from 'next/image'
import Calculator from '@/app/components/Calculator'

export default function Home() {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center p-2'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Calculadora de <span className='text-blue-600'>Juros Compostos</span></h1>
            <Calculator/>
        </div>
    )
}
