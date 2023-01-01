import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import EditUser from "./EditUser";
import { IUser } from "../types";

configure({ adapter: new Adapter() });


describe('<StatementsListContainer/>', () => {
    it('should shallow render without crashing', () => {
        const data: IUser = {
          id :'',
          phone:"",
          name: "",
          email: "",    
        };
      const component = shallow( <EditUser data={data} onUpdateClickHnd={jest.fn()} onBackBtnClickHnd={jest.fn()} users={[]} setUsers={jest.fn()}   />);
      expect(component.length).toBe(1);
    });
  });