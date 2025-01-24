export default function ({ subject, description, id, last }) {
  return (
    <div
      className={`rounded-lg w-[284px] h-[213px] md:w-[266px] md:h-[289px] hover:shadow-[0_0_30px_-15px_rgba(0,0,0,0.3)] transition flex flex-col gap-2 md:gap-5 items-start px-[20px] tracking-tighter justify-center outline outline-1 hover:outline-none outline-gray-300 md:outline-none`}
    >
      <img
        src={`./Images/card${id}.svg`}
        alt="card icon"
        className="mb-2 select-none"
      />
      <div className="font-PeydaSemiBold text-[#202020] text-base md:text-xl">
        {subject}
      </div>
      <div className="text-[#6F6F6F] font-PeydaLight text-[14px] md:text-base leading-7 md:leading-normal">
        {description}
      </div>
    </div>
  );
}
