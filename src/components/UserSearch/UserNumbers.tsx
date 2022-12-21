export function UserNumbers() {
  return (
    <ul
      className="mt-8 bg-[#F6F8FF] rounded-[10px] flex gap-[82px] 
      px-8 py-[15px] w-full dark:bg-[#141D2F]"
    >
      <li>
        <h4
          className="font-normal text-[#4B6A9B] text-[13px]
            dark:text-slate-200"
        >
          Repos
        </h4>
        <p
          className="font-bold text-[22px] text-[#2B3442]
             dark:text-white"
        >
          8
        </p>
      </li>
      <li>
        <h4
          className="font-normal text-[#4B6A9B] text-[13px]
              dark:text-slate-200"
        >
          Followers
        </h4>
        <p
          className="font-bold text-[22px] text-[#2B3442]
             dark:text-white"
        >
          3938
        </p>
      </li>
      <li>
        <h4
          className="font-normal text-[#4B6A9B] text-[13px]
              dark:text-slate-200"
        >
          Following
        </h4>
        <p
          className="font-bold text-[22px] text-[#2B3442]
             dark:text-white"
        >
          9
        </p>
      </li>
    </ul>
  );
}
