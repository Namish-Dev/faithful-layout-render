import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StarLogo } from "@/components/StarLogo";

const Index = () => {
  const [projectIdea, setProjectIdea] = useState("");

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-background opacity-50"></div>
      
      {/* Header */}
      <header className="relative z-10 flex justify-end items-center p-6">
        <div className="flex gap-4">
          <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
            SIGNUP
          </Button>
          <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
            LOGIN
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
        {/* Logo */}
        <StarLogo className="mb-12" />

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 text-center">
          Project Zenith
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mb-16 leading-relaxed">
          Turn your ideas into actionable project plans with the power of AI.
        </p>

        {/* Input section */}
        <div className="w-full max-w-2xl space-y-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="e.g., Launch a new SaaS product"
              value={projectIdea}
              onChange={(e) => setProjectIdea(e.target.value)}
              className="w-full h-16 px-6 text-lg bg-card/80 backdrop-blur-sm border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <Button 
            size="lg"
            className="w-full h-16 text-lg font-semibold bg-gradient-button text-black hover:shadow-glow-cyan transition-all duration-300 rounded-2xl"
          >
            Generate Milestones
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;