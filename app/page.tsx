
import Image from "next/image";       
import Classes_list from "@/app/ui/classes_list";
        

export default function Home() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-0">
        <header className="w-full mx-auto bg-white shadow-md">
          <div className="flex justify-start w-full">
            <a href="/">
              <img 
                src="/logo.jpg" 
                alt="Logo" 
                className="w-24 h-24 rounded-full" 
              />
            </a>
            <div className="flex items-center justify-center w-full">
              <a href="/" className="text-black-600 hover:text-gray-900 text-2xl">
                Trang chủ
              </a>
              
              <Classes_list ml-32/>
            
              <a href="/infor" className="ml-32 text-black-600 hover:text-gray-900 text-2xl">
                Về chúng tôi 
              </a>
              <a href="/contact" className="ml-32 text-black-600 hover:text-gray-900 text-2xl">
                Liên hệ
              </a>
            </div>
          </div>
          
        </header>
        
        <div className="flex">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-2 mr-10"
            href="https://www.facebook.com/acpeducenter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              src="/facebook.png"
              alt="Facebook Link"
              className="dark:invert w-8 h-8"
              width={100}
              height={24}
              priority
            />
          </a>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-2 mr-10"
            href="https://www.youtube.com/channel/UCNO0KNTBGOOWe7Q9NHqhBmg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              src="/youtube.png"
              alt="Youtube Link"
              className="dark:invert w-8 h-8"
              width={100}
              height={24}
              priority
            />
          </a>
          <a
            className="text-black-600 hover:text-gray-900 text-xl pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-2"
            href="tel:035 922 5157"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              src="/phone.png"
              alt="Phone number Link"
              className="dark:invert w-8 h-8 mr-1"
              width={100}
              height={24}
              priority
            />
            035 922 5157
          </a>  
        </div>
      </div>
    );
}