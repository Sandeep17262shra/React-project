import { useRef, useState, useEffect } from "react";
import "./dragScroll.css";

export default function DragScroll({
  children,
  gap = "20px",
  height = "auto",
  sensitivity = 1.3,
  disableDragAbove = 2000,
  scrollAmount = 300, // buttons scroll by 300px
  showButtons = true,
  showProgress = true,
  className = "",
}) {
  const container = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [progress, setProgress] = useState(0);

  // Update progress bar
  const updateProgress = () => {
    const el = container.current;
    const pct = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setProgress(pct * 100);
  };

  useEffect(() => {
    const el = container.current;
    el.addEventListener("scroll", updateProgress);
    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  const startDrag = (x) => {
    setDragging(true);
    setStartX(x);
    setScrollLeft(container.current.scrollLeft);
    container.current.classList.add("dragging");
  };

  const stopDrag = () => {
    setDragging(false);
    container.current.classList.remove("dragging");
  };

  const onMouseDown = (e) => {
    if (window.innerWidth >= disableDragAbove) return;
    startDrag(e.pageX);
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    container.current.scrollLeft =
      scrollLeft - (e.pageX - startX) * sensitivity;
  };

  const onTouchStart = (e) => {
    if (window.innerWidth >= disableDragAbove) return;
    startDrag(e.touches[0].pageX);
  };

  const onTouchMove = (e) => {
    if (!dragging) return;
    container.current.scrollLeft =
      scrollLeft - (e.touches[0].pageX - startX) * sensitivity;
  };

  // Scroll button actions
  const scrollRight = () => {
    container.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  const scrollLeftFn = () => {
    container.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="container3" style={{ position: "relative", width: "100%" }}>
      {/* SCROLL PROGRESS BAR */}
      {showProgress && (
        <div className="scroll-progress3">
          <div
            className="scroll-progress-inner3"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* MAIN DRAG-SCROLL AREA */}
      <div
        ref={container}
        className={`drag-scroll3 ${className}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={stopDrag}
        style={{
          display: "flex",
          overflowX: "auto",
          gap,
          height,
          cursor: dragging ? "grabbing" : "grab",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </div>
    </div>
  );
}
