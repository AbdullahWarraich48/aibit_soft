// "use client";

// import * as React from "react";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carouse";
// import Image from "next/image";

// export default function TeamSection() {
//   const team = [
//     {
//       name: "Dr. Maya Chen",
//       role: "Research & Strategy (PhD)",
//       desc: "Combines human-centered research with data analytics to shape product direction.",
//       img: "/images/maya.jpg", // replace with actual image path
//     },
//     {
//       name: "Sarah Malik",
//       role: "Growth Strategist",
//       desc: "Designs data-driven roadmaps to scale products and capture new markets.",
//       img: "/images/sarah.jpg",
//     },
//     {
//       name: "Daniel Reyes",
//       role: "Lead Software Engineer",
//       desc: "Architects scalable systems and ensures clean, maintainable code.",
//       img: "/images/daniel.jpg",
//     },
//   ];

//   return (
//     <section className="py-16 bg-blue-50">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Header */}
//         <h4 className="text-sm font-semibold text-blue-600 mb-2">OUR TEAM</h4>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//           Expertise You Can Trust
//         </h2>
//         <p className="text-gray-600 mb-12">
//           PhD scholars, business experts, and technology professionals collaborating to deliver excellence.
//         </p>

//         {/* Carousel */}
//         <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-5xl mx-auto">
//           <CarouselContent className="flex">
//             {team.map((member, index) => (
//               <CarouselItem key={index} className="md:basis-1/3">
//                 <Card className="overflow-hidden shadow-md border border-gray-200">
//                   <CardHeader className="p-0">
//                     <div className="relative w-full h-60">
//                       <Image
//                         src={member.img}
//                         alt={member.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </CardHeader>
//                   <CardContent className="p-6 text-left">
//                     <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
//                     <p className="text-sm font-medium text-blue-600 mb-2">{member.role}</p>
//                     <p className="text-gray-600 text-sm">{member.desc}</p>
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {/* Navigation arrows */}
//           <CarouselPrevious className="left-0" />
//           <CarouselNext className="right-0" />
//         </Carousel>
//       </div>
//     </section>
//   );
// }
