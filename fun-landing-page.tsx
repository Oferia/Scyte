import React from 'react';
import { ArrowRight, Calendar, MessageCircle, Clock, DollarSign, Bell, Heart, Star, Lock, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Reimagine Patient Care: Smart, Simple, and Effortless! ✨
        </h1>
        <p className="text-xl text-blue-600 mb-8">
          Say goodbye to healthcare headaches. Your all-in-one platform for happier patients!
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center mx-auto">
          Get Started Free <ArrowRight className="ml-2" />
        </button>
      </header>

      {/* Problems Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">
          💥 Tired of These Healthcare Hassles?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProblemCard 
            icon={<Clock className="text-red-500" />}
            title="Endless Waiting"
            description="Long waits for appointments and in-office delays driving everyone crazy?"
          />
          <ProblemCard 
            icon={<MessageCircle className="text-orange-500" />}
            title="Phone Tag Madness"
            description="Struggling with back-and-forths just to get an answer or book a visit?"
          />
          <ProblemCard 
            icon={<DollarSign className="text-yellow-500" />}
            title="Surprise Bills"
            description="Ever seen a patient smile after getting a confusing bill? Neither have we."
          />
          <ProblemCard 
            icon={<Bell className="text-purple-500" />}
            title="Missed Follow-ups"
            description="Patients falling through the cracks without proper follow-ups?"
          />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">
            🚀 We've Got You Covered!
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SolutionCard 
              icon={<Calendar className="text-blue-500" />}
              title="Super Easy Scheduling"
              description="Book online instantly with real-time availability and automated reminders"
            />
            <SolutionCard 
              icon={<MessageCircle className="text-green-500" />}
              title="Instant, Secure Messaging"
              description="Chat directly and securely with your care team"
            />
            <SolutionCard 
              icon={<DollarSign className="text-indigo-500" />}
              title="Crystal Clear Billing"
              description="See costs upfront - no more surprise bills!"
            />
            <SolutionCard 
              icon={<Bell className="text-purple-500" />}
              title="Smart Follow-Ups"
              description="Automated reminders that feel personal"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">
            ⭐ Don't Just Take Our Word For It
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard 
              quote="Our patients LOVE the new system! We've seen a 30% boost in satisfaction!"
              author="Dr. Sarah Thompson"
              role="Medical Director"
            />
            <TestimonialCard 
              quote="Finally, we spend more time with patients and less time chasing paperwork!"
              author="John Martinez"
              role="Clinic Manager"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">
            🙋‍♂️ Got Questions?
          </h2>
          <div className="space-y-4">
            <FaqCard 
              question="How hard is it to set up?"
              answer="Super easy! We integrate with your existing systems and handle all the heavy lifting."
              icon={<ArrowRight className="text-blue-500" />}
            />
            <FaqCard 
              question="Is patient data secure?"
              answer="Absolutely! We're fully HIPAA-compliant with end-to-end encryption."
              icon={<Lock className="text-green-500" />}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Practice?</h3>
          <button className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:bg-blue-100 flex items-center mx-auto mb-8">
            Schedule Your Free Demo <ArrowRight className="ml-2" />
          </button>
          <div className="flex items-center justify-center gap-4">
            <Mail className="w-6 h-6" />
            <span>info@yourplatform.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
const ProblemCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SolutionCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1 transition-transform">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <Star className="text-yellow-400 mb-4" />
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <div className="font-semibold">{author}</div>
    <div className="text-gray-500">{role}</div>
  </div>
);

const FaqCard = ({ question, answer, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{question}</h3>
    </div>
    <p className="text-gray-600 ml-8">{answer}</p>
  </div>
);
