import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | IBakers Chennai</title>
        <meta name="description" content="Privacy Policy for IBakers - Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://www.ibakers.com/privacy-policy" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                Privacy <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 text-slate-300">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Place an order for cakes or other products</li>
                  <li>Contact us via phone, email, WhatsApp, or our contact form</li>
                  <li>Register for our baking masterclasses</li>
                  <li>Subscribe to our newsletter or updates</li>
                </ul>
                <p>
                  This information may include your name, phone number, email address, delivery address, and any other details you choose to provide.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and inquiries</li>
                  <li>Send you updates about our products and services (with your consent)</li>
                  <li>Improve our services and customer experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>With delivery partners to fulfill your orders</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at <a href="mailto:ayisha@ibakers.in" className="text-pink-400 hover:text-pink-300 hover:underline">ayisha@ibakers.in</a> or call us at <a href="tel:+918825471551" className="text-pink-400 hover:text-pink-300 hover:underline">+91 88254 71551</a>.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:ayisha@ibakers.in" className="text-pink-400 hover:text-pink-300 hover:underline">ayisha@ibakers.in</a></p>
                  <p><strong className="text-white">Phone:</strong> <a href="tel:+918825471551" className="text-pink-400 hover:text-pink-300 hover:underline">+91 88254 71551</a></p>
                  <p><strong className="text-white">Address:</strong> Anna Nagar, Chennai, Tamil Nadu 600040</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;

