import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { V4Options, v4 as uuid } from 'uuid';
import { IUser } from "../types";
import UserList from "./UserList";

configure({ adapter: new Adapter() });


describe('<StatementsListContainer/>', () => {
    it('should shallow render without crashing', () => {
        const data:IUser = {
          id :'',
          phone:"",
          name: "",
          email: "",    
        };
      const component = shallow( <UserList data={data} onDeleteClickHnd={jest.fn()} onEdit={jest.fn()} users={[]} setUsers={jest.fn()} removeUser={function (id: (<T extends ArrayLike<number>>(options: V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: V4Options | undefined) => string)): void {
          throw new Error("Function not implemented.");
      } } />);
      expect(component.length).toBe(1);
    });
  });