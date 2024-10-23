import { GoogleDiscoverAdsCard, MetaDiscoverAdsCard } from "@/components/cards/discover-ads";
import GoogleCreativeCard from "@/components/cards/google-creative";
import MetaCreativeCard from "@/components/cards/meta-creative";
import { Typewriter, TypewriterData } from "@/components/typewriter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { googleCreatives, googleDiscoverAds, metaCreatives, metaDiscoverAds } from "@/constants/creatives";
import { targeting } from "@/constants/targeting";
import { cn } from "@/lib/utils";
import { useSearch } from "@tanstack/react-router";
import { ArrowUpIcon, CheckIcon, PaperclipIcon, XIcon } from "lucide-react";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Confetti from "react-confetti";

type Message = TextMessage | ImageMessage | CustomMessage;

interface Steps extends Omit<Message, "sender"> {
  wait: number;
  loader: "text" | "steps";
  steps?: string[];
  auto?: boolean;
  confetti?: boolean;
}

interface TextMessage {
  sender: "user" | "bot";
  text: string;
  type: "text";
}

interface ImageMessage {
  sender: "user" | "bot";
  text?: string;
  image: string;
  type: "image";
}

interface CustomMessage {
  sender: "user" | "bot";
  text?: string;
  body: TypewriterData;
  animated?: React.ReactNode;
  type: "custom";
}

interface ChatMedia {
  file: File;
  url: string;
}

