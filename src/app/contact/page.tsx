import { Mail, MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,#d9a44133,transparent_60%)] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full border border-[#d9a441]/30 bg-[#d9a441]/10 px-5 py-2 text-sm font-semibold text-[#d9a441]">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            We d Love To Hear
            <span className="block text-[#d9a441]">
              From You
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
            Have a question, suggestion, or need help finding the perfect
            book? Our team is always here to help.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">

            {[
              {
                icon: MapPin,
                title: "Address",
                value: "Rangpur, Bangladesh",
              },
              {
                icon: Mail,
                title: "Email",
                value: "support@bookverse.com",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+880 1234-567890",
              },
              {
                icon: Clock,
                title: "Working Hours",
                value: "Sat - Thu : 9AM - 8PM",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:border-[#d9a441]/40"
                >
                  <div className="rounded-2xl bg-[#d9a441]/10 p-4">
                    <Icon className="text-[#d9a441]" size={28} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-white/50">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Right */}

          <form className="rounded-[35px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none placeholder:text-white/40 focus:border-[#d9a441]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none placeholder:text-white/40 focus:border-[#d9a441]"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="mt-6 w-full rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none placeholder:text-white/40 focus:border-[#d9a441]"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="mt-6 w-full rounded-xl border border-white/10 bg-transparent p-4 text-white outline-none placeholder:text-white/40 focus:border-[#d9a441]"
            />

            <button
              className="mt-8 w-full rounded-xl bg-[#d9a441] py-4 font-bold text-[#14110d] transition hover:bg-[#c9972f]"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;