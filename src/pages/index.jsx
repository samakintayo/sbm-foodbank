import FoodSupportForm from "../components/FoodSupportForm";
import { Heart } from "lucide-react";
import heroImage from "../assets/hero.jpeg";
import foodItem1 from "../assets/food-item1.jpg"; // basket/fruits
import foodItem2 from "../assets/food-item2.jpeg"; // canned food

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
      <section className="relative w-full py-12 sm:py-16 bg-gray-50 overflow-hidden">
        <div className="w-full px-6 sm:px-8 md:px-14 lg:px-24 text-center space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-900">
            Here to Support You
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our foodbank works closely with local agencies such as housing associations,
            children’s centres, and shelter homes. By collecting some basic details,
            we can better understand your situation, offer practical guidance,
            and prepare the right emergency food parcels for you and your household.
          </p>

          <p className="text-base sm:text-lg text-purple-700 font-semibold">
            Please get in touch with us today to find out how we can help.
          </p>
        </div>

        {/* Food Image 1 - Top Left */}
        <div className="hidden sm:block absolute top-10 left-10 opacity-90 pointer-events-none">
          <img
            src={foodItem1}
            alt="Food decoration 1"
            className="w-28 sm:w-36 md:w-44 lg:w-52 rounded-xl shadow-md"
          />
        </div>

        {/* Food Image 1 (Mobile - Relative positioning) */}
        <div className="block sm:hidden relative flex justify-start px-4 mt-6">
          <img
            src={foodItem1}
            alt="Food decoration mobile 1"
            className="w-24 rounded-xl shadow-md opacity-90"
          />
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
      <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-purple-800 to-purple-900 text-center text-white">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-24 max-w-4xl mx-auto space-y-5">
          <Heart className="w-10 h-10 text-yellow-400 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold">
            Together, We Can Make a Difference
          </h2>
          <p className="text-base sm:text-lg text-yellow-100">
            Together, we can bring hope and help to those in need.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-purple-950 text-center text-yellow-400 py-6 sm:py-8">
        <div className="px-6 sm:px-8 md:px-12">
          <p className="font-semibold text-base sm:text-lg">
            Spreading Bible Mission UK – Foodbank Centre
          </p>
          <p className="text-yellow-200 text-sm mt-1">
            Providing emergency food support with dignity and compassion.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
