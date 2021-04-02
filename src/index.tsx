import React from 'react'
import {render} from 'react-dom'

import {App} from './App'
const mainElement = document.createElement('div')
mainElement.setAttribute('id','root')
document.body.prepend(mainElement)

render(<App />,mainElement)
