import React, { useState } from "react";
import Faq from "./Faq";
import data from "../data.json";
import Title from "./Title";
import Slider from './Slider'

function Faqs() {
  const [faqs, setfaqs] = useState(data);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="faqs">
      <Title title="F A Q" />

      {faqs.map((faq, i) => (
        <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} key={i} />
      ))}

      <Slider />
    </div>
  );
}

export default Faqs;
