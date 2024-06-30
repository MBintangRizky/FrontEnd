import BoxNews from "./BoxNews";

export default function ListNews({ news }) {
  return (
    <>
      <div className='grid grid-cols-2 gap-6'>
        {news.map((el, i) => {
          return <BoxNews key={i} data={el} />;
        })}
      </div>
    </>
  );
}
