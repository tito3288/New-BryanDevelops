import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <Navbar variant="dark" />

      {/* 
        ========================================================
        HERO SECTION
        ========================================================
      */}
      <HeroSection />

      {/* 
        ========================================================
        SERVICES SECTION (Light Mode + Light Glassmorphism)
        ========================================================
      */}
      <section id="services" className="relative py-32 bg-[#f8f9fa] overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full filter blur-[100px] opacity-70"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-purple-100 rounded-full filter blur-[100px] opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">Everything you need to grow.</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Expert solutions to keep your business running smoothly, ranking higher, and looking better than the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group h-full">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Web Design</h3>
              <p className="text-neutral-600 leading-relaxed">
                Powerful web design services that will out-perform your strongest competitors. Custom, tailored, and responsive.
              </p>
            </div>
            </FadeIn>

            <FadeIn delay={100}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group h-full">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">SEO Optimization</h3>
              <p className="text-neutral-600 leading-relaxed">
                Optimizing web designs to rank on the first page of Google. Get more traffic, leads, and potential customers.
              </p>
            </div>
            </FadeIn>

            <FadeIn delay={200}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group h-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Development</h3>
              <p className="text-neutral-600 leading-relaxed">
                Custom programming for the most complex functions you can think of. Bringing your biggest ideas to life.
              </p>
            </div>
            </FadeIn>

            <FadeIn delay={0}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group h-full">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Technical Support</h3>
              <p className="text-neutral-600 leading-relaxed">
                Expert troubleshooting, bug fixes, and IT solutions to keep your website running seamlessly.
              </p>
            </div>
            </FadeIn>

            <FadeIn delay={100}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">WP Maintenance</h3>
              <p className="text-neutral-600 leading-relaxed">
                Regular updates, performance optimization, backups, and expert troubleshooting to ensure hassle-free operation.
              </p>
            </div>
            </FadeIn>

            <FadeIn delay={200}>
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Branding</h3>
              <p className="text-neutral-600 leading-relaxed">
                A solid brand strategy, logo, and guidelines help you get recognized and build trust with your audience.
              </p>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 
        ========================================================
        PROJECTS / MY WORK SECTION
        ========================================================
      */}
      <ProjectsSection />

      <FAQSection />

      {/* 
        ========================================================
        PROCESS SECTION (Dark Mode + Glassmorphism)
        ========================================================
      */}
      <section className="relative py-32 bg-neutral-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[40rem] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[120px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How we make it happen.</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              A streamlined, four-step process to take your website from an idea to a high-performing digital asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0}>
            <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group h-full">
              <div className="text-5xl font-black text-white/10 absolute top-6 right-6 group-hover:text-white/20 transition-colors">01</div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Strategy</h3>
              <p className="text-neutral-400 leading-relaxed">
                I analyze your competition and target audience to uncover what works. Using insights to craft a custom strategy.
              </p>
            </div>
            </FadeIn>

            <FadeIn delay={100}>
            <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group h-full">
              <div className="text-5xl font-black text-white/10 absolute top-6 right-6 group-hover:text-white/20 transition-colors">02</div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Design</h3>
              <p className="text-neutral-400 leading-relaxed">
                From color schemes to layouts, bringing your brand to life with a custom design unique to your business.
              </p>
            </div>
            </FadeIn>

            <FadeIn delay={200}>
            <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group h-full">
              <div className="text-5xl font-black text-white/10 absolute top-6 right-6 group-hover:text-white/20 transition-colors">03</div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Develop</h3>
              <p className="text-neutral-400 leading-relaxed">
                Building your site on a dev server, giving you live access to see your vision come to life every step.
              </p>
            </div>
            </FadeIn>

            <FadeIn delay={300}>
            <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group h-full">
              <div className="text-5xl font-black text-white/10 absolute top-6 right-6 group-hover:text-white/20 transition-colors">04</div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Support</h3>
              <p className="text-neutral-400 leading-relaxed">
                Launch with confidence. I&apos;ll be here to ensure your website stays fast, secure, and running smoothly.
              </p>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-950 border-t border-white/10 py-12 text-center text-neutral-500">
        <p>&copy; 2026 Bryan Develops. All rights reserved.</p>
      </footer>
    </div>
  );
}
