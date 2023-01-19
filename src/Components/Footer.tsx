import React from 'react'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <p className='space-x-4 font-sans hover:Segoe UI text-center my-4 '>
          <a href="" className='text-slate-300/60 hover:text-white'> RoadMaps </a>
          <a href="" className='text-slate-300/60 hover:text-white'> Guides </a>
          <a href="" className='text-slate-300/60 hover:text-white'> Videos </a>
          <a href="" className='text-slate-300/60 hover:text-white'> About </a>
          <a href="" className='text-slate-300/60 hover:text-white'> YouTube </a>
        </p>
      </div>
  <div className=' flex my-4 text-slate-300/60 justify-between flex-col gap-12 sm:flex-row'>
    <div>
    <button className='inline-flex items-center font-medium hover:text-gray-400 text-white text-lg transition-colors'><svg className='mr-3' viewBox="0 0 283 283" xmlns="http://www.w3.org/2000/svg" fill="#000" height="30" width="30" ><path d="M0 39C0 17.46 17.46 0 39 0h205c21.539 0 39 17.46 39 39v205c0 21.539-17.461 39-39 39H39c-21.54 0-39-17.461-39-39V39Z" fill="#fff"></path><path d="M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36s-4.014-3.92-5.32-6.72c-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4s6.626-4.573 10.92-6.44c4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72a133.1 133.1 0 0 0-12.04.56c-4.107.373-8.12.933-12.04 1.68s-7.654 1.587-11.2 2.52c-3.36.747-6.254 1.68-8.68 2.8v95.48zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6s11.48-7.84 19.88-7.84 15.026 2.613 19.88 7.84 7.28 11.76 7.28 19.6-2.427 14.373-7.28 19.6-11.48 7.84-19.88 7.84-15.027-2.613-19.88-7.84-7.28-11.76-7.28-19.6z"></path></svg>  roadmap.sh </button>   <p className='my-4 text-slate-300/60'>Community created roadmaps, articles, resources<br/>and journeys to help you choose your path and<br/>grow in your career.</p>
    <p>
      © roadmap.sh · <button>FAQs</button>  · <button>Terms</button> · <button>Privacy</button> 
    </p>
    </div>
    <div className='sm:text-right text-lefts'>
    <div>
        <a href="https://thenewstack.io" target="_blank">
            <img alt="ThewNewStack" className="mr-auto my-1.5 sm:ml-auto sm:mr-0" height="24.8" src="/home/wassi/RoadMap-Clone/src/Components/tns-sm.png" width="200"/>
        </a>
    </div >
      
    <p>The leading DevOps resource for Kubernetes, <br /> cloud-native computing, and the latest in at-scale <br /> development, deployment, and management.</p>
    </div>
  </div> 
</footer>
  )
}

export default Footer