import { ArrowRight, Calendar, GraduationCap, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Timetable } from "@/components/home/Timetable";
import { ClassesOffered } from "@/components/home/ClassesOffered";
import { ImageSlider } from "@/components/home/ImageSlider";

const heroSlides = [
  { src: "/images/institute.png", alt: "EDEX students in class", caption: "Knowledge Talk Matters" },
  { src: "/images/teacher.png", alt: "EDEX live online lecture", caption: "Learn Anytime, Anywhere" },
  { src: "/images/image.png", alt: "EDEX exam success", caption: "Results That Speak" },
];

const stats = [
  { icon: Users, label: "Active Students", value: "12,000+" },
  { icon: GraduationCap, label: "Expert Teachers", value: "40+" },
  { icon: Star, label: "Average Rating", value: "4.9/5" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero — auto-playing slider */}
      <section className="relative">
        <ImageSlider slides={heroSlides} intervalMs={5000} />

        {/* CTAs moved below the image so they're not fighting the caption for space */}
        <div className="bg-surface-0 px-6 py-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/recordings" size="lg">
              View Classes <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#timetable" variant="outline" size="lg">
              <Calendar className="h-4 w-4" /> View Timetable
            </Button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-b border-surface-200 bg-surface-0">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-12 gap-y-4 px-6 py-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-bold leading-none text-ink-900">
                    {value}
                  </p>
                  <p className="text-xs text-surface-muted">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <section className="mx-auto max-w-6xl px-6 py-16">
      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl">
            Reach Your Potential with EDEX!
          </h2>
          
          <p className="text-base leading-relaxed text-[#475569]">
            Are you ready to elevate your learning experience and achieve your
            academic goals? Look no further—EDEX Education is here to guide you
            to success!
          </p>
          
          <p className="text-base leading-relaxed text-[#475569]">
            At EDEX, we offer expert-led online classes designed to empower
            students of all levels to excel in their studies. Our experienced
            instructors provide engaging, high-quality education tailored to
            help you reach your full potential.
          </p>
          
          <p className="text-base font-medium leading-relaxed text-[#1E293B]">
            Join us today and take the next step toward academic excellence!
          </p>
        </div>

        {/* Right Column: Image Display with Carousel Dots */}
        <div className="flex flex-col items-center space-y-4">
          {/* Card Frame */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg border border-slate-100">
            <img
              src="/path-to-your-syzygy-image.jpg"
              alt="Students outside SyZyGy institute"
              className="h-auto w-full object-cover"
            />
          </div>
          
          {/* Carousel Indicator Dots */}
          <div className="flex space-x-2">
            <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
            <span className="h-2 w-2 rounded-full bg-[#BFDBFE]" />
            <span className="h-2 w-2 rounded-full bg-[#BFDBFE]" />
          </div>
        </div>

      </div>
    </section>

      {/* Timetable */}
      <section id="timetable" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-600">
          This Week
        </p>
        <h2 className="mt-1 text-center text-3xl font-bold text-ink-900">
          Class Timetable
        </h2>
        <Timetable />
      </section>

      {/* Classes offered */}
      <section className="border-t border-surface-200 bg-surface-0 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-600">
            Our Classes
          </p>
          <h2 className="mt-1 text-center text-3xl font-bold text-ink-900">
            Classes We Offer
          </h2>
          <ClassesOffered />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-ink-900 px-8 py-14 text-center text-white">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Ready to start learning?
          </h3>
          <p className="max-w-md text-white/70">
            Create a free account to unlock recorded lessons, download
            books, and track your progress.
          </p>
          <div className="mt-2 flex gap-3">
            <Button href="/register" size="lg">
              Create Account
            </Button>
            <Button href="/login" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              Login
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}