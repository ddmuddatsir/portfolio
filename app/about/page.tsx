"use client";

import Lighting from "@/components/Lighting";
import Head from "next/head";
import AboutHeader from "@/components/about/AboutHeader";
import ProfileSection from "@/components/about/ProfileSection";
import JourneySection from "@/components/about/JourneySection";
import ExperienceSection from "@/components/about/ExperienceSection";
import BackgroundEffects from "@/components/about/BackgroundEffects";

const page = () => {
  return (
    <>
      <Head>
        <title>About Me - Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Profil seorang Software Engineer dengan latar belakang multimedia dan manajemen bisnis. Keahlian dalam UI/UX dan full-stack development."
        />
      </Head>

      <Lighting
        starCount={80}
        nebulaOpacity={0.15}
        starAnimRange={{ animY: [-2, 4], animX: [-1, 2] }}
      />

      <BackgroundEffects />

      <div className="relative md:px-24 py-20 min-h-screen text-white space-y-24">
        <AboutHeader />
        <ProfileSection />
        <JourneySection />
        <ExperienceSection />
      </div>
    </>
  );
};

export default page;
