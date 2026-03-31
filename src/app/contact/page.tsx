import { MapPin, Phone, Mail, Clock } from "lucide-react";
import WhatsAppButton from "@/components/store/WhatsAppButton";
import { FadeIn, SlideIn } from "@/components/store/Animate";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <a href="/" className="text-lg font-bold leading-tight hover:opacity-70 transition-opacity">
              Event Solutions
            </a>
            <p className="text-xs text-gray">Event Supplies & Management · Kota Kinabalu</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-gray hover:text-primary transition-colors">Home</a>
            <a href="/products" className="text-sm text-gray hover:text-primary transition-colors">Products</a>
            <a href="/contact" className="text-sm font-medium text-primary">Contact</a>
            <a href="/admin" className="text-sm text-gray hover:text-primary transition-colors">Admin</a>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <FadeIn>
          <h1 className="text-2xl font-bold mb-1">Contact Us</h1>
          <p className="text-sm text-gray mb-10">Get in touch for inquiries, bookings, or quotes.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <SlideIn direction="left">
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Location", detail: "Kota Kinabalu, Sabah, Malaysia" },
                { icon: Phone, title: "Phone", detail: "+60 12-345 6789" },
                { icon: Mail, title: "Email", detail: "hello@eventsolutions.my" },
                { icon: Clock, title: "Working Hours", detail: "Mon – Sat, 9AM – 6PM" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 border border-border p-5">
                  <item.icon className="w-5 h-5 text-gray mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>

          {/* Contact Form */}
          <SlideIn direction="right" className="lg:col-span-2">
            <div className="border border-border p-8">
              <h2 className="font-semibold mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 border border-border text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2.5 border border-border text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      placeholder="+60 12-345 6789"
                      className="w-full px-3 py-2.5 border border-border text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Event Type</label>
                    <select className="w-full px-3 py-2.5 border border-border text-sm focus:outline-none focus:border-primary text-gray">
                      <option>Select event type</option>
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Birthday Party</option>
                      <option>Conference</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your event..."
                    className="w-full px-3 py-2.5 border border-border text-sm focus:outline-none focus:border-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-primary text-white text-sm font-medium hover:bg-black transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </SlideIn>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-[1400px] mx-auto px-4 py-6 text-center text-sm text-gray">
          © {new Date().getFullYear()} Event Solutions. Kota Kinabalu, Sabah.
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
