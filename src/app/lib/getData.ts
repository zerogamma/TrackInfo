import "server-only";

import data from "../../data/finanex-data.json";

export async function getData() {
  if (data) {
    const filteredData = data.updated_trackings.map((track) => {
      return { tracking_id: track.tracking_id };
    });
    return filteredData;
  }
  return [];
}

export async function getDataByTrackId(id: string) {
  if (data) {
    const filteredData = data.updated_trackings.find(
      (track) => track.tracking_id === id
    );
    return [filteredData];
  }
  return [];
}
