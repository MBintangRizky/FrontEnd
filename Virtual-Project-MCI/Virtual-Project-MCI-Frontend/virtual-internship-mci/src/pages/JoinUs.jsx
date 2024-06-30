import React from 'react'
import { BreadcrumbsWithIcon } from '../Components/BreadCrumbs'

const registrationGuide = [
  {
    no: '1.',
    title: 'Join The Event',
    desc: 'Come and join the even in your city'
  },
  {
    no: '2.',
    title: 'Find MCI Members',
    desc: 'Find out which MCI members are you in city'
  },
  {
    no: '3.',
    title: 'Join MCI',
    desc: 'Join MCI for free by buying the product you need'
  },
  {
    no: '4.',
    title: 'Fill In Personal Data',
    desc: 'Fill in the data and complete'
  },
  {
    no: '5.',
    title: 'Username',
    desc: 'Choose a username for your MCI account'
  },
  {
    no: '6.',
    title: 'How to Start',
    desc: 'Learn how to start further in the member area'
  }
]

const marketingPlan = [
  {
    'text': 'Pembayaran komisi & bonus dihitung harian, 3x sehari'
  },
  {
    'text': 'Komisi & Bonus ditransfer pada pukul 10.00, pukul 13.00 dan pukul 17.00'
  },
  {
    'text': 'Semua Komisi & Bonus harian yang terhitung sampai pukul 09.59 akan ditransfer pada pukul 10.00'
  },
  {
    'text': 'Komisi & Bonus harian yang terhitung antara pukul 10.00 - pukul 12.59 akan ditransfer pada pukul 13.00'
  },
  {
    'text': 'Komisi & Bonus harian yang terhitung antara pukul 13.00 - pukul 16.59 akan ditransfer pada pukul 17.00'
  },
  {
    'text': 'Komisi & Bonus harian yang terhitung diatas pukul 17.00, akan dibayar pada hari kerja berikutnya pada pukul 10.00'
  },
  {
    'text': 'Proses transfer dilakukan pada jam operasional bank'
  },
  {
    'text': 'Hari libur & bonus akan diinformasikan melalui web resmi MCI (www.mci-world.com)'
  }
]

const trainingVictory = [
  {
    // title: 'VICTORY IN PRESENTATION & TRAINING FOR VICTORY CIPANAS CIANJUR',
    banner: '/image/training_1.png',
  
  },
  {
    // title: 'VICTORY IN PRESENTATION & TRAINING FOR VICTORY CIPANAS CIANJUR',
    banner: '/image/training_2.png',
  
  },
  {
    // title: 'VICTORY IN PRESENTATION & TRAINING FOR VICTORY CIPANAS CIANJUR',
    banner: '/image/training_3.png',
  
  }
]

function JoinUs() {
  return (
    <div className='my-[5em]'>
      <div className='container mx-auto'>
        <BreadcrumbsWithIcon
          links={[
            {
              name: "Join Us",
              href: "/join-us",
            },
           
          ]}
        />

        <div className='my-5'>

          {/* Join Us */}
          <h1 className='text-3xl font-bold text-center'>Join Us</h1>

          <div className='flex flex-col my-2 items-center mx-auto'>
            <p className='text-[#2E2E2E] text-xl'>Registration Guide</p>
            <p className='text-md text-[#838383]'>How to become a member</p>
          </div>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16'>

            {registrationGuide.map((r) => (
              <div className='flex flex-col items-center gap-2'>
              <div className='bg-[#DBA253] rounded-full p-2 text-white flex items-center justify-center' style={{ width: '50px', height: '50px' }}>
                {r.no}
              </div>

              <p className='text-[#2E2E2E] '>{r.title}</p>
              <p className='text-[14px] text-[#838383]'>{r.desc}</p>
            </div>
            ))}
          </div>

          {/* End join us */}
        </div>
      </div>

      {/* Marketing Plan */}
      <div className='bg-footer w-full px-5 py-16' 
      // style={{ backgroundImage: "url('/image/bg-texture.png')" }}
      >
            <div className='container mx-auto text-white'>
              <h1 className='text-3xl font-bold text-center'>Marketing Plan</h1>
              <p className='text-center text-[#F5F5F5] text-xl'>Komisi dan Bonus Cash Tercepat di Indonesia</p>
            </div>

            <div className='mt-5'>
              {marketingPlan.map((m, index) => (
              <div key={index} className='flex mb-5 w-3/4 mx-auto bg-white rounded-full px-10 py-4'>
                <p>{m.text}</p>
              </div>
              ))}
             
              
              <div className='w-3/4 mx-auto '>
              <p className='text-white mb-8'>*Untuk penjelasan lebih lengkap silakan download file dibawah ini:</p>
              <button
                  className="bg-[#0C66AC] rounded-full hover:bg-blue-700 text-white py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                 
                >
                Download Pdf
              </button>
              </div>
             
              
            </div>

      </div>
              
      {/* End of marketing plan */}

      {/* Theme song & Training Victory */}

      <div className='container mx-auto my-[5em]'>
        <div className='mb-24'>
          <h1 className='text-3xl text-center font-bold mb-10'>MCI Theme Song</h1>
          <img src="/image/mci_theme_song.png" className='w-2/3 mx-auto' alt="" srcset="" />
        </div>

        <div className='flex items-center justify-between mb-5'>
          <h1 className='text-3xl font-bold'>Training Victory</h1>

          <div className='flex flex-row items-center gap-x-2 text-[#0C66AC]'>
            <a href="">See All</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
          </svg>

          </div>
        </div>

        <div className='container mx-auto flex items-center justify-between'>

          {trainingVictory.map((t) => (

          
          <div className="max-w-sm bg-white border border-gray-500 rounded-[33px] dark:bg-gray-800 dark:border-gray-700" style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.1)" }}>


              <a href="#">
                  <img className=" p-2" src={t.banner} alt="" />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">VICTORY IN PRESENTATION & TRAINING FOR VICTORY CIPANAS CIANJUR
                      </h5>
                      <p className='text-[#757575] mb-2 text-sm'>Hotel Cianjur Cipanas Ruangan Pangrango  Hall Jl. Raya Cipanas KM 81 Kec.Pacet Cipanas-Cianjur</p>
                      <p className='text-sm'>Minggu, 12 Mei 2024</p>
                  </a>
                  
                  <a href="#" className="mt-2 flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-[#DBA253] rounded-full">
                      More Info
                    
                  </a>
              </div>
          </div>
          ))}

         

        </div>
      </div>

      {/* End of theme song & training victory */}
      
    </div>
  )
}

export default JoinUs