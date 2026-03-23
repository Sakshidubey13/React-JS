//import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";
//
//const ParticlesBackground = () => {
//
//  const particlesInit = async (main) => {
//    await loadFull(main);
//  };
//
//  return (
//    <Particles
//      id="tsparticles"
//      className="fixed top-0 left-0 w-full h-full -z-10"
//      init={particlesInit}
//      options={{
//        background: { color: { value: "#0f172a" } },
//        particles: {
//          number: { value: 80 },
//          color: { value: "#ffffff" },
//          links: { enable: true, color: "#ffffff" },
//          move: { enable: true, speed: 2 }
//        }
//      }}
//    />
//  );
//};
//
//export default ParticlesBackground;
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          color: { value: "#ff7a18" },
          links: {
            enable: true,
            distance: 150,
            color: "#ff7a18",
            opacity: 0.3
          },
          move: { enable: true, speed: 1 }
        }
      }}
    />

  );
};

export default ParticlesBackground;