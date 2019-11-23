import React from "react";
import Media from "react-media";

import StartSection from "../components/WebDesignPage/StartSection";
import Desktop from "../components/WebDesignPage/StarSectionDesktop";

const ProjectPage = () => (
  <>
    <Media
      queries={{
        small: "(max-width: 680px)",
        medium: "(min-width: 681px)"
      }}
    >
      {({ small, medium }) => (
        <>
          {small && <StartSection />}
          {medium && <Desktop />}
        </>
      )}
    </Media>
  </>
);
export default ProjectPage;
