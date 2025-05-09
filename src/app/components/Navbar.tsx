import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-yellow-600 dark:bg-green-600 p-4 sticky top-0 drop-shadow-xl z-10 border-2 border-white rounded-md">
            <div className="max-w-xl mx-auto sm:px-4 flex justify-center">
                <h1 className="text-3xl font-bold mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white"> Todos using server action</Link>
                </h1>

            </div>
        </nav>
    )
}