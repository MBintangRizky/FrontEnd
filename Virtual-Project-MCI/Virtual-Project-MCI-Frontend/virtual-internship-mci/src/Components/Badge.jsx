export default function Badge({ className, title, classNameText }) {
  return (
    <>
      <div
        className={`py-[8px] px-2 w-auto h-fit flex justify-center rounded-full ${className} transition-all duration-500`}>
        <span className={`text-white capitalize ${classNameText}`}>
          {title}
        </span>
      </div>
    </>
  );
}
