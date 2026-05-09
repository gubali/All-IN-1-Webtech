import { useState, useRef, useCallback, useEffect } from "react";
import User, { Fruits, Engg, userKeys } from "./User";
import ToDo from "./ToDo";
import Toggle from "./component/Toggle";
import Product from "./component/Product";
import MyControlled from "./component/MyControlled";
import ReusableTableData from "./reusable/ReusableTableData";
import ColorDdlList from "./component/ColorDdlList";
import styled from "styled-components";
import UnControlledComponent from "./component/UnControlledComponent";
import WithStyle from "./HOC/WithStyle";
import UserCard from "./reusable/UserCard";
import ParenAndChild from "./component/ParenAndChild";
import MyInutRef from "./component/MyInputRef";
import UseFormSubmission from "./component/UseFormSubmission";
import MYMemo from "./component/MYMemo";
import DerivedState from "./component/DerivedState";
import SearchBox from "./component/lifting-state/SearchBox";
import ProductList from "./component/lifting-state/ProductList";
import ChangeObjectByState from "./component/ChangeObjectByState";
import UseAction from "./component/UseAction";
import { UserContext } from "./context/UserContext";
import Welcome from "./component/school/Welcome";
import Navbar from "./component/nav/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSkill } from "./context/SkillsContext";
import CustomHook from "./component/hook/CustomHook";
import UseLayout from "./component/hook/UseLayout";
import CodingTest from "./component/machine-test/CodingTest";
import Counter from "./component/machine-test/Counter";
import Debounce from "./component/machine-test/Debounce";
import UserList from "./component/user/UserList";
import UserProfile from "./component/user/UserProfile";
import UseMemo from "./component/machine-test/UseMemo";
import UseCallBack from "./component/machine-test/UseCallBack";
import UseContext from "./component/machine-test/UseContext";
import { useTheme } from "./reusable/theme-context/ThemeContext";
const Page = styled.div`
  background: #f8fafc;
  padding: 28px;
  font-family: "Segoe UI", Arial, sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 16px 18px;
  border: 1px solid #e5e7eb;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #111827;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background: #111827;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background: #1f2937;
  }
`;
const Select = styled.select`
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

function App() {
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("ChocoPie");

  const usersList = [
    { id: 1, name: "Alice", age: 25, role: "Developer" },
    { id: 2, name: "Bob", age: 30, role: "Designer" },
    { id: 3, name: "Charlie", age: 28, role: "Tester" },
    { id: 4, name: "David", age: 35, role: "Manager" },
    { id: 5, name: "Eve", age: 22, role: "Intern" },
  ];

  const incriment = () => setCounter((prev) => (prev < 15 ? prev + 1 : prev));
  const decriment = () => setCounter((prev) => (prev > 0 ? prev - 1 : prev));

  const parentFn = useCallback(() => {
    alert("im parent call");
  }, []);

  const childRef = useRef();
  const StyleUserCard = WithStyle(UserCard);

  useEffect(() => {
  }, [search]);

  // drop donw selction with useContext
  const { setSkill } = useSkill();
  const handleSelec = (e) => {
    const val = e.target.value;
    setSkill(val);
  };
  // logic of only Get allusers from UseCallback.jsx not fully UI.
  const [useUsers, setUseUsers] = useState([]);

  const { theme, toggleTheme } = useTheme()
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <button onClick={toggleTheme}>{theme}</button>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/use-action-state" element={<UseAction />} />
        <Route path="/hook" element={<CustomHook />} />
        <Route path="/coding-test" element={<CodingTest />}>
          <Route index element={<Navigate to="counter" replace />} />
          <Route path="counter" element={<Counter />} />
          <Route path="debouce" element={<Debounce />} />
          <Route path="user" element={<UserList />} />
          <Route path="user-profile/:id/:name?" element={<UserProfile />} />
          <Route path="user/name?" element={<UserList />} />
          <Route path="usememo" element={<UseMemo />} />
          <Route path="usecall" element={<UseCallBack />} />
          <Route path="usecontext" element={<UseContext />} />
        </Route>
        <Route path="/*" element={<h1>Page not found!</h1>} />
      </Routes>
      <br />
      <Page>
        <Card>
          <UseLayout />
        </Card>
        <Grid>
          <Card>
            <CustomHook />
          </Card>
          <Card>
            <Title>
              Context API: Select Skills will show faculty component help of
              ContextApi
            </Title>
            <Select onChange={handleSelec}>
              <option value="Angular">Angular</option>
              <option value="React.js">React.js</option>
              <option value="Next.js">Next.js</option>
              <option value="React Native">React Native</option>
            </Select>
          </Card>

          <Card>
            <Title>State Actions</Title>
            <UseAction />
          </Card>

          <Card>
            <Title>Object State</Title>
            <ChangeObjectByState />
          </Card>

          <Card>
            <Title>State Lifting</Title>
            <Subtitle>Shared state between components</Subtitle>
            <SearchBox search={search} setSearch={setSearch} />
            <ProductList search={search} />
          </Card>

          <Card>
            <Title>Derived State</Title>
            <DerivedState />
          </Card>

          <Card>
            <Title>Memoization</Title>
            <MYMemo name="Submit11" handleClick={parentFn} />
          </Card>

          <Card>
            <Title>Forms</Title>
            <UseFormSubmission />
          </Card>

          <Card>
            <Title>useRef</Title>
            <MyInutRef />
          </Card>

          <Card>
            <Title>Parent → Child</Title>
            <ParenAndChild FnFromParent={parentFn} ref={childRef} />
            <StyledButton onClick={() => childRef.current.childCall()}>
              Call Child Function
            </StyledButton>
          </Card>

          <Card>
            <Title>HOC</Title>
            <StyleUserCard name="Asif" age="30" />
            <StyleUserCard name="Haniya" age="3" />
          </Card>

          <Card>
            <Title>Callback Props</Title>
            <UnControlledComponent parentCall={parentFn} />
          </Card>

          <Card>
            <Title>Styled UI</Title>
            <StyledButton>Welcome!</StyledButton>
          </Card>

          <Card>
            <Title>Table</Title>
            <ReusableTableData user={usersList} />
          </Card>

          <Card>
            <Title>Controlled</Title>
            <MyControlled />
          </Card>

          <Card>
            <Title>Composition</Title>
            <Product user={usersList}>
              <h4>Child from parent</h4>
            </Product>
          </Card>

          <Card>
            <Title>Basics</Title>
            <User />
            <Fruits />
            <Engg />
            <h4>{userKeys}</h4>
          </Card>

          <Card>
            <Title>Counter</Title>
            <h3>{counter}</h3>
            <StyledButton onClick={incriment}>+</StyledButton>{" "}
            <StyledButton onClick={decriment}>-</StyledButton>
          </Card>

          <Card>
            <Title>Misc</Title>
            <ColorDdlList />
            <ToDo />
            <Toggle />
          </Card>
          <Card>
            <Title>UseCallback.jsx call allUsers on App.jsx</Title><br />
            <UseCallBack sendUser={setUseUsers} />
            <small>im coming from child</small><br />

            {
              useUsers.map((u, i) => (
                <p key={i}>{u}</p>
              ))
            }
          </Card>
        </Grid>
      </Page>
    </UserContext.Provider>
  );
}

export default App;
