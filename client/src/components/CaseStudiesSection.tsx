import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export function CaseStudiesSection() {
  const latestBlogs = [...blogs]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 3);

  return (
    <section
      id="resources"
      className="py-20 bg-background"
      data-testid="section-case-studies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            data-testid="text-case-studies-heading"
          >
            Success Stories & <span className="text-primary">Insights</span>
          </h2>

          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-case-studies-description"
          >
            Real results and insights that help businesses grow smarter with
            MQL Experts.
          </p>
        </div>

        {/* Latest 3 Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestBlogs.map((blog, index) => (
            <Card
              key={blog.slug}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-xl cursor-pointer border-card-border"
              data-testid={`card-case-study-${index}`}
            >
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={typeof blog.title === 'string' ? blog.title : 'Blog image'}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`img-case-study-${index}`}
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <Badge
                  variant="secondary"
                  className="mb-3 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {blog.category}
                </Badge>

                <h3
                  className="text-xl font-semibold text-foreground mb-2 line-clamp-2"
                  data-testid={`text-case-study-title-${index}`}
                >
                  {blog.title}
                </h3>

                <p
                  className="text-muted-foreground line-clamp-3"
                  data-testid={`text-case-study-excerpt-${index}`}
                >
                  {blog.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="px-8"
            data-testid="button-view-insights"
            onClick={() => {
              window.location.href = "/blogs";
            }}
          >
            View All Insights
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
