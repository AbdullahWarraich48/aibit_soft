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
          image: "/images/Director.jpg",
        },
        {
          name: "Dr. Maya Chen",
          role: "UX Research Lead",
          desc: "Leads discovery, usability studies, and synthesis to align teams on insights.",
          //    image: "/images/maya2.jpg",
          image: "/images/Director.jpg",
        },
      ],
    },
    {
      slides: [
        {
          name: "Sarah Malik",
          role: "Growth Strategist",
          desc: "Designs data-driven roadmaps to scale products and capture new markets.",
          image: "/images/Director.jpg",
        },
        {
          name: "Sarah Malik",
          role: "Lifecycle Marketing",
          desc: "Owns activation, retention, and monetization experiments end-to-end.",
          image: "/images/Director.jpg",
        },
        {
          name: "Sarah Malik",
          role: "Revenue Operations",
          desc: "Builds funnels and analytics to uncover growth opportunities.",
          image: "/images/Director.jpg",            
        },
      ],
    },
    {
      slides: [
        {
          name: "Daniel Reyes",
          role: "Lead Software Engineer",
          desc: "Architects scalable systems and ensures clean, maintainable code.",
          image: "/images/daniel1.jpg",
        },
        {
          name: "Daniel Reyes",
          role: "Platform Engineer",
          desc: "Focuses on reliability, CI/CD, and developer experience.",
          image: "/images/daniel2.jpg",
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
          image: "/images/web.svg",
        },
        {
          name: "Omar Patel",
          role: "App Engineer",
          desc: "Scales app architecture with strong typing and tests.",
          image: "/images/app.svg",
        },
      ],
    },
    {
      slides: [
        {
          name: "Lina Gomez",
          role: "Data Scientist",
          desc: "Turns data into actionable insights with ML and experimentation.",
          image: "/images/Ai.svg",
        },
        {
          name: "Lina Gomez",
          role: "Analytics Lead",
          desc: "Partners with product to define metrics and drive outcomes.",
          image: "/images/growth.svg",
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
                <div className="relative w-full h-60">
                  <Image src={s.image} alt={s.name} fill className="object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
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
