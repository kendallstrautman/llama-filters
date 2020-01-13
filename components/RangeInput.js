export default function RangeInput(props) {
  return (
    <>
      <div>
        <label htmlFor="saturation">Image Saturation</label>
      </div>
      <div>
        <input 
          name="saturation" 
          id="saturation"
          type="range" 
          min="0" 
          max="10"
          step=".1" 
          {...props.input}
        />
      </div>
    </>
  )
}