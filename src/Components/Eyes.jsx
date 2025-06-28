import { useEffect, useState } from "react";

const Eyes = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // distance from screen centre
      const deltaX = clientX - window.innerWidth / 2;
      const deltaY = clientY - window.innerHeight / 2;

      // y first, x second ⟶ “atan2(y, x)”; convert to degrees
      const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setAngle(newAngle-180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove); // 🧹 cleanup
  }, []);

  // common pupil style (reuse for both eyes)
  const pupilStyle = {
    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
  };

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="relative bg-green-900 w-[40vw] h-[34vw] flex justify-center items-center">
        {/* Eyes container */}
        <div className="flex gap-10">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center h-48 w-44 bg-zinc-100 rounded-full"
            >
              <div className="relative h-2/3 w-2/3 bg-black rounded-full">
                {/* pupil */}
                <div
                  className="absolute top-1/2 left-1/2 w-full h-10"
                  style={pupilStyle}
                >
                  <div className="h-10 w-10 bg-zinc-100 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eyes;
