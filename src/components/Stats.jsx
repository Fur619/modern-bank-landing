import React from 'react'
import { stats } from "../constants"
import styles from '../styles'

function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-wrap mb-6 sm:mb-20 `}>
      {stats.map((stats) => (
        <div key={stats.id} className='flex flex-1 justify-start items-center m-3'>
          <h4 className='font-poppins font-semibold xs:text[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            {stats.value}
          </h4>
          <span className='font-poppins font-semibold xs:text[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stats.title}</span>

        </div>
      ))}

    </section>
  )
}

export default Stats