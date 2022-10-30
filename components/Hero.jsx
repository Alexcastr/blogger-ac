import Image from "next/image"

const Hero = () => {
  return (
    <section className="text-center row">
      <div className="col text-white mt-3">
          <Image
          className="rounded-circle bg-secondary bg-gradient"
            src="/images/site/max.png"
            alt="An image showing Max"
            width={300}
            height={300}
          />
        <h1 className="fw-bold"> Hi, i'm Alex</h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </section>
  )
}

export default Hero