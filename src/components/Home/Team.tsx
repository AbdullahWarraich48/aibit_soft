"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      slides: [
        {
          name: "Dr. Maya Chen",
          role: "Research & Strategy (PhD)",
          desc: "Combines human-centered research with data analytics to shape product direction.",
          image: "/images/Director1.svg",
        },
        {
          name: "Dr. Maya Chen",
          role: "UX Research Lead",
          desc: "Leads discovery, usability studies, and synthesis to align teams on insights.",
          //    image: "/images/maya2.jpg",
          image: "/images/Director2.svg",
        },
      ],
    },
    {
      slides: [
        {
          name: "Sarah Malik",
          role: "Growth Strategist",
          desc: "Designs data-driven roadmaps to scale products and capture new markets.",
          image: "/images/Director2.svg",
        },
        {
          name: "Sarah Malik",
          role: "Lifecycle Marketing",
          desc: "Owns activation, retention, and monetization experiments end-to-end.",
          image: "/images/Director3.svg",
        },
        {
          name: "Sarah Malik",
          role: "Revenue Operations",
          desc: "Builds funnels and analytics to uncover growth opportunities.",
          image: "/images/Director1.svg",            
        },
      ],
    },
    {
      slides: [
        {
          name: "Daniel Reyes",
          role: "Lead Software Engineer",
          desc: "Architects scalable systems and ensures clean, maintainable code.",
          image: "/images/Director1.svg",
        },
        {
          name: "Daniel Reyes",
          role: "Platform Engineer",
          desc: "Focuses on reliability, CI/CD, and developer experience.",
          image: "/images/Director2.svg",
        },
      ],
    },
    {
      slides: [
        {
          name: "Aisha Khan",
          role: "Product Designer",
          desc: "Creates intuitive interfaces and design systems focused on accessibility.",
          image: "/images/Director.jpg",
        },
        {
          name: "Aisha Khan",
          role: "Design Systems",
          desc: "Delivers scalable UI kits, tokens, and documentation.",
          image: "/images/Director.jpg",
        },
      ],
    },
    {
      slides: [
        {
          name: "Omar Patel",
          role: "Full-Stack Engineer",
          desc: "Builds robust APIs and performant UIs with modern tooling.",
          image: "/images/Director1.svg",
        },
        {
          name: "Omar Patel",
          role: "App Engineer",
          desc: "Scales app architecture with strong typing and tests.",
          image: "/images/Director2.svg",
        },
      ],
    },
    {
      slides: [
        {
          name: "Lina Gomez",
          role: "Data Scientist",
          desc: "Turns data into actionable insights with ML and experimentation.",
          image: "/images/Director1.svg",
        },
        {
          name: "Lina Gomez",
          role: "Analytics Lead",
          desc: "Partners with product to define metrics and drive outcomes.",
          image: "/images/Director2.svg",
        },
      ],
    },
    {
      slides: [
        {
          name: "Noah Bennett",
          role: "Marketing Lead",
          desc: "Drives acquisition and retention through multichannel strategies.",
          image: "/images/social.svg",
        },
        {
          name: "Noah Bennett",
          role: "Performance Marketing",
          desc: "Optimizes spend across paid channels for sustainable growth.",
          image: "/images/Digitalmarketing.svg",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h4 className="text-sm font-semibold text-blue-600 mb-2">OUR TEAM</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Expertise You Can Trust
        </h2>
        <p className="text-gray-600 mb-12">
          PhD scholars, business experts, and technology professionals collaborating to deliver excellence.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.slice(0, 3).map((member, index) => (
            <div key={index} className="h-full">
              <MemberCard slides={member.slides} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

type MemberSlide = {
  name: string;
  role: string;
  desc: string;
  image: string;
};

function MemberCard({ slides }: { slides: MemberSlide[] }) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const current = slides[activeIndex] ?? slides[0];

  return (
    <Card className="h-full flex flex-col overflow-hidden shadow-md border border-gray-200">
      <CardHeader className="p-0">
        <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
          <CarouselContent>
            {slides.map((s, i) => (
              <CarouselItem key={i}>
                <div className="relative w-80 h-60 mx-auto rounded-md overflow-hidden mt-4">
                  <Image src={s.image} alt={s.name} fill className="object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" className="left-3 top-1/2 -translate-y-1/2 h-8 w-8 text-white">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </CarouselPrevious>
          <CarouselNext variant="ghost" className="right-3 top-1/2 -translate-y-1/2 h-8 w-8 text-white">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </CarouselNext>
        </Carousel>
      </CardHeader>
      <CardContent className="p-6 text-left flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900">{current.name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-2">{current.role}</p>
        <p className="text-gray-600 text-sm">{current.desc}</p>
      </CardContent>
    </Card>
  );
}
