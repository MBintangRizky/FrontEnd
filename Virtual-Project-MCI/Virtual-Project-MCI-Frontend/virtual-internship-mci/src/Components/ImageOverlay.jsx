export default function ImageOverlay({ title, image, className }) {
  return (
    <>
      <div
        className={`w-full h-[228px] relative rounded-xl hover:shadow-xl transition-all duration-500 ${className}`}>
        <div
          className={`w-full h-full bg-cover bg-center bg-no-repeat rounded-xl`}
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className='bg-[#4D4D4D61]  absolute top-0 left-0 w-full h-full rounded-xl' />
        <div className='absolute top-0 w-full h-full grid place-content-center'>
          <p className='text-white font-semibold capitalize'>{title}</p>
        </div>
      </div>
    </>
  );
}
