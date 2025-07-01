const timelineEvents = [
  { time: 'Day 1 - 9:00 AM', title: 'Welcome & Opening Ceremony' },
  { time: 'Day 1 - 11:00 AM', title: 'Mentorship Round 1' },
  { time: 'Day 1 - 2:00 PM', title: 'Keynote Speaker Session' },
  { time: 'Day 1 - 10:00 PM', title: 'Midnight Coding & Chill Zone' },
  { time: 'Day 2 - 9:00 AM', title: 'Final Submissions Due' },
  { time: 'Day 2 - 11:00 AM', title: 'Judging & Closing Ceremony' },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-accent">Event Timeline</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Follow our action-packed schedule from start to finish.
          </p>
        </div>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-primary/30 transform md:-translate-x-1/2"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-8 pl-12 md:pl-0">
              <div className="md:flex md:justify-between md:items-center w-full">
                <div className={`md:w-5/12 ${index % 2 === 0 ? '' : 'md:order-2'}`}>
                  <div className={`p-4 bg-card/80 border border-primary/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-primary ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="text-primary font-semibold">{event.time}</p>
                    <h3 className="font-bold text-lg text-foreground">{event.title}</h3>
                  </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full ring-8 ring-background transform md:-translate-x-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                </div>
                <div className="md:w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
