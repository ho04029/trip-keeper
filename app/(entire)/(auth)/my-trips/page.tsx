"use client";

import useGetMyTripList from "@/container/useGetMyTripList";
import TripList from "@/container/tripList";

const MyTrips = () => {
  const myTrips = useGetMyTripList();
  return <div>{myTrips && <TripList trips={myTrips} />}</div>;
};

export default MyTrips;
