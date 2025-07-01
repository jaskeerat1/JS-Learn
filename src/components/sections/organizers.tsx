import Image from 'next/image';

export default function Organizers() {
  return (
    <section id="organizers" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Organized By Geek Room GTBIT</h2>
            <div className="mt-4 w-24 h-1 bg-primary mx-auto md:mx-0 rounded-full"></div>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Geek Room GTBIT is a student-driven tech community empowering developers, designers, and innovators to build the future through mentorship and open collaboration.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Geek Room GTBIT Logo"
              width={300}
              height={300}
              className="rounded-full shadow-lg shadow-primary/20"
              data-ai-hint="community logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
