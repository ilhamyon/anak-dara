import BG from "../assets/bg-wc.jpg"

function WC() {
  return (
    <div className="my-0 mx-auto min-h-full max-w-screen-sm" style={{maxWidth: "480px"}}>
        <section id="hero">
            <img src={BG} />
        </section>
    </div>
  )
}

export default WC