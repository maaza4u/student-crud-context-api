
import { FormLabel } from "@material-ui/core";
import "./StudentModal.style.css";
import { IUser } from "./types";

type Props = {
  onClose: () => void;
  data: IUser;
};

const StudentModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Student Data</h3>
        <div>
          <div>
            <FormLabel>First Name : {data.name}</FormLabel>
          </div>
          {/* <div>
            <FormLabel>Last Name : {data.lastName}</FormLabel>
          </div>
          <div>
            <FormLabel>Email Add. : {data.email}</FormLabel>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
