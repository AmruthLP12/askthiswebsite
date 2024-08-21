export default function Home() {
  return (
    <div className="bg-zinc-900 text-white flex items-center justify-center min-h-screen">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome to AskThisWebsite
        </h1>
        <p className="text-lg font-semibold text-center">
          This will only work when you add 'website' next to the deployed link.
        </p>
        <p className="text-sm text-zinc-400 text-center mt-2">
          i.e. https://askthiswebsite-cwa.vercel.app
        </p>
        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-400">
            For example:
            <a
              href="https://askthiswebsite-cwa.vercel.app/https:/www.framer.com/motion/introduction"
              className="text-blue-500 hover:text-blue-400 ml-2 underline"
              target="_blank"
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
