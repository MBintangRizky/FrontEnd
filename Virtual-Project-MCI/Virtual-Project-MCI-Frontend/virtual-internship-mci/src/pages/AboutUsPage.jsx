import React from 'react';
import { BreadcrumbsWithIcon } from '../Components/BreadCrumbs';
import AboutImage from '/image/about.png';
import DollarImage from '/image/dollar.png';
import GlobeImage from '/image/globe.png';
import MedalImage from '/image/medal.png';
import UsersImage from '/image/users.png';
import StatisticImage from '/image/statistic.png';

const awards = [
  {
    title: 'Top Brand Award 2020',
    banner: '/image/top-brand.png',
    list: [
      'Get TOP BRAND 2020 for NANO SPRAY products.',
      '3 years in a row Bioglass is the best.'
    ]
  },
  {
    title: '2019',
    banner: '/image/2019.png',
    list: [
      'Grand Opening of GRAHA MCI head office in Surabaya.',
      'MCI again received two MURI awards for the category of the most tourist trips and the most chartered aircraft.'
    ]
  },
  {
    title: 'Museum Rekor-Dunia Indonesia',
    banner: '/image/museum.png',
    list: [
      'Muri most foreign tourist trips.',
      'Awarded as the largest taxpayer in the Gubeng area of ​​Surabaya.'
    ]
  
  }
]

const kodeEtiks = [
  {
    'text': '1. Menegaskan hubungan antara perusahaan dengan Mitra'
  },
  {
    'text': '2. Menegaskan hubungan antara Mitra demi meningkatkan kerukunan.'
  },
  {
    'text': '3. Menjaga dan melindungi kepentingan semua Mitra yang bergabung di dalam perusahaan.'
  },
  {
    'text': '4. Mitraikan kesempatan yang sama bagi setiap Mitra.'
  },
  {
    'text': '5. Menjelaskan tanggungjawab dari setiap Mitra.'
  }
]

