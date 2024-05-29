import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AreaLogada() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      setIsAuthenticated(false)
      setTimeout(() => {
        router.push("/")
      }, 3000)
    }
  }, [router])

  const handleHome = () => {
    router.push("/")
  }

  return (
    <div className="flex h-full min-h-screen items-center justify-center">
      {isAuthenticated ? (
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Bem-vindo :)</h1>
          <button onClick={handleHome}
            className="flex w-full justify-center rounded-xl bg-green-600 p-3 font-semibold text-white hover:bg-green-500">
            Voltar à página inicial
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold">Oops, você não está logado</h1>
          <p className="mt-4 text-lg">
            Você será redirecionado para a página inicial em breve...
          </p>
        </div>
      )}
    </div>
  )
}
