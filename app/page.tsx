import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-neutral-900">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-10 px-8 py-24 text-center sm:px-12">
        <Image
          src="/images/headshot.jpg"
          alt="Headshot of Kedar Bell"
          width={480}
          height={480}
          priority
        />
        <section className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            About Me
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A fullstack engineer with interests in Web Dev, AI/ML, and <br />Unreal Engine Game Development
          </p>
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/KBell99"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <Image
                className="invert"
                src="/icons/github.svg"
                alt="GitHub"
                width={64}
                height={64}
              />
            </a>
            <a
              href="https://linkedin.com/in/kedarbell"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={64}
                height={64}
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
