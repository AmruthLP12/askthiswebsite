interface pageProps{
    params:{
        url : string | string[] | undefined
    }
}

const page = ({params} :pageProps ) => {

    console.log(params)

  return (
    <div>Hello</div>
  )
}

export default page