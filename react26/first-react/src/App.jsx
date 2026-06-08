import {
  useState,
  useRef,
  useCallback,
  useEffect,
  lazy,
  Suspense,
} from "react";

import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./component/nav/Navbar";
import Welcome from "./component/school/Welcome";

import { UserContext } from "./context/UserContext";
import { useSkill } from "./context/SkillsContext";
import { useTheme } from "./reusable/theme-context/ThemeContext";

import User, { Fruits, Engg, userKeys } from "./User";
import ReusableTableData from "./reusable/ReusableTableData";
import WithStyle from "./HOC/WithStyle";
import UserCard from "./reusable/UserCard";
import ErrorBoundary from "./component/ErrorBoundary/ErrorBoundary";
/* -------------------- LAZY LOADING -------------------- */

// basic components
const ToDo = lazy(() => import("./ToDo"));
const Toggle = lazy(() => import("./component/Toggle"));
const Product = lazy(() => import("./component/Product"));
const MyControlled = lazy(() => import("./component/MyControlled"));
const ColorDdlList = lazy(() => import("./component/ColorDdlList"));
const UnControlledComponent = lazy(() =>
  import("./component/UnControlledComponent")
);
const ParenAndChild = lazy(() => import("./component/ParenAndChild"));
const MyInutRef = lazy(() => import("./component/MyInputRef"));
const UseFormSubmission = lazy(() =>
  import("./component/UseFormSubmission")
);
const MYMemo = lazy(() => import("./component/MYMemo"));
const DerivedState = lazy(() => import("./component/DerivedState"));
const SearchBox = lazy(() =>
  import("./component/lifting-state/SearchBox")
);
const ProductList = lazy(() =>
  import("./component/lifting-state/ProductList")
);
const ChangeObjectByState = lazy(() =>
  import("./component/ChangeObjectByState")
);
const UseAction = lazy(() => import("./component/UseAction"));
const CustomHook = lazy(() => import("./component/hook/CustomHook"));
const UseLayout = lazy(() => import("./component/hook/UseLayout"));

// routes
const CodingTest = lazy(() =>
  import("./component/machine-test/CodingTest")
);
const Counter = lazy(() =>
  import("./component/machine-test/Counter")
);
const Debounce = lazy(() =>
  import("./component/machine-test/Debounce")
);
const UserList = lazy(() => import("./component/user/UserList"));
const UserProfile = lazy(() =>
  import("./component/user/UserProfile")
);

const UseMemoComp = lazy(() =>
  import("./component/machine-test/UseMemo")
);

const UseCallBack = lazy(() =>
  import("./component/machine-test/UseCallBack")
);

const UseContextComp = lazy(() =>
  import("./component/machine-test/UseContext")
);

const ToDoApp = lazy(() =>
  import("./component/machine-test/ToDoApp")
);

const UseRefComp = lazy(() =>
  import("./component/machine-test/UseRef")
);

const UseTransitionComp = lazy(() =>
  import("./component/machine-test/UseTransition")
);

const UseLayOutEffect = lazy(() =>
  import("./component/machine-test/UseLayOutEffect")
);

const UseActionState = lazy(() =>
  import("./component/machine-test/UseActionState")
);
const UseProgress = lazy(() =>
  import("./component/ProgressBar")
);
const UserPostList = lazy(() =>
  import("./component/data-fetching/UserPostList")
);
const VScroll = lazy(() =>
  import("./component/VitualsScroll"));
import Crash from "./component/Crash";
// const a = lazy(()=> import ("file_name"));
// HOC -style
import useStyle from "./HOC/modernWithStyle";
/* -------------------- STATIC DATA -------------------- */

const USERS_LIST = [
  { id: 1, name: "Alice", age: 25, role: "Developer" },
  { id: 2, name: "Bob", age: 30, role: "Designer" },
  { id: 3, name: "Charlie", age: 28, role: "Tester" },
  { id: 4, name: "David", age: 35, role: "Manager" },
  { id: 5, name: "Eve", age: 22, role: "Intern" },
  { id: 6, name: "Eve2", age: 22, role: "Developer" },
];

/* -------------------- STYLES -------------------- */

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

const Loader = () => <div>Loading...</div>;

