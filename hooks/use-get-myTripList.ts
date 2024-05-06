import { useQuery, useConvexAuth } from "convex/react";
import { api } from "@/convex/_generated/api";

const useGetMyTripList = () => {
  try {
    const tripList = useQuery(api.documents.getMyTrip);
    return tripList;
  } catch (err) {
    return null;
  }
};

export default useGetMyTripList;
