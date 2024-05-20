"use client";
import { useQuery, useConvexAuth } from "convex/react";
import { api } from "@/convex/_generated/api";

import { redirect } from "next/navigation";
import Spinner from "@/components/spinner";

const TripPage = (props: any) => {
  const { isLoading } = useConvexAuth();
  let trip = useQuery(api.documents.getTrip, { tripId: props.params.tripId });

  if (trip === undefined) {
    return (
      <div className="p-20 items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (trip === null) {
    console.log(trip);
  }

  return <div className="p-20">{props.params.tripId}</div>;
};

export default TripPage;
