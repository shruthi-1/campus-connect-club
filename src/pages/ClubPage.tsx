
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { getClubBySlug } from "@/data/clubs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClubHeader from "@/components/clubs/ClubHeader";
import ClubCategories from "@/components/clubs/ClubCategories";
import ClubCoordinators from "@/components/clubs/ClubCoordinators";
import ClubActivities from "@/components/clubs/ClubActivities";
import ClubRegistration from "@/components/clubs/ClubRegistration";

const ClubPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const club = slug ? getClubBySlug(slug) : undefined;
  
  if (!club) {
    return <Navigate to="/404" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ClubHeader club={club} />
        <ClubCategories club={club} />
        <ClubCoordinators club={club} />
        <ClubActivities club={club} />
        <ClubRegistration club={club} />
      </main>
      <Footer />
    </div>
  );
};

export default ClubPage;
