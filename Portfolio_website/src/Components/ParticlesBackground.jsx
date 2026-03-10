import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      className="fixed top-0 left-0 w-full h-full -z-10"
      init={particlesInit}
      options={{
        background: { color: { value: "#0f172a" } },
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff" },
          move: { enable: true, speed: 2 }
        }
      }}
    />
  );
};

export default ParticlesBackground;