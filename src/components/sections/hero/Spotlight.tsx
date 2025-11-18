import React from "react";

// --- 5. "TALENT SPOTLIGHT" COMPONENT ---
const Spotlight = () => {
  const talents = [
    { name: 'ALEX RIVERS', role: 'MUSIC PRODUCER', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60' },
    { name: 'MAYA CHEN', role: 'VISUAL ARTIST', desc: 'Contemporary abstract painter', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=60' },
    { name: 'JORDAN BLAKE', role: 'POET & WRITER', img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60' },
    { name: 'SAM TORRES', role: 'PERFORMANCE ARTIST', desc: 'Stage innovator', img: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600&auto=format&fit=crop&q=60' },
  ]
  return (
    <section className="py-24 px-[6%]">
      <h2 className="text-5xl font-extrabold mb-16 -tracking-wide text-center">
        TALENT{' '}
        <span className="bg-gradient-to-r from-un-purple via-un-blue to-un-teal bg-clip-text text-transparent">
          SPOTLIGHT
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {talents.map((talent, index) => (
          <div
            key={talent.name}
            // 1. Added 'group' class here. This lets children react when the parent is hovered.
            className="group relative min-h-[450px] rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-400 ease-in-out hover:scale-[1.02] opacity-0 animate-fadeInUp"
            style={{ 
              backgroundImage: `url('${talent.img}')`,
              animationDelay: `${(index % 2 + 1) * 0.1}s` 
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
              <h3 className="text-3xl font-bold mb-1 text-white">{talent.name}</h3>
              <p className="text-base font-bold text-un-teal uppercase tracking-wider mb-2">{talent.role}</p>
              
              {/* Description (Optional) */}
              {talent.desc && <p className="text-un-text-gray-light text-sm mb-4 max-w-xs">{talent.desc}</p>}

              {/* 2. The Link: Hidden by default, visible on group-hover */}
              <div className="overflow-hidden h-10"> {/* Container to mask the slide up */}
                <a 
                  href="#" 
                  className="inline-block text-sm font-bold text-un-purple transform translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:text-un-blue"
                >
                  VIEW PROFILE →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};
export default Spotlight;