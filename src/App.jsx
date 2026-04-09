import { BrowserRouter } from "react-router-dom";
import { LayoutWrapper, ContentCanvas } from "./App.styles";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import BlogArticle from "./components/BlogArticle";

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <TopNav />
        <SideNav />
        <ContentCanvas>
          <BlogArticle />
        </ContentCanvas>
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;
