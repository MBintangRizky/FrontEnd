import { ChevronLeft, ChevronRight } from "lucide-react";

function Next() {
  return (
    <button className='w-[37px] h-[37px] rounded-full bg-[#BFBFBF] text-white font-bold grid place-content-center'>
      <ChevronRight className='h-4 w-4 text-white' />
    </button>
  );
}

function Prev() {
  return (
    <button className='w-[37px] h-[37px] rounded-full bg-[#BFBFBF] text-white font-bold grid place-content-center'>
      <ChevronLeft className='h-4 w-4 text-white' />
    </button>
  );
}

function Item({ number, onClick, currentNumber }) {
  return (
    <button className='w-[37px] h-[37px] rounded-full bg-[#BFBFBF] text-white font-bold grid place-content-center'>
      {number}
    </button>
  );
}

export function Pagination({ children }) {
  return (
    <>
      <div className='flex gap-3'>{children}</div>
    </>
  );
}

Pagination.Item = Item;
Pagination.Prev = Prev;
Pagination.Next = Next;

export default Pagination;
