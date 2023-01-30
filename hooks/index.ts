import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useAnimated = () => {
  const { ref, inView } = useInView();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  return { ref, animated };
};
