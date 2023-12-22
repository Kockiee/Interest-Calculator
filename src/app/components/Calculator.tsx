'use client'

import React, { useState } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";

export default function Calculator () {
    const [initialValue, setInitialValue] = useState(0)
    const [monthlyValue, setMonthlyValue] = useState(0)
    const [interestRate, setInterestRate] = useState(0)
    const [interestRateType, setInterestRateType] = useState(0)
    const [period, setPeriod] = useState(0)
    const [periodType, setPeriodType] = useState(0)
    const [dropdownOneOpened, setDropdownOneOpened] = useState(false)
    const [dropdownTwoOpened, setDropdownTwoOpened] = useState(false)
    const [finalValue, setFinalValue] = useState<number>()
    const [totalInInterest, setTotalInInterest] = useState<number>()
    const [totalWithOutInterest, setTotalWithOutInterest] = useState<number>()



    const maskCoin = (e: React.FormEvent<HTMLInputElement>) => {
        const onlyDigits: string = e.currentTarget.value.split("").filter(s => /\d/.test(s)).join("").padStart(3, "0")
        e.currentTarget.value = maskCurrency(parseFloat(onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)))
    }

    const maskCurrency = (value: number, locale = 'pt-BR', currency = 'BRL') => {
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency
        }).format(value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("Valor Inicial: " + initialValue)
        console.log("Valor Mensal: " + monthlyValue)
        console.log("Taxa de Juros: " + interestRate)
        console.log("Período: " + period)
        console.log("Tipo de período: " + periodType)
        console.log("Tipo de juros (mensal ou anual): " + interestRateType)

        const feePerMonth = interestRateType === 0 ? interestRate / 12 / 100 : interestRate / 100
        const periodInMonths = periodType === 0 ? period * 12 : period

        console.log(periodInMonths)

        let finalValue = initialValue;
        let totalWithOutInterest = initialValue;

        // Adicionar investimentos mensais
        for (let i = 1; i <= periodInMonths; i++) {
            finalValue = finalValue * (1 + feePerMonth) + monthlyValue;
            totalWithOutInterest += monthlyValue;
        }


        const totalInInterest = finalValue - totalWithOutInterest;

        console.log("Montante Final com Investimento Mensal: " + finalValue);
        console.log("Total Ganho em Juros: " + totalInInterest);
        console.log("Total Investido: " + totalWithOutInterest)
        setFinalValue(finalValue)
        setTotalInInterest(totalInInterest)
        setTotalWithOutInterest(totalWithOutInterest)
    }

    return (
        <div className="border border-1 border-gray-900 p-2 rounded-lg space-y-2">
            <form 
            onSubmit={handleSubmit} 
            className="flex flex-col w-full">
                <label htmlFor="initial-value">Valor Inicial</label>
                <input
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    maskCoin(e)
                    const onlyNumbers = e.currentTarget.value.replace(/\D/g, "").padStart(3, "0");
                    const floatValue = parseFloat(`${onlyNumbers.slice(0, -2)}.${onlyNumbers.slice(-2)}`);
                    setInitialValue(floatValue)
                }}
                placeholder="R$0,00"
                id='initial-value' 
                type='text'
                className="rounded p-2 border border-1 w-full bg-transparent text-white" required/>
                
                <label htmlFor="initial-value">Investimento Mensal</label>
                <input
                id='initial-value' 
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    maskCoin(e)
                    const onlyNumbers = e.currentTarget.value.replace(/\D/g, "").padStart(3, "0");
                    const floatValue = parseFloat(`${onlyNumbers.slice(0, -2)}.${onlyNumbers.slice(-2)}`);
                    setMonthlyValue(floatValue)
                }}
                placeholder="R$0,00"
                type='text'
                className="rounded p-2 border border-1 bg-transparent text-white" required/>
                
                <label htmlFor="initial-value">Taxa de juros</label>
                <div className='relative flex flex-row items-center w-full border border-1 rounded'>
                    <div className='absolute left-3 top-2'>
                        %
                    </div>
                    <input
                    id='initial-value' 
                    min="0" max="100" step="0.01"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        if (parseFloat(e.currentTarget.value) < 0) {
                            e.currentTarget.value = '0'
                        } else {
                            setInterestRate(parseFloat(e.currentTarget.value))
                        }
                    }}
                    type='number'
                    className="p-2 w-2/3 pl-8 bg-transparent" required/>
                    <div className='w-1/3 flex flex-col items-center'>
                        <button 
                        onClick={() => {
                            setDropdownOneOpened(!dropdownOneOpened)
                        }}
                        type='button' 
                        className='border-l p-2 w-full inline-flex items-center justify-center'
                        >
                            {interestRateType === 0 ? 'Anual' : "Mensal"} <TiArrowSortedDown />
                        </button>
                        {dropdownOneOpened && (
                            <div className='fixed w-32 mt-14 max-sm:mr-8 z-10 rounded bg-gray-950 flex justify-center items-center border border-1 border-white'>
                                <button 
                                onClick={() => {
                                    setInterestRateType(interestRateType === 0 ? 1 : 0)
                                    setDropdownOneOpened(!dropdownOneOpened)
                                }}
                                type='button' 
                                className='w-full h-full p-2'
                                >
                                    {interestRateType === 0 ? 'Meses' : 'Anos'}
                                </button>
                            </div>
                        )}
                    </div>

                </div>
                
                <label htmlFor="initial-value">Período</label>
                <div className='flex flex-row items-center w-full border border-1 rounded'>
                    <input
                    id='initial-value'
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        if (parseFloat(e.currentTarget.value) < 0 || isNaN(parseFloat(e.currentTarget.value))) {
                            e.currentTarget.value = '0'
                        } else {
                            setPeriod(parseFloat(e.currentTarget.value))
                        }
                    }}
                    type='number' 
                    className="p-2 w-2/3 bg-transparent" required/>
                    <div className='w-1/3 flex flex-col items-center'>
                        <button 
                        onClick={() => {
                            setDropdownTwoOpened(!dropdownTwoOpened)
                        }}
                        type='button' 
                        className='border-l p-2 w-full inline-flex items-center justify-center'
                        >
                            {periodType === 0 ? 'Anos' : "Meses"} <TiArrowSortedDown />
                        </button>
                        {dropdownTwoOpened && (
                            <div className='fixed w-32 mt-14 max-sm:mr-8 z-10 rounded bg-gray-950 flex justify-center items-center border border-1 border-white'>
                                <button 
                                onClick={() => {
                                    setPeriodType(periodType === 0 ? 1 : 0)
                                    setDropdownTwoOpened(!dropdownTwoOpened)
                                }}
                                type='button' 
                                className='w-full h-full p-2'
                                >
                                    {periodType === 0 ? 'Meses' : 'Anos'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-full mt-2'>
                    <button type='submit' className='bg-yellow-500 text-purple-600 border-2 font-black text-lg p-2 w-full'>Calcular</button>
                </div>
            </form>
            {finalValue && totalWithOutInterest && totalInInterest && (
                <div className='border-t p-2 flex flex-col items-center'>
                    <h2 className='text-justify'>Em {periodType === 0 ? period + " Anos" : period + " Meses"} investindo {maskCurrency(monthlyValue)} por mês com montante inicial de {maskCurrency(initialValue)} você teria:</h2>
                    <p className='text-lg font-semibold'>Montante Final: <span className='font-bold text-blue-600 break-all'>{maskCurrency(finalValue)}</span></p>
                    <p className='text-lg font-semibold'>Total Investido: <span className='font-bold text-blue-600 break-all'>{maskCurrency(totalWithOutInterest)}</span></p>
                    <p className='text-lg font-semibold'>Total Ganho em Juros: <span className='font-bold text-blue-600 break-all'>{maskCurrency(totalInInterest)}</span></p>
                </div>
            )}
        </div>
    )
}