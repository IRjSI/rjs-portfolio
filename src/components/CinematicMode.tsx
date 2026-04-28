import React, { useState } from 'react';
import { Film } from 'lucide-react';

const filmImages = [
  { name: 'Martin Scorsese', url: 'https://static01.nyt.com/images/2020/01/05/arts/05martin-scorsese3/05martin-scorsese3-videoSixteenByNineJumbo1600.jpg' },
  { name: 'Christopher Nolan', url: 'https://variety.com/wp-content/uploads/2020/12/Christopher_Nolan.png' },
  { name: 'David Fincher', url: 'https://www.artofthetitle.com/assets/sm/upload/zp/xu/iy/zw/df.jpg?k=d079ece891' },
  { name: 'Denis Villeneuve', url: 'https://images.mubicdn.net/images/cast_member/21817/cache-89757-1388535799/image-w856.jpg' },
  { name: 'Satyajit Ray', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQass9fgYTDreeP6HiWnxyRjpGCh8mPv4NL7g&s' },
  { name: 'Irrfan Khan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ86Zqy2jmaXil01RMfzQlKf63zdG7eN47apw&s' },
  { name: 'Cillian Murphy', url: 'https://preview.redd.it/first-film-tv-show-you-think-of-when-you-see-cillian-murphy-v0-exhvb7cr37we1.jpeg?auto=webp&s=3551d30ecd43c9f4388e9d9850788b38a4a2236f' },
  { name: 'Daniel Day-Lewis', url: 'https://i.guim.co.uk/img/media/a1caae40d62ebcd4be7e3baf6a169cad435bacd4/24_100_2927_1756/master/2927.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9b32da9e416d7236e3398de1ffca33ba' },
  { name: 'Christian Bale', url: 'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg' },
  { name: 'Matthew McConaughey', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPX5nuSHmBIqmiZvuwr4UKaFo2VtUHh2dv8Q&s' },
];

const CinematicMode: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  // Duplicate the array for a seamless infinite scroll loop
  const loopingImages = [...filmImages, ...filmImages];

  return (
    <>
      <button
        onClick={() => setIsActive(!isActive)}
        className={`fixed bottom-6 left-6 z-[100] p-2 rounded-md transition-all duration-500 ${isActive
          ? 'text-green-400 bg-green-500/10 border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]'
          : 'text-muted-foreground/30 hover:text-muted-foreground hover:bg-black/20'
          }`}
        title="Toggle Digital Archive"
      >
        <Film size={20} className={isActive ? "animate-pulse" : ""} />
      </button>

      {/* Vertical Film Strip on Side */}
      {isActive && (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[90] hidden xl:flex pointer-events-none">
          {/* Digital Frame */}
          <div className="relative h-[70vh] w-36 overflow-hidden border border-green-500/30 bg-black/90 rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.1)] flex flex-col digital-film-strip">

            {/* CRT Scanline overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-50"
              style={{
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 4px, 6px 100%',
              }}
            />

            <div className="flex flex-col gap-3 animate-[digitalScroll_25s_linear_infinite] p-2">
              {loopingImages.map((person, index) => (
                <div key={index} className="relative w-full aspect-square border border-green-500/40 overflow-hidden bg-black shrink-0 group digital-glitch-hover">
                  <img
                    src={person.url}
                    alt={person.name}
                    className="w-full h-full object-cover filter grayscale sepia-[1] hue-rotate-[70deg] contrast-[1.8] brightness-[0.7] opacity-90 mix-blend-screen"
                  />
                  {/* Digital noise overlay per image */}
                  <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-20 mix-blend-overlay"></div>

                  <div className="absolute bottom-1 left-0 right-0 text-center z-20 opacity-80">
                    <span className="bg-black/90 text-green-400 font-mono text-[8px] px-1.5 py-0.5 uppercase tracking-widest border border-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.5)]">
                      {person.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes digitalScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        /* Digital tracking marks instead of analog sprocket holes */
        .digital-film-strip::before, .digital-film-strip::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-image: repeating-linear-gradient(to bottom, rgba(34,197,94,0.4) 0, rgba(34,197,94,0.4) 4px, transparent 4px, transparent 12px);
          z-index: 20;
        }
        .digital-film-strip::before { left: 2px; }
        .digital-film-strip::after { right: 2px; }

        .digital-glitch-hover {
          animation: randomGlitch 6s infinite;
        }

        /* Randomly glitch the images to look corrupted */
        @keyframes randomGlitch {
          0%, 94%, 96%, 98%, 100% { filter: invert(0) hue-rotate(0deg); transform: translate(0, 0); }
          95% { filter: invert(1) hue-rotate(90deg) contrast(2); transform: translate(-3px, 1px); }
          97% { filter: invert(0) hue-rotate(-90deg) brightness(1.5); transform: translate(2px, -2px); }
          99% { filter: invert(1) hue-rotate(180deg); transform: translate(-1px, 2px); }
        }
      `}} />
    </>
  );
};

export default CinematicMode;
