import { Info } from "@/app/components/Info";
import { v4 as uuidv4 } from "uuid";

export const MoreInfoContainer = ({ type, data }: any) => {
  const buildTypeInfo = () => {
    if (type === "events") {
      const reversed = [...data].reverse();
      return reversed.map((info: any) => (
        <div key={uuidv4()} className="flex  bg-slate-500 p-3 rounded-md">
          <Info info={info} />
        </div>
      ));
    }
    if (type === "stats")
      return Object.keys(data[0]).map((info) => (
        <div key={uuidv4()} className="flex  bg-slate-500 p-3 rounded-md">
          <p>{`${info}: `}</p>
          <div className="mt-5 ml-4">
            <Info info={data[0][info]} />
          </div>
        </div>
      ));

    if (type === "other_data")
      return Object.keys(data[0]).length === 0 ? (
        <div>No Info</div>
      ) : (
        <Info info={data[0]} />
      );
  };
  return <div className="flex flex-col gap-6">{buildTypeInfo()}</div>;
};
