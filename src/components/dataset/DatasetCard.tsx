import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Eye } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Link } from "react-router-dom";
import { Dataset } from "@/interface/DatasetInterface";

export function DatasetCard(dataset: Dataset) {
  return (
    <Link to={`/dataset/${dataset.slug}`} className="w-full">
      <Card className="relative group hover:shadow-lg transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 h-full">
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
                src={dataset.provider.logo}
                alt={dataset.provider.name}
                className="w-8 h-8 mr-2 rounded-full"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {dataset.provider.name}
              </span>
            </div>
            <Badge variant="secondary">{dataset.category}</Badge>
          </div>
          <CardTitle className="text-lg font-semibold">
            {dataset.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            {dataset.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {dataset.keywords.map((keyword: string) => (
              <Badge
                key={keyword}
                variant="outline"
                className="text-xs dark:border-gray-600"
              >
                {keyword}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {dataset.fileInfo.lastUpdate}
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center">
                <Download className="w-4 h-4 mr-1" />
                {dataset.downloads}
              </span>
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {dataset.views}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-primary font-semibold dark:text-secondary">
              {dataset.price}✨/requête
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
