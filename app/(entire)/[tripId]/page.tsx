"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { redirect } from "next/navigation";
import Spinner from "@/components/spinner";

const TripPage = (props: any) => {
  const trip = useQuery(api.documents.getTrip, { tripId: props.params.tripId });

  console.log(trip);

  return <div className="p-20">{props.params.tripId}</div>;
};

export default TripPage;
