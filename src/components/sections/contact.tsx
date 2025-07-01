import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 cyberpunk-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-accent">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Have questions or want to partner with us? We&apos;d love to hear from you.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-card/50 border border-primary/20 rounded-lg backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-primary" />
                    <a href="mailto:collab.geekroom@gmail.com" className="hover:text-primary transition-colors">
                    collab.geekroom@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card/50 border border-primary/20 rounded-lg backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-primary" />
                    <a href="tel:+919315842762" className="hover:text-primary transition-colors">
                    +91 9315842762
                    </a>
                </div>
                <div className="mt-8 flex justify-start gap-6">
                    <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-8 h-8" />
                    </Link>
                    <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-8 h-8" />
                    </Link>
                    <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="w-8 h-8" />
                    </Link>
                </div>
            </div>
            <form className="space-y-4 p-6 bg-card/50 border border-primary/20 rounded-lg backdrop-blur-sm">
                <Input type="text" placeholder="Your Name" aria-label="Your Name" />
                <Input type="email" placeholder="Your Email" aria-label="Your Email" />
                <Textarea placeholder="Your Message" aria-label="Your Message" rows={5} />
                <Button type="submit" className="w-full transition-transform hover:scale-105">Send Message</Button>
            </form>
        </div>
      </div>
    </section>
  );
}
