import React from 'react'
import { useLocalJsonForm, JsonFile } from "next-tinacms-json";

import RangeInput from '../components/RangeInput';
import Reset from '../components/Reset';

export default function Index(props) {
  const [data] = useLocalJsonForm(props.data, formOptions)
  const [imageUrl, setImageUrl] = React.useState("https://source.unsplash.com/random/700x700")
  function resetImage() {
    fetch("https://source.unsplash.com/random/700x700")
      .then((response) => {
        setImageUrl(response.url)
      })
  }
  return (
    <main>
      <section>
        {/* Here is the image that will get the treatment 🖼 */}
        <img alt="random-unsplash" src={imageUrl} />
        <div id="reset" onClick={resetImage}>
          <Reset/>
        </div>
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