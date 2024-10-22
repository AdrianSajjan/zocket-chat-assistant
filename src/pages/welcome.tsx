import { ArrowUpIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const tags = [
  {
    name: "Meta Ads",
    key: "meta",
    icon: "https://web.zocket.com/images/navigation/meta.png",
  },
  {
    name: "Google Ads",
    key: "google",
    icon: "https://web.zocket.com/images/navigation/google.png",
  },
  {
    name: "Linkedin Ads",
    key: "linkedin",
    icon: "https://web.zocket.com/images/navigation/linkedin.svg",
  },
  {
    name: "Tiktok Ads",
    key: "tiktok",
    icon: "https://web.zocket.com/images/navigation/tiktok.png",
  },
  {
    name: "More",
    key: "more",
  },
];

export function WelcomeScreen() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSendMessage = () => {
    navigate({ to: "/chat", search: { query } });
  };

  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <section className="text-foreground flex flex-col items-center justify-center h-full w-full gap-7 relative">
      <h1 className="text-2xl font-semibold">What can I help you with today?</h1>
      <div className="w-full max-w-3xl relative flex items-center justify-center">
        <Input placeholder="Type your prompt or ask any query" className="h-12 bg-card rounded-full pl-6 pr-16" value={query} onKeyDown={handlePressEnter} onChange={handleChangeQuery} />
        <Button className="absolute right-2 rounded-full size-8" size="icon" disabled={!query.length} onClick={handleSendMessage}>
          <ArrowUpIcon strokeWidth={3} />
        </Button>
      </div>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <Button key={tag.key} variant="outline" className={cn("gap-2 rounded-full pr-4", tag.icon ? "pl-2" : "pl-4")}>
            {tag.icon ? <img src={tag.icon} className="size-6" /> : null}
            <span className="text-foreground/70 font-normal text-sm">{tag.name}</span>
          </Button>
        ))}
      </div>
      <Button className="fixed bottom-6 right-6 rounded-full size-8" size="icon" variant="outline">
        <span>?</span>
      </Button>
    </section>
  );
}
