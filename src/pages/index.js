import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`react`, `swift`]} />
		<h1>Learn to design and code React Apps</h1>
		<p>
			Complete courses about the best tools and design systems. Prototype and
			build with apps with React and swift
		</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
)

export default IndexPage
