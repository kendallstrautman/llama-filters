import { useLocalJsonForm, JsonFile } from "next-tinacms-json";

import RangeInput from '../components/RangeInput';

export default function Index(props) {
  const [data] = useLocalJsonForm(props.data, formOptions)
  return (
    <main>
      <section>
        {/* Here is the image that will get the treatment 🖼 */}
        <img alt="random-unsplash" src="https://source.unsplash.com/random/600x600" />
      </section>
      <style jsx>{`

        {/* Pass in the image_saturation value 🖍 */}
        img {
          filter: saturate(${data.saturation});

        }

        main {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </main>
  )
}

const formOptions = {
  fields: [
    // Pass the custom inline field into `component`
    {
      label: "Image Saturation",
      name: "saturation",
      component: RangeInput,
    },
  ]
}

Index.getInitialProps = async function() {
  const data = await import(`../data/data.json`)
  return {
    data: {
      fileRelativePath: `data/data.json`,
      data
    }
  }
}