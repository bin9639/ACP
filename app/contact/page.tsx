
import Image from "next/image";    
import Head from "@/app/ui/head";   
import Contact_link from "@/app/ui/contact";
import RegistrationForm from "@/app/ui/registration_form";

export default function Home() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-0">
      <Head />
      <RegistrationForm />
      <Contact_link />
      </div>
    );
}