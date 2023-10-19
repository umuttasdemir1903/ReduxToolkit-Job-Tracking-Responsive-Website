import { v4 } from "uuid";
import { statusOptions, typeOptions } from "../constants";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddJob = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //* Form sınıfından örenk alma
    const form = new FormData(e.target);
    //formdaki verilerden obje oluşturma
    const newJob = Object.fromEntries(form.entries());
    // select alanlarını kontrol
    if (!newJob.type || !newJob.status) {
      toast.info("Plesae, select a type !!!");
      return;
    }

    // işe id ekleme
    newJob.id = v4();

    // tarih ekleme
    newJob.date = new Date();
    //* Api'ye gönderme
    axios
      .post("http://localhost:4000/jobs", newJob)
      .then(() => {
        navigate("/");
        toast.success("New job successfully added");
      })
      .catch(() => toast.error("The insertion operation failed !"));
  };
  return (
    <div className="add-page">
      <section className="add-sec">
        <h2>Add New Job</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Position :</label>
            <input
              type="text"
              name="position"
              required
              placeholder="Position..."
            />
          </div>
          <div>
            <label>Company :</label>
            <input
              type="text"
              name="company"
              required
              placeholder="Company..."
            />
          </div>
          <div>
            <label>Locaiton :</label>
            <input
              type="text"
              name="locaiton"
              required
              placeholder="Locaiton..."
            />
          </div>
          <div>
            <label>Status :</label>
            <select name="status">
              <option selected disabled>
                Select
              </option>
              {statusOptions.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Type :</label>
            <select name="type">
              <option selected disabled>
                Select
              </option>
              {typeOptions.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;ADD&nbsp;</span>
              <span aria-hidden="true" className="front-text">
                &nbsp;ADD&nbsp;
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
