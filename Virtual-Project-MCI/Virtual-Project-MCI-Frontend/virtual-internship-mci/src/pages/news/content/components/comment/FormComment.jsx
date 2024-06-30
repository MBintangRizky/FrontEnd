export default function FormComment() {
  return (
    <>
      <div className='flex flex-col gap-3 mt-5'>
        <h3 className='font-bold'>Add Comment</h3>
        <div>
          <div className='relative'>
            <textarea
              type='message'
              className='block rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              id='message'
              placeholder=''
              rows={8}
              required
            />
            <label
              htmlFor='message'
              className='absolute text-sm left-5 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'>
              Your message...
            </label>
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='relative w-full'>
            <input
              type='text'
              className='block rounded-full px-5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              id='name'
              placeholder=''
              required
            />
            <label
              htmlFor='name'
              className='absolute text-sm left-5 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'>
              Your name...
            </label>
          </div>
          <div className='relative w-full'>
            <input
              type='email'
              className='block rounded-full px-5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              id='email'
              placeholder=''
              required
            />
            <label
              htmlFor='email'
              className='absolute text-sm left-5 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'>
              Your Email...
            </label>
          </div>
        </div>

        <div className='flex justify-end mt-3'>
          <button className='bg-blue-800 text-white py-[12px] px-[20px] w-1/2 rounded-full hover:bg-blue-700 transition-all duration-500'>
            Post Comment
          </button>
        </div>
      </div>
    </>
  );
}
