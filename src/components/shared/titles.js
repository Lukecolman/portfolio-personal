// Titles.js
import React from "react";

// WORK TITLE
export const WorkTitle = () => {
  return (
    <div className="select-none w-full text-center mt-20 mb-14 flex flex-col relative justify-center items-center overflow-x-hidden overflow-y-hidden">
      <span className="text-[7.7rem] leading-tight font-noto font-black text-lk-red-50 text-nowrap items-center tracking-[-0.02em] pb-3 md:text-[447.22px]">
        <span className="japanese-letter2">入</span>
        <span className="japanese-letter2">選</span>
        <span className="japanese-letter2">作</span>
        <span className="japanese-letter2">品</span>
      </span>
      <div className="flex flex-col absolute overflow-y-hidden">
        <span
          id="selected2"
          className="font-crimson text-[1.7rem] font-semibold -mb-5 md:text-[65px] md:mb-[-4.5rem] overflow-y-hidden"
        >
          selected
        </span>
        <h2 id="works2" className="font-haetten text-8xl md:text-[287.55px]">
          WORKS
        </h2>
      </div>
    </div>
  );
};

// TECH MARQUEE TITLE
export const TechMarqueeTitle = () => {
  return (
    <div className="w-full text-center mt-40 mb-5 flex flex-col relative justify-center items-center">
      <div className="pl-4 text-6xl leading-tight font-noto font-black text-lk-red-50 text-nowrap items-center tracking-[-0.02em] absolute -top-8 -z-10 md:text-[140px] md:-top-20 md:pl-6">
        <span className="japanese-letter3">技</span>
        <span className="japanese-letter3">術</span>
        <span className="japanese-letter3">ス</span>
        <span className="japanese-letter3">タ</span>
        <span className="japanese-letter3">ッ</span>
        <span className="japanese-letter3">ク</span>
      </div>
      <h2 className="italic font-extrabold flex flex-col text-5xl md:text-[104px]">
        TECH-STACK
      </h2>
    </div>
  );
};

// EXPERIENCE HISTORY TITLE
export const ExperienceHistoryTitle = () => {
  return (
    <div className="select-none w-full text-left mt-40 flex relative justify-left items-left overflow-visible px-sm md:mt-64 lg:px-md lg:max-w-[2244px]">
      <div className="text-7xl font-noto font-black text-lk-red-50 overflow-visible text-nowrap absolute -top-4 pb-3 -z-10 md:text-9xl md:-top-10">
        <span className="japanese-letter">経</span>
        <span className="japanese-letter">験</span>
        <span className="japanese-letter">履</span>
        <span className="japanese-letter">歴</span>
      </div>
      <h2 className="font-poppins font-extrabold italic flex flex-col text-6xl md:text-[104px]">
        <span className="font-crimson not-italic font-semibold text-4xl pl-1 md:text-[62px] md:pl-3 md:pb-1">
          EXPERIENCE
        </span>
        HISTORY
      </h2>
      <img
        src="/ico.svg"
        className="h-6 text-right flex ml-auto mb-[0.53rem] self-end md:h-16 md:mb-[1.3rem]"
        alt="*"
      />
    </div>
  );
};
