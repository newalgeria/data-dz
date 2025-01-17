import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DatasetCardProps {
  title: string;
  description: string;
  price: number;
  category: string;
}

export const DatasetCard = ({ title, description, price, category }: DatasetCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge variant="secondary">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">{price} crédits/requête</span>
        </div>
      </CardContent>
    </Card>
  );
};