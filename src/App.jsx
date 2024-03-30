import { useState } from 'react'
import TransactionChart from './component/PriceRangeChart'
import PieChart from './component/PieChartStats'
function App() {

  return (
   <>
   <TransactionChart />
   <PieChart />
   </>
  )
}

export default App