/* -------------------- APP -------------------- */
// chart data;
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import ProgressBar from "./component/ProgressBar";
const data1 = [
  { id: 1, name: "paul", age: 30 },
  { id: 2, name: "john", age: 40 },
  { id: 3, name: "adam", age: 50 },
]
function App() {
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("ChocoPie");
  const [useUsers, setUseUsers] = useState([]);

  const incriment = () =>
    setCounter((prev) => (prev < 15 ? prev + 1 : prev));

  const decriment = () =>
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));

  const parentFn = useCallback(() => {
    alert("im parent call");
  }, []);

  const childRef = useRef();

  const StyleUserCard = WithStyle(UserCard);

  useEffect(() => { }, [search]);

  const { setSkill } = useSkill();

  const handleSelec = (e) => {
    setSkill(e.target.value);
  };
  // pre-loading
  // const preloadComponent = async () => {
  //   const start = performance.now();

  //   await import("./component/data-fetching/UserPostList");

  //   const end = performance.now();
  //   console.log("Load time:", end - start);


  // }
  // useEffect(() => {
  //   preloadComponent();
  // }, []);

  const { theme, toggleTheme } = useTheme();
  // HOC-use
  const customStyle = useStyle();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <button onClick={toggleTheme}>{theme}</button>
      {/* HOC - style */}
      <p style={customStyle}>IM HOC-</p>
      {/* end */}
      <Navbar />
      {/* 
      {/* ROUTE SPLITTING */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route
            path="/use-action-state"
            element={<UseAction />}
          />

          <Route path="/hook" element={<CustomHook />} />
          <Route path="/vscroll" element={<VScroll />} />
          <Route path="/coding-test" element={<CodingTest />}>
            <Route
              index
              element={<Navigate to="counter" replace />}
            />

            <Route path="counter" element={<Counter />} />
            <Route path="debouce" element={<Debounce />} />
            <Route path="user" element={<UserList />} />

            <Route
              path="user-profile/:id/:name?"
              element={<UserProfile />}
            />

            <Route
              path="user/name?"
              element={<UserList />}
            />

            <Route
              path="usememo"
              element={<UseMemoComp />}
            />

            <Route
              path="usecall"
              element={
                <UseCallBack sendUser={setUseUsers} />
              }
            />

            <Route
              path="usecontext"
              element={<UseContextComp />}
            />

            <Route path="todo" element={<ToDoApp />} />

            <Route
              path="useref"
              element={<UseRefComp />}
            />

            <Route
              path="usetransition"
              element={<UseTransitionComp />}
            />

            <Route
              path="uselayout"
              element={<UseLayOutEffect />}
            />

            <Route
              path="actionstate"
              element={<UseActionState />}
            />
            <Route
              path="progresbar"
              element={<UseProgress />}
            />
          </Route>

          <Route
            path="fetchpost"
            element={<UserPostList />}
          />

          <Route
            path="/*"
            element={<h1>Page not found!</h1>}
          />
        </Routes>
      </Suspense>

      <br />
      <ErrorBoundary>
        <Page>
          <Card>
            <Suspense fallback={<Loader />}>
              <UseLayout />
            </Suspense>
          </Card>
          {/* testing Error boundries */}
          {/* chart */}
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* end */}
          <Crash />

          {/* end */}
          <Grid>
            <Card>
              <Suspense fallback={<Loader />}>
                <CustomHook />
              </Suspense>
            </Card>

            <Card>
              <Title>Context API</Title>

              <Select onChange={handleSelec}>
                <option value="Angular">Angular</option>
                <option value="React.js">React.js</option>
                <option value="Next.js">Next.js</option>
                <option value="React Native">
                  React Native
                </option>
              </Select>
            </Card>

            <Card>
              <Title>State Actions</Title>

              <Suspense fallback={<Loader />}>
                <UseAction />
              </Suspense>
            </Card>

            <Card>
              <Title>Object State</Title>

              <Suspense fallback={<Loader />}>
                <ChangeObjectByState />
              </Suspense>
            </Card>

            <Card>
              <Title>State Lifting</Title>

              <Subtitle>
                Shared state between components
              </Subtitle>

              <Suspense fallback={<Loader />}>
                <SearchBox
                  search={search}
                  setSearch={setSearch}
                />

                <ProductList search={search} />
              </Suspense>
            </Card>

            <Card>
              <Title>Derived State</Title>

              <Suspense fallback={<Loader />}>
                <DerivedState />
              </Suspense>
            </Card>

            <Card>
              <Title>Memoization</Title>

              <Suspense fallback={<Loader />}>
                <MYMemo
                  name="Submit11"
                  handleClick={parentFn}
                />
              </Suspense>
            </Card>

            <Card>
              <Title>Forms</Title>

              <Suspense fallback={<Loader />}>
                <UseFormSubmission />
              </Suspense>
            </Card>

            <Card>
              <Title>useRef</Title>

              <Suspense fallback={<Loader />}>
                <MyInutRef />
              </Suspense>
            </Card>

            <Card>
              <Title>Parent → Child</Title>

              <Suspense fallback={<Loader />}>
                <ParenAndChild
                  FnFromParent={parentFn}
                  ref={childRef}
                />
              </Suspense>

              <StyledButton
                onClick={() =>
                  childRef.current.childCall()
                }
              >
                Call Child Function
              </StyledButton>
            </Card>

            {/* <Card>
              <Title>HOC</Title>

              <StyleUserCard name="Asif" age="30" />
              <StyleUserCard name="Haniya" age="3" />
            </Card> */}

            <Card>
              <Title>Callback Props</Title>

              <Suspense fallback={<Loader />}>
                <UnControlledComponent
                  parentCall={parentFn}
                />
              </Suspense>
            </Card>

            <Card>
              <Title>Styled UI</Title>

              <StyledButton>Welcome!</StyledButton>
            </Card>

            <Card>
              <Title>Table</Title>

              <ReusableTableData user={USERS_LIST} />
            </Card>

            <Card>
              <Title>Controlled</Title>

              <Suspense fallback={<Loader />}>
                <MyControlled />
              </Suspense>
            </Card>

            <Card>
              <Title>Composition</Title>

              <Suspense fallback={<Loader />}>
                <Product user={USERS_LIST}>
                  <h4>Child from parent</h4>
                </Product>
              </Suspense>
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

              <StyledButton onClick={incriment}>
                +
              </StyledButton>

              {" "}

              <StyledButton onClick={decriment}>
                -
              </StyledButton>
            </Card>

            <Card>
              <Title>Misc</Title>

              <Suspense fallback={<Loader />}>
                <ColorDdlList />
                <ToDo />
                <Toggle />
              </Suspense>
            </Card>

            <Card>
              <Title>
                UseCallback.jsx call allUsers on App.jsx
              </Title>

              <br />

              <Suspense fallback={<Loader />}>
                <UseCallBack sendUser={setUseUsers} />
              </Suspense>

              <small>im coming from child</small>

              <br />

              {useUsers.map((u, i) => (
                <p key={i}>{u}</p>
              ))}
            </Card>
          </Grid>
        </Page>
      </ErrorBoundary>
    </UserContext.Provider>
  );
}

export default App;