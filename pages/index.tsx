import Title from "../components/Title"
import Photo from "../components/Photo"

export default function Home() {
  return (
    <>
    <Title/>
    <Photo/>

     <div  onClick={()=>alert("hi")}>sup</div>
    </>
  )
}



