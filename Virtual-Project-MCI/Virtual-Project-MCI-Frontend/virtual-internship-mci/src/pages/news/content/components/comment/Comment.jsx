import { Forward, Heart, MessageCircle, Save } from "lucide-react";

function Item(props) {
  return (
    <>
      <div className='flex flex-col gap-5 my-7'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='text-[18px]'>{props.name}</p>
            <span className='text-sm text-[#6C757D]'>{props.date}</span>
          </div>
          <div className='flex gap-3'>
            <span className='text-sm font-light'>58</span>
            <span className='text-sm font-light'>REPLY</span>
          </div>
        </div>
        <p className='text-[#3B3B3B] font-light'>{props.children}</p>
        <div className='flex justify-end'>
          <Heart className='w-5 h-5 text-[#6C757D]' />
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#CED4DA]' />
    </>
  );
}

function Comment({ children }) {
  return (
    <>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between'>
          <p className='font-bold text-[18px]'>3 comments</p>
          <div className='flex gap-10'>
            <MessageCircle className='w-5 h-5 text-[#6C757D]' />
            <Save className='w-5 h-5 text-[#6C757D]' />
            <Heart className='w-5 h-5 text-[#6C757D]' />
            <Forward className='w-5 h-5 text-[#6C757D]' />
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#CED4DA]' />
      </div>
      <div className='flex flex-col gap-3'>{children}</div>
    </>
  );
}

Comment.Item = Item;

export default Comment;
