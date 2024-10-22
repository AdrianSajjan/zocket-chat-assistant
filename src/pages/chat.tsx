import { Typewriter } from "@/components/typewriter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useSearch } from "@tanstack/react-router";
import { ArrowUpIcon, PaperclipIcon, XIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Message = TextMessage | ImageMessage | CustomMessage;

interface Steps extends Omit<Message, "sender"> {
  wait: number;
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
  body: React.ReactNode;
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

  const [query, setQuery] = useState("");
  const [media, setMedia] = useState<ChatMedia | null>(null);
  const [messages, setMessages] = useState<Message[]>([{ sender: "user", type: "text", text: search.query }]);

  const container = useRef<HTMLDivElement>(null);

  const steps: Steps[] = useMemo(() => {
    return [
      {
        text: "What is the name of the product you want to advertise?",
        type: "text",
        wait: 1500,
      },
      {
        text: "What is the description of the product you want to advertise?",
        type: "text",
        wait: 1500,
      },
      {
        text: "Provide the image of the product you want to advertise",
        type: "text",
        wait: 1500,
      },
      {
        text: "Here are the generated meta adcopies",
        body: (
          <div className="flex gap-3 overflow-auto max-w-2xl mt-4 scrollbar-hidden">
            <div className="w-64 bg-red-100 h-96 shrink-0 rounded-xl">adcopy 1</div>
            <div className="w-64 bg-red-100 h-96 shrink-0 rounded-xl">adcopy 2</div>
            <div className="w-64 bg-red-100 h-96 shrink-0 rounded-xl">adcopy 3</div>
          </div>
        ),
        type: "custom",
        wait: 5000,
      },
      {
        text: "Here are the recommended settings for targeting",
        body: <div></div>,
        type: "custom",
        wait: 3000,
      },
      {
        text: "Your campaign for meta has been launched successfully",
        type: "text",
        wait: 3000,
      },
      {
        text: "Here are the generated google adcopies",
        body: <div className="flex gap-3 overflow-auto max-w-2xl mt-4 scrollbar-hidden"></div>,
        type: "custom",
        wait: 3000,
      },
      {
        text: "Here are the recommended keywords for your campaign",
        body: <div></div>,
        type: "custom",
        wait: 3000,
      },
      {
        text: "Your campaign for google has been launched successfully",
        type: "text",
        wait: 1500,
      },
      {
        text: "Here is how your latest campaign is performing",
        body: (
          <ul>
            <li>
              <Typewriter text="lorem ipsum - 1" delay={2000} />
            </li>
            <li>
              <Typewriter text="lorem ipsum - 2" delay={2200} />
            </li>
            <li>
              <Typewriter text="lorem ipsum - 3" delay={2400} />
            </li>
            <li>
              <Typewriter text="lorem ipsum - 4" delay={2600} />
            </li>
          </ul>
        ),
        type: "custom",
        wait: 5000,
      },
      {
        text: "Here are the latest ads from Adidas",
        body: <div className="flex gap-3 overflow-auto max-w-2xl mt-4 scrollbar-hidden"></div>,
        type: "custom",
        wait: 3000,
      },
    ];
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => container.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" }), 100);

    const { wait, ...message } = steps[step];
    const timeout = setTimeout(() => {
      setMessages((state) => [...state, { ...message, sender: "bot" } as Message]);
      setLoading(false);
      setTimeout(() => container.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" }), 100);
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

    setTimeout(() => container.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" }), 100);
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
      <div ref={container} className="flex flex-col w-full my-6 flex-1 max-w-5xl overflow-auto scrollbar-hidden gap-4 px-4">
        {messages.map((message, index) => (
          <ChatBubble key={index} {...message} />
        ))}
        {isLoading ? <Thinking /> : null}
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

    case "image":
      return (
        <div className={cn(message.sender === "user" ? "self-end" : "self-start")}>
          {message.text ? (
            <div className={cn("text-sm text-foreground/80 bg-accent rounded-2xl rounded-tr-none px-5 py-3")}>
              <span>{message.text}</span>
            </div>
          ) : null}
          <img src={message.image} className="h-40 w-auto" />
        </div>
      );

    case "custom":
      return (
        <div className={cn(message.sender === "user" ? "self-end" : "self-start")}>
          {message.text ? (
            <div className={cn("text-sm text-foreground/80 bg-accent rounded-2xl rounded-tr-none px-5 py-3")}>
              <span>{message.text}</span>
            </div>
          ) : null}
          {message.body}
        </div>
      );
    default:
      throw new Error("Invalid message type");
  }
}

function AgentChatBubble({ message }: { message: Message }) {
  const [isComplete, setComplete] = useState(!message.text);

  switch (message.type) {
    case "text":
      return (
        <div className={cn("text-sm text-foreground/80 bg-accent rounded-2xl rounded-tl-none px-5 py-3", message.sender === "user" ? "self-end" : "self-start")}>
          <Typewriter text={message.text} />
        </div>
      );

    case "image":
      return (
        <div className={cn(message.sender === "user" ? "self-end" : "self-start")}>
          {message.text ? (
            <div className={cn("text-sm text-foreground/80 bg-accent rounded-2xl rounded-tl-none px-5 py-3 w-fit")}>
              <Typewriter onComplete={() => setComplete(true)} text={message.text} />
            </div>
          ) : null}
          {isComplete ? (
            <span className="animate-in fade-in">
              <img src={message.image} className="h-40 w-auto" />
            </span>
          ) : null}
        </div>
      );

    case "custom":
      return (
        <div className={cn(message.sender === "user" ? "self-end" : "self-start")}>
          {message.text ? (
            <div className={cn("text-sm text-foreground/80 bg-accent rounded-2xl rounded-tl-none px-5 py-3 w-fit")}>
              <Typewriter onComplete={() => setComplete(true)} text={message.text} />
            </div>
          ) : null}
          {isComplete ? <span className="animate-in fade-in">{message.body}</span> : null}
        </div>
      );

    default:
      throw new Error("Invalid message type");
  }
}

function Thinking() {
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
