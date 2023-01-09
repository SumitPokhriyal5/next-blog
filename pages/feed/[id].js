import axios from 'axios'
import React from 'react'

export const getStaticPaths=async()=>{
    let res=await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    let data=res.data;

    const paths=data.map((el)=>{
        return {
            params:{
                id:el.id.toString()
            }
        }
    })

    return {
       paths,
       fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const id=context.params.id;
    console.log(context)
    let res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let data=res.data;

    return {
        props:{
            data
        }
    }
}
const Blog = ({data}) => {
    // console.log(data)
  return (
    <div className='feeds'>
        <h1>{data.title}</h1>
        <h3>{data.body}</h3>
    </div>
  )
}

export default Blog