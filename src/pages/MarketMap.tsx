import React, { useState, useRef, useEffect } from "react";
const Marzipano = require("marzipano");

const MarketMap: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = new Marzipano.Viewer(viewerRef.current);

    // Load test image (replace with any 360°)
    const source = Marzipano.ImageUrlSource.fromString("/test-panorama.jpg");
    const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

    const limiter = Marzipano.util.compose(
      Marzipano.util.defaultYawRange(),
      Marzipano.util.defaultPitchRange(),
      Marzipano.util.defaultFovRange()
    );

    const view = new Marzipano.RectilinearView(
      { yaw: 0, pitch: 0, fov: Math.PI / 2 },
      limiter
    );

    viewer
      .createScene({
        source,
        geometry,
        view,
        pinFirstLevel: true,
      })
      .switchTo();
  }, []);

  return <div ref={viewerRef} style={{ width: "100%", height: "500px" }} />;
};

export default MarketMap;
