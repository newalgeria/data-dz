import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Eye } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface DatasetCardProps {
  title: string;
  description: string;
  organization: string;
  organizationLogo: string;
  keywords: string[];
  lastUpdate: string;
  downloads: number;
  views: number;
  price: number;
  category: string;
}

export const DatasetCard = ({
  title,
  description,
  organization,
  organizationLogo,
  keywords,
  lastUpdate,
  downloads,
  views,
  price,
  category
}: DatasetCardProps) => {
  return (
    <Card className="relative group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <BorderBeam 
        size={300} 
        duration={20} 
        colorFrom="#1a365d" 
        colorTo="#10b981"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={organizationLogo}
              alt={organization}
              className="w-8 h-8 mr-2 rounded-full"
            />
            <span className="text-sm text-gray-600">{organization}</span>
          </div>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((keyword) => (
            <Badge key={keyword} variant="outline" className="text-xs">
              {keyword}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {lastUpdate}
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center">
              <Download className="w-4 h-4 mr-1" />
              {downloads}
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {views}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">{price} crédits/requête</span>
        </div>
      </CardContent>
    </Card>
  );
};