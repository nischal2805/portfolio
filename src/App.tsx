import { AchievementsProvider } from './context/AchievementsContext';
import Nav from './components/Nav';
import XPBar from './components/XPBar';
import AchievementToastStack from './components/AchievementToast';
import HeroCharacterCard from './components/HeroCharacterCard';
import OriginStory from './components/OriginStory';
import SkillTree from './components/SkillTree';
import QuestLog from './components/QuestLog';
import GuildHall from './components/GuildHall';
import Footer from './components/Footer';

function App() {
  return (
    <AchievementsProvider>
      <div className="min-h-screen">
        <XPBar />
        <Nav />
        <HeroCharacterCard />
        <OriginStory />
        <SkillTree />
        <QuestLog />
        <GuildHall />
        <Footer />
        <AchievementToastStack />
      </div>
    </AchievementsProvider>
  );
}

export default App;
