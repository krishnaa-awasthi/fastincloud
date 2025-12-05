import { useState } from "react";
import { blogs, type Blog } from "@/data/blogs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";

export default function BlogsPage() {
  const [openBlog, setOpenBlog] = useState<Blog | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleBookDemo = () => {
    setIsDemoModalOpen(true);
    console.log("TODO: Open Request Quote Modal");
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar onBookDemo={handleBookDemo} />

      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              All <span className="text-primary">Insights</span> & Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Explore expert insights on B2B data, lead generation, sales intelligence,
              and growth strategy.
            </p>
          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.slug}
                className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-xl cursor-pointer border-card-border"
                onClick={() => setOpenBlog(blog)}
              >
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.image}
                      alt={typeof blog.title === "string" ? blog.title : ""}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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

                  <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {blog.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG VIEWER MODAL */}
      <Dialog open={!!openBlog} onOpenChange={(v) => !v && setOpenBlog(null)}>
        <DialogContent className="max-h-[80vh] overflow-y-auto bg-white text-black border border-gray-200 rounded-xl shadow-xl blog-scrollbar">
          {openBlog && (
            <>
              <DialogHeader>
                <DialogTitle className="text-black leading-tight text-2xl">
                  {openBlog.title}
                </DialogTitle>
                <p className="text-sm text-gray-500 mt-1">
                  {openBlog.date} — {openBlog.category}
                </p>
              </DialogHeader>

              <div className="mt-4">
                <img
                  src={openBlog.image}
                  alt={typeof openBlog.title === "string" ? openBlog.title : ""}
                  className="w-full rounded-lg mb-6 shadow"
                />
                <div className="prose prose-neutral max-w-none">
                  {openBlog.content}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
