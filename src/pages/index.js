import Sidebar from "./Sidebar";
import Navbar from "@/component/Navbar";
import MessageComponent from "@/component/MessageComponent";

export default function Home() {
  return (
    <main className="flex bg-[#F9F9F9]">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="mt-8 px-7">
          <MessageComponent />
        </div>
      </div>
    </main>
  )
}
