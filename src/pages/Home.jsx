import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* 1. Theme Toggle 渲染主题 切换主题 */}
            <ThemeToggle />

            {/* 2. background effect 网页中显示的流动星星 流星雨*/}
            <StarBackground />

            {/* 3. Navbar 导航栏 可以点击到不同的网页上 */}
            <Navbar />

            {/* 4. Main Content about/skill/project/etc */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* 5. footer */}
            <Footer />
        </div>
    );
};
