import React from 'react'
import { FaHotjar, FaNapster, FaRust, FaJira, FaEvernote, FaCheck, FaEarlybirds } from "react-icons/fa";

const Sponsors = () => {
  return (
    <div id='second-sec-div' className='flex flex-col w-[80%] items-center m-auto mt-[3rem]'>
      <div id='sponsors' className='text-center'>
        <div className=''>
          <p className='mb-[2rem] text-[2rem] font-semibold'>Sponsored by:</p>
        </div>
        <div id='supported-companies' className='flex flex-row gap-[6rem] text-[1.5rem] text-center'>
          <div id='hotjar'>
            <p className='text-[4rem]'><FaHotjar title='Hotjar'/></p>
            {/* <p>Hotjar</p> */}
          </div>

          <div id='napster'>
            <p className='text-[4rem] text-center'><FaNapster title='Napster'/></p>
            {/* <p className='text-center'>Napster</p> */}
          </div>

          <div id='rust'>
            <p className='text-[4rem]'><FaRust title='Rust'/></p>
            {/* <p className=''>Rust</p> */}
          </div>

          <div id='jira'>
            <p className='text-[4rem]'><FaJira title='Jira'/></p>
            {/* <p>Jira</p> */}
          </div>

          <div id='evernote'>
            <p className='text-[4rem]'><FaEvernote title='Evernote'/></p>
            {/* <p>Evernote</p> */}
          </div>
          <div id='early-birds'>
          <p className='text-[4rem]'><FaEarlybirds title='Earlybirds'/></p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Sponsors