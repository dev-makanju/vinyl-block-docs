import * as React from "react"
import Seo from "../components/seo"

const IndexPage = () => (
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
