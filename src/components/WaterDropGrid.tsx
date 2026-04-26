import anime from 'animejs';

const WaterDropGrid = () => {
  return (
    <div className="relative grid place-content-center px-8 py-4">
      <DotGrid />
    </div>
  )
}

const DotGrid = () => {
  const WIDTH = 12
  const HEIGHT = 6

  const handleClick = (e: any) => {
    anime({
      targets: '.pixel-point',
      scale: [
        { value: 1.5, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      backgroundColor: [
        { value: '#22c55e', easing: 'easeOutSine', duration: 250 },
        { value: '#1a1a1a', easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.3, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [WIDTH, HEIGHT],
        from: Number(e.target.dataset.index),
      }),
    });
  };

  const dots = []
  let index = 0

  for (let i = 0; i < WIDTH; i++) {
    for (let j = 0; j < HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleClick}
          className="group cursor-crosshair p-2 transition-colors hover:bg-neutral-800"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="pixel-point h-2 w-2 bg-neutral-700 opacity-30 group-hover:bg-green-500"
            data-index={index}
          >
          </div>
        </div>
      )
      index++
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${WIDTH}, 1fr)`}}
      className="grid w-fit border border-neutral-800 bg-black/20 p-2"
    >
      {dots}
    </div>
  )
}

export default WaterDropGrid