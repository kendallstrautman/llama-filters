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
    console.log(imageUrl)
  }
  return (
    <main>
      <section>
        <div id="container">
          <h1>llama filters ⍛ llama filters ⌬ llama filters ⏦ Tina, you fat lard come get some dinner ✺ llama filters ⏃ llama filters ⌂ llama filters ☞ I caught you a delicious bass 🎣</h1>
        </div>
        {/* Here is the image that will get the treatment 🖼 */}
        <img alt="random-unsplash" src={imageUrl} />
        <div id="reset" onClick={resetImage}>
          <Reset/>
        </div>
      </section>
      <style jsx global>{`

        {/* Pass in the image_saturation value 🖍 */}
        img {
          filter: saturate(${data.saturation});

        }
        @import url('https://fonts.googleapis.com/css?family=Modak&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Racing+Sans+One&display=swap');
        body {
          margin: 0;
        }
        main {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Racing Sans One', cursive;
          background-color: hsl(${Math.random() * 360}, 20%, 85%);
          background-image: linear-gradient(white, transparent);
          transition: background-color 1s;
        }

        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        #container {
          position: relative;
          width: 700px;
          height: 70px;
          overflow: hidden;
        }

        #reset {
          display: flex;
          justify-content: center;
        }

        #reset:hover {
          cursor: pointer;
        }

        img {
          width: 700px;
        }

        h1 {
          transform: translateZ(0);
          text-transform: uppercase;
          font-size: 48px;
          margin: 0 0 4% 0;
          width: 1000vw;
          overflow: hidden;
          animation: slideIt 60s linear infinite;
        }

        @keyframes slideIt{
          0%{transform:translateX(700px);}
          100%{transform:translateX(-4300px);}
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