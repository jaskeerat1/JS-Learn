import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Title Sponsor',
    price: 'Contact Us',
    features: ['Keynote access', 'Hiring booth', 'Branding on T-shirts', 'Custom challenge tracks', 'Main stage branding'],
    isFeatured: true,
  },
  {
    name: 'Platinum',
    price: '$10,000',
    features: ['Hiring booth', 'Branding on T-shirts', 'Custom challenge tracks'],
    isFeatured: false,
  },
  {
    name: 'Gold',
    price: '$5,000',
    features: ['Branding on T-shirts', 'Logo on website'],
    isFeatured: false,
  },
  {
    name: 'Silver',
    price: '$2,500',
    features: ['Logo on website', 'Social media shoutout'],
    isFeatured: false,
  },
];

export default function SponsorshipTiers() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-accent">Sponsorship Tiers</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Choose a tier that aligns with your goals and budget.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {tiers.map((tier) => (
          <Card key={tier.name} className={`flex flex-col bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${tier.isFeatured ? 'border-2 border-primary' : 'border-primary/20 hover:border-primary'}`}>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-headline text-accent">{tier.name}</CardTitle>
              <CardDescription className="text-4xl font-bold text-foreground mt-2">{tier.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between pt-4">
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto" variant={tier.isFeatured ? 'default' : 'outline'}>
                Become a Sponsor
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
