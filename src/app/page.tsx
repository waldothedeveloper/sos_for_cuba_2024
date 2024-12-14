import Posts from "./components/posts";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="flex flex-col">
        <h1 className="font-extrabold text-[150px]">
          Diaz Canel
          <span className="text-red-500 uppercase">&nbsp;Singao</span>
        </h1>
        <Posts />
      </div>
    </div>
  );
}
