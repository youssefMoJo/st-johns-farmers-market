import React, { useRef, useEffect, useState } from "react";
import entrance from "../assets/market-360/entrance-360.jpg";
import hall from "../assets/market-360/hall-360.jpg";
import foodcourt from "../assets/market-360/foodcourt-360.jpg";

import close from "../assets/img/close.png"; // Close info panel
import collapse from "../assets/img/collapse.png"; // Collapse sidebar
import expand from "../assets/img/expand.png"; // Expand sidebar
import down from "../assets/img/down.png"; // Down arrow to look down
import fullscreen from "../assets/img/fullscreen.png"; // Fullscreen icon
import info from "../assets/img/info.png"; // i icon for info hotspot
import left from "../assets/img/left.png";
import link from "../assets/img/link.png"; // Link icon for link hotspot that takes the user to another pic
import minus from "../assets/img/minus.png"; // Zoom out icon
import pause from "../assets/img/pause.png"; // Pause icon for stopping autorotate
import play from "../assets/img/play.png"; // Play icon for starting autorotate
import plus from "../assets/img/plus.png"; // Zoom in icon
import right from "../assets/img/right.png";
import up from "../assets/img/up.png";
import windowed from "../assets/img/windowed.png"; // Exit fullscreen icon

const Marzipano = require("marzipano");

