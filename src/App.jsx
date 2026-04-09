import { BrowserRouter } from "react-router-dom";
import { LayoutWrapper, Header, SideBar, MainContent } from "./App.styles";

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Header>Header Content</Header>
        <SideBar>Sidebar</SideBar>
        <MainContent>Main Content</MainContent>
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;
