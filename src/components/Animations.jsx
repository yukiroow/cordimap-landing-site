import { useEffect, useRef, useState } from "react";

/* Reveal */
export const Reveal = ({ delay = 0, className = "", children }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setInView(true);
      return;
    }

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el); // one-time animation
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className || "",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* Show navigation bar after landing page */
export const useScrolledPastLanding = (landingRef) => {
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    const handle = () => {
      const h = landingRef.current?.offsetHeight ?? 0;
      setShowUI(window.scrollY > h);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [landingRef]);

  return showUI;
};

/* Hide navigation bar when title is near */
export const useActiveSection = (
  deps = [],
  options = { threshold: 0.25, rootMargin: "-150px 0px 0px 0px" }
) => {
  const [activeSection, setActiveSection] = useState(null);
  const lastIdRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        if (id && id !== lastIdRef.current) {
          lastIdRef.current = id;
          setActiveSection(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    }, options);

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, deps);

  return activeSection;
};

/* Hide navigation bar during title */
export const useHideNavOnTitle = (
  selector = ".section-title",
  offsetPx = 120
) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handle = () => {
      const titles = document.querySelectorAll(selector);
      let shouldHide = false;
      titles.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top >= 0 && r.top <= offsetPx) shouldHide = true;
      });
      setHide(shouldHide);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [selector, offsetPx]);

  return hide;
};

export const useEntered = () => {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return entered;
};
