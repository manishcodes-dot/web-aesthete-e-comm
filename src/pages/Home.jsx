import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

const Home = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-100 ease-out"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvR_JAiMR2M8i50eoN9LbVOH6kcyFdMmIOkiKBmVn1Exl9Nf6NVal1fCmB_lYE14RJq-PIMyskAJoE5XNkvf0iE4-vB1Ad2XKpXlUUG9cMcmwCgXnls29BbIIf6TezBD4NKr88DsggHBMbSqUmEC6x2yA92L3qyZkrMx76MNlV5mcd1UJYzd1sMjnLCoZ5F1cVGOhB5GzZxdnscLKoMUs6uQwtmMIQRkpoGrqKqkyQOqHCrfdfsFhLQJ-bXDk33xbYSbudiWzBVK7s')",
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 text-center max-w-[56rem] px-margin-mobile flex flex-col items-center select-none">
          <span className="font-label-md text-label-md tracking-widest text-white/90 mb-md uppercase">
            THE AUTUMN COLLECTION
          </span>
          <h1 className="text-5xl md:text-8xl font-display-lg text-white mb-xl drop-shadow-2xl leading-none">
            Refined Restraint
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 max-w-[36rem] mx-auto mb-xxl">
            Experience a curated selection of architectural silhouettes and organic textures designed
            for the discerning individual.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="px-xl py-md bg-white text-primary font-label-md text-label-md uppercase hover:bg-surface-container-low transition-colors duration-300 cursor-pointer"
          >
            Explore Curation
          </button>
        </div>

        <div className="absolute bottom-huge left-margin-desktop hidden md:block">
          <div className="flex flex-col gap-xs">
            <span className="font-label-sm text-label-sm text-white/60">01 / 04</span>
            <div className="w-24 h-px bg-white/20 relative">
              <div className="absolute inset-0 bg-white w-1/4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Artifacts (Bento Grid) */}
      <RevealOnScroll>
        <section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-huge gap-4">
            <div className="max-w-[28rem]">
              <h2 className="font-headline-lg text-headline-lg mb-md">Latest Artifacts</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                An evolving collection of objects that balance artisanal tradition with modern
                intentionality.
              </p>
            </div>
            <button
              onClick={() => navigate('/shop')}
              className="font-label-md text-label-md border-b border-primary pb-1 hover:opacity-70 transition-opacity cursor-pointer uppercase"
            >
              VIEW ALL ITEMS
            </button>
          </div>

          <div className="grid grid-cols-12 md:grid-rows-2 gap-gutter h-auto md:h-[800px] space-y-gutter md:space-y-0">
            {/* Organic Form vase */}
            <div
              onClick={() => navigate('/shop')}
              className="col-span-12 md:col-span-8 md:row-span-2 group cursor-pointer overflow-hidden relative bg-surface-container-low min-h-[400px] md:min-h-0"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Organic Form No. 12"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5dp3G1lYTChAEa4WlJ0S4mOChe4bbkAt3AMlKVXs97gQtWCk5DpYeXhK9tCHVpwDpGOFNDCWEwfjywkBSpxMbhqBcKwa4e_xT3J-F-678CkoGeVSdqOu6-GksVMWyruUbQwiu50IGwuv88vfsc-__vVyBENPc8pkHopRLUp80M-BvE8JENpwtkSxjd62aTRXMMjtDJt3rVlJP31bhyRoq8KiUlcp3vyu9v9R6jHsZiLEcIB6_o7YhlrMmJy3QUCzPIxHq_wh1-Q_0"
              />
              <div className="absolute bottom-xl left-xl text-white z-10">
                <h3 className="font-headline-md text-headline-md mb-xs">Organic Form No. 12</h3>
                <p className="font-label-sm text-label-sm uppercase tracking-wider opacity-90">
                  HAND-COILED CERAMICS
                </p>
              </div>
            </div>

            {/* Top Right Card */}
            <div
              onClick={() => navigate('/shop')}
              className="col-span-12 md:col-span-4 md:row-span-1 group cursor-pointer overflow-hidden relative bg-surface-container-low min-h-[300px] md:min-h-0"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Sand Cashmere Blanket"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ur3Pa4uKgBPIrisWJPDgz4B9PlIJr8Bm5uRQo4BCrRb0YHwtF4xr8VTvgLssB2f5znxRRbaAJYQGmabYTK1zbR9rC2J6EJy0zA-qdnv1TqIxe65FjTsjbDQ49BfKELcM2bwI5nfoETvNkDQWzZwdVeufP_w-A6m8cQxzeo1FKiL8S1tTa3Qf7hUfDzc6HhUJFZUvIpWOPviOWErKY1FwpQE57nzomEs0S8rGpprYxDGp0zi0LaodsAK-4QnQxA-bSnmu7XNVmogF"
              />
              <div className="absolute bottom-lg left-lg">
                <h3 className="font-body-lg font-bold text-primary">Sand Cashmere</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">$420</p>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div
              onClick={() => navigate('/shop')}
              className="col-span-12 md:col-span-4 md:row-span-1 group cursor-pointer overflow-hidden relative bg-surface-container-low min-h-[300px] md:min-h-0"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Brass Ritual Kit"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6GFz1Wu81xdxtaizgK1dVi-tjeGNyNxGSuf-k4Z_F5H9Luu4QjL6PT9mv7dW6GpW3mwNirrB0dhacQ5wXH2Rbg44IWc_KFGNWys_PqE604LFFy5SEcfHjqC24voIfAFgPJIQr1X3J5byCxd2Ayjj6O2du3eb6-keALFyQf10bF0cFPXTLKV9T5-YAFEqqopnml3NKzsqlqdy2XOD86jo0xMGZ8rZ-L6EIRSBzcSuKq6K_R9OAV0WQJwUsxNB29u3gt4E2k77TQk61"
              />
              <div className="absolute bottom-lg left-lg">
                <h3 className="font-body-lg font-bold text-primary">Brass Ritual Kit</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">$185</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Our Philosophy (Asymmetric Layout) */}
      <RevealOnScroll>
        <section className="bg-surface-container-lowest py-huge border-y border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1 space-y-8">
              <div>
                <span className="font-label-md text-label-md text-secondary mb-md block uppercase tracking-wider font-semibold">
                  Our Philosophy
                </span>
                <h2 className="font-display-lg text-display-lg mb-xl leading-tight">
                  The Luxury of <br />
                  <i className="font-serif italic">Intentionality</i>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  We believe that the spaces we inhabit and the objects we possess should reflect a
                  commitment to quality over quantity. Our curation process is rigorous, focusing on
                  items that possess a timeless soul and exceptional craftsmanship.
                </p>
              </div>

              <div className="flex flex-col gap-lg border-t border-outline-variant/30 pt-8">
                <div className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-primary text-2xl">eco</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider font-semibold">
                      ETHICAL TRACEABILITY
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Knowing exactly where and how every artifact is born.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    design_services
                  </span>
                  <div>
                    <h4 className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider font-semibold">
                      ARCHITECTURAL DESIGN
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Focusing on form, function, and the beauty of restraint.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2 mb-xl md:mb-0">
              <div className="relative">
                <div className="aspect-[4/5] bg-surface-container-high overflow-hidden shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    alt="Hands sculpting clay"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ueWgzRBog8rmpm_8xccSXetCP3dq_x-Ro588MgWSVCzgItemPa0jzwzF32KeMT-3kld8ZvAnV5H5rcQfvgydv_uo2Omlp1af19FG9GPLkY7XdaAaeq7_H9aa0NH5Oqkihimwo7A8rR0Y344mQFrFukuNZCraB0m-6MEyw3e--ZFg5s64ZJwE-8UhgvGFcaIDFI60xOlKWDesPjm2QETAW56lLONzm9PvA7VpXrRXUL6_Q-frhi4Oh-UFYWfSBUYawti4dm27tCo3"
                  />
                </div>
                <div className="absolute -bottom-xl -left-xl w-64 h-80 hidden lg:block border-[12px] border-surface-bright overflow-hidden shadow-xl">
                  <img
                    className="w-full h-full object-cover"
                    alt="Linen textile swatch details"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs5p0eyShItX5UVAqCOrOFKkkR-ll62JycWU9epdHmtkmSLhjVqvwe4FKMcyIX0TP-f_pZDL5hoUOMEdi7sKw_HJMnKOmGKPge10odZfpYa1RDzL8UxOP9jKEF-7wCkQOXFQcpcTY3PQLqX9Q-0J22KR-WdeyKtFvHAtHrRcnzYkzyyDZ9K-E9b_-ezd9JweJEDw7whskuLHBbtbJn7g3Hl1egb9pNRIXDfhK76vCjMUZbV6oOOrw_AqGvvt1MZgs81-eMMS_7Un5r"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Curation Carousel (Horizontal Scroll) */}
      <RevealOnScroll>
        <section className="py-huge overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-xl">
            <h2 className="font-headline-lg text-headline-lg">Monthly Curation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              A gallery of moments, contexts, and collections that inspire us.
            </p>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-gutter px-margin-mobile md:px-margin-desktop snap-x snap-mandatory pb-4">
            {/* Card 1 */}
            <div className="min-w-[320px] md:min-w-[400px] snap-start flex flex-col group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-md bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  alt="Silent House"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgOOd6scPO3GnJRUwJyj2zq061uInZx8LtNT11yz7HJ5WLt0Bq8pa18yNIvxUveRaApNSk8IqpvQ3P9Ia3BIGvP74Sa--HCCnhZ0O5dIEJw3baHVbTEiMaaEQun5Sn-gE1_qyKTzVzCuWJA3zeNLYl1fmXF2uK8d8NzWfrIYpem5UeCbSklCxLoPoORq58Cz_9LN-XJsA3Kl06v8tZM42OgPzzazoMTu2_nT05MVQy_mginMJxlzIajz8CKqjcSJJFgM6Fvlo-PpWq"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary mb-1 uppercase tracking-wider">
                Interior
              </span>
              <h3 className="font-headline-md text-headline-md mb-xs">The Silent House</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A study in Japandi minimalism and the power of silence.
              </p>
            </div>
            {/* Card 2 */}
            <div className="min-w-[320px] md:min-w-[400px] snap-start flex flex-col group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-md bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  alt="Tailoring study"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU51MruRP0xtPnppezgqbR1WeeTfMNn5Y_V6KcR-S3DSkX42NeqzRh72JjlUVSCujRA95_hL0DteeRIE8h01MnVISva1XQg1K86ogH5ePQkoJPkIkt8b6jxOTIgiylgD0jdoCjVZ-ZcNvDd-g3i_ogd5EZx1c0mE8OFJYc0o7f6BXVMiv0CaDQvnCucLQJ9U_1Oxsx4fswzcsyH6OwJHSBw7eJndSFcR4d-nUg13k0PKBJl--W61ouRB8byC3w5uiO_EUVizwP3rRM"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary mb-1 uppercase tracking-wider">
                Apparel
              </span>
              <h3 className="font-headline-md text-headline-md mb-xs">Structured Softness</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Redefining modern tailoring for the versatile wardrobe.
              </p>
            </div>
            {/* Card 3 */}
            <div className="min-w-[320px] md:min-w-[400px] snap-start flex flex-col group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-md bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  alt="Dinner setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSe3_J3vxhKKEMLYUqifiUOpDFBw5DOSwzWBU7LL9PQf-eHbQ0EC4kqnURYy-CE4d0wJMFvtLRL7S42tqWq6hAj6Pc8NqickImG3e-INMp0uqFNk-Ly6UU2mjOt-Dtq4QLsRTHq-lkBcdejmsXsujOlT5YaCx4A-56SNPzVR9942Drji2SfBnDntud1i24wO8H3_Ej_t2a3qW-PkehR5wiIPSemHkJ7SMyccgfQ4NoMcSvkpRPgzZBEtbGLgHL-AfOQKjqJ89rTK2y"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary mb-1 uppercase tracking-wider">
                Living
              </span>
              <h3 className="font-headline-md text-headline-md mb-xs">Summer Solstice</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Essential objects for the art of slow entertaining.
              </p>
            </div>
            {/* Card 4 */}
            <div className="min-w-[320px] md:min-w-[400px] snap-start flex flex-col group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-md bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  alt="Staircase abstract"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-VI421dSTAhjkmKyr8oaQkKLo3b3grfkRzR-wjd6rTjN37GKM1hp_PToXAkZfnsfzuqZBcpA-zpU-xmMwQmCKTkijG2JJT5P8LkQPoxFZwbhqT60QD_MNRpf-mIb8e5FdwfdXHkDHCaabpl_cjIBDhl35HmVFSs286F0VIXR7Shxcvo2X-B30qeDDoqzDN-zcRjEvhsIkPKwqN8lp7XRrZlnj0aMMOQTH_WYepo0jQMaLSYpkevio7z0cwAq1-20XZkSK8GnY7nL5"
                />
              </div>
              <span className="font-label-sm text-label-sm text-secondary mb-1 uppercase tracking-wider">
                Architecture
              </span>
              <h3 className="font-headline-md text-headline-md mb-xs">Curves &amp; Concrete</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Exploring the emotional resonance of modern brutalism.
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Instagram Journal Gallery */}
      <RevealOnScroll>
        <section className="py-huge bg-surface-container-high/30 border-t border-outline-variant/30">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-huge">
            <span className="font-label-md text-label-md text-on-surface-variant mb-md block uppercase tracking-widest font-semibold">
              STAY CONNECTED
            </span>
            <h2 className="font-display-lg text-headline-lg uppercase tracking-tight">
              @AESTHETE.JOURNAL
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-xs">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBZLR2Zjpo9MFfoIIt4Gm61M4faX4-_CkbJ26zDty9jzMi0jZlaO1M4YMJYTpf5VbFW-jLePHoi-n5TRIJCXjMGGRlvNjjDZXt6TIoa1YmYc_JcwZZpKuRPPD3kPqgCmRp-GTLp1NO1dzjAErsAjRi8EgNVp_BxB57MP0bPzZU73c6N0Q1v1JUC1u0lowiGJWb_OiMLPz5JQQUeQElctppdkSQX4MPr0C-wnbVaji7Kf6qwDtZ4CTDzvq_sIYewRCKG839o-FPigvig",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuByCLyCOCxBeHvT8upxIg4IRYWi1_BRH5xF88L51jqOYJpHlE9DGhRYggLJTZ-kRdEMm-OW0JTlvHt3vVHtUTHyYGOlKuCCN41IIdh-v6T6aOwT9vthjipVYKbECqiERoXniOXWNAxPgTnudcXypRcGxSUZY6l5ACycWTn99vySGCSZYPMv1iZSAmgC8GWsS3D7-HMfN2sObAQAcaY8tqhqrFmg_ySaDIvAI2o4HN4rkPUNKqZ3uJPOM5bKyZ_HDKLqeYrZch60SDvf",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDI7RcdR4A-Df8vLVFCNpPJkFDUHiusmpvw_q9dqhch3euJPuLk7TbONc9msYOjajcYtnjs0kJiGyBoAuIkJpQ7TzP1MAiV552RIVWrGkeXx-XrU-BGUI8zaNG0FVTBDhz9K9Juet249yLmGBPN1IXpSUKd6l4E9tXz0ZWC6BkwKE4e-dy2h3AJYpfr_iRQd0pnTnTNFDDKgsdtIbg6AbP76ktlM2ro14nLCGsPx9KiRut-G9F7mN3NiJOMt8Vo0pViPQINiyK8ZZCK",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCaQ6yKC0G-_mFqBm_YZPOcXaBUwTUy01Nz9A9CVXlhTsRtnoleNJcCuhj_a4h9oKJTFnyfpZ9J2BEby8VnkdXh1bC1ly3Pfcr8zAySkfOx3A7MljbkWFWl6Q3T9lUJHRr-IfuqHpzDOx6rrkxSAhoAlZ_sd8dGaJA9-iKha47W2FcOHv1WLaPZ-GKGrts5aSIw80Xi1OULgoYczyzXtxhkaSNLtxYKOoBAKYfDyBypBT4q8eF7HD1-rHinYNVLi1yr4wAfJ5wEIGql",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA6ymC5I3Pc0loqukaHZvxxJzdlkfX9-_iucY7STsScy3jvjKssnZ-O24OcW6AS1DGWE7O0Kqu6Kg_OySkTAOGrEl0w5aoWOWnyuyOKP3HgCUJSiqHGi8pwWyWUEq5-TJvDtbXYGB9VnRin55bNi92GBTFLmTQIsxasdIlBdK5zhizs9bw23JzX3yU6f5fmOQ23dyIWOToJAyQZ7Lrik632oVumXEnX8VqN6F1ICW8UdsZuYIfviFiJKaPtXy5WffKWgjX4HexEEjSD",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDjXcamodGA86n2u8eo5cuxdVEBCioEHQe3XdL8z2smtCf473JvZBIjUHfkcRbKkVQDRfhs-b7f2mF90l7BcELEwzVJnY-pe0seqSeWW1--Ki3MndL--FqxlVo3vl5D41ql0TEx8vc5PYwtOS4QZ0-e3xQaVWM1hlxcyVthBtq8aUL9ojrZ3bY0m-5KqK3Iv71hpvNhPnEz5UDT3G-u55tHNEJ1PplUdeFM8oIZaOXVj8V7_NW8lUUPw_CCxCZ9johq__7hNq7G_S1F",
            ].map((imgUrl, i) => (
              <div
                key={i}
                className="aspect-square bg-surface-container-low overflow-hidden group cursor-pointer relative"
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={`Instagram highlight ${i + 1}`}
                  src={imgUrl}
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-lg">camera</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* Newsletter Section */}
      <RevealOnScroll>
        <section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/30">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-6 space-y-2">
              <h2 className="font-headline-lg text-headline-lg">Join the Archive</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Receive weekly insights into modern design, culture, and exclusive access to new
                artifacts.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for joining our archive.');
              }}
              className="col-span-12 md:col-span-6 flex flex-col sm:flex-row gap-md"
            >
              <input
                className="flex-grow bg-surface-container-low border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary py-3.5 px-xl font-body-md outline-none text-primary placeholder:text-outline/70"
                placeholder="Email Address"
                type="email"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-xxl py-3.5 font-label-md text-label-md uppercase hover:opacity-90 transition-opacity tracking-widest cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
};

export default Home;
