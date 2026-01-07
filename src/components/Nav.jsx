const FooterSection = () => {
  return (
    <section className="nav w-full min-h-[50vh] bg-[#FBF2E1] text-[#1a0010] relative px-6 sm:px-10 lg:px-16 py-10 sm:py-12 font-bold uppercase">
      
      <div className="nav flex flex-wrap justify-center sm:justify-between items-start gap-4 sm:gap-0 text-2xl sm:text-4xl lg:text-6xl text-center sm:text-left">
        <span>Home</span>
        <span>Work</span>
        <span>About</span>
        <span>Services</span>
        <span>Contact</span>
      </div>

      <div className="absolute bottom-20 sm:bottom-12 left-6 sm:left-10 lg:left-16 text-sm sm:text-xl lg:text-3xl leading-tight">
        <p>Andrew@Mammothmurals.com</p>
        <p>2816 Crestwood Blvd</p>
        <p>Irondale, AL 35210, United States</p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-lg sm:text-2xl lg:text-4xl">
        <p>Instagram</p>
      </div>

      <div className="absolute bottom-6 sm:bottom-12 right-6 sm:right-10 lg:right-16 text-xs sm:text-xl lg:text-3xl text-right">
        <p>Website by Huy</p>
        <p>©2026 — All Rights Reserved</p>
      </div>

    </section>
  );
};

export default FooterSection;
