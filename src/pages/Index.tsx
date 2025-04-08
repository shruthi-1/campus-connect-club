
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ClubsSection from "@/components/home/ClubsSection";
import CollegeInfoSection from "@/components/home/CollegeInfoSection";
import CoordinatorsSection from "@/components/home/CoordinatorsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import ContactSection from "@/components/home/ContactSection";
import UpdatesSection from "@/components/home/UpdatesSection";
import NotificationsSection from "@/components/home/NotificationsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <UpdatesSection />
        <ClubsSection />
        <CollegeInfoSection />
        <CoordinatorsSection />
        <ReviewsSection />
        <AdvantagesSection />
        <NotificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
