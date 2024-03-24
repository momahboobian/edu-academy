import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subTitle: string;
}

export default function SectionHeading({
  title,
  subTitle,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <motion.h6
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {subTitle}
      </motion.h6>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
