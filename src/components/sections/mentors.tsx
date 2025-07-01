import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const mentors = [
  {
    name: 'Jane Doe',
    role: 'AI/ML Expert, Google',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'woman portrait'
  },
  {
    name: 'John Smith',
    role: 'Cybersecurity Lead, Cloudflare',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'man portrait'
  },
  {
    name: 'Alex Johnson',
    role: 'Principal Engineer, Vercel',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'person portrait'
  },
  {
    name: 'Sarah Lee',
    role: 'Blockchain Developer, Coinbase',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'woman developer'
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-accent">Mentors & Speakers</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Learn from the best minds in the industry.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor) => (
            <Card key={mentor.name} className="group overflow-hidden rounded-lg border-primary/20 bg-card hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative">
                    <Image
                        src={mentor.image}
                        alt={`Portrait of ${mentor.name}`}
                        width={400}
                        height={400}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={mentor.aiHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-4 absolute bottom-0 left-0 right-0">
                  <h3 className="text-lg font-bold text-white">{mentor.name}</h3>
                  <p className="text-sm text-primary">{mentor.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
