import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PRIVACY_ARTICLES } from './privacyPolicyArticles';
import bgImage from '../assets/image 2924.png';

export function PrivacyPolicyPage() {
  const [search, setSearch] = useState('');
  const [activeId, setActiveId] = useState<string>('article-1');

  const visibleArticles = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return PRIVACY_ARTICLES;
    return PRIVACY_ARTICLES.filter(
      (a) =>
        a.navLabel.toLowerCase().includes(q) ||
        a.cardTitle.toLowerCase().includes(q)
    );
  }, [search]);

  const scrollToArticle = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F2F4F7]">
      <section className="relative overflow-hidden bg-primary-black">
        <Header variant="light" />

        <div className="relative flex min-h-[25vh] flex-col items-center justify-center px-8 pb-20 pt-32 text-center md:min-h-[25vh] md:pb-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 z-0">
            <img src={bgImage} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-primary-black/55" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-white/65 md:text-base">Last Updated: 2026</p>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-10 md:px-8 md:py-14 lg:px-[110px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
          <aside className="lg:col-span-4">
            <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:z-20 lg:grid lg:max-h-[calc(100vh-7rem)] lg:min-h-0 lg:grid-rows-[auto_auto_minmax(0,1fr)] lg:gap-4">
              <div className="relative w-full shrink-0 bg-[#F2F4F7]">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for any topics or questions"
                  className="w-full rounded-2xl border border-gray-200/90 bg-white py-3.5 pl-5 pr-12 text-sm text-primary-black shadow-none placeholder:text-gray-400 outline-none focus:border-gray-300 focus:ring-0"
                  aria-label="Search privacy policy"
                />
                <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" strokeWidth={2} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Contents</p>

              <nav
                className="flex min-h-0 flex-col gap-1 overflow-visible pr-1 lg:overflow-y-auto privacy-scrollbar"
                aria-label="Table of contents"
              >
                {visibleArticles.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => scrollToArticle(a.id)}
                    className={`w-full rounded-lg px-1 py-2.5 text-left text-sm transition-colors ${
                      activeId === a.id
                        ? 'font-bold text-primary-black'
                        : 'font-normal text-gray-600 hover:text-primary-black'
                    }`}
                  >
                    {a.navLabel}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex flex-col gap-6 lg:col-span-8">
            {visibleArticles.length === 0 ? (
              <p className="rounded-3xl bg-white p-8 text-sm text-gray-600 shadow-none md:p-10">No sections match your search.</p>
            ) : (
              visibleArticles.map((a) => (
                <article
                  key={a.id}
                  id={a.id}
                  className="scroll-mt-28 rounded-3xl bg-white p-8 shadow-none md:p-10"
                >
                  <h2 className="text-lg font-bold text-primary-black md:text-xl">{a.cardTitle}</h2>
                  <div className="mt-6">{a.content}</div>
                </article>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
