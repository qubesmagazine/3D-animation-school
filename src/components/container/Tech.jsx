import  BallCanvas  from "../canvas/Ball"
import { technologies } from "../../../src/Data"


const Tech = () => {
  return (
   <div className="flex flex-row flex-wrap justify-center gap-10 section">
    {technologies.map(( technology) => (
<div className="w-28 h-28" key={technology.name}>
<BallCanvas icon={technology.icon}/>
</div>


    ))}


   </div>



  )
}

export default Tech