import React from 'react'
import { ImportsNotUsedAsValues } from 'typescript'

import styles from './App.css'

export const App: React.FC = () => {
    const [sum, setSum] = React.useState<number>(0)
    let [japanese, setJapanese] = React.useState<number>(0)
    let [mass, setMass] = React.useState<number>(0)
    let [english, setEnglish] = React.useState<number>(0)
    return (
        <div>
            国語：
            <input onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    setJapanese(Number(event.target.value))
                }
            } />
            点　数学：
            <input onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    setMass(Number(event.target.value))
                }
            } />
            点　英語：
            <input onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    setEnglish(Number(event.target.value))
                }
            } />
            点
            <button
                className={styles.btn}
                onClick={() => {
                    setSum(japanese + mass + english)
                }}
            >
                計算
                </button>
            <p>合計 {sum}点</p>


        </div>
    )
}