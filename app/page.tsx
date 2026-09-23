import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react'

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#c62828] px-5 py-10 text-white">
      <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div aria-hidden="true" className="absolute -right-32 -top-32 size-96 rounded-full border border-white/20" />
      <div aria-hidden="true" className="absolute -bottom-44 -left-24 size-[28rem] rounded-full border border-white/15" />

      <article className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/20 bg-white p-7 text-slate-950 shadow-2xl shadow-red-950/30 sm:p-11">
        <div className="flex items-start justify-between gap-6">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#c62828] text-xl font-bold tracking-tight text-white shadow-lg shadow-red-700/20" aria-label="Brahamjot Singh initials">
            BS
          </div>
          <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#c62828]">
            Calling card
          </span>
        </div>

        <div className="mt-16 sm:mt-20">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#c62828]">
            <span className="h-px w-7 bg-[#c62828]" /> Software Developer
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl">
            Brahamjot Singh
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            I am a software developer, recently passed out in 2026 and currently looking for jobs/work to do.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <BriefcaseBusiness className="size-4 text-[#c62828]" aria-hidden="true" />
            <span>Open to jobs and work</span>
          </div>
          <a
            href="https://linkedin.com/in/brahamjotsingh"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c62828] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a61f1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c62828]"
          >
            <span className="flex size-4 items-center justify-center rounded-[3px] bg-white text-[10px] font-bold leading-none text-[#c62828]" aria-hidden="true">in</span>
            Connect on LinkedIn
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </article>
    </main>
  )
}

