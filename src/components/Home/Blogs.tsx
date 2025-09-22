"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  const blogs = [
    {
      title: "Web Design & Development",
      subtitle: "Design drives trust",
      desc: "Learn why design matters and how to fix an outdated site.",
      img: "/images/blog2.svg",
    },
    {
      title: "SEO & Marketing",
      subtitle: "Get found fast",
      desc: "Practical tips to climb search rankings.",
      img: "/images/blog2.svg",
    },
    {
      title: "Mobile Apps",
      subtitle: "Keep customers coming back",
      desc: "How mobile apps increase retention.",
      img: "/images/blog2.svg",
    },
    {
      title: "AI & Automation",
      subtitle: "Work smarter",
      desc: "Discover how AI tools can streamline your business.",
      img: "/images/blog2.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h4 className="text-sm font-semibold text-blue-600 mb-2">BLOGS</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Learn, Grow, And Stay Ahead
        </h2>
        <p className="text-gray-600 mb-12">
          Tips, guides, and trends to help your business perform better online.
        </p>

        {/* Carousel */}
        <Carousel
          opts={{ loop: true, align: "start" }}
       
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {blogs.map((blog, index) => (
              <CarouselItem key={index} className="md:basis-1/3 h-full">
                <Card className="relative h-full min-h-[420px] flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  {/* Image */}
                  <CardHeader className="p-0">
                    <div className="relative w-full h-48">
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="p-6 pb-16 text-center flex-1 flex flex-col items-center border-t border-gray-100">
                    <h3 className="text-base font-semibold text-gray-900">{blog.title}</h3>
                    <p className="text-sm font-medium text-blue-600 mb-2">{blog.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
                    <div className="mt-auto">
                      <Button
                        variant="default"
                        className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4"
                      >
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

        
        </Carousel>
      </div>
    </section>
  );
}
