import FoodSupportForm from "../components/FoodSupportForm";
import { Heart } from "lucide-react";
import heroImage from "../assets/hero.jpeg";
import foodBank from "../assets/foodbank.png";
import foodItem1 from "../assets/food-item1.jpg"; // basket/fruits
import foodItem2 from "../assets/food-item2.jpeg"; // canned food
import homeImgage from "../assets/home-img.jpg"; // Location Image
import { Mail, Phone, MapPin, Instagram, Facebook, Music } from "lucide-react";
import { SocialIcon } from 'react-social-icons'



const Index = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 bg-gradient-to-b from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-6 sm:px-8 md:px-14 lg:px-24 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center justify-center p-3 bg-yellow-400/10 rounded-full">
              <Heart className="w-7 h-7 text-yellow-400" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
              Spreading Bible Mission UK
            </h1>
            <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full" />

            <p className="text-lg sm:text-xl font-semibold text-yellow-100">
              Foodbank Centre
            </p>

            <p className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto">
              We understand that anyone can face a crisis for many reasons.
              If you are struggling to put food on the table, we are here to support you.
            </p>
          </div>
        </div>

        {/* Subtle hero overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </section>

      {/* ABOUT / MISSION SECTION */}
      {/* ABOUT / MISSION SECTION */}
<section className="relative w-full py-12 sm:py-16 bg-gray-50 overflow-hidden">
  <div className="w-full px-6 sm:px-8 md:px-14 lg:px-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">

    {/* LEFT COLUMN — TEXT */}
    <div className="space-y-6 text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-900">
        Here to Support You
      </h2>

      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        Our foodbank works closely with local agencies such as housing associations,
        children’s centres, and shelter homes. By collecting some basic details,
        we can better understand your situation, offer practical guidance,
        and prepare the right emergency food parcels for you and your household.
      </p>

      <p className="text-base sm:text-lg text-purple-700 font-semibold">
        Please get in touch with us today to find out how we can help.
      </p>
    </div>

    {/* RIGHT COLUMN — IMAGE */}
    <div className="flex justify-center md:justify-end">
      <div className="w-full md:w-4/5">
        <img
          src={foodBank}
          alt="Food support illustration"
          className="w-full h-auto rounded-xl shadow-md opacity-95 object-cover"
        />
      </div>
    </div>

  </div>
</section>

     
      {/* FORM SECTION */}
      <section className="relative w-full py-10 sm:py-12 bg-white overflow-hidden">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto">
            <FoodSupportForm />
          </div>
        </div>

        {/* Food Image 2 - Bottom Right */}
        <div className="hidden sm:block absolute bottom-10 right-10 opacity-90 pointer-events-none">
          <img
            src={foodItem2}
            alt="Food decoration 2"
            className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-xl shadow-md"
          />
        </div>

        {/* Food Image 2 (Mobile - Relative positioning) */}
        <div className="block sm:hidden relative flex justify-end px-4 mt-6">
          <img
            src={foodItem2}
            alt="Food decoration mobile 2"
            className="w-28 rounded-xl shadow-md opacity-90"
          />
        </div>
      </section>

     {/* CTA SECTION */}
<section className="w-full py-12 sm:py-16 bg-gradient-to-b from-purple-800 to-purple-900 text-white overflow-hidden">
  <div className="w-full px-6 sm:px-8 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">

    {/* LEFT COLUMN — TEXT */}
    <div className="space-y-5 text-center md:text-left">
      <Heart className="w-10 h-10 text-yellow-400 mx-auto md:mx-0" />
      <h2 className="text-2xl sm:text-3xl font-bold">
        Together, we can restore thirsty souls with a smile and hope.
      </h2>
      <p className="text-base sm:text-lg text-yellow-100">
        Together, we can bring hope and help to those in need.
      </p>
    </div>

    {/* RIGHT COLUMN — IMAGE */}
    <div className="flex justify-center md:justify-end">
      <div className="w-full md:w-full">
        <img
          src={foodItem1}
          alt="Food decoration 2"
          className="w-full h-auto rounded-xl shadow-md opacity-90 object-cover"
        />
      </div>
    </div>

  </div>
</section>


      {/* FOOTER */}
<footer className="w-full bg-purple-950 text-yellow-400 py-10 sm:py-12">
  <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

    {/* Column 1 — Mission */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-bold text-yellow-300">
        Spreading Bible Mission UK – Foodbank Centre
      </h3>
      <p className="text-yellow-200 text-sm sm:text-base leading-relaxed">
        Providing emergency food support for the needy with love and passion for souls.  
        Together, we extend hope, care, and restoration to our community.
      </p>
    </div>

    {/* Column 2 — Contact */}
    <div className="space-y-3">
      <h4 className="text-base sm:text-lg font-semibold text-yellow-300 mb-2">
        Contact Us
      </h4>
      <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-200">
        <Mail className="w-4 h-4 text-yellow-400" />
        <a href="mailto:spreadingbibleuk@gmail.com" className="hover:text-yellow-300 transition">
          spreadingbibleuk@gmail.com
        </a>
      </div>
      <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-200">
        <Phone className="w-4 h-4 text-yellow-400" />
        <p>Tel: 0161 223 7511 &nbsp;|&nbsp; Mob: 07485 086516</p>
      </div>
      <div className="flex items-start justify-center md:justify-start gap-2 text-yellow-200">
        <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
        <p className="max-w-xs">
          Piccadilly Business Centre, Unit C Aldow Enterprise Park, Blackett Street, Manchester, England, M12 6AE
        </p>
      </div>
    </div>

    {/* Column 3 — Social Links */}
    <div className="space-y-3">
      <h4 className="text-base sm:text-lg font-semibold text-yellow-300 mb-2">
        Connect With Us
      </h4>
      <div className="flex justify-center md:justify-start gap-5 text-yellow-200">
        <a
          href="https://instagram.com/spreadingbiblemissionuk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition"
        >
         <SocialIcon network="instagram" bgColor="#ffffff" fgColor="#1c023eff" className="w-5 h-5" />
        </a>
        <a
          href="https://www.tiktok.com/@spreadingbiblemissionuk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition"
        >
          <SocialIcon  network="tiktok" bgColor="#ffffff" fgColor="#1c023eff" className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/spreadingbiblemissionuk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 hover:text-yellow-300 transition"
        >
          <SocialIcon network="facebook" bgColor="#ffffff" fgColor="#1c023eff" className="" />
        </a>
      </div>
    <div className="flex items-start py-4  justify-center md:justify-start gap-2 text-yellow-200">
             <img className="max-w-20" src={homeImgage} alt="Foodbank Location" />
         
       
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-purple-800 mt-8 pt-6 text-center text-xs text-yellow-200">
    © {new Date().getFullYear()} Spreading Bible Mission UK. All Rights Reserved.
  </div>
</footer>

    </main>
  );s
};

export default Index;
