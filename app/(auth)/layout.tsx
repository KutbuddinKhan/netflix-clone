import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from '../../public/login_background.jpg'
import Logo from '../../public/netflix_logo.svg'

export default function AuthLayout({children} : {children: ReactNode}) {
    return(
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Image 
                src={BackgroundImage}
                alt="Login background"
                fill
                className="hidden sm:flex sm:object-cover -z-10 brightness-50"
                priority
            />
            <Image 
                src={Logo}
                alt="Logo"
                height={120}
                width={120}
                className="absolute left-4 top-4 object-contain md:left-10 md:top-6 "
                priority
            />
            {children}
        </div>
    )
}