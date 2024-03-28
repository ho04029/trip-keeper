import ModeToggle from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="absolute top-0 left-0 flex">
        <ModeToggle />
      </header>
    </main>
  );
}
