interface MarketSummaryProps {
  indices: Array<{
    name: string;
    change: number;
  }>;
}

export function MarketSummary({ indices }: MarketSummaryProps) {
  return (
    <div className="space-y-4">
      {indices.map((index) => (
        <div key={index.name} className="flex justify-between">
          <span>{index.name}</span>
          <span className={index.change >= 0 ? "text-green-500" : "text-red-500"}>
            {index.change >= 0 ? "+" : ""}
            {index.change}%
          </span>
        </div>
      ))}
    </div>
  );
}