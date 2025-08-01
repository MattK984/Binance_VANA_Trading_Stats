import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatSymbol } from '@/lib/utils';
import { formatCurrency } from '@/lib/utils';

interface PriceCardProps {
  symbol: string;
  price: number;
  midPrice: number; // Keep for potential future use, but we'll display 'price'
  quoteVolume: number;
  exchange: string;
}

const PriceCard: FC<PriceCardProps> = ({ symbol, price, quoteVolume, exchange }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{formatSymbol(symbol)} on {exchange}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">
                ${price.toLocaleString(undefined, {
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4
                })}
            </span>
            <span className="text-xs text-muted-foreground">(Last Traded)</span>
        </div>
        <p className="text-xs text-muted-foreground">
          24h Volume: {formatCurrency(quoteVolume)}
        </p>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
