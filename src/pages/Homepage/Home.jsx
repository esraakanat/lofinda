import React, { useState } from "react";
import Header from "../../ui/Header";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import BestSelling from "./components/BestSelling";
import Abt from "./components/Abt";
import Footer from "../../ui/Footer";
import Waitlist from "./components/Waitlist";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrap">
      <Header />
      {/* <Waitlist open={open} setOpen={setOpen} /> */}
      <Intro setOpen={setOpen} />
      <Stats />
      <BestSelling />
      <Abt />
      <Footer />
    </div>
  );
}
