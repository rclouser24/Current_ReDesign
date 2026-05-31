import Image from "next/image";

// Row 1: cols 0,1,3 filled — Row 2: cols 0,2,4 filled
const GRID: (boolean)[][] = [
  [true,  true,  false, true,  false],
  [true,  false, true,  false, true ],
];

export function ClientsSection() {
  return (
    <section className="bg-white" style={{ padding: "80px 48px" }}>

      {/* Header — inset 524px from inner-content left edge */}
      <div style={{ paddingLeft: "524px", marginBottom: "70px" }}>

        {/* Label with #9fdffe highlight bar behind it */}
        <div className="relative inline-block mb-5">
          <div
            className="absolute bottom-0 left-0"
            style={{ width: "148px", height: "10px", backgroundColor: "#9fdffe", zIndex: 0 }}
          />
          <p
            className="relative text-xs font-medium tracking-widest uppercase"
            style={{ color: "#0100fe", fontSize: "16px", zIndex: 1 }}
          >
            Selected Clients
          </p>
        </div>

        {/* Headline */}
        <h2
          className="font-semibold leading-[1.1]"
          style={{ color: "#2c2c2c", fontSize: "42px", maxWidth: "661px" }}
        >
          Decades of digital platform and lifecycle expertise—partnering with brands built to grow.
        </h2>
      </div>

      {/* 2-row × 5-col card grid */}
      <div className="flex flex-col" style={{ gap: "10px" }}>
        {GRID.map((row, rowIdx) => (
          <div key={rowIdx} className="flex" style={{ gap: "10px" }}>
            {row.map((filled, colIdx) => (
              <div
                key={colIdx}
                className="flex-1 flex items-center justify-center"
                style={{
                  height: "200px",
                  borderBottom: filled ? "4px solid #a9ff92" : "none",
                  borderRight:  filled ? "1px solid #a9ff92" : "none",
                }}
              >
                {filled && (
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/nba.png"
                      alt="Client"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}
