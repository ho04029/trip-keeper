import Link from "next/link";
import { format } from "date-fns";
import { ITrip } from "../types/type";

const TripList = (trips: ITrip[]) => {
  return (
    <div className="w-full h-auto mt-10 flex flex-col gap-5">
      {trips.map((trip) => {
        return (
          <Link
            href="/"
            key={trip._id}
            className="flex flex-col gap-1 p-5 bg-accent rounded-md"
          >
            <h2>{trip.title}</h2>
            <p>
              {format(new Date(trip.date.from), "yy년 MM월 dd일")} -{" "}
              {format(new Date(trip.date.to), "yy년 MM월 dd일")}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default TripList;
