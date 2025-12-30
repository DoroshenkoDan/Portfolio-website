import React from "react"

function Arrow({ direction = "up", delay = 0, type = "outer" }) {
	return (
		<div
			className={[
				"w-0 h-0",
				direction === "down" ? "rotate-180" : "",
				"opacity-10",
				"animate-blink",
			].join(" ")}
			style={{
				marginLeft: -(12 / 2),
				marginRight: -(12 / 2),
				borderLeft: `12px solid transparent`,
				borderRight: `12px solid transparent`,
				borderBottom: `${12 * 1.8}px solid #ffffff`,
				filter: `drop-shadow(0 0 ${12 * 1.5}px #ffffff)`,
				animationDuration: `1s`,
				animationDelay: `${delay}s`,
			}}
			aria-hidden="true"
			data-type={type}
		/>
	)
}

export default function TriangleLoader() {
	const outerDelay = (i) => -((1 / 18) * i)
	const innerDelay = (i) => -((1 / 6) * i)

	return (
		<div className="h-screen w-screen fixed flex items-center  justify-center">
			<div className="flex flex-col items-center">
				{/* Row 1 */}
				<div className="flex">
					<Arrow direction="up" type="outer" delay={outerDelay(18)} />
					<Arrow direction="down" type="outer" delay={outerDelay(17)} />
					<Arrow direction="up" type="outer" delay={outerDelay(16)} />
					<Arrow direction="down" type="outer" delay={outerDelay(15)} />
					<Arrow direction="up" type="outer" delay={outerDelay(14)} />
				</div>

				{/* Row 2 */}
				<div className="flex">
					<Arrow direction="up" type="outer" delay={outerDelay(1)} />
					<Arrow direction="down" type="inner" delay={innerDelay(6)} />
					<Arrow direction="up" type="inner" delay={innerDelay(6)} />
					<Arrow direction="down" type="inner" delay={innerDelay(5)} />
					<Arrow direction="up" type="inner" delay={innerDelay(4)} />
					<Arrow direction="down" type="outer" delay={outerDelay(13)} />
					<Arrow direction="up" type="outer" delay={outerDelay(12)} />
				</div>

				{/* Row 3 */}
				<div className="flex">
					<Arrow direction="down" type="outer" delay={outerDelay(3)} />
					<Arrow direction="up" type="outer" delay={outerDelay(4)} />
					<Arrow direction="down" type="inner" delay={innerDelay(1)} />
					<Arrow direction="up" type="inner" delay={innerDelay(2)} />
					<Arrow direction="down" type="inner" delay={innerDelay(3)} />
					<Arrow direction="up" type="outer" delay={outerDelay(9)} />
					<Arrow direction="down" type="outer" delay={outerDelay(10)} />
				</div>

				{/* Row 4 */}
				<div className="flex">
					<Arrow direction="down" type="outer" delay={outerDelay(5)} />
					<Arrow direction="up" type="outer" delay={outerDelay(6)} />
					<Arrow direction="down" type="outer" delay={outerDelay(7)} />
					<Arrow direction="up" type="outer" delay={outerDelay(8)} />
					<Arrow direction="down" type="outer" delay={outerDelay(9)} />
				</div>
			</div>
		</div>
	)
}
