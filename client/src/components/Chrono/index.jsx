import "./index.css";
import ReadyToGoIcon from "../../assets/card1.svg";
import InternalCapabilityIcon from "../../assets/card2.svg";
import MultiSourceDataIcon from "../../assets/card3.svg";
import StakeholderAlignmentIcon from "../../assets/card4.svg";
import ContinuousEngagementIcon from "../../assets/card5.svg";

const processStepsData = [
  {
    id: 1,
    icon: ReadyToGoIcon,
    title: "Ready to Go Algos",
    description:
      "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.",
  },
  {
    id: 2,
    icon: InternalCapabilityIcon,
    title: "Internal capability building",
    description:
      "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.",
  },
  {
    id: 3,
    icon: MultiSourceDataIcon,
    title: "Multi-source data",
    description:
      "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
  },
  {
    id: 4,
    icon: StakeholderAlignmentIcon,
    title: "Stakeholder alignment",
    description:
      'No black boxes. Stakeholders understand the "how", "so what" and "now what", leading to clear decision-making trade offs.',
  },
  {
    id: 5,
    icon: ContinuousEngagementIcon,
    title: "Continuous engagement",
    description:
      "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
  },
];

const ProcessSection = () => {
  return (
    <section className="process-section-container">
      <div className="container">
        <div className="process-timeline-wrapper">
          {processStepsData.map((step, index) => (
            <div
              key={step.id}
              className={`process-step ${
                index % 2 === 0 ? "align-bottom" : "align-top"
              }`}
            >
              <div className="process-card">
                <div className="process-icon-wrapper">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="process-icon"
                  />
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>

              <div className="process-line-segment"></div>
              <div className="process-line-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