function AboutUsPage() {
  return (
    <div className="my-[5em]">
      <div className="container mx-auto">
        <BreadcrumbsWithIcon
          links={[
            {
              name: 'About Us',
              href: '/about-us',
            },
          ]}
        />

        <div className="my-10">
          {/* Our Company */}
          <h1 className="text-3xl font-bold text-center mb-24">Our Company</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-10">
            <div>
              <img src={AboutImage} alt="About Us" className="rounded-lg shadow-lg w-[505px] h-[468px]" />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-gray-600">
                MC-Indonesia is a club made for its members, they will enjoy not only physical health but also financial health. By joining MC-Indonesia, cill members get privileges and exclusive products from us, including having a millionaire community in Indonesia. By utilizing this community, we hope that there will be better cooperation among its members and of course help improve economic conditions in Indonesia.
              </p>
              <p className="mt-5 text-gray-600">
                MCI-Indonesia statement states that members can get bonuses, prizes, commissions or benefits from any participating person or entity becoming a member. MC-Indonesia has been directly proportional to efforts and guarantees with prizes, bonuses, commissions or gains in tranding potential. Product results can differ from one person to another.
              </p>
            </div>
          </div>
        </div>

        <div className="my-24">
          {/* Our Values */}
          <h1 className="text-3xl font-bold text-center mb-24">Our Values</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-10">
            <div className="flex flex-col items-center">
              <img src={DollarImage} className="bg-[#5F9AC8] p-4 rounded-full" width={100} height={100} alt="Dollar Icon" />
              <p className="text-[12px] w-2/3 my-3 text-center">
                MCI helps thousands of its members to break away from the paradigm of <span className="text-[#5F9AC8] font-bold">monthly income to earn 3X in a day.</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={GlobeImage} className="bg-[#5F9AC8] p-4 rounded-full" width={100} height={100} alt="Globe Icon" />
              <p className="text-[12px] w-2/3 my-3 text-center">
                The Free Tour Program which has <span className="text-[#5F9AC8] font-bold">successfully sent thousands of its members to various popular tourist destinations in the world.</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={MedalImage} className="bg-[#5F9AC8] p-4 rounded-full" width={100} height={100} alt="Medal Icon" />
              <p className="text-[12px] w-2/3 my-3 text-center">
                MCI is <span className="text-[#5F9AC8] font-bold">Certificate Of Merit World Record Museum</span> and several other awards <span className="text-[#5f9ac8]"> see more</span>.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={StatisticImage} className="bg-[#5F9AC8] p-4 rounded-full" width={100} height={100} alt="Statistic Icon" />
              <p className="text-[12px] w-2/3 my-3 text-center">
                Sell quality products that people use every day. <span className="text-[#5f9ac8]"> more info</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={UsersImage} className="bg-[#5F9AC8] p-4 rounded-full" width={100} height={100} alt="Users Icon" />
              <p className="text-[12px] w-2/3 my-3 text-center">
                MCI is widely known as a prestigious online business. <span className="text-[#5f9ac8]"> Lets join our big family</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={MedalImage} className="bg-[#5F9AC8] p-4 rounded-full" width={100} height={100} alt="Medal Icon" />
              <p className="text-[12px] w-2/3 my-3 text-center">
                Our support team is here to help by phone, chat or email. <span className="text-[#5f9ac8]">more info</span>
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <h1 className="text-3xl font-bold text-center">Meet Our Team</h1>
        <p className="text-center text-[#949494] mb-10">This is people behind MCI</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex justify-center">
            <img src="/image/dirut.png" className="" width={300} alt="Director" />
          </div>
          <div className="flex justify-center">
            <img src="/image/preskom.png" className="" width={300} alt="President" />
          </div>
          <div className="flex justify-center">
            <img src="/image/kom.png" className="" width={300} alt="Commissioner" />
          </div>
        </div>

        <div className="flex justify-center my-10">
          <button className="bg-[#0C66AC] hover:bg-blue-700 text-white py-2 px-10 rounded-full focus:outline-none focus:shadow-outline" type="button">
            See All
          </button>
        </div>

      </div>

      {/* Commissioner Message */}
      <h1 className="text-3xl font-bold text-center w-[500px] mx-auto mt-24">Commissioner's Message PT. Millionaire Group Indonesia</h1>

      <div className="bg-footer w-full px-5 mt-16" >
        <div className="container mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="col-span-2 flex justify-center flex-col">
              <h1 className="text-2xl font-bold mb-5">Best Wishes,</h1>
              <p className="text-[#F5F5F5] text-md mb-4">
                Starting from the desire to develop individuals in Indonesian society to have a better life, a very interesting business idea was formed, namely MCI (Millionaire Club Indonesia). A business concept to build a better life starting from the economy, community, health, and lifestyle. So that being a business partner with MCI is the perfect solution for a better life, therefore I would like to welcome you and welcome to join us in the MCI family.
              </p>
              <p className="text-[#F5F5F5] text-md mb-4">
                With a revolutionary business concept, we believe this business can help many people achieve success that so far cannot be achieved in other businesses. Coupled with products that are very attractive and beneficial to health, this business can run in almost all segments, including women, men, health observers, passive income seekers, and for personality development.
              </p>
              <p className="text-[#F5F5F5] text-md mb-4">
                It is our vision to become the best network marketing to achieve the welfare of its members. Achieve your success with us and be part of our history of success.
              </p>
              <p className="text-[#F5F5F5] text-md">
                Send regards for success!!
                <span className="block">WILSON MANDALAPUTRA, S.E.</span>
                Commissioner
              </p>
            </div>
            <div className="flex">
              <img src="/image/commisioner.png" className="h-[600px]" alt="Commissioner" />
            </div>
          </div>
        </div>
      </div>

      {/* Visi Misi */}
      <h1 className="text-3xl font-bold text-center w-[500px] mx-auto mt-24">Our Mission and Vision</h1>

      <div className="w-full px-5 mt-16 bg-cover bg-center py-16"  style={{ backgroundImage: "url('/image/bg-visi-misi.png')" }}>
        <div className="max-w-sm md:max-w-md flex flex-col gap-3 bg-white rounded-xl py-5 px-10 mx-auto text-white">
          <p className='text-xl text-black font-bold'>Mission</p>
          <p className='text-md text-[#575757]'>MCI memiliki misi untuk memberikan layanan terbaik dengan meluluskan anggotanya untuk mendapatkan layanan eksklusif seperti kemudahan, produk yang menjanjikan dan jaringan yang bagus, serta harga yang kompetitif. MC-Indonesia memiliki komitmen untuk mengembangkan bisnis dengan meningkatkan kualitas, jenis produk, update sistem promosi dan sistem pendukung</p>
          <p className='text-xl text-black font-bold'>Vision</p>
          <p className='text-md text-[#575757]'>MCI memiliki visi menjadi perusahaan pemasaran jaringan terbaik, guna mencapai kesejahteraan bagi anggotanya khususnya di bidang kesehatan dan keuangan</p>
        </div>
      </div>
      
      {/* Awards & certificate */}
      <div className='container mx-auto'>
        <h1 className="text-3xl font-bold text-center w-[500px] mx-auto mt-24 mb-10">Award & Certificate</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          {awards.map((award) => (
            <div className="max-w-sm bg-white border border-gray-500 rounded-[33px] dark:bg-gray-800 dark:border-gray-700" style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.1)" }}>
            <a href="#">
                <img className=" p-2" src={award.banner} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Top {award.title}
                    </h5>

                    
                   <ul className='list-disc ml-5'>
                   {award.list.map((l) => (
                       <li className='text-sm text-[#757575]'>
                       {l}
                       </li>
                    ))}
                   
                   </ul>
                </a>
              
            </div>
          </div>
          ))}
        
        </div>
        <div className="flex items-center justify-center my-16">
          <button className="bg-[#0C66AC] hover:bg-blue-700 text-white py-2 px-10 rounded-full focus:outline-none focus:shadow-outline" type="button">
            See All
          </button>
          </div>
      </div>

      {/* Marketing Plan */}
      <div className='bg-footer w-full px-5 py-16' 
      // style={{ backgroundImage: "url('/image/bg-texture.png')" }}
      >
            <div className='container mx-auto text-white'>
              <h1 className='text-3xl font-bold text-center mb-4'>Kode Etik</h1>
              <p className='text-left text-[#F5F5F5] text-xl'>Kode Etik dan Peraturan ini dibuat oleh PT. MILLIONAIRE INDONESIA (selanjutnya disebut sebagai MCI) adalah sebagai panduan dan peraturan baku yang berlaku bagi semua pelaku usaha Penjualan Langsung MCI dalam menjalankan bisnisnya dan bertujuan untuk :
              </p>
            </div>

            <div className='container mt-5 mx-auto'>
              {/* {marketingPlan.map((m) => (
              <div className='flex mb-5 w-3/4 mx-auto bg-white rounded-full px-10 py-4'>
                <p>{m.text}</p>
              </div>
              ))}
              */}
              
              <div className='mx-auto '>

              
              {kodeEtiks.map((kode, index) => (
                <div key={index} className='flex mb-5 mx-auto bg-white rounded-full px-10 py-4'>
                  <p>{kode.text}</p>
                </div>
              ))}

              
              <p className='text-white mb-8'>Dengan disetujuinya formulir keanggotaan yang telah diisi melalui web MCI maka pelaku usaha Penjualan Langsung MCI setuju untuk terikat dan tunduk kepada Kode Etik dan Peraturan ini dan bersifat mengikat antara Mitra dan Perusahaan (MCI). Kode Etik dan Peraturan ini menjadi satu-satunya ketentuan dan berlaku selama menjadi Mitra Perusahaan.
              Untuk penjelasan lebih lengkap silahkan download file dibawah.</p>
              <button
                  className="bg-[#0C66AC] rounded-full hover:bg-blue-700 text-white py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                 
                >
                Download Pdf
              </button>
              </div>
             
              
            </div>

      </div>
              

    </div>
  );
}

export default AboutUsPage;
