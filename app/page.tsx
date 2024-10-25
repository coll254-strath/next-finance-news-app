"use client";

import { NavSidebar } from "@/components/nav-sidebar";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
];

const mockNews = [
  {
    id: 1,
    title: "Fed Signals Potential Rate Cuts in 2024",
    source: "Reuters",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Tech Stocks Rally on AI Optimism",
    source: "MarketWatch",
    time: "3 hours ago",
  },
  {
    id: 3,
    title: "Oil Prices Surge Amid Middle East Tensions",
    source: "Reuters",
    time: "4 hours ago",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <NavSidebar />
      <main className="flex-1 pl-16">
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Market overview and latest updates
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Market Performance</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Latest News</h3>
              <div className="space-y-4">
                {mockNews.map((item) => (
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
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Market Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>S&P 500</span>
                  <span className="text-green-500">+1.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>NASDAQ</span>
                  <span className="text-green-500">+1.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>DOW</span>
                  <span className="text-red-500">-0.3%</span>
                </div>
                <div className="flex justify-between">
                  <span>VIX</span>
                  <span className="text-red-500">-2.1%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}