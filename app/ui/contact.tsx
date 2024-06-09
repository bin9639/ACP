import Image from "next/image";

export default function Contact_link(){
    return(
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
    );
}