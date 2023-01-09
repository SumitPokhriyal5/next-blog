import axios from 'axios'
import Link from 'next/link';
import React from 'react'

export const getStaticProps=async()=>{
  let res=await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
  let data=res.data;

  return {
    props:{
      data
    }
  }
}
const Blogs = ({data}) => {
  return (
    <div>
      {data.map((el)=>{
     return  <Link href={`/feed/${el.id}`} key={el.id}> <div>
          <h1>{el.title}</h1>
        </div>
        </Link>
      })}
    </div>
  )
}

export default Blogs