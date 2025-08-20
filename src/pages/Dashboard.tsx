import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [tasks] = useState([
    "Task 1",
    "Task 1", 
    "Task 1",
    "Task 1"
  ]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-foreground">PROJECT TITLE</h1>
        
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-neon-blue text-black font-semibold">FE</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-neon-blue font-medium">Frank Esteban</p>
            <p className="text-muted-foreground text-sm">UX/UI Designer</p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="bg-card rounded-3xl p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-full"
            classNames={{
              months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              head_row: "",
              head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
              day: "h-8 w-8 p-0 font-normal hover:bg-accent hover:text-accent-foreground aria-selected:opacity-100",
              day_range_end: "day-range-end",
              day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
              day_today: "bg-accent text-accent-foreground",
              day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
              day_disabled: "text-muted-foreground opacity-50",
              day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
            }}
          />
        </div>

        {/* Task Progress and Clock */}
        <div className="space-y-6">
          {/* Task Completion */}
          <div className="bg-card rounded-3xl p-6 text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="hsl(var(--muted))"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="hsl(var(--neon-green))"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${32 * 2.51} ${(100 - 32) * 2.51}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-foreground">32%</span>
              </div>
            </div>
            <p className="text-foreground font-medium mb-1">Task Completed</p>
            <p className="text-muted-foreground text-sm">This statistic may take several minutes to update</p>
            <div className="mt-3 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-neon-green mr-2"></div>
              <span className="text-sm text-muted-foreground">✓</span>
            </div>
          </div>

          {/* Clock */}
          <div className="bg-card rounded-3xl p-6 flex items-center justify-center">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--muted))" strokeWidth="2"/>
                <circle cx="50" cy="50" r="2" fill="hsl(var(--foreground))"/>
                {/* Hour markers */}
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="10"
                    x2="50"
                    y2="15"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="2"
                    transform={`rotate(${i * 30} 50 50)`}
                  />
                ))}
                {/* Clock hands */}
                <line x1="50" y1="50" x2="50" y2="25" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="50" x2="65" y2="50" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* To-do List */}
        <div className="bg-card rounded-3xl p-6">
          <h3 className="text-xl font-bold text-foreground mb-6">To-do List</h3>
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-muted flex-shrink-0"></div>
                <span className="text-foreground font-medium">{task}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="bg-card rounded-3xl p-6 flex items-center justify-center">
          <p className="text-foreground text-center font-medium">
            Some Motivational text or quotes
          </p>
        </div>

        {/* Sticky Notes */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Blue Note */}
          <div className="bg-neon-blue rounded-3xl p-6 text-black">
            <p className="text-sm leading-relaxed">
              Figma notes is a small digital note inform of sticky note/post-it note which can be attached to design documents in Figma.
            </p>
          </div>

          {/* Purple Note */}
          <div className="bg-neon-purple rounded-3xl p-6 text-white">
            <p className="text-sm leading-relaxed">
              Figma notes is a small digital note inform of sticky note/post-it note which can be attached to design documents in Figma.
            </p>
          </div>

          {/* Red/Orange Note */}
          <div className="bg-gradient-to-br from-red-400 to-orange-400 rounded-3xl p-6 text-white">
            <p className="text-sm leading-relaxed">
              Figma notes is a small digital note inform of sticky note/post-it note which can be attached to design documents in Figma.
            </p>
          </div>
        </div>

        {/* I am Stuck Button */}
        <div className="flex items-end justify-end">
          <Badge className="bg-neon-purple text-white px-6 py-3 text-sm font-medium rounded-2xl">
            I am Stuck
          </Badge>
        </div>

        {/* New Note */}
        <div className="border-2 border-dashed border-muted rounded-3xl p-6 flex items-center justify-center text-muted-foreground">
          + New Note
        </div>
      </div>
    </div>
  );
};

export default Dashboard;