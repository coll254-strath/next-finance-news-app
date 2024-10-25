"use client";

import { NavSidebar } from "@/components/nav-sidebar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  source: string;
  category: string;
  timestamp: string;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "Global Markets Rally on Strong Economic Data",
    content: "Markets across Asia and Europe surged today following better-than-expected economic data...",
    source: "Reuters",
    category: "Markets",
    timestamp: "2024-03-21T10:30:00Z"
  },
  {
    id: 2,
    title: "Tech Sector Leads Stock Market Gains",
    content: "Technology stocks continued their upward trajectory as artificial intelligence developments...",
    source: "MarketWatch",
    category: "Technology",
    timestamp: "2024-03-21T09:15:00Z"
  },
  // Add more mock news items as needed
];

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchNews = () => {
      setLoading(true);
      setTimeout(() => {
        setNews(mockNews);
        setLoading(false);
      }, 1000);
    };

    fetchNews();
    const interval = setInterval(fetchNews, 300000); // Poll every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <NavSidebar />
      <main className="flex-1 pl-16">
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Market News</h1>
            <p className="text-muted-foreground">
              Latest financial news and market updates
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All News</TabsTrigger>
              <TabsTrigger value="markets">Markets</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="economy">Economy</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="space-y-4">
                {loading ? (
                  <Card className="p-6">
                    <div className="animate-pulse space-y-4">
                      <div className="h-4 w-3/4 rounded bg-muted"></div>
                      <div className="h-4 w-1/2 rounded bg-muted"></div>
                    </div>
                  </Card>
                ) : (
                  news.map((item) => (
                    <Card key={item.id} className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                      <p className="mb-4 text-muted-foreground">
                        {item.content}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary">{item.source}</span>
                        <span className="text-muted-foreground">
                          {new Date(item.timestamp).toLocaleString()}
                        </span>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            {/* Add similar TabsContent for other categories */}
          </Tabs>
        </div>
      </main>
    </div>
  );
}