const MarketMap: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentScene, setCurrentScene] = useState<string>("entrance");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const viewerRefInternal = useRef<any>(null);
  const scenesRef = useRef<Map<string, any>>(new Map());
  const autorotateRef = useRef<any>(null);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [pressedDirection, setPressedDirection] = useState<string | null>(null);
  const [infoBoxVisible, setInfoBoxVisible] = useState<boolean>(false);
  const [infoBoxContent, setInfoBoxContent] = useState<{
    title: string;
    content: string;
  }>({ title: "", content: "" });

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = new Marzipano.Viewer(viewerRef.current);
    viewerRefInternal.current = viewer;

    const scenesData = [
      { id: "entrance", name: "Entrance", image: entrance },
      { id: "hall", name: "Hall", image: hall },
      { id: "foodcourt", name: "Foodcourt", image: foodcourt },
    ];

    const limiter = Marzipano.RectilinearView.limit.traditional(
      1024,
      Math.PI / 2
    );

    scenesData.forEach(({ id, image }) => {
      const source = Marzipano.ImageUrlSource.fromString(image);
      const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
      const view = new Marzipano.RectilinearView(
        { yaw: 0, pitch: 0, fov: Math.PI / 2 },
        limiter
      );

      const scene = viewer.createScene({
        source,
        geometry,
        view,
        pinFirstLevel: true,
      });

      // Wrap original switchTo to update currentScene state
      const originalSwitchTo = scene.switchTo.bind(scene);
      scene.switchTo = () => {
        originalSwitchTo();
        setCurrentScene(id);
      };

      scenesRef.current.set(id, scene);
    });

    // Helper to create hotspot elements
    function createHotspotElement(name: string, onClick: () => void) {
      const el = document.createElement("div");
      el.className = "hotspot";
      el.style.background = "red";
      el.style.color = "white";
      el.style.borderRadius = "5px";
      el.style.padding = "5px 10px";
      el.style.width = "max-content";
      el.style.cursor = "pointer";
      el.style.userSelect = "none";
      el.innerText = name;
      el.addEventListener("click", onClick);
      return el;
    }

    // Helper to create arrow hotspot elements with icons
    function createArrowHotspotElement(
      iconSrc: string,
      altText: string,
      onClick: () => void
    ) {
      const el = document.createElement("img");
      el.src = iconSrc;
      el.alt = altText;
      el.style.width = "50px";
      el.style.height = "50px";
      el.style.cursor = "pointer";
      el.style.userSelect = "none";
      el.style.filter = "drop-shadow(0 0 2px rgba(0,0,0,0.5))";
      el.addEventListener("click", onClick);
      return el;
    }

    // Helper to create info hotspot elements with icon
    function createInfoHotspotElement(onClick: () => void) {
      const el = document.createElement("img");
      el.src = info;
      el.alt = "Info";
      el.style.width = "50px";
      el.style.height = "50px";
      el.style.cursor = "pointer";
      el.style.userSelect = "none";
      el.style.filter = "drop-shadow(0 0 2px rgba(0,0,0,0.5))";
      el.addEventListener("click", onClick);
      return el;
    }

    // Add navigation hotspots with arrows and info hotspots for each scene

    // entrance → hall (arrow right)
    scenesRef.current
      .get("entrance")
      .hotspotContainer()
      .createHotspot(
        createArrowHotspotElement(link, "Go to Hall", () => {
          scenesRef.current.get("hall").switchTo();
        }),
        { yaw: 0, pitch: 0 }
      );

    // entrance info hotspot
    scenesRef.current
      .get("entrance")
      .hotspotContainer()
      .createHotspot(
        createInfoHotspotElement(() => {
          showInfoBox(
            "Entrance",
            "Welcome to the St. John's Farmers Market! This is the main entrance where you'll find our friendly staff and information about the market. Here you can pick up maps, learn about our vendors, and get directions to different areas of the market."
          );
        }),
        { yaw: Math.PI / 2, pitch: 0 }
      );

    // hall → entrance (arrow left)
    scenesRef.current
      .get("hall")
      .hotspotContainer()
      .createHotspot(
        createArrowHotspotElement(link, "Go to Entrance", () => {
          scenesRef.current.get("entrance").switchTo();
        }),
        { yaw: Math.PI, pitch: 0 }
      );

    // hall → foodcourt (arrow right)
    scenesRef.current
      .get("hall")
      .hotspotContainer()
      .createHotspot(
        createArrowHotspotElement(link, "Go to Foodcourt", () => {
          scenesRef.current.get("foodcourt").switchTo();
        }),
        { yaw: -Math.PI / 2, pitch: 0 }
      );

    // hall info hotspot
    scenesRef.current
      .get("hall")
      .hotspotContainer()
      .createHotspot(
        createInfoHotspotElement(() => {
          showInfoBox(
            "Main Market Hall",
            "This is the heart of our farmers market! Here you'll find fresh local produce, artisanal goods, and handmade crafts from our local vendors. The hall features a beautiful open layout with natural lighting, making it the perfect place to shop and discover unique local products."
          );
        }),
        { yaw: 0, pitch: 0.2 }
      );

    // foodcourt → hall (arrow left)
    scenesRef.current
      .get("foodcourt")
      .hotspotContainer()
      .createHotspot(
        createArrowHotspotElement(link, "Go to Hall", () => {
          scenesRef.current.get("hall").switchTo();
        }),
        { yaw: Math.PI, pitch: 0 }
      );

    // foodcourt info hotspot
    scenesRef.current
      .get("foodcourt")
      .hotspotContainer()
      .createHotspot(
        createInfoHotspotElement(() => {
          showInfoBox(
            "Food Court",
            "Take a break and enjoy delicious meals at our food court! We feature a variety of local food vendors offering everything from fresh sandwiches and salads to hot meals and beverages. It's the perfect spot to refuel while exploring the market."
          );
        }),
        { yaw: 0, pitch: 0 }
      );

    scenesRef.current.get("entrance").switchTo();

    // Initialize autorotate
    autorotateRef.current = Marzipano.autorotate({
      yawSpeed: 0.03,
      targetPitch: 0,
      targetFov: Math.PI / 2,
      pauseOnInteraction: true,
    });
    // Start auto-rotate by default
    viewer.startMovement(autorotateRef.current);
    viewer.setIdleMovement(1000, autorotateRef.current);

    return () => {
      viewer.destroy();
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const step = () => {
      if (pressedDirection && viewerRefInternal.current) {
        const scene = scenesRef.current.get(currentScene);
        if (!scene) return;
        const view = scene.view();
        const currentYaw = view.yaw();
        const currentPitch = view.pitch();
        const panStep = 0.005; // smaller for smooth movement

        switch (pressedDirection) {
          case "up":
            view.setPitch(currentPitch - panStep);
            registerInteraction();
            break;
          case "down":
            view.setPitch(currentPitch + panStep);
            registerInteraction();
            break;
          case "left":
            view.setYaw(currentYaw - panStep);
            registerInteraction();
            break;
          case "right":
            view.setYaw(currentYaw + panStep);
            registerInteraction();
            break;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [pressedDirection, currentScene]);

  // Handler to toggle fullscreen on containerRef.current
  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current && containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
        // setIsFullscreen(true); // Will be set by fullscreenchange event
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        // setIsFullscreen(false); // Will be set by fullscreenchange event
      }
    }
  };
  // Sync isFullscreen state with fullscreenchange event
  useEffect(() => {
    function handleFullscreenChange() {
      // Check if our container is currently fullscreen
      if (document.fullscreenElement === containerRef.current) {
        setIsFullscreen(true);
      } else {
        setIsFullscreen(false);
      }
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleRotation = () => {
    if (!viewerRefInternal.current) return;
    if (isRotating) {
      viewerRefInternal.current.stopMovement();
      setIsRotating(false);
    } else {
      viewerRefInternal.current.startMovement(autorotateRef.current);
      setIsRotating(true);
    }
  };

  const clickMove = (direction: "up" | "down" | "left" | "right") => {
    if (!viewerRefInternal.current) return;
    const scene = scenesRef.current.get(currentScene);
    if (!scene) return;
    const view = scene.view();

    let steps = 28; // number of frames to move (smoothness)
    const panStep = 0.01; // size of each step
    const animate = () => {
      if (steps <= 0) return;
      const currentYaw = view.yaw();
      const currentPitch = view.pitch();

      switch (direction) {
        case "up":
          view.setPitch(currentPitch - panStep);
          break;
        case "down":
          view.setPitch(currentPitch + panStep);
          break;
        case "left":
          view.setYaw(currentYaw - panStep);
          break;
        case "right":
          view.setYaw(currentYaw + panStep);
          break;
      }
      steps--;
      requestAnimationFrame(animate);
    };

    animate();
    registerInteraction(); // stop autorotation & restart idle timer
  };

  const registerInteraction = () => {
    if (viewerRefInternal.current && autorotateRef.current) {
      // Stop autorotate immediately
      viewerRefInternal.current.stopMovement();

      // Restart idle movement timer (so autorotate resumes after 6s)
      viewerRefInternal.current.setIdleMovement(1000, autorotateRef.current);

      // Update state
      setIsRotating(false);
    }
  };

  // Smooth zoom animation for click (not for hold)
  const clickZoom = (zoomIn: boolean) => {
    if (!viewerRefInternal.current) return;
    const scene = scenesRef.current.get(currentScene);
    if (!scene) return;
    const view = scene.view();
    let steps = 20; // frames
    const totalZoom = 2.2; // total zoom per click (adjust as needed)
    const zoomStep = totalZoom / steps;
    const minFov = 0.1;
    const maxFov = Math.PI / 2;

    function animate() {
      if (steps <= 0) return;
      let currentFov = view.fov();
      let newFov = zoomIn ? currentFov - zoomStep : currentFov + zoomStep;
      if (newFov < minFov) newFov = minFov;
      if (newFov > maxFov) newFov = maxFov;
      view.setFov(newFov);
      registerInteraction();
      steps--;
      requestAnimationFrame(animate);
    }
    animate();
  };

  const scenesData = [
    { id: "entrance", name: "Entrance" },
    { id: "hall", name: "Hall" },
    { id: "foodcourt", name: "Foodcourt" },
  ];

  const resetHideTimer = () => {
    setControlsVisible(true);
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    hideTimeout.current = setTimeout(() => {
      setControlsVisible(false);
    }, 5000);
  };

  const showInfoBox = (title: string, content: string) => {
    setInfoBoxContent({ title, content });
    setInfoBoxVisible(true);
  };

  const hideInfoBox = () => {
    setInfoBoxVisible(false);
  };

  useEffect(() => {
    resetHideTimer();
    const handleUserActivity = () => {
      resetHideTimer();
    };
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("touchstart", handleUserActivity);

    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("touchstart", handleUserActivity);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        height: "600px",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* containerRef wraps topbar, sidebar, and viewer for fullscreen */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseMove={resetHideTimer}
        onTouchStart={resetHideTimer}
      >
        {/* Top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "48px",
            background: "rgba(0,0,0,0.6)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            boxSizing: "border-box",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {/* Left: Sidebar toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              pointerEvents: "auto",
            }}
          >
            <button
              onClick={() => setSidebarOpen((open) => !open)}
              aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              style={{
                width: 32,
                height: 32,
                background: "rgba(24,24,24,0.7)",
                border: "none",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
                padding: 0,
                boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "rgba(40,40,40,0.85)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "rgba(24,24,24,0.7)")
              }
            >
              <img
                src={sidebarOpen ? collapse : expand}
                alt={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
                style={{ width: 18, height: 18, pointerEvents: "none" }}
              />
            </button>
          </div>
          {/* Center: Scene name */}
          <div
            style={{
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "bold",
              textAlign: "center",
              flex: 1,
              pointerEvents: "auto",
              userSelect: "none",
            }}
          >
            {currentScene.charAt(0).toUpperCase() + currentScene.slice(1)}
          </div>
          {/* Right: Autorotate and Fullscreen buttons */}
          <div style={{ display: "flex", gap: "10px", pointerEvents: "auto" }}>
            <button
              onClick={toggleRotation}
              style={{
                width: 32,
                height: 32,
                background: "rgba(24,24,24,0.7)",
                border: "none",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
                padding: 0,
                boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
              }}
              aria-label={isRotating ? "Pause autorotate" : "Play autorotate"}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "rgba(40,40,40,0.85)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "rgba(24,24,24,0.7)")
              }
            >
              <img
                src={isRotating ? pause : play}
                alt={isRotating ? "Pause" : "Play"}
                style={{ width: 18, height: 18, pointerEvents: "none" }}
              />
            </button>
            <button
              onClick={handleFullscreen}
              style={{
                width: 32,
                height: 32,
                background: "rgba(24,24,24,0.7)",
                border: "none",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
                padding: 0,
                boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
              }}
              aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "rgba(40,40,40,0.85)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "rgba(24,24,24,0.7)")
              }
            >
              <img
                src={isFullscreen ? windowed : fullscreen}
                alt={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                style={{ width: 18, height: 18, pointerEvents: "none" }}
              />
            </button>
          </div>
        </div>

        {/* Sidebar overlays viewer, absolute not fixed */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: 0,
            height: "calc(100% - 48px)",
            width: sidebarOpen ? "200px" : "0",
            background: "#f0f0f0",
            overflowX: "hidden",
            transition: "width 0.3s ease",
            zIndex: 50,
            paddingTop: "10px",
            boxSizing: "border-box",
            pointerEvents: sidebarOpen ? "auto" : "none",
          }}
        >
          {sidebarOpen &&
            scenesData.map(({ id, name }) => (
              <button
                key={id}
                onClick={() => scenesRef.current.get(id).switchTo()}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px 15px",
                  margin: "5px 0",
                  background: id === currentScene ? "#ddd" : "transparent",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  fontWeight: id === currentScene ? "bold" : "normal",
                }}
              >
                {name}
              </button>
            ))}
        </div>

        {/* Info Box */}
        {infoBoxVisible && (
          <>
            {/* Backdrop - click outside to close */}
            <div
              onClick={hideInfoBox}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.3)",
                zIndex: 199,
                cursor: "pointer",
              }}
            />
            {/* Info Box Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "320px",
                maxWidth: "90vw",
                background: "rgba(24,24,24,0.95)",
                borderRadius: "12px",
                padding: "20px",
                zIndex: 200,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Close button */}
              <button
                onClick={hideInfoBox}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "24px",
                  height: "24px",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                  padding: 0,
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                }
                aria-label="Close info box"
              >
                <img
                  src={close}
                  alt="Close"
                  style={{ width: 12, height: 12, pointerEvents: "none" }}
                />
              </button>

              {/* Info icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                  gap: "8px",
                }}
              >
                <img
                  src={info}
                  alt="Info"
                  style={{ width: 20, height: 20, filter: "invert(1)" }}
                />
                <h3
                  style={{
                    color: "white",
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  {infoBoxContent.title}
                </h3>
              </div>

              {/* Content */}
              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: "1.4",
                }}
              >
                {infoBoxContent.content}
              </p>
            </div>
          </>
        )}

        {/* Viewer */}
        <div
          ref={viewerRef}
          style={{
            width: "100%",
            height: "500px",
            // Ensure viewer is underneath sidebar (zIndex default 0)
          }}
        />

        {/* Bottom control bar */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            zIndex: 20,
            userSelect: "none",
          }}
        >
          {/* Pan up */}
          <button
            style={{
              width: 32,
              height: 32,
              background: "rgba(24,24,24,0.7)",
              border: "none",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              padding: 0,
              boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
            }}
            onClick={() => clickMove("up")}
            onMouseDown={() => setPressedDirection("up")}
            onMouseUp={() => setPressedDirection(null)}
            onMouseLeave={() => setPressedDirection(null)}
            aria-label="Pan Up"
          >
            <img
              src={up}
              alt="Pan Up"
              style={{ width: 18, height: 18, pointerEvents: "none" }}
            />
          </button>
          {/* Pan down */}
          <button
            onClick={() => clickMove("down")}
            style={{
              width: 32,
              height: 32,
              background: "rgba(24,24,24,0.7)",
              border: "none",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              padding: 0,
              boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
            }}
            aria-label="Pan Down"
            onMouseDown={() => setPressedDirection("down")}
            onMouseUp={() => setPressedDirection(null)}
            onMouseLeave={() => setPressedDirection(null)}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(40,40,40,0.85)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(24,24,24,0.7)")
            }
          >
            <img
              src={down}
              alt="Pan Down"
              style={{ width: 18, height: 18, pointerEvents: "none" }}
            />
          </button>
          {/* Pan left */}
          <button
            onClick={() => clickMove("left")}
            style={{
              width: 32,
              height: 32,
              background: "rgba(24,24,24,0.7)",
              border: "none",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              padding: 0,
              boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
            }}
            aria-label="Pan Left"
            onMouseDown={() => setPressedDirection("left")}
            onMouseUp={() => setPressedDirection(null)}
            onMouseLeave={() => setPressedDirection(null)}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(40,40,40,0.85)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(24,24,24,0.7)")
            }
          >
            <img
              src={left}
              alt="Pan Left"
              style={{ width: 18, height: 18, pointerEvents: "none" }}
            />
          </button>
          {/* Pan right */}
          <button
            onClick={() => clickMove("right")}
            style={{
              width: 32,
              height: 32,
              background: "rgba(24,24,24,0.7)",
              border: "none",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              padding: 0,
              boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
            }}
            aria-label="Pan Right"
            onMouseDown={() => setPressedDirection("right")}
            onMouseUp={() => setPressedDirection(null)}
            onMouseLeave={() => setPressedDirection(null)}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(40,40,40,0.85)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(24,24,24,0.7)")
            }
          >
            <img
              src={right}
              alt="Pan Right"
              style={{ width: 18, height: 18, pointerEvents: "none" }}
            />
          </button>

          {/* Zoom in */}
          {/* <button
            onClick={() => clickZoom(true)}
            style={{
              width: 32,
              height: 32,
              background: "rgba(24,24,24,0.7)",
              border: "none",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              padding: 0,
              boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
            }}
            aria-label="Zoom In"
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(40,40,40,0.85)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(24,24,24,0.7)")
            }
          >
            <img
              src={plus}
              alt="Zoom In"
              style={{ width: 18, height: 18, pointerEvents: "none" }}
            />
          </button> */}
          {/* Zoom out */}
          {/* <button
            onClick={() => clickZoom(false)}
            style={{
              width: 32,
              height: 32,
              background: "rgba(24,24,24,0.7)",
              border: "none",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              padding: 0,
              boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
            }}
            aria-label="Zoom Out"
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(40,40,40,0.85)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "rgba(24,24,24,0.7)")
            }
          >
            <img
              src={minus}
              alt="Zoom Out"
              style={{ width: 18, height: 18, pointerEvents: "none" }}
            />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MarketMap;
