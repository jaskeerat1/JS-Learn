import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-accent">About Hack Odyssey</h2>
            <div className="w-24 h-1 bg-primary rounded-full"></div>
            <p className="text-muted-foreground md:text-lg">
              Hack Odyssey, hosted by Geek Room GTBIT, is a premier student-led hackathon that fosters innovation, collaboration, and mentorship for future tech leaders. It’s more than a competition—it’s a community-driven tech movement where creativity meets technology to solve real-world problems.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Join us for 36 hours of intense coding, learning, and networking with peers and industry experts.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Hackathon participants collaborating"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-2 border-primary/20"
              data-ai-hint="collaboration coding"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
