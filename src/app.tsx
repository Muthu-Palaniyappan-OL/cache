import publications from "./publications";

// prettier-ignore
export function App() {
  const years = [...new Set(publications.map(publication => (new Date(publication.date)).getFullYear()))].sort().reverse()

  return (
    <div class="font-Azonix">
      <Nav />
      {years.map(year => {
        return <div class="p-2">
          <p class="m-2">{year}</p>
            <div class="flex flex-row flex-wrap">
            {publications.filter(publication => (new Date(publication.date).getFullYear() == year)).sort((a, b) => (new Date(b.date)).getMonth() - (new Date(a.date)).getMonth()).map(publication => {
              return <div class="rounded flex flex-col m-2">
                {/* @ts-ignore */}
                <div class="_df_thumb df-book-cover m-0" id="flipbook_example" source={publication.file} thumb={publication.cover}></div>
                <div class="pt-2">
                  <p class="text-xs">{publication.name}</p>
                  <p class="text-sm">{(new Date(publication.date).toLocaleDateString())}</p>
                </div>
              </div>
            })}
            </div>
          </div>
      })}
    </div>
  );
}

function Nav() {
  return (
    <div class="p-2 bg-slate-400">
      <p>Cache 2024</p>
    </div>
  );
}
