import Classes_list from "@/app/ui/classes_list";

export default function Head(){
    return (
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
    )
}