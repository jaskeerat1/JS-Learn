import Link from 'next/link';
import { Flame, Linkedin, Github, Instagram } from 'lucide-react';
import { Logo } from '../logo';

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 py-8 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center md:items-start gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10"><Logo /></div>
                    <span className="text-xl font-bold font-headline">Hack Odyssey</span>
                </Link>
                <p className="text-sm text-muted-foreground text-center md:text-left">Code. Collaborate. Conquer.</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <h4 className="font-semibold text-accent">Quick Links</h4>
                <div className="flex gap-4 md:gap-6">
                    <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
                    <Link href="#timeline" className="text-sm text-muted-foreground hover:text-primary transition-colors">Timeline</Link>
                    <Link href="#sponsors" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sponsors</Link>
                    <Link href="#mentors" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mentors</Link>
                    <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
                <h4 className="font-semibold text-accent">Follow Us</h4>
                <div className="flex gap-4">
                    <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-6 h-6" />
                    </Link>
                    <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </div>
        <div className="mt-8 border-t border-primary/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
            © 2025 Hack Odyssey – All Rights Reserved.
            </p>
            <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
