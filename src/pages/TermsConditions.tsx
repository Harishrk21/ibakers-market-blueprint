import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | IBakers Chennai</title>
        <meta name="description" content="Terms and Conditions for ordering from IBakers - Read our terms of service, ordering policies, and delivery terms." />
        <link rel="canonical" href="https://www.ibakers.in/terms-conditions" />
        <meta name="last-modified" content="2025-01-15" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Header />
      <Breadcrumb />
        
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                Terms & <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Conditions</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Ordering</h2>
                <p className="mb-4">
                  By placing an order with IBakers, you agree to these terms and conditions. All orders are subject to availability and confirmation of order details.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Orders must be placed with a minimum of 3 days advance notice</li>
                  <li>For wedding cakes and complex designs, 1-2 weeks advance notice is recommended</li>
                  <li>Rush orders (less than 3 days) may incur additional charges</li>
                  <li>All orders require a 50% advance payment to confirm</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. Pricing and Payment</h2>
                <p className="mb-4">
                  All prices are in Indian Rupees (₹) and are subject to change without notice. Final pricing will be confirmed upon order placement.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>50% advance payment required to confirm orders</li>
                  <li>Balance payment due on delivery</li>
                  <li>We accept cash, UPI, bank transfer, and digital wallets</li>
                  <li>Delivery charges are additional and vary by location</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. Customization</h2>
                <p className="mb-4">
                  We specialize in custom cakes and will work with you to create your desired design. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Design modifications can be made within 24 hours of order confirmation</li>
                  <li>Changes after 24 hours may incur additional charges</li>
                  <li>We reserve the right to suggest design alternatives if requested designs are not feasible</li>
                  <li>Final approval of design details is required before production begins</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. Delivery</h2>
                <p className="mb-4">
                  We deliver across Chennai. Delivery terms:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Delivery charges vary based on distance (₹50-₹200 typically)</li>
                  <li>Free delivery available for orders above ₹2000 in select areas</li>
                  <li>Delivery times are estimates and may vary due to traffic or other factors</li>
                  <li>Someone must be available to receive the order at the delivery address</li>
                  <li>We are not responsible for delays due to incorrect addresses or recipient unavailability</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Cancellations and Refunds</h2>
                <p className="mb-4">
                  Cancellation and refund policies:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Cancellations made more than 48 hours before delivery: Full refund minus processing fees</li>
                  <li>Cancellations within 48 hours: Subject to cancellation fee (up to 30% of order value)</li>
                  <li>No refunds for orders cancelled on the day of delivery</li>
                  <li>Refunds will be processed within 5-7 business days</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">6. Quality and Allergies</h2>
                <p className="mb-4">
                  We take quality seriously and use fresh, premium ingredients. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Please inform us of any allergies or dietary restrictions when placing your order</li>
                  <li>While we take precautions, we cannot guarantee 100% allergen-free environments</li>
                  <li>Products are made fresh to order and should be consumed within recommended timeframes</li>
                  <li>We are not liable for allergic reactions if allergies were not disclosed at the time of order</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">7. Masterclasses</h2>
                <p className="mb-4">
                  Terms for baking masterclasses:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Class fees must be paid in advance to secure your spot</li>
                  <li>Cancellations made 7+ days before class: Full refund</li>
                  <li>Cancellations within 7 days: 50% refund or reschedule option</li>
                  <li>No refunds for no-shows or same-day cancellations</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p>
                  IBakers shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the value of the order placed.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">9. Contact Us</h2>
                <p className="mb-4">
                  For questions about these terms, please contact us:
                </p>
                <div className="space-y-2">
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

export default TermsConditions;

