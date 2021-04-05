import React from 'react'
import { ImportsNotUsedAsValues } from 'typescript'

import styles from './App.css'

export const App: React.FC = () => {
    <div>
        
        <h1　style="text-align:center">todos</h1>
        
    </div>


    {/*
    const [sum, setSum] = React.useState<number>(0)
    const [japanese, setJapanese] = React.useState<number>(0)
    const [mass, setMass] = React.useState<number>(0)
    const [english, setEnglish] = React.useState<number>(0)
    const [rank, setRank] = React.useState<string>('Null')
    return (
        <div>
            <p>
            国語：
            <input onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    setJapanese(Number(event.target.value))
                }
            } />
            点
            </p>
            <p>
                数学：
                <input onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) => {
                        setMass(Number(event.target.value))
                    }
                } />
            点
            </p>
            <p>
                英語：
                <input onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) => {
                        setEnglish(Number(event.target.value))
                    }
                } />
            点
            </p>
            <p>
                <button
                    className={styles.btn}
                    onClick={() => {
                        setSum(japanese + mass + english)
                        
                        setRank(sum >= 200 ? 'A' : 'B')
                    }}
                >
                    計算
                </button>
            </p>
            <p>合計 {sum}点　ランク{rank}</p>
        </div>
    )
                */}
}