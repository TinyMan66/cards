import * as SliderRadix from '@radix-ui/react-slider'

export const Slider = () => {
  return (
    <div>
      <SliderRadix.Root defaultValue={[50]} max={100} step={1}>
        <SliderRadix.Track>
          <SliderRadix.Range />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} />
      </SliderRadix.Root>
    </div>
  )
}
