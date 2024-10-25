interface NewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
}

interface NewsFeedProps {
  news: NewsItem[];
}

export function NewsFeed({ news }: NewsFeedProps) {
  return (
    <div className="space-y-4">
      {news.map((item) => (
        <div key={item.id} className="border-b pb-4 last:border-0">
          <h4 className="font-medium">{item.title}</h4>
          <div className="mt-1 flex text-sm text-muted-foreground">
            <span>{item.source}</span>
            <span className="mx-2">•</span>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}