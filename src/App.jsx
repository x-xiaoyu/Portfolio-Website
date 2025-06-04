import { BrowserRouter, Route } from "react-router-dom"

function App() {

  return
  <>
    <BrowserRouter>
      <Route>
        {/* main page route */}
        <Route index element={<Home />} />
        {/* other page route 星星的意思就是其他都有路径 凡是没有路径点的都是走这个notfound页面 */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </BrowserRouter>
  </>
}

export default App
