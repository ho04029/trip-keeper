"use client";
import Link from "next/link";
import useGetMyTripList from "@/hooks/use-get-myTripList";
import { Button } from "@/components/ui/button";
import TripList from "@/container/tripList";

export default function Home() {
  const myTrips = useGetMyTripList();

  return (
    <main className="min-h-[800px]">
      <section className="box-border w-full  relative flex flex-col justify-center items-center p-24 content-center gap-2.5 bg-black">
        <div className="box-border w-full flex flex-col justify-center items-start max-w-[1000px] p-0 content-start gap-10">
          <div className="w-[193px] h-[128px] relative block">
            <div className="w-[128px] h-[128px] block overflow-hidden aspect-square bg-white rounded-full absolute"></div>
            <div className="w-[128px] h-[128px] block overflow-hidden aspect-square bg-[#98f5e1] left-[64px] rounded-full absolute"></div>
          </div>
          <h1 className="w-full h-auto whitespace-pre-wrap max-w-[800px] text-title-color text-7xl break-words break-all tracking-normal leading-normal">
            여행이 더 아름다워지는 곳, 트립키퍼
          </h1>
          <Link href="/new-trip">
            <Button variant="landig" size="lg">
              여정시작하기
            </Button>
          </Link>
        </div>
      </section>
      <section className="box-border relative w-full h-auto p-20 overflow-hidden content-center">
        <div className="box-border w-full h-auto flex flex-col justify-start overflow-hidden gap-10">
          <h2 className="w-full h-auto whitespace-pre-wrap break-words font-sans text-[48px] leading-[1.2]">
            내 여행 일정 보기
          </h2>
          <p className="w-full h-auto whitespace-pre-wrap break-words font-sans text-[30px] leading-[1.5]">
            여행 일정을 쉽게 접근하고 관리하세요. <br />
            다가오는 여행과 과거의 여행을 쉽게 확인하고 관리할 수 있습니다.
          </p>
          <div className="flex justify-start gap-5 mt-[-5px]">
            <Link href="/new-trip">
              <Button variant="outline">여행 일정 계획하기</Button>
            </Link>
            <Link href="/my-trips">
              <Button variant="outline">내 여행 일정 보기</Button>
            </Link>
          </div>
        </div>
        {myTrips && <TripList trips={myTrips} />}
      </section>
    </main>
  );
}
