import { Rocket, Users, Lightbulb, Link as LinkIcon, Code, HeartHandshake } from 'lucide-react';

const benefits = [
  { icon: <Rocket className="w-8 h-8" />, text: 'Brand Exposure' },
  { icon: <Users className="w-8 h-8" />, text: 'Access to Top Talent' },
  { icon: <Lightbulb className="w-8 h-8" />, text: 'Innovation Support' },
  { icon: <LinkIcon className="w-8 h-8" />, text: 'Custom Engagement' },
  { icon: <Code className="w-8 h-8" />, text: 'Product Adoption' },
  { icon: <HeartHandshake className="w-8 h-8" />, text: 'Community Goodwill' },
];

export default function WhySponsor() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-accent">Why Sponsor Hack Odyssey?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Connect with the brightest minds and position your brand at the forefront of technology.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors border border-transparent hover:border-primary/50">
            <div className="p-3 bg-primary/10 text-primary rounded-full">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{benefit.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
