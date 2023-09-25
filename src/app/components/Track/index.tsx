"use client";

import { v4 as uuidv4 } from "uuid";

export const Track = ({ info, focusAttr, fetchMore, getOthers }: any) => {
  const attributes = Object.keys(info);

  const handleMore = (event: any) => {
    fetchMore(event.target.name);
  };

  return (
    <div className="flex flex-col gap-1">
      {attributes.map((attr) => {
        return (
          <div key={uuidv4()} className="flex">
            <p className="w-48">{attr}</p>:
            <p className="pl-1 w-80 overflow-hidden whitespace-nowrap text-ellipsis hover:overflow-clip hover:whitespace-normal hover:break-all hover:w-[32rem]">
              {typeof info[attr] === "object" ? (
                <button onClick={handleMore} name={attr} className="btn-base">
                  more
                </button>
              ) : focusAttr === attr ? (
                <button
                  className="w-72 btn-base overflow-hidden whitespace-nowrap text-ellipsis  hover:overflow-clip hover:whitespace-normal hover:break-all hover:w-fit"
                  onClick={() => getOthers(info[focusAttr])}
                >
                  {info[attr]}
                </button>
              ) : (
                info[attr]
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};
