"use client";

import { v4 as uuidv4 } from "uuid";

export const Info = ({ info }: any) => {
  const attributes = Object.keys(info);

  return (
    <div key={uuidv4()} className="flex flex-col gap-1">
      {attributes.map((attr) => {
        return (
          <div key={uuidv4()} className="flex">
            <p className="w-60">{attr}</p>:
            <div className="pl-1 w-80 overflow-hidden whitespace-nowrap text-ellipsis">
              {typeof info[attr] === "object" ? (
                <Info info={info[attr]} />
              ) : (
                info[attr]
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
