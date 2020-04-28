import React from 'react'
import DPLStore from './Portfolio/DPLStore'
import BlackJack from './Portfolio/BlackJack/BlackJack'
import Shakti from './Portfolio/Shakti'
import Virtus from './Portfolio/Virtus'


const Resume = () => (
  <>
    <div>
      <DPLStore />
      <Virtus />
      <Shakti />
      {/* <BlackJack /> */}
    </div>
  </>
)

export default Resume