
import Image from "next/image";    
import Head from "@/app/ui/head.tsx";   
import Contact_link from "@/app/ui/contact.tsx";
import RegistrationForm from "@/app/ui/registration_form.tsx";

export default function Home() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-0">
      <Head />
      <RegistrationForm />
      <Contact_link />
      </div>
    );
}