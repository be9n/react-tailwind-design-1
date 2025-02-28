import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: "/src/assets/profile-pictures/user1.jpg",
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: "/src/assets/profile-pictures/user2.jpg",
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: "/src/assets/profile-pictures/user3.jpg",
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: "/src/assets/profile-pictures/user4.jpg",
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: "/src/assets/profile-pictures/user5.jpg",
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: "/src/assets/profile-pictures/user6.jpg",
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export default function Testimonials() {
  return (
    <div className="container my-20 py-6">
      <h1 className="text-2xl md:text-4xl lg:text-6xl text-white text-center mb-8">
        What People Are Saying
      </h1>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-secondary border border-neutral-800 rounded-lg">
              <div className="leading-[1.5] text-md text-neutral-400 mb-5">
                {testimonial.text}
              </div>
              <div className="flex gap-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="w-12 h-12 object-cover rounded-full border border-neutral-600"
                />
                <div>
                  <span className="block text-lg text-neutral-400 font-normal -mb-1">
                    {testimonial.user}
                  </span>
                  <span className="text-neutral-700 text-sm italic">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
