'use client';

import { Highlight } from "@/components/build_manifesto/highlight";
import BuildCard from "@/components/build_manifesto/build_card";
import { builds } from "@/constants";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Setup, Toronto } from "@/assets";
import Image from "next/image";

export default function BuildPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      
      <div className="w-full max-w-5xl font-mono text-sm">
        <div className="prose prose-lg max-w-none">
          
          <div className="relative inline-block mb-12 group">
            <h1 className="text-4xl font-bold leading-tight z-10 relative">
              📌 Why I build
            </h1>

            <svg
              className="absolute -bottom-1 left-0 w-full h-4 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1 15 C40 20, 160 0, 199 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <svg
              className="absolute -bottom-2.5 left-0 w-full h-4 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1 15 C40 20, 160 0, 199 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="text-lg leading-relaxed mb-6 max-w-2xl">
            {`One of my favourite questions to ask literally anyone is: `}
            <Highlight className="font-bold">
              {"Do you work to live or live to work?"}
            </Highlight>
            I used to think that I was content building for someone else; for school, for work, for finding a job. But, {`there's`} a certain kind of beauty in finding an <Highlight>intrinsic motivation</Highlight> to want to wake up every morning, looking forward to building what I love.
          </p>

          <p className="text-lg leading-relaxed mb-6 max-w-2xl">
            And so, I think I capture my reason here: <Highlight>I live to work, because I love my work.</Highlight> Not only what I produce at school, at work, for jobs, but what I create when I pour my heart and energy into the code I write.
          </p>

          <p className="text-lg leading-relaxed mb-16 max-w-2xl">
            So to answer the question,
            <br />
            <br />
            I build because <Highlight>I love it.</Highlight>
            <br />
            I build to make something <Highlight>cool.</Highlight>
            <br />
            Most importantly, I build to have <Highlight>{`fun :)`}</Highlight>
          </p>

          <div className="relative inline-block mb-12 group">
            <h1 className="text-4xl font-bold leading-tight z-10 relative">
            💬 What I build
            </h1>

            <svg
              className="absolute -bottom-1 left-0 w-full h-4 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1 15 C40 20, 160 0, 199 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <svg
              className="absolute -bottom-2.5 left-0 w-full h-4 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1 15 C40 20, 160 0, 199 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      <div className="w-full flex flex-col gap-6 max-w-5xl">
        {builds.map((build) => (
          <BuildCard key={build.title} {...build} />
        ))}
      </div>

      <div className="mt-8 text-left text-neutral-600 max-w-5xl relative">
      <p 
      onClick={() => window.open("https://www.sarinali.me/projects", '_blank')}
      className="inline-block text-xl cursor-pointer transition-all duration-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-500 hover:after:w-full">
        hungry for more? check out my archive @ sarinali.me
      </p>

    </div>
          <div className="relative mb-12 group mt-12">
            <h1 className="text-4xl font-bold leading-tight z-10 relative">
            📍 Where I build
            </h1>

            <svg
              className="absolute -bottom-1 left-0 w-full h-4 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1 15 C40 20, 160 0, 199 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <svg
              className="absolute -bottom-2.5 left-0 w-full h-4 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1 15 C40 20, 160 0, 199 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
      
      <Card className="inline-block">
        <CardContent className="flex gap-x-2">
        <Image
          className="p-2 border border-neutral-800 rounded-xl"
            src={Setup}
            alt={"oops"}
            width={300}
            height={300}

          />
          <Image
          className="p-2 border border-neutral-800 rounded-xl"
            src={Toronto}
            alt={"oops"}
            width={300}
            height={300}

          />
        </CardContent>
        <CardDescription className="px-6 pt-4">{`I'm located in the vibrant city of Toronto, ON, Canada 🇨🇦! Come say hi to me :)`}</CardDescription>
      </Card>
      </div>
    </main>
  );
}
