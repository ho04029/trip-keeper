export default function Home() {
  return (
    <main className="w-full absolute top-10 h-min min-h-[800px]">
      <section className="box-border w-full  absolute flex flex-col justify-center items-center p-24 overflow-visible content-center gap-2.5 bg-black">
        <div className="box-border w-full flex flex-col justify-center items-start max-w-[1000px] overflow-visible p-0 content-start gap-10">
          <div className="w-[193px] h-[128px] relative overflow-visible block">
            <div className="w-[128px] h-[128px] block overflow-hidden aspect-square bg-white rounded-full absolute"></div>
            <div className="w-[128px] h-[128px] block overflow-hidden aspect-square bg-[#98f5e1] left-[64px] rounded-full absolute"></div>
          </div>
          <h1 className="w-full h-auto whitespace-pre-wrap max-w-[800px] text-title-color text-7xl break-words break-all tracking-normal leading-normal">
            여행이 더 아름다워지는 곳, 트립키퍼
          </h1>
          <div className="box-border w-auto h-auto flex flex-row justify-center items-center p-10 bg-[#fde4cf] overflow-hidden content-center gap-10">
            여정시작하기
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
