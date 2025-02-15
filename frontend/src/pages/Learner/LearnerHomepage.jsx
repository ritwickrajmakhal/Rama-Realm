import Courses from "@/Components/LearnerComponents/Courses";
import Footer from "@/Components/LearnerComponents/Footer_learner";
import Learnernavbar from "@/Components/LearnerComponents/LearnerNavbar";
import Learner_hero from "@/Components/LearnerComponents/Learner_hero";
import GamificationBadge from "@/Components/LearnerComponents/Smallercomponents/GamificationBadge";
import DailyChallenge from "@/Components/LearnerComponents/Smallercomponents/DailyChallenge"; 

const LearnerHomepage = () => {
  return (
    <>
      <Learnernavbar /> 
      <Learner_hero />

      {/* Gamification Section */}
      <div className="container mx-auto px-4 py-8"> {/* Adjust container as needed */}
        <div className="flex flex-col md:flex-row justify-between gap-6"> {/* Use flexbox for layout */}
          <GamificationBadge xp={420} level={3} streak={5} />
          <DailyChallenge />
        </div>
      </div>

      <Courses />
      <Footer />
    </>
  );
};

export default LearnerHomepage;