export function ChatScreen() {
  const search = useSearch({ from: "/chat" });

  const [step, setStep] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isConfettiVisible, setConfettiVisible] = useState(false);

  const [query, setQuery] = useState("");
  const [media, setMedia] = useState<ChatMedia | null>(null);
  const [messages, setMessages] = useState<Message[]>([{ sender: "user", type: "text", text: search.query }]);

  const container = useRef<HTMLDivElement>(null);

  const steps: Steps[] = useMemo(() => {
    return [
      {
        body: { type: "p", text: "Here are the generated meta adcopies" },
        animated: (
          <div className="flex gap-3 overflow-auto w-full mt-4 scrollbar-hidden">
            {metaCreatives.map((creative, index) => (
              <div key={index} className="w-fit h-fit shrink-0 rounded-xl">
                <MetaCreativeCard creative={creative.creative} brand={creative.brand} />
              </div>
            ))}
          </div>
        ),
        type: "custom",
        wait: 5000,
        loader: "steps",
        steps: ["Generating ads from the product image", "Generating text content from the product details"],
        auto: true,
      },
      {
        body: targeting,
        type: "custom",
        wait: 3000,
        loader: "steps",
        steps: ["Generating targeting settings based on the product and adcreatives", "Compiling the relevant settings based on the results"],
      },
      {
        body: { type: "p", text: "Your campaign for meta has been launched successfully 🎉 🎊" },
        type: "custom",
        wait: 6000,
        confetti: true,
        loader: "steps",
        steps: ["Setting up the adsets", "Publishing the ads", "Launching the campaign"],
      },
      {
        body: { type: "p", text: "Here are the generated google adcopies" },
        animated: (
          <div className="flex gap-3 overflow-auto w-full mt-4 scrollbar-hidden animate-in fade-in duration-500">
            {googleCreatives.map((creative, index) => (
              <div key={index} className="w-fit h-fit shrink-0 rounded-xl">
                <GoogleCreativeCard {...creative} />
              </div>
            ))}
          </div>
        ),
        type: "custom",
        wait: 4000,
        loader: "steps",
        auto: true,
        steps: ["Generating adcreatives from the product image", "Generating text content from the product details"],
      },
      // {
      //   text: "Here are the recommended keywords for your campaign",
      //   body: {},
      //   type: "custom",
      //   wait: 3000,
      //   loader: "steps",
      //   steps: ["Generating keywords based on the product and ads"],
      // },
      {
        body: { type: "p", text: "Your campaign for meta has been launched successfully 🎉 🎊" },
        type: "custom",
        wait: 3000,
        confetti: true,
        loader: "steps",
        steps: ["Setting up the adsets", "Publishing the ads", "Launching the campaign"],
      },
      // {
      //   body: (
      //     <ul>
      //       <li></li>
      //       <li></li>
      //       <li></li>
      //       <li></li>
      //       <li></li>
      //     </ul>
      //   ),
      //   type: "custom",
      //   wait: 5000,
      //   loader: "steps",
      //   steps: ["Fetching the latest data from the campaign", "Analyzing the data to generate insights"],
      // },
      // {
      //   text: "Here is the generated report compiling all the latest data from your last campaign",
      //   image: "/images/pdf-thumbnail.webp",
      //   type: "image",
      //   wait: 4000,
      //   loader: "steps",
      //   steps: ["Generating the report", "Compiling the data", "Sending the report"],
      // },
      {
        body: { type: "p", text: "Here are the latest ads being run by adidas" },
        animated: (
          <div className="flex gap-3.5 overflow-auto max-w-2xl mt-4 scrollbar-hidden">
            {metaDiscoverAds.map((ads, index) => (
              <div key={index} className="w-fit h-fit shrink-0 rounded-xl">
                <MetaDiscoverAdsCard {...ads} />
              </div>
            ))}
          </div>
        ),
        type: "custom",
        wait: 4000,
        loader: "steps",
        steps: ["Fetching the latest ads from Adidas", "Compiling the top ads from Adidas"],
      },
      {
        text: "Here are the latest ads from Adidas",
        body: (
          <div className="flex gap-3.5 overflow-auto w-full mt-4 scrollbar-hidden">
            {googleDiscoverAds.map((ads, index) => (
              <div key={index} className="w-fit h-fit shrink-0 rounded-xl">
                <GoogleDiscoverAdsCard {...ads} />
              </div>
            ))}
          </div>
        ),
        type: "custom",
        wait: 4000,
        loader: "steps",
        steps: ["Fetching the latest ads from Adidas", "Compiling the top ads from Adidas"],
      },
    ];
  }, []);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(() => {
      setTimeout(() => element.lastElementChild?.scrollIntoView({ behavior: "smooth" }), 250);
    });
    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => container.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" }), 150);

    const { wait, confetti, auto, ...message } = steps[step];
    const timeout = setTimeout(() => {
      setMessages((state) => [...state, { ...message, sender: "bot" } as Message]);
      setLoading(false);
      setTimeout(() => container.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" }), 150);
      if (confetti) setTimeout(() => setConfettiVisible(true), 500);
      if (auto) setTimeout(() => setStep((state) => state + 1), 500);
    }, wait);

    return () => {
      clearTimeout(timeout);
    };
  }, [steps, step, container]);

  const handleSendMessage = () => {
    if ((!media && !query.length) || isLoading) return;

    if (media) {
      setMessages((state) => state.concat([{ text: query, image: media.url, sender: "user", type: "image" }]));
    } else {
      setMessages((state) => state.concat([{ text: query, sender: "user", type: "text" }]));
    }

    setQuery("");
    setMedia(null);

    setTimeout(() => container.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" }), 150);
    setTimeout(() => setStep((state) => state + 1), 300);
  };

  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter" || (!query.length && !media) || isLoading) return;
    handleSendMessage();
  };

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleChangeMedia = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) setMedia({ file: file, url: URL.createObjectURL(file) });
  };

  return (
    <section className="flex flex-col items-center h-full w-full pb-6">
      {isConfettiVisible ? <Confetti height={window.innerHeight} width={window.innerWidth} recycle={false} onConfettiComplete={() => setConfettiVisible(false)} /> : null}
      <div id="container" ref={container} className="flex flex-col w-full my-6 flex-1 max-w-5xl overflow-auto scrollbar-hidden gap-8 px-4">
        {messages.map((message, index) => (
          <ChatBubble key={index} {...message} />
        ))}
        {isLoading ? (
          <div className="flex gap-4">
            <img src="/zocket.svg" className="h-10 w-10 rounded-full" />
            <div className="mt-5">
              <Loader type={steps[step].loader} wait={steps[step].wait} steps={steps[step].steps} />
            </div>
          </div>
        ) : null}
      </div>
      <footer className="w-full flex flex-col max-w-5xl shrink-0 px-4 gap-3">
        {media ? (
          <div className="flex w-full px-4">
            <div className="relative">
              <img src={media.url} className="w-auto h-40 rounded-xl" />
              <Button size="icon" className="absolute right-1.5 top-1.5 size-6 rounded-full">
                <XIcon />
              </Button>
            </div>
          </div>
        ) : null}
        <div className="relative w-full flex items-center justify-center">
          <Button variant="ghost" asChild className="absolute left-2 rounded-full size-8 cursor-pointer" size="icon" disabled={!query.length || isLoading} onClick={handleSendMessage}>
            <label>
              <input type="file" className="hidden" onChange={handleChangeMedia} />
              <PaperclipIcon color="#444444" strokeWidth={2} />
            </label>
          </Button>
          <Input placeholder="Message Zocket AI Assistant" className="h-12 bg-card rounded-full px-12" value={query} onKeyDown={handlePressEnter} onChange={handleChangeQuery} />
          <Button className="absolute right-2 rounded-full size-8" size="icon" disabled={(!query.length && !media) || isLoading} onClick={handleSendMessage}>
            <ArrowUpIcon strokeWidth={3} />
          </Button>
        </div>
      </footer>
    </section>
  );
}

