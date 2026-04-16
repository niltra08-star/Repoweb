import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-24 flex flex-col ${align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left"}`}>
      <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-4 text-charcoal leading-tight">
        {title}
      </h2>
      <div className="flex items-center gap-4">
        {align !== "center" && align !== "right" && (
          <div className="w-12 h-px bg-sand rounded-full" />
        )}
        {subtitle && (
          <p className="font-body text-charcoal/70 text-lg md:text-xl font-light uppercase tracking-widest">
            {subtitle}
          </p>
        )}
        {(align === "center" || align === "right") && (
          <div className="w-12 h-px bg-sand rounded-full" />
        )}
      </div>
    </div>
  );
}
