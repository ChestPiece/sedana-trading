import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Presence } from "@/components/sections/Presence";
import { Solutions } from "@/components/sections/Solutions";
import { Trust } from "@/components/sections/Trust";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <Solutions />
      <Capabilities />
      <Industries />
      <Presence />
      <Gallery />
      <Contact />
    </>
  );
}
