import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Puzzle, Lightbulb, GraduationCap, Target } from 'lucide-react';

const visionItems = [
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: 'Innovation',
    description: 'Drive progress by tackling challenges with cutting-edge solutions.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Collaboration',
    description: 'Unite diverse minds to build stronger, more impactful projects.',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: 'Mentorship',
    description: 'Gain insights and guidance from seasoned industry experts.',
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Impact',
    description: 'Create meaningful solutions that address real-world problems.',
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-accent">Our Vision</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            We aim to create an environment that inspires the next generation of tech pioneers.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {visionItems.map((item, index) => (
            <Card key={index} className="bg-card/80 border-primary/20 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
              <CardHeader className="flex flex-col items-center text-center pb-4">
                <div className="mb-4 p-3 rounded-full bg-primary/10">{item.icon}</div>
                <CardTitle className="font-headline text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground pt-0">
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
