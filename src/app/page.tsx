"use client";
import { Suspense } from "react";
import { getData, getDataByTrackId } from "./lib/getData";
import { Track } from "./components/Track";
import { useTrack } from "./hook/useTrack";
import { useEffect } from "react";
import { useState } from "react";
import { MoreInfoContainer } from "./container/MoreInfoContainer";

export default function Home() {
  const { fetchData, fetchDataById, data } = useTrack();
  const [showBackButton, setShowBackButton] = useState(false);
  const [showMoreData, setShowMoreData] = useState(false);
  const [moreData, setMoreData] = useState({ type: "", data: [] });

  function handleGetOthers(params: string) {
    if (!showBackButton) {
      fetchDataById(params);
      setShowBackButton(true);
    }
  }

  function handleReturn() {
    if (!showMoreData) {
      fetchData();
      setShowBackButton(false);
    }
    setShowMoreData(false);
  }

  function handleFetchMore(params: string) {
    setShowMoreData(true);
    setMoreData({
      type: params,
      data: Array.isArray(data[0][params])
        ? data[0][params]
        : [data[0][params]],
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      {showBackButton && (
        <button className="btn-base" onClick={handleReturn}>
          Return
        </button>
      )}
      {showMoreData ? (
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <MoreInfoContainer type={moreData.type} data={moreData.data} />
          </div>
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          {data.map((track: any) => (
            <Track
              info={track}
              key={track.tracking_id}
              focusAttr="tracking_id"
              fetchMore={handleFetchMore}
              getOthers={handleGetOthers}
            />
          ))}
        </Suspense>
      )}
    </main>
  );
}
