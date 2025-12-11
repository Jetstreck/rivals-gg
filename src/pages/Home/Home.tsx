export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Rivals GG
          </span>
        </h1>
        <p className="text-lg text-white/80 md:text-xl">
          Your ultimate gaming platform
        </p>
      </div>
    </div>
  );
}

