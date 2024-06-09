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
              <a href="/" className="nav-link text-2xl">
                Trang chủ
              </a>
              <Classes_list />

              <a href="/infor" className="nav-link ml-32 text-2xl">
                Về chúng tôi  
              </a>
              <a href="/contact" className="nav-link ml-32 text-2xl">
                Liên hệ
              </a>
            </div>
          </div>
        </header>
    )
}