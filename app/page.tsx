
import Image from "next/image";    
import Head from "@/app/ui/head.tsx";   
import Contact_link from "@/app/ui/contact.tsx";

export default function Home() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-0">
      <Head />
      <div className="flex flex-col items-start justify-center">
          Trung tâm ACP với đội ngũ giảng viên nhiệt tình, chất lượng, tự hào là một trong những trung tâm hàng đầu Việt Nam về luyện thi OLP, HSG môn Tin học các cấp.
      </div>
      <Contact_link />
      </div>
    );
}