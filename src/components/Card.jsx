import { MdLocationOn } from "react-icons/md";
import { PiSuitcaseBold } from "react-icons/pi";
import { GrSchedule } from "react-icons/gr";

const Card = ({ job }) => {
    //* Job'ın type'ına göre renk değiştirme.
  const getClassName = () => {
    switch (job.status) {
      case "Continues":
        return "pending";

      case "Rejected":
        return "rejected";

      case "Interview":
        return "interview";
        default:
            return "default"
        
    }
  };

  return (
    <div className="card">
      {/* Üst kısım */}
      <div className="head">
        <div className="letter">
          <p>{job.company[0]}</p>
        </div>
        <div className="info">
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>
      </div>
      {/* Alt kısım */}
      <div className="body">
        <div className="field">
          <MdLocationOn />
          <p>{job.location}</p>
        </div>
        <div className="field">
          <PiSuitcaseBold />
          <p>{job.type}</p>
        </div>
        <div className="field">
          <GrSchedule />
          <p>{job.date}3</p>
        </div>
        <div className="status">
          <span className={getClassName()}>{job.status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
