'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Logo } from '../logo';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'Mentors', href: '#mentors' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      let currentSection = '';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = link.href;
        }
      });
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 border-b border-border/50 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Hack Odyssey Home">
            <div className="w-12 h-12"><Logo /></div>
            <span className="text-xl font-bold font-headline">Hack Odyssey</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === link.href ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex transition-transform hover:scale-105">Register Now</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10"><Logo /></div>
                    <span className="text-lg font-bold font-headline">Hack Odyssey</span>
                </Link>
                <nav className="grid gap-4">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium transition-colors hover:text-primary">
                    {link.name}
                    </Link>
                ))}
                </nav>
                <Button className="w-full transition-transform hover:scale-105">Register Now</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