function ChatBubble(message: Message) {
  switch (message.sender) {
    case "user":
      return <UserChatBubble message={message} />;
    case "bot":
      return <AgentChatBubble message={message} />;
    default:
      throw new Error("Invalid sender");
  }
}

function UserChatBubble({ message }: { message: Message }) {
  switch (message.type) {
    case "text":
      return (
        <div className={cn("text-sm text-foreground/80 bg-accent rounded-2xl rounded-tr-none px-5 py-3", message.sender === "user" ? "self-end" : "self-start")}>
          <span>{message.text}</span>
        </div>
      );

    default:
      throw new Error("Invalid message type");
  }
}

function AgentChatBubble({ message }: { message: Message }) {
  const [isComplete] = useState(true);

  switch (message.type) {
    case "custom":
      return (
        <div className={cn(message.sender === "user" ? "self-end" : "self-start")}>
          <div className="flex gap-4">
            <img src="/zocket.svg" className="h-10 w-10 rounded-full" />
            <div className="flex-1 pt-5">
              {message.body ? <Typewriter data={message.body} /> : null}
              {message.animated ? <div className={cn("transition-opacity duration-500 animate-in fade-in", isComplete ? "opacity-100" : "opacity-0")}>{message.animated}</div> : null}
            </div>
          </div>
        </div>
      );

    default:
      throw new Error("Invalid message type");
  }
}

function Loader({ type, wait, steps }: { type: "text" | "steps"; wait: number; steps?: string[] }) {
  switch (type) {
    case "text":
      return <ThinkingLoader />;
    case "steps":
      return <StepsLoader wait={wait} steps={steps || []} />;
    default:
      throw new Error("Invalid loader type");
  }
}

function ThinkingLoader() {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((state) => (state + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-foreground/80 bg-accent rounded-2xl rounded-tl-none px-5 py-3 self-start">
      <span>Thinking</span>
      {Array.from({ length: dots }).map((_, index) => (
        <span key={index}>.</span>
      ))}
    </div>
  );
}

function StepsLoader({ steps, wait }: { steps: string[]; wait: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (index <= steps.length) {
      timeout = setTimeout(() => {
        setIndex((state) => state + 1);
      }, wait / steps.length - 100);
    }
    return () => clearTimeout(timeout);
  }, [steps, wait, index]);

  return (
    <div className="text-sm self-start flex flex-col gap-1.5">
      {steps.map((step, idx) => (
        <Fragment key={idx}>
          <div className="flex items-center gap-1.5">
            {idx === index ? (
              <Spinner />
            ) : idx < index ? (
              <span className="h-4 w-4 rounded-full bg-green-600 grid place-items-center">
                <CheckIcon color="white" size={12} strokeWidth={2.5} />
              </span>
            ) : (
              <span className="h-4 w-4 rounded-full border-2 border-gray-200" />
            )}
            <p className="text-xs">{step}</p>
          </div>
          {idx < steps.length - 1 ? <div className="bg-gray-300 w-px h-3 ml-1.5" /> : null}
        </Fragment>
      ))}
    </div>
  );
}
