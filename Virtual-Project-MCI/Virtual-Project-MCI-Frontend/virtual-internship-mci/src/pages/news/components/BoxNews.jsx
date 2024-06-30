export default function BoxNews({ data }) {
  return (
    <>
      <a href={`/news/${data.title}`}>
        <div className='flex flex-col gap-3'>
          <div
            className={`min-w-[390px] w-full h-[256px] bg-cover bg-no-repeat bg-center rounded-xl`}
            style={{ backgroundImage: `url('${data.image}')` }}
          />

          <div className='flex flex-col gap-3'>
            <h3 className='font-[600] text-xl'>{data.title}</h3>
            <p className='text-[#858585] text-sm pt-1'>{data.desc}</p>

            <div className='w-[44.01px] h-[5px] bg-black'></div>
          </div>

          <small className='text-[12px]'>
            By{" "}
            <a href='#' className='text-blue-500 hover:underline'>
              {data.by}
            </a>
            , 12 April 2024
          </small>
        </div>
      </a>
    </>
  );
}
