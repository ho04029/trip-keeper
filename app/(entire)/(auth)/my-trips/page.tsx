"use client";

import useGetMyTripList from "@/hooks/use-get-myTripList";
import TripList from "@/container/tripList";

const MyTrips = () => {
  const myTrips = useGetMyTripList();
  return <div className="p-20">{myTrips && <TripList trips={myTrips} />}</div>;
};

export default MyTrips;
