import React from 'react';
import { useNavigate } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

const Collections = () => {
  const navigate = useNavigate();

  const handleReserve = () => {
    alert('Thank you for your interest. You have reserved a spot in the queue for the Monolith Series.');
  };

  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="pt-32 pb-huge">
        {/* Hero Header */}
        <RevealOnScroll>
          <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-huge">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-outline-variant/30 pb-xl gap-6">
              <h1 className="font-display-lg text-4xl md:text-6xl text-primary max-w-[42rem] leading-tight">
                Refined archives for the modern minimalist.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[24rem]">
                A curated selection of our seasonal journeys, exploring the intersection of architecture, movement, and material.
              </p>
            </div>
          </section>
        </RevealOnScroll>

        {/* Seasonal Archive Bento Grid */}
        <RevealOnScroll>
          <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-gutter mb-huge">
            <div className="grid grid-cols-12 gap-gutter h-auto md:h-[800px] space-y-gutter md:space-y-0">
              {/* Spring */}
              <div
                onClick={() => navigate('/shop')}
                className="col-span-12 md:col-span-8 relative overflow-hidden group transition-all duration-700 shadow-xs cursor-pointer min-h-[400px] md:min-h-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-103"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKWoyiaI-QSi6DzQ-qP6wuNOG-hxwRfONl5nyvfE0j7Y0yjcmnpTo7YD6ZdHbs0XZ6Zc9TNK_vmn7r2SJmwveBp9ff0-mo9iOc9lUI8gW24-Y7uORbOKqauAcaS3IPzC04eZJuYvofxDdLb2Gl_T-IqKe26GY4U-Y3DpsZXTzfockLVkI-1YWOxSyaXO8dHOLKvthA_Gk-MEP8mCeRrpXklRkKuBOoNal7hk-OoPW8Zyfo-zV3ZgiyqCoH6RDLfMqQ8JX9fLbhXjys')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40"></div>
                <div className="absolute bottom-xl left-xl md:bottom-huge md:left-huge text-white">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest block mb-xs">
                    Season 01
                  </span>
                  <h2 className="font-headline-lg text-3xl md:text-5xl mb-md">SPRING ARCHIVE</h2>
                  <button className="font-label-md text-label-md bg-white text-primary px-xl py-md hover:bg-primary hover:text-white transition-all cursor-pointer uppercase">
                    VIEW COLLECTION
                  </button>
                </div>
              </div>

              {/* Summer */}
              <div
                onClick={() => navigate('/shop')}
                className="col-span-12 md:col-span-4 relative overflow-hidden group transition-all duration-700 shadow-xs cursor-pointer min-h-[300px] md:min-h-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-103"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeRUT6d8KmmgjVWRTSzCIidhA7LMVsUqzWBkb6M64iN91_2FSuy749zyE11E2PmUwuFxGWKb5Fl6A1_CtCaNFUTiuhe2TtWJGmlbzrfN4bbhma9FJQw46gTbnetgC2j55ykaVU98u1g4XHk4nbVbT9K1HK36z-csb2vRrWFrEjvsaCBjwaXZqc67Dib97gNhGqtsvr_hKvvSAHlm_s5faQ4hUesFRqH1Vsq8I9i0vqSn3AcAclb97-faVtB0k1T89mlXJtoJFw4W-f')",
                  }}
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-lg left-lg text-white">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest block mb-xs">
                    Season 02
                  </span>
                  <h2 className="font-headline-md text-headline-md mb-md">SUMMER ARCHIVE</h2>
                  <span className="font-label-md text-label-md border-b border-white pb-1 inline-block">
                    EXPLORE
                  </span>
                </div>
              </div>

              {/* Autumn */}
              <div
                onClick={() => navigate('/shop')}
                className="col-span-12 md:col-span-4 relative overflow-hidden group transition-all duration-700 shadow-xs cursor-pointer min-h-[300px] md:min-h-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-103"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRbgrjcEIqT9S0YdpBTC0yhwrHmnqNmeyUcxtZymrc97hRDOWMll4ltT51GlSbYTUyPio8d5pAURu9ZpXWQxGQxUwpM1mcAeSfsUP-aSMAnztm41SrXc-2v0mmGwp6bOeGM55VUUulFSnpsmEgb99L638GJjwPzHcGhfKhx7Co2IPjJgqF_3B1uZ-Wo5bsirrMQTMCva5GRcUg6Q1_tGszwSLGceXtZj7IN3jof7UyWPmhIqTnhjFgplxhSeWK02S9zGopPPR4gy6c')",
                  }}
                />
                <div className="absolute bottom-lg left-lg text-white">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest block mb-xs">
                    Season 03
                  </span>
                  <h2 className="font-headline-md text-headline-md mb-md">AUTUMN ARCHIVE</h2>
                  <span className="font-label-md text-label-md border-b border-white pb-1 inline-block">
                    EXPLORE
                  </span>
                </div>
              </div>

              {/* Winter */}
              <div
                onClick={() => navigate('/shop')}
                className="col-span-12 md:col-span-8 relative overflow-hidden group transition-all duration-700 shadow-xs cursor-pointer min-h-[400px] md:min-h-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-103"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDawFGM-ta5oIkcPyFFjYvc4mhn0ZcGvJckV_lrtrhU6ShVVmCOBt5lxc2XHyFlYMzAUMulypUWYovcHtcONqLELNF9C8NhxbwdjQAuO16bpP3pG0vkf80OFcCQDM5GN86CRyNqFfbC1Quc5dq3f4XnPHLzAggtBwwhNmnROm_-oqYCuGU9o5pWvw1jR0Dge9QaRKjcoH_HOT5rAhqydqHB51izfD7rDhwG-t9BXn8RxpbdYQRRAbLKPHw_-N35pFbZvC1JtuM9GtZj')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40"></div>
                <div className="absolute bottom-xl left-xl md:bottom-huge md:left-huge text-white">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest block mb-xs">
                    Season 04
                  </span>
                  <h2 className="font-headline-lg text-3xl md:text-5xl mb-md">WINTER ARCHIVE</h2>
                  <button className="font-label-md text-label-md bg-white text-primary px-xl py-md hover:bg-primary hover:text-white transition-all cursor-pointer uppercase">
                    VIEW COLLECTION
                  </button>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Limited Edition Section */}
        <RevealOnScroll>
          <section className="bg-surface-container-lowest py-huge border-y border-outline-variant/30">
            <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-huge">
                <div className="w-full md:w-1/2 space-y-6">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-md block font-semibold">
                    Exclusive Drop
                  </span>
                  <h2 className="font-display-lg text-4xl md:text-5xl text-primary leading-tight">
                    THE MONOLITH SERIES
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    A limited edition capsule of 50 numbered pieces. Crafted from regenerative silk
                    and Italian architectural knit, the Monolith Series is an exploration of
                    permanence in an era of transience.
                  </p>
                  <div className="space-y-md border-t border-b border-outline-variant/30 py-6">
                    <div className="flex justify-between pb-sm">
                      <span className="font-label-md text-label-md text-primary font-medium">MATERIALS</span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Regenerative Silk &amp; Fine Knit
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-label-md text-label-md text-primary font-medium">EDITION</span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Numbered 1/50
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleReserve}
                    className="bg-primary text-white font-label-md text-label-md px-huge py-xl w-full md:w-auto hover:opacity-90 transition-all cursor-pointer uppercase tracking-widest"
                  >
                    RESERVE NOW
                  </button>
                </div>

                <div className="w-full md:w-1/2 relative">
                  <div className="aspect-[4/5] bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Regenerative silk swatch"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-E_19aY0oJ2qtIpUNUTDo9Hvmybx-5kOYAnj2aMz65cJBQLVMU8LPLPNflm31VvrjCtuN57804VO9wCXZw7yE9FqnDGasjZynrgH4kPvN5mn7hsM-TblVasyzonzJJo0Z3M4buEKevJMObE3ZgtTneBY2-jOxkQlJwaCalgBdO8O0WJ8wGzYjNdHtXYT0k3EMVYoE9jyuMUt7NjEaWdAMy5hAj8q-oYvHlWmlyMl7GRQe39uqx4XTJHfsRCCnfRLV-cioNlA-LeOc"
                    />
                  </div>
                  <div className="absolute -bottom-xl -right-xl w-48 h-64 bg-surface shadow-2xl hidden md:block border border-outline-variant/20">
                    <img
                      className="w-full h-full object-cover"
                      alt="Model in Monolith knit garment"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2XTLXMO752eOM7cPY1ApaI11zUejhAIm7piqrFOtOjpKNE4I0m23mtgXhPL-BwiKCUU7eqbtmRsFGzuqxuwQcNGbAw9F0hZVzJl8KJH3UaXa0y3EjFpkWTyJkk_n4_k4bMPWR1aPCrT-O5NWgu__xjfuqU2QvReUdlbUUxPtkaHnhGp-Q9yKcVUMqc8ztGWg0iXMVlZQWJXjvwncd_QYiFZaz5ABs1QpYNFGnbDTn4ZZxdP2WtI_GiwIOxhxlp8tR0yj4M1nMbuH6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Featured Looks */}
        <RevealOnScroll>
          <section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-xxl">
              <div>
                <h2 className="font-headline-lg text-headline-lg uppercase">FEATURED LOOKS</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
                  Visual narratives from our latest campaign.
                </p>
              </div>
              <div className="flex gap-md">
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-base">west</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-base">east</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {/* Look 01 */}
              <div onClick={() => navigate('/shop')} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-lg relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Look 01"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXukrIl0I0itjcy4MNDW6K1rkADEbYaBWV4vLH3FVW87K0s8Rlkt8kbb96hDG3JScLVgdaduFtfDPDTDxE9C6NJ7uJJ4WVlFztoiHb_lFEk_PzN4sAkfXuYoDY2B8G5jb4MI1sZgoc9OuxJ9CgIeXSFQm7fG3eyTbdLqlH_TjQ4sMqKIvCn6z1SYexcT9rmhAmKwx7q3W-JmJXBPIa1op09vTDrzPCpcDn7bruyCs443VLp2YL3S-OoLRTz_gvQdhJLyR66TjuixR-"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-label-sm text-label-sm font-semibold">LOOK 01</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-label-md text-label-md group-hover:text-secondary transition-colors font-semibold">
                      THE TAILORED ARCHIVE
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      SCULPTURAL BLAZER &amp; TROUSER
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm font-semibold">$1,250</span>
                </div>
              </div>

              {/* Look 02 */}
              <div onClick={() => navigate('/shop')} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-lg relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Look 02"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA51pBAE5GTtOwEA8NmYM_1amvBp8eX-IIKZoZb6ekXSkJZsUenRZeerDSwr4OnLSben5XCU2mqpPTPbyXED8rpGu6ip32Tea9w03aK7PYXh9mZJORnGSV5O-M65wYM-TTPmOSKI2zu11hKJluOELTmF6U3ZQwjN0MIMnN_3FEs4sDbGdc7xGCP9HrXMvKnldFhTz0NBzUqSS_ySkHe483uH21ZBfM7QDS5zH-OZo5UhUzVu-pMsWRWkSbTaFv09RV2us6awdpI8Xyg"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-label-sm text-label-sm font-semibold">LOOK 02</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-label-md text-label-md group-hover:text-secondary transition-colors font-semibold">
                      FLUIDITY STUDY
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      PLEATED SILK &amp; KNITWEAR
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm font-semibold">$890</span>
                </div>
              </div>

              {/* Look 03 */}
              <div onClick={() => navigate('/shop')} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-lg relative">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Look 03"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0cUX3jeq54_veoo4xujQPciv2-TWDe9EdG_U86Wc3slzla8SiR7MmXl9pR_lGfcseyGQmSyayWxM1CC_fYrEtWFuPUwU1sCXllvuw95IwFoJ1lonnJWM_Li4cQ-zYVsFo5xBttp7qXhxJpNzKmHZSo8zq5etM9nOd3BUZiei44BsvNUG4J_Bq_mGvXAVQVKa1ImWhNsU0zJr3N2k5VRDpY8is7m1q60g7A7kR1abM26U8CEIOBgOnYGRSG5CE5aiVZEijY_M5gAGp"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-label-sm text-label-sm font-semibold">LOOK 03</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-label-md text-label-md group-hover:text-secondary transition-colors font-semibold">
                      THE WINTER COAT
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      OBSIDIAN CASHMERE WRAP
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm font-semibold">$2,400</span>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Newsletter Subscription */}
        <RevealOnScroll>
          <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-huge">
            <div className="relative overflow-hidden py-huge px-xl bg-surface-container-high shadow-xs flex flex-col items-center text-center border border-outline-variant/30">
              <div className="relative z-10 max-w-[36rem] space-y-6">
                <h2 className="font-headline-lg text-headline-lg mb-md">JOIN THE CIRCLE</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
                  Be the first to know about new archives, exclusive drops, and editorial stories.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you for subscribing.');
                  }}
                  className="flex flex-col md:flex-row gap-0 border border-primary w-full group focus-within:ring-2 ring-secondary/20 transition-all bg-transparent"
                >
                  <input
                    className="flex-grow px-lg py-4 bg-transparent border-none focus:ring-0 font-label-md text-label-md placeholder:text-outline outline-none text-primary"
                    placeholder="YOUR EMAIL ADDRESS"
                    type="email"
                    required
                  />
                  <button
                    className="bg-primary text-white font-label-md text-label-md px-xl py-4 hover:bg-primary/90 transition-all uppercase tracking-widest cursor-pointer"
                    type="submit"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </div>
  );
};

export default Collections;
