import Image from 'next/image'
import Calculator from '@/app/components/Calculator'

export default function Home() {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center p-2'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Calculadora de <span className='text-blue-600'>Juros Compostos</span></h1>
            <Calculator/>
            <div className="max-w-2xl mx-auto border border-1 p-6 rounded shadow mt-4">
                <h1 className="text-2xl font-bold mb-4">Juros Compostos</h1>

                <p className="text-gray-500 mb-4">Juros compostos são uma maneira sofisticada de calcular o acréscimo de juros ao longo do tempo sobre uma quantia inicial. A peculiaridade desse método está na adição dos juros acumulados ao principal, resultando em um novo montante sobre o qual os juros subsequentes são calculados.</p>

                <p className="text-gray-500 mb-4">A fórmula que governa esse processo é:</p>

                <p className="text-gray-500 mb-4">
                  A = P( 1 + r )^t
                </p>

                <p className="text-gray-500 mb-4">Aqui, A representa o montante total após o período t, P é o principal (o valor inicial), r é a taxa de juros por período, e t é o tempo em unidades de períodos.</p>

                <p className="text-gray-500 mb-4">Diferentemente dos juros simples, onde os juros são calculados apenas sobre o principal original, os juros compostos incorporam os juros acumulados ao longo do tempo. Esse mecanismo resulta em um aumento exponencial do montante total à medida que o tempo avança.</p>

                <p className="text-gray-500 mb-4">A aplicação dos juros compostos é prevalente em contextos financeiros, como em contas de poupança, investimentos e empréstimos. Seu impacto expressivo na expansão dos investimentos ao longo do tempo permite que os ganhos de juros se acumulem sobre os juros previamente conquistados.</p>
            </div>
        </div>
    )
}
