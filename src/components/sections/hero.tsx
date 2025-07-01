import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-dvh min-h-[700px] flex items-center justify-center overflow-hidden cyberpunk-bg">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      
      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        <div className="w-32 h-32 md:w-48 md:h-48 mb-6">
            <Logo />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter bg-gradient-to-br from-gray-50 via-gray-300 to-primary text-transparent bg-clip-text">
          Hack Odyssey
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Code. Collaborate. Conquer.
        </p>
        <div className="mt-8">
          <Button size="lg" className="transition-transform duration-300 hover:scale-105">
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
}
