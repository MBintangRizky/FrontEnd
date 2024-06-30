export default function Quote() {
  return (
    <>
      <div className='flex gap-5'>
        <div className='bg-[#212529] w-[3px] h-auto' />
        <div className='flex flex-col gap-3'>
          <p className='!text-lg'>
            Fashion adalah cara kita berbicara tanpa menggunakan kata-kata.
            Setiap kali kita memilih pakaian, kita menciptakan sebuah cerita
            tentang siapa kita dan apa yang kita percayai
          </p>
          <span className='text-sm font-light pt-7'>Rachel Zoe</span>
        </div>
      </div>
    </>
  );
}
