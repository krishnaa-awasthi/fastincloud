import { Mail, Globe } from "lucide-react";
import blogimage1 from "@assets/generated_images/Case_study_sales_image_4ab08c73.png";

export interface Blog {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: JSX.Element;
}

export const blogs: Blog[] = [
  {
    slug: "accurate-customised-b2b-data-2025",
    title: "Why Accurate and Customised B2B Data Is Essential for Business Growth in 2025",
    date: "2025-02-15",
    category: "B2B Data Intelligence",
    image: blogimage1,
    excerpt:
      "Accurate and customised B2B data is now the backbone of every successful sales and marketing strategy. Here’s why businesses in 2025 are switching to smart, verified databases.",
    content: (
      <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
        <p>
          In today’s competitive business environment, companies rely heavily on
          accurate and high-quality B2B data to drive sales, marketing, and
          customer outreach. Outdated, incomplete, or irrelevant data can
          significantly reduce campaign performance and increase operational
          costs. This is why businesses across the globe are investing in
          customised B2B databases that deliver real results.
        </p>

        <p>
          At <span className="font-semibold">MQL Experts</span>, we specialise
          in providing freshly profiled and verified B2B corporate data with
          over <span className="font-semibold">90% accuracy</span>. Unlike
          pre-built or static databases, our Smart B2B Data Solution ensures
          every record is updated, validated, and aligned with your ideal
          customer profile. Whether you’re targeting specific industries, job
          titles, geographies, or company sizes, we deliver a tailor-made
          business database that strengthens your acquisition strategy.
        </p>

        <p>
          Our global B2B database services are designed to boost lead
          generation, demand generation, appointment setting, ABM campaigns, and
          event marketing. With a pay-as-you-go model, businesses only pay for
          the data they need — making it a highly cost-effective B2B lead
          generation solution for startups, SMEs, and enterprises.
        </p>

        <p>
          Since 2015, MQL Experts has helped organisations worldwide enhance
          outreach, improve email deliverability, and achieve better conversions
          through high-quality business intelligence.
        </p>

        <p>
          If you’re looking for reliable, accurate, and customised B2B data to
          accelerate your growth, MQL Experts is your trusted partner.
        </p>

        <div className="space-y-2 pt-3">
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>contact@mqlexperts.com</span>
          </p>
          <p className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            <span>www.mqlexperts.com</span>
          </p>
        </div>
      </div>
    ),
  },
];
