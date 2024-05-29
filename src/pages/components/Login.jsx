import Link from 'next/link';
import { Mail, KeyRound, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Logo from '../../../public/images/Logo.png'
import Image from 'next/image';

export default function TelaLogin() {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [userTypingPassword, setUserTypingPassword] = useState(false)

    const handlePasswordChange = (e) => {
        setUserTypingPassword(e.target.value.length > 0)
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <div className="flex h-full min-h-screen">
            <div className="hidden md:flex items-center justify-center w-1/2 p-12 bg-orange-400 rounded-r-3xl">
                <div className="flex gap-4 items-center justify-center">
                    <button className="absolute left-4 top-4 text-gray-900 bg-zinc-200 cursor-pointer justify-center rounded-full p-3 hover:bg-gray-100 ">
                        <Link href='../'>
                            <ArrowLeft size={18} />
                        </Link>
                    </button>
                    <Image src={Logo} width={120} height={120} />
                    <h2 className="text-center text-4xl font-bold text-gray-50">
                        Desafio <br /> Técnico.
                    </h2>
                </div>
            </div>

            <div className="fixed flex w-full justify-center bg-orange-400 rounded-b-3xl md:hidden">
                <div className="flex gap-4 items-center justify-center py-12">
                    <button className="absolute left-4 top-4 text-gray-900 bg-zinc-200 cursor-pointer justify-center rounded-full p-2 hover:bg-gray-100 ">
                        <Link href='../'>
                            <ArrowLeft size={15} />
                        </Link>
                    </button>
                    <Image src={Logo} width={120} height={120} />
                    <h2 className="text-center text-4xl font-bold text-gray-50">
                        Desafio <br /> Técnico.
                    </h2>
                </div>
            </div>

            <div className="flex justify-center items-center w-full md:w-1/2">
                <form className="space-y-4 md:w-1/3" action="#" method="POST">
                    <h2 className="mt-10 text-left text-3xl font-bold text-gray-900 dark:text-gray-50">
                        Acessar minha conta.
                    </h2>
                    <div className="mt-2 relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-xl border-0 py-3 text-gray-900 bg-zinc-100 placeholder:text-gray-400 pl-10"
                        />
                        <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className="mt-2 relative">
                        <input
                            id="password"
                            name="password"
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Senha"
                            autoComplete="current-password"
                            required
                            onChange={handlePasswordChange}
                            className="block w-full rounded-xl border-0 py-3 text-gray-900 bg-zinc-100 placeholder:text-gray-400 pl-10"
                        />
                        <KeyRound size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        {userTypingPassword && (
                            <span
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                            >
                                {passwordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                            </span>
                        )}
                    </div>

                    <button type="submit" className="flex w-full justify-center rounded-xl bg-green-600 p-3 font-semibold text-white hover:bg-green-500">
                        Acessar conta
                    </button>
                </form>
            </div>
        </div>
    )
}