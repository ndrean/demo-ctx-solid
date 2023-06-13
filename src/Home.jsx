import SolidMarkdown from "solid-markdown";

const md = `
# The pattern


~~~js
const title = (ctx)=> 
(props) => <div>{props.data}</div>
~~~~


### You can use it as below

~~~js
import ctx from "./context.js"

const Title = title(ctx);
const mydata = 1;

<Title data={1}/>
~~~
`;

const Home = () => <SolidMarkdown children={md} />;

export default Home;